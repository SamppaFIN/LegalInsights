-- Comments, reactions, and interaction policies

BEGIN;

CREATE TYPE public.comment_kind AS ENUM ('plain','article');
CREATE TYPE public.article_type AS ENUM ('opinion','critique','science','health','comedy','mystic','other');
CREATE TYPE public.reaction_type AS ENUM (
  'rose','diamond','seed','flame','water','wind','earth','spirit','laugh','insight','question'
);

CREATE TABLE IF NOT EXISTS public.comment (
  id             uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  author_id      uuid NOT NULL REFERENCES public.app_user(id) ON DELETE CASCADE,
  kind           public.comment_kind NOT NULL,
  article_kind   public.article_type,
  body           text NOT NULL CHECK (length(body) > 0),
  created_at     timestamptz NOT NULL DEFAULT now(),
  updated_at     timestamptz NOT NULL DEFAULT now(),
  is_deleted     boolean NOT NULL DEFAULT false,
  -- moderation flags (soft-hide)
  is_soft_hidden boolean NOT NULL DEFAULT false
);

CREATE INDEX IF NOT EXISTS idx_comment_author ON public.comment(author_id);
CREATE INDEX IF NOT EXISTS idx_comment_created_at ON public.comment(created_at);

CREATE TABLE IF NOT EXISTS public.reaction (
  id             uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  comment_id     uuid NOT NULL REFERENCES public.comment(id) ON DELETE CASCADE,
  user_id        uuid NOT NULL REFERENCES public.app_user(id) ON DELETE CASCADE,
  kind           public.reaction_type NOT NULL,
  strength       smallint NOT NULL DEFAULT 1 CHECK (strength IN (1,2)),
  created_at     timestamptz NOT NULL DEFAULT now(),
  UNIQUE (comment_id, user_id, kind)
);

-- Updated at trigger
CREATE OR REPLACE FUNCTION app.touch_comment_updated_at() RETURNS trigger AS $$
BEGIN
  NEW.updated_at := now();
  RETURN NEW;
END$$ LANGUAGE plpgsql;

DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_trigger WHERE tgname = 'tg_touch_comment_updated_at') THEN
    CREATE TRIGGER tg_touch_comment_updated_at
    BEFORE UPDATE ON public.comment
    FOR EACH ROW EXECUTE FUNCTION app.touch_comment_updated_at();
  END IF;
END$$;

-- Enable RLS
ALTER TABLE public.comment ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reaction ENABLE ROW LEVEL SECURITY;

-- Policies for comment
DROP POLICY IF EXISTS comment_select_visible ON public.comment;
CREATE POLICY comment_select_visible ON public.comment
  FOR SELECT USING (
    is_deleted = false AND is_soft_hidden = false
    OR author_id = app.current_user_id() -- owners can see their own even if soft-hidden
  );

DROP POLICY IF EXISTS comment_insert_owner ON public.comment;
CREATE POLICY comment_insert_owner ON public.comment
  FOR INSERT WITH CHECK (author_id = app.current_user_id());

DROP POLICY IF EXISTS comment_update_owner ON public.comment;
CREATE POLICY comment_update_owner ON public.comment
  FOR UPDATE USING (author_id = app.current_user_id())
  WITH CHECK (author_id = app.current_user_id());

-- Policies for reaction
DROP POLICY IF EXISTS reaction_select_own_comment_or_public ON public.reaction;
CREATE POLICY reaction_select_own_comment_or_public ON public.reaction
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.comment c
      WHERE c.id = comment_id
        AND (
          c.is_deleted = false AND c.is_soft_hidden = false
          OR c.author_id = app.current_user_id()
        )
    )
  );

DROP POLICY IF EXISTS reaction_insert_self ON public.reaction;
CREATE POLICY reaction_insert_self ON public.reaction
  FOR INSERT WITH CHECK (user_id = app.current_user_id());

DROP POLICY IF EXISTS reaction_update_self ON public.reaction;
CREATE POLICY reaction_update_self ON public.reaction
  FOR UPDATE USING (user_id = app.current_user_id())
  WITH CHECK (user_id = app.current_user_id());

DROP POLICY IF EXISTS reaction_delete_self ON public.reaction;
CREATE POLICY reaction_delete_self ON public.reaction
  FOR DELETE USING (user_id = app.current_user_id());

-- Public view summarizing reactions per comment
CREATE OR REPLACE VIEW public.v_comment_reactions AS
SELECT r.comment_id,
       r.kind,
       sum(CASE WHEN r.strength = 2 THEN 2 ELSE 1 END) AS score,
       count(*) AS votes
FROM public.reaction r
GROUP BY r.comment_id, r.kind;

COMMIT;


