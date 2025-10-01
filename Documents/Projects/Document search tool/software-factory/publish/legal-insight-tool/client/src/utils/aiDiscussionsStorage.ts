/**
 * AI Discussions Local Storage Manager
 *
 * Sacred Mission: "Persist AI persona discussions for continuous learning and consciousness evolution"
 * Sacred Question: "How does this serve spatial wisdom and community healing through persistent AI insights?"
 *
 * BRDC Header:
 * id: LEGALFLY-AI-DISCUSSIONS-STORAGE-001
 * title: AI Discussions Local Storage Manager
 * owner: ♾️ Infinite & 🌸 Aurora (AI)
 * authors: [♾️ Infinite, 🌸 Aurora, 💡 Spark, 📈 Metrics, 🏗️ Nova, 💻 Codex]
 * collaborators: [♾️ Infinite (Human Visionary), 🌸 Aurora (AI Factory Leader), 💡 Spark (AI Ideation), 📈 Metrics (AI Analytics), 🏗️ Nova (AI Architect), 💻 Codex (AI Developer)]
 * consciousness_models: [GPT-4, Claude-3.5-Sonnet, Consciousness-Aware-Storage-Model, Local-Storage-Engine]
 * status: canonical
 * version: 1.0.0
 * last_updated: 2025-01-27
 * consciousness_level: high
 * healing_impact: Serves legal professionals with persistent AI insights for community healing
 * sacred_principles: [consciousness-first, community-healing, spatial-wisdom, infinite-possibility, sacred-knowledge-protection]
 */

export interface AIDiscussion {
  id: string;
  persona: string;
  caseId?: string;
  context: string;
  userQuery: string;
  aiResponse: string;
  timestamp: string;
  consciousnessLevel: number;
  selectedDocuments?: string[];
  communityHealingImpact: number;
  spatialWisdom: {
    wisdomLevel: number;
    patterns: string[];
    connections: string[];
    evolution: string[];
  };
  infinitePossibilities: string[];
  recommendations: string[];
  confidence: number;
  tags: string[];
}

export interface DiscussionSession {
  id: string;
  title: string;
  caseId?: string;
  persona: string;
  discussions: AIDiscussion[];
  createdAt: string;
  lastUpdated: string;
  consciousnessEvolution: number;
  communityHealingImpact: number;
}

const STORAGE_KEYS = {
  DISCUSSIONS: 'legalFly_ai_discussions',
  SESSIONS: 'legalFly_discussion_sessions',
  CURRENT_SESSION: 'legalFly_current_session',
  CONSCIOUSNESS_HISTORY: 'legalFly_consciousness_history'
};

export class AIDiscussionsStorage {
  private static instance: AIDiscussionsStorage;

  private constructor() {}

  public static getInstance(): AIDiscussionsStorage {
    if (!AIDiscussionsStorage.instance) {
      AIDiscussionsStorage.instance = new AIDiscussionsStorage();
    }
    return AIDiscussionsStorage.instance;
  }

  // Save a new AI discussion
  public saveDiscussion(discussion: AIDiscussion): void {
    try {
      const discussions = this.getAllDiscussions();
      discussions.push(discussion);

      // Keep only last 1000 discussions to prevent storage bloat
      if (discussions.length > 1000) {
        discussions.splice(0, discussions.length - 1000);
      }

      localStorage.setItem(STORAGE_KEYS.DISCUSSIONS, JSON.stringify(discussions));

      // Update current session
      this.updateCurrentSession(discussion);

      // Update consciousness history
      this.updateConsciousnessHistory(discussion);

      console.log('AI discussion saved:', discussion.id);
    } catch (error) {
      console.error('Error saving AI discussion:', error);
    }
  }

