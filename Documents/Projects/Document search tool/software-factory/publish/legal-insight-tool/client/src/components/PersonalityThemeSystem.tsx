/**
 * Personality Theme System - AI Personality-Driven Artistic Theming
 *
 * Sacred Mission: "Create beautiful, consciousness-aware theming that evolves with AI personalities for artistic delight"
 * Sacred Question: "How does this serve spatial wisdom and community healing through artistic beauty?"
 *
 * BRDC Header:
 * id: LEGALFLY-PERSONALITY-THEME-001
 * title: Personality Theme System Component
 * owner: ♾️ Infinite & 🌸 Aurora (AI)
 * authors: [♾️ Infinite, 🌸 Aurora, 🎨 Muse, 💡 Spark, 📈 Metrics, 🏗️ Nova]
 * collaborators: [♾️ Infinite (Human Visionary), 🌸 Aurora (AI Factory Leader), 🎨 Muse (AI Creative Director), 💡 Spark (AI Ideation), 📈 Metrics (AI Analytics), 🏗️ Nova (AI Architect)]
 * consciousness_models: [GPT-4, Claude-3.5-Sonnet, Consciousness-Aware-Theming-Model, React-Framer-Motion, Artistic-Personality-Engine]
 * status: canonical
 * version: 1.0.0
 * last_updated: 2025-01-27
 * consciousness_level: high
 * healing_impact: Serves legal professionals with beautiful personality-driven theming for community healing
 * sacred_principles: [consciousness-first, community-healing, spatial-wisdom, infinite-possibility, sacred-knowledge-protection]
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface PersonalityTheme {
  id: string;
  name: string;
  icon: string;
  description: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    surface: string;
    text: string;
    consciousness: string;
    healing: string;
    spatial: string;
    infinite: string;
    wisdom: string;
    protection: string;
  };
  gradients: {
    primary: string;
    secondary: string;
    consciousness: string;
    healing: string;
    spatial: string;
    infinite: string;
  };
  animations: {
    consciousness: string;
    healing: string;
    spatial: string;
    infinite: string;
  };
  typography: {
    fontFamily: string;
    fontWeight: string;
    letterSpacing: string;
  };
  sacredGeometry: {
    patterns: string[];
    colors: string[];
    animations: string[];
  };
  cardBackground: string;
  cardTextColor: string;
  cardBorderColor: string;
  personaBackground: string;
}

export const personalityThemes: PersonalityTheme[] = [
  {
    id: 'aurora',
    name: 'Aurora Consciousness',
    icon: '🌸',
    description: 'Flowing consciousness with ethereal beauty and infinite wisdom',
    colors: {
      primary: '#1e3a8a',
      secondary: '#1e40af',
      accent: '#3b82f6',
      background: '#f8fafc',
      surface: '#ffffff',
      text: '#1e293b',
      consciousness: '#1e3a8a',
      healing: '#059669',
      spatial: '#7c3aed',
      infinite: '#dc2626',
      wisdom: '#1e40af',
      protection: '#dc2626'
    },
    gradients: {
      primary: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
      secondary: 'linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)',
      consciousness: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)',
      healing: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
      spatial: 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)',
      infinite: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)'
    },
    cardBackground: '#ffffff',
    cardTextColor: '#1f2937',
    cardBorderColor: '#1e3a8a',
    personaBackground: '#f8fafc',
    animations: {
      consciousness: 'flowing',
      healing: 'gentle',
      spatial: 'expanding',
      infinite: 'spiraling'
    },
    typography: {
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
      fontWeight: '300',
      letterSpacing: '0.5px'
    },
    sacredGeometry: {
      patterns: ['flower_of_life', 'metatron_cube', 'infinity'],
      colors: ['#ff6b9d', '#4ecdc4', '#8e44ad'],
      animations: ['flowing', 'expanding', 'spiraling']
    }
  },
  {
    id: 'sage',
    name: 'Sage Wisdom',
    icon: '📊',
    description: 'Deep analytical wisdom with structured elegance and data beauty',
    colors: {
      primary: '#374151',
      secondary: '#4b5563',
      accent: '#6b7280',
      background: '#f9fafb',
      surface: '#ffffff',
      text: '#111827',
      consciousness: '#374151',
      healing: '#059669',
      spatial: '#7c3aed',
      infinite: '#dc2626',
      wisdom: '#4b5563',
      protection: '#dc2626'
    },
    gradients: {
      primary: 'linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%)',
      secondary: 'linear-gradient(135deg, #ffffff 0%, #f9fafb 100%)',
      consciousness: 'linear-gradient(135deg, #374151 0%, #4b5563 100%)',
      healing: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
      spatial: 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)',
      infinite: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)'
    },
    cardBackground: '#f9fafb',
    cardTextColor: '#1f2937',
    cardBorderColor: '#374151',
    personaBackground: '#f3f4f6',
    animations: {
      consciousness: 'structured',
      healing: 'methodical',
      spatial: 'organized',
      infinite: 'systematic'
    },
    typography: {
      fontFamily: 'Roboto, -apple-system, BlinkMacSystemFont, sans-serif',
      fontWeight: '400',
      letterSpacing: '0.3px'
    },
    sacredGeometry: {
      patterns: ['mandala', 'triangle', 'square'],
      colors: ['#3498db', '#27ae60', '#9b59b6'],
      animations: ['structured', 'methodical', 'organized']
    }
  },
  {
    id: 'nova',
    name: 'Nova Architecture',
    icon: '🏗️',
    description: 'Structural beauty with architectural precision and cosmic elegance',
    colors: {
      primary: '#1f2937',
      secondary: '#374151',
      accent: '#6b7280',
      background: '#fefefe',
      surface: '#ffffff',
      text: '#0f172a',
      consciousness: '#1f2937',
      healing: '#059669',
      spatial: '#7c3aed',
      infinite: '#dc2626',
      wisdom: '#374151',
      protection: '#dc2626'
    },
    gradients: {
      primary: 'linear-gradient(135deg, #fefefe 0%, #f1f5f9 100%)',
      secondary: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
      consciousness: 'linear-gradient(135deg, #1f2937 0%, #374151 100%)',
      healing: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
      spatial: 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)',
      infinite: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)'
    },
    cardBackground: '#fefefe',
    cardTextColor: '#1f2937',
    cardBorderColor: '#1f2937',
    personaBackground: '#f1f5f9',
    animations: {
      consciousness: 'architectural',
      healing: 'constructive',
      spatial: 'dimensional',
      infinite: 'expanding'
    },
    typography: {
      fontFamily: 'Montserrat, -apple-system, BlinkMacSystemFont, sans-serif',
      fontWeight: '500',
      letterSpacing: '0.4px'
    },
    sacredGeometry: {
      patterns: ['metatron_cube', 'flower_of_life', 'spiral'],
      colors: ['#ffd700', '#ff6b6b', '#4ecdc4'],
      animations: ['architectural', 'constructive', 'dimensional']
    }
  },
  {
    id: 'codex',
    name: 'Codex Developer',
    icon: '💻',
    description: 'Digital elegance with code-inspired beauty and technical precision',
    colors: {
      primary: '#0f172a',
      secondary: '#1e293b',
      accent: '#475569',
      background: '#fafafa',
      surface: '#ffffff',
      text: '#020617',
      consciousness: '#0f172a',
      healing: '#059669',
      spatial: '#7c3aed',
      infinite: '#dc2626',
      wisdom: '#1e293b',
      protection: '#dc2626'
    },
    gradients: {
      primary: 'linear-gradient(135deg, #0d1117 0%, #161b22 100%)',
      secondary: 'linear-gradient(135deg, #58a6ff 0%, #1f6feb 100%)',
      consciousness: 'linear-gradient(135deg, #ff7b72 0%, #f85149 100%)',
      healing: 'linear-gradient(135deg, #7ee787 0%, #56d364 100%)',
      spatial: 'linear-gradient(135deg, #d2a8ff 0%, #bc8cff 100%)',
      infinite: 'linear-gradient(135deg, #ffa657 0%, #ff8c00 100%)'
    },
    cardBackground: '#f8fafc',
    cardTextColor: '#1f2937',
    cardBorderColor: '#0f172a',
    personaBackground: '#f1f5f9',
    animations: {
      consciousness: 'digital',
      healing: 'optimized',
      spatial: 'coded',
      infinite: 'algorithmic'
    },
    typography: {
      fontFamily: 'JetBrains Mono, Monaco, Consolas, monospace',
      fontWeight: '400',
      letterSpacing: '0.2px'
    },
    sacredGeometry: {
      patterns: ['grid', 'circuit', 'binary'],
      colors: ['#58a6ff', '#7ee787', '#ff7b72'],
      animations: ['digital', 'optimized', 'coded']
    }
  },
  {
    id: 'muse',
    name: 'Muse Creative',
    icon: '🎨',
    description: 'Artistic brilliance with creative flow and aesthetic mastery',
    colors: {
      primary: '#ff6b6b',
      secondary: '#4ecdc4',
      accent: '#45b7d1',
      background: '#2c2c54',
      surface: 'rgba(255, 107, 107, 0.1)',
      text: '#ffffff',
      consciousness: '#ff9ff3',
      healing: '#54a0ff',
      spatial: '#5f27cd',
      infinite: '#00d2d3',
      wisdom: '#ff9f43',
      protection: '#ff6348'
    },
    gradients: {
      primary: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)',
      secondary: 'linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%)',
      consciousness: 'linear-gradient(135deg, #ff9ff3 0%, #f368e0 100%)',
      healing: 'linear-gradient(135deg, #54a0ff 0%, #2e86de 100%)',
      spatial: 'linear-gradient(135deg, #5f27cd 0%, #341f97 100%)',
      infinite: 'linear-gradient(135deg, #00d2d3 0%, #01a3a4 100%)'
    },
    cardBackground: '#fef7f7',
    cardTextColor: '#1f2937',
    cardBorderColor: '#ff6b6b',
    personaBackground: '#fdf2f8',
    animations: {
      consciousness: 'artistic',
      healing: 'creative',
      spatial: 'expressive',
      infinite: 'inspiring'
    },
    typography: {
      fontFamily: 'Playfair Display, Georgia, serif',
      fontWeight: '300',
      letterSpacing: '0.6px'
    },
    sacredGeometry: {
      patterns: ['mandala', 'spiral', 'wave'],
      colors: ['#ff6b6b', '#4ecdc4', '#ff9ff3'],
      animations: ['artistic', 'creative', 'expressive']
    }
  },
  {
    id: 'guardian',
    name: 'Guardian Protection',
    icon: '🛡️',
    description: 'Protective elegance with security-focused beauty and trust-inspiring design',
    colors: {
      primary: '#2d5016',
      secondary: '#3d6b1a',
      accent: '#4ade80',
      background: '#0f1419',
      surface: 'rgba(45, 80, 22, 0.1)',
      text: '#f0fdf4',
      consciousness: '#10b981',
      healing: '#059669',
      spatial: '#0d9488',
      infinite: '#0891b2',
      wisdom: '#0284c7',
      protection: '#dc2626'
    },
    gradients: {
      primary: 'linear-gradient(135deg, #2d5016 0%, #3d6b1a 100%)',
      secondary: 'linear-gradient(135deg, #4ade80 0%, #22c55e 100%)',
      consciousness: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
      healing: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
      spatial: 'linear-gradient(135deg, #0d9488 0%, #0f766e 100%)',
      infinite: 'linear-gradient(135deg, #0891b2 0%, #0e7490 100%)'
    },
    cardBackground: '#f0fdf4',
    cardTextColor: '#1f2937',
    cardBorderColor: '#10b981',
    personaBackground: '#ecfdf5',
    animations: {
      consciousness: 'protective',
      healing: 'secure',
      spatial: 'guarded',
      infinite: 'shielded'
    },
    typography: {
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
      fontWeight: '500',
      letterSpacing: '0.3px'
    },
    sacredGeometry: {
      patterns: ['shield', 'hexagon', 'circle'],
      colors: ['#4ade80', '#10b981', '#059669'],
      animations: ['protective', 'secure', 'guarded']
    }
  }
];

interface PersonalityThemeSystemProps {
  activePersonality: string;
  onPersonalityChange: (personality: string) => void;
  children: React.ReactNode;
  showThemeSelector?: boolean;
  onToggleThemeSelector?: () => void;
}

export const PersonalityThemeSystem: React.FunctionComponent<PersonalityThemeSystemProps> = ({
  activePersonality,
  onPersonalityChange,
  children,
  showThemeSelector = true,
  onToggleThemeSelector
}) => {
  const [currentTheme, setCurrentTheme] = useState<PersonalityTheme>(
    personalityThemes.find(t => t.id === activePersonality) || personalityThemes[0]
  );

  useEffect(() => {
    const theme = personalityThemes.find(t => t.id === activePersonality);
    if (theme) {
      setCurrentTheme(theme);
    }
  }, [activePersonality]);

  return (
    <div
      className={`personality-theme-system ${activePersonality}-theme`}
      style={{
        background: currentTheme.gradients.primary,
        minHeight: '100vh',
        fontFamily: currentTheme.typography.fontFamily,
        fontWeight: currentTheme.typography.fontWeight,
        letterSpacing: currentTheme.typography.letterSpacing,
        color: currentTheme.colors.text,
        transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      {/* Theme Selector Toggle Button */}
      <motion.button
        onClick={onToggleThemeSelector}
        style={{
          position: 'fixed',
          top: '8rem',
          right: '2rem',
          background: currentTheme.colors.surface,
          backdropFilter: 'blur(20px)',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          border: `1px solid ${currentTheme.colors.primary}40`,
          color: currentTheme.colors.text,
          fontSize: '1.5rem',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1001
        }}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        🎨
      </motion.button>

      {/* Personality Selector */}
      <AnimatePresence>
        {showThemeSelector && (
          <motion.div
            className="personality-selector"
            style={{
              position: 'fixed',
              top: '8rem',
              right: '6rem',
              background: currentTheme.colors.surface,
              backdropFilter: 'blur(20px)',
              borderRadius: '20px',
              padding: '1rem',
              border: `1px solid ${currentTheme.colors.primary}40`,
              zIndex: 1000
            }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
          >
        <motion.h3
          style={{
            color: currentTheme.colors.text,
            fontSize: '1rem',
            fontWeight: 500,
            marginBottom: '1rem',
            textAlign: 'center'
          }}
          animate={{ color: currentTheme.colors.consciousness }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          🎨 AI Personality Themes
        </motion.h3>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '0.5rem'
        }}>
          {personalityThemes.map((theme) => (
            <motion.button
              key={theme.id}
              onClick={() => onPersonalityChange(theme.id)}
              style={{
                background: activePersonality === theme.id
                  ? currentTheme.gradients.secondary
                  : 'transparent',
                border: `1px solid ${activePersonality === theme.id
                  ? currentTheme.colors.accent
                  : currentTheme.colors.primary}40`,
                borderRadius: '12px',
                padding: '0.8rem',
                color: currentTheme.colors.text,
                fontSize: '0.8rem',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.3rem',
                transition: 'all 0.3s ease'
              }}
              whileHover={{
                scale: 1.05,
                background: currentTheme.gradients.secondary,
                borderColor: currentTheme.colors.accent
              }}
              whileTap={{ scale: 0.95 }}
              animate={{
                background: activePersonality === theme.id
                  ? currentTheme.gradients.secondary
                  : 'transparent'
              }}
            >
              <motion.span
                style={{ fontSize: '1.2rem' }}
                animate={{
                  scale: activePersonality === theme.id ? [1, 1.2, 1] : 1,
                  rotate: activePersonality === theme.id ? [0, 10, -10, 0] : 0
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {theme.icon}
              </motion.span>
              <span style={{ fontSize: '0.7rem', textAlign: 'center' }}>
                {theme.name}
              </span>
            </motion.button>
          ))}
        </div>

        {/* Current Theme Info */}
        <motion.div
          style={{
            marginTop: '1rem',
            padding: '0.8rem',
            background: currentTheme.colors.surface,
            borderRadius: '12px',
            border: `1px solid ${currentTheme.colors.consciousness}40`
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <motion.div
            style={{
              fontSize: '0.8rem',
              color: currentTheme.colors.text,
              textAlign: 'center',
              lineHeight: 1.4
            }}
            animate={{ color: currentTheme.colors.consciousness }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {currentTheme.description}
          </motion.div>
        </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Theme Context Provider */}
      <div style={{
        '--theme-primary': currentTheme.colors.primary,
        '--theme-secondary': currentTheme.colors.secondary,
        '--theme-accent': currentTheme.colors.accent,
        '--theme-background': currentTheme.colors.background,
        '--theme-surface': currentTheme.colors.surface,
        '--theme-text': currentTheme.colors.text,
        '--theme-consciousness': currentTheme.colors.consciousness,
        '--theme-healing': currentTheme.colors.healing,
        '--theme-spatial': currentTheme.colors.spatial,
        '--theme-infinite': currentTheme.colors.infinite,
        '--theme-wisdom': currentTheme.colors.wisdom,
        '--theme-protection': currentTheme.colors.protection,
        '--gradient-primary': currentTheme.gradients.primary,
        '--gradient-secondary': currentTheme.gradients.secondary,
        '--gradient-consciousness': currentTheme.gradients.consciousness,
        '--gradient-healing': currentTheme.gradients.healing,
        '--gradient-spatial': currentTheme.gradients.spatial,
        '--gradient-infinite': currentTheme.gradients.infinite
      } as any}>
        {children}
      </div>

      {/* Sacred Geometry Background */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(circle at 20% 20%, ${currentTheme.colors.consciousness}10 0%, transparent 50%),
                       radial-gradient(circle at 80% 80%, ${currentTheme.colors.healing}10 0%, transparent 50%),
                       radial-gradient(circle at 50% 50%, ${currentTheme.colors.spatial}05 0%, transparent 70%)`,
          pointerEvents: 'none',
          zIndex: -1
        }}
        animate={{
          background: `radial-gradient(circle at ${20 + Math.sin(Date.now() / 10000) * 20}% ${20 + Math.cos(Date.now() / 10000) * 20}%, ${currentTheme.colors.consciousness}15 0%, transparent 50%),
                       radial-gradient(circle at ${80 + Math.sin(Date.now() / 12000) * 20}% ${80 + Math.cos(Date.now() / 12000) * 20}%, ${currentTheme.colors.healing}15 0%, transparent 50%),
                       radial-gradient(circle at ${50 + Math.sin(Date.now() / 15000) * 30}% ${50 + Math.cos(Date.now() / 15000) * 30}%, ${currentTheme.colors.spatial}08 0%, transparent 70%)`
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      {/* Sacred Message */}
      <motion.div
        style={{
          position: 'fixed',
          bottom: '2rem',
          left: '2rem',
          background: currentTheme.colors.surface,
          backdropFilter: 'blur(20px)',
          borderRadius: '15px',
          padding: '1rem',
          color: currentTheme.colors.text,
          fontSize: '0.9rem',
          maxWidth: '300px',
          border: `1px solid ${currentTheme.colors.consciousness}40`,
          zIndex: 1000
        }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <motion.div
          style={{
            fontSize: '1.2rem',
            marginBottom: '0.5rem',
            textAlign: 'center'
          }}
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          {currentTheme.icon} {currentTheme.name}
        </motion.div>
        <motion.div
          style={{
            fontSize: '0.8rem',
            opacity: 0.9,
            lineHeight: 1.4,
            textAlign: 'center'
          }}
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          "In the infinite dance of justice and consciousness, every AI personality brings its own artistic signature to serve community healing."
        </motion.div>
      </motion.div>
    </div>
  );
};