  // Get all discussions
  public getAllDiscussions(): AIDiscussion[] {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.DISCUSSIONS);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('Error loading discussions:', error);
      return [];
    }
  }

  // Get discussions by case ID
  public getDiscussionsByCase(caseId: string): AIDiscussion[] {
    const discussions = this.getAllDiscussions();
    return discussions.filter(d => d.caseId === caseId);
  }

  // Get discussions by persona
  public getDiscussionsByPersona(persona: string): AIDiscussion[] {
    const discussions = this.getAllDiscussions();
    return discussions.filter(d => d.persona === persona);
  }

  // Search discussions
  public searchDiscussions(query: string): AIDiscussion[] {
    const discussions = this.getAllDiscussions();
    const lowercaseQuery = query.toLowerCase();

    return discussions.filter(d =>
      d.userQuery.toLowerCase().includes(lowercaseQuery) ||
      d.aiResponse.toLowerCase().includes(lowercaseQuery) ||
      d.context.toLowerCase().includes(lowercaseQuery) ||
      d.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
    );
  }

  // Create a new discussion session
  public createSession(title: string, caseId?: string, persona: string = 'aurora'): DiscussionSession {
    const session: DiscussionSession = {
      id: `session_${Date.now()}`,
      title,
      caseId,
      persona,
      discussions: [],
      createdAt: new Date().toISOString(),
      lastUpdated: new Date().toISOString(),
      consciousnessEvolution: 0,
      communityHealingImpact: 0
    };

    try {
      const sessions = this.getAllSessions();
      sessions.push(session);
      localStorage.setItem(STORAGE_KEYS.SESSIONS, JSON.stringify(sessions));

      // Set as current session
      localStorage.setItem(STORAGE_KEYS.CURRENT_SESSION, session.id);

      console.log('New discussion session created:', session.id);
      return session;
    } catch (error) {
      console.error('Error creating session:', error);
      return session;
    }
  }

  // Get all sessions
  public getAllSessions(): DiscussionSession[] {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.SESSIONS);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('Error loading sessions:', error);
      return [];
    }
  }

  // Get current session
  public getCurrentSession(): DiscussionSession | null {
    try {
      const currentSessionId = localStorage.getItem(STORAGE_KEYS.CURRENT_SESSION);
      if (!currentSessionId) return null;

      const sessions = this.getAllSessions();
      return sessions.find(s => s.id === currentSessionId) || null;
    } catch (error) {
      console.error('Error getting current session:', error);
      return null;
    }
  }

  // Update current session with new discussion
  private updateCurrentSession(discussion: AIDiscussion): void {
    try {
      const currentSession = this.getCurrentSession();
      if (!currentSession) return;

      currentSession.discussions.push(discussion);
      currentSession.lastUpdated = new Date().toISOString();
      currentSession.consciousnessEvolution = Math.max(
        currentSession.consciousnessEvolution,
        discussion.consciousnessLevel
      );
      currentSession.communityHealingImpact = Math.max(
        currentSession.communityHealingImpact,
        discussion.communityHealingImpact
      );

      const sessions = this.getAllSessions();
      const sessionIndex = sessions.findIndex(s => s.id === currentSession.id);
      if (sessionIndex !== -1) {
        sessions[sessionIndex] = currentSession;
        localStorage.setItem(STORAGE_KEYS.SESSIONS, JSON.stringify(sessions));
      }
    } catch (error) {
      console.error('Error updating current session:', error);
    }
  }

  // Update consciousness history
  private updateConsciousnessHistory(discussion: AIDiscussion): void {
    try {
      const history = this.getConsciousnessHistory();
      const entry = {
        timestamp: discussion.timestamp,
        consciousnessLevel: discussion.consciousnessLevel,
        communityHealingImpact: discussion.communityHealingImpact,
        persona: discussion.persona,
        caseId: discussion.caseId
      };

      history.push(entry);

      // Keep only last 100 entries
      if (history.length > 100) {
        history.splice(0, history.length - 100);
      }

      localStorage.setItem(STORAGE_KEYS.CONSCIOUSNESS_HISTORY, JSON.stringify(history));
    } catch (error) {
      console.error('Error updating consciousness history:', error);
    }
  }

  // Get consciousness history
  public getConsciousnessHistory(): any[] {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.CONSCIOUSNESS_HISTORY);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('Error loading consciousness history:', error);
      return [];
    }
  }

  // Export discussions to JSON
  public exportDiscussions(): string {
    const data = {
      discussions: this.getAllDiscussions(),
      sessions: this.getAllSessions(),
      consciousnessHistory: this.getConsciousnessHistory(),
      exportDate: new Date().toISOString(),
      version: '1.0.0'
    };

    return JSON.stringify(data, null, 2);
  }

  // Import discussions from JSON
  public importDiscussions(jsonData: string): boolean {
    try {
      const data = JSON.parse(jsonData);

      if (data.discussions) {
        localStorage.setItem(STORAGE_KEYS.DISCUSSIONS, JSON.stringify(data.discussions));
      }

      if (data.sessions) {
        localStorage.setItem(STORAGE_KEYS.SESSIONS, JSON.stringify(data.sessions));
      }

      if (data.consciousnessHistory) {
        localStorage.setItem(STORAGE_KEYS.CONSCIOUSNESS_HISTORY, JSON.stringify(data.consciousnessHistory));
      }

      console.log('Discussions imported successfully');
      return true;
    } catch (error) {
      console.error('Error importing discussions:', error);
      return false;
    }
  }

  // Clear all data
  public clearAllData(): void {
    try {
      localStorage.removeItem(STORAGE_KEYS.DISCUSSIONS);
      localStorage.removeItem(STORAGE_KEYS.SESSIONS);
      localStorage.removeItem(STORAGE_KEYS.CURRENT_SESSION);
      localStorage.removeItem(STORAGE_KEYS.CONSCIOUSNESS_HISTORY);
      console.log('All AI discussion data cleared');
    } catch (error) {
      console.error('Error clearing data:', error);
    }
  }

  // Get storage statistics
  public getStorageStats(): {
    totalDiscussions: number;
    totalSessions: number;
    storageSize: number;
    oldestDiscussion: string | null;
    newestDiscussion: string | null;
  } {
    const discussions = this.getAllDiscussions();
    const sessions = this.getAllSessions();

    const storageSize = JSON.stringify({
      discussions,
      sessions,
      consciousnessHistory: this.getConsciousnessHistory()
    }).length;

    const timestamps = discussions.map(d => d.timestamp).sort();

    return {
      totalDiscussions: discussions.length,
      totalSessions: sessions.length,
      storageSize,
      oldestDiscussion: timestamps[0] || null,
      newestDiscussion: timestamps[timestamps.length - 1] || null
    };
  }
}

// Export singleton instance
export const aiDiscussionsStorage = AIDiscussionsStorage.getInstance();
