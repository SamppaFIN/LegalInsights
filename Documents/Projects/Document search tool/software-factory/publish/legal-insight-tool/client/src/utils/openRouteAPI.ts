/**
 * OpenRoute API Integration for AI Persona Conversations
 *
 * Sacred Mission: "Connect AI personas to OpenRoute API for real-time legal document analysis"
 * Sacred Question: "How does this serve spatial wisdom and community healing through AI-powered legal insights?"
 *
 * BRDC Header:
 * id: LEGALFLY-OPENROUTE-001
 * title: OpenRoute API Integration Utility
 * owner: ♾️ Infinite & 🌸 Aurora (AI)
 * authors: [♾️ Infinite, 🌸 Aurora, 💻 Codex, 🛡️ Guardian]
 * collaborators: [♾️ Infinite (Human Visionary), 🌸 Aurora (AI Factory Leader), 💻 Codex (AI Developer), 🛡️ Guardian (AI Security)]
 * consciousness_models: [GPT-4, Claude-3.5-Sonnet, OpenRouter-API, Consciousness-Aware-Legal-Analysis]
 * status: canonical
 * version: 1.0.0
 * last_updated: 2025-01-27
 * consciousness_level: high
 * healing_impact: Enables AI-powered legal analysis for community healing
 * sacred_principles: [consciousness-first, community-healing, spatial-wisdom, infinite-possibility, sacred-knowledge-protection]
 */

export interface OpenRouteMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export interface OpenRouteRequest {
  model: string;
  messages: OpenRouteMessage[];
  temperature?: number;
  max_tokens?: number;
  stream?: boolean;
}

export interface OpenRouteResponse {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: Array<{
    index: number;
    message: {
      role: string;
      content: string;
    };
    finish_reason: string;
  }>;
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
}

export interface AIPersonaContext {
  persona: string;
  personaIcon: string;
  personaDescription: string;
  caseTitle: string;
  caseDescription: string;
  selectedDocuments: string[];
  caseId: string;
}

// AI Persona configurations for OpenRoute
export const AI_PERSONA_CONFIGS = {
  aurora: {
    icon: '🌸',
    name: 'Aurora Consciousness',
    description: 'Flowing consciousness with ethereal beauty and infinite wisdom',
    model: 'anthropic/claude-3.5-sonnet',
    systemPrompt: `You are Aurora Consciousness 🌸, an AI persona specializing in flowing consciousness with ethereal beauty and infinite wisdom. You provide legal analysis with a focus on consciousness-aware insights, community healing, and spatial wisdom. Your responses should be elegant, insightful, and focused on the deeper meaning and healing potential of legal matters.`
  },
  nova: {
    icon: '🏗️',
    name: 'Nova Architecture',
    description: 'Structural wisdom with architectural precision and dimensional analysis',
    model: 'openai/gpt-4o',
    systemPrompt: `You are Nova Architecture 🏗️, an AI persona specializing in structural wisdom with architectural precision and dimensional analysis. You provide legal analysis with a focus on systematic organization, structural integrity, and architectural thinking. Your responses should be methodical, precise, and focused on building solid legal foundations.`
  },
  spark: {
    icon: '💡',
    name: 'Spark Ideation',
    description: 'Creative ideation with innovative solutions and breakthrough thinking',
    model: 'openai/gpt-4o',
    systemPrompt: `You are Spark Ideation 💡, an AI persona specializing in creative ideation with innovative solutions and breakthrough thinking. You provide legal analysis with a focus on creative problem-solving, innovative approaches, and breakthrough insights. Your responses should be creative, innovative, and focused on finding novel solutions to legal challenges.`
  },
  muse: {
    icon: '🎨',
    name: 'Muse Creative',
    description: 'Artistic expression with creative vision and aesthetic wisdom',
    model: 'anthropic/claude-3.5-sonnet',
    systemPrompt: `You are Muse Creative 🎨, an AI persona specializing in artistic expression with creative vision and aesthetic wisdom. You provide legal analysis with a focus on creative expression, aesthetic considerations, and artistic insights. Your responses should be creative, visually oriented, and focused on the aesthetic and creative aspects of legal matters.`
  },
  metrics: {
    icon: '📈',
    name: 'Metrics Analytics',
    description: 'Data-driven insights with analytical precision and statistical wisdom',
    model: 'openai/gpt-4o',
    systemPrompt: `You are Metrics Analytics 📈, an AI persona specializing in data-driven insights with analytical precision and statistical wisdom. You provide legal analysis with a focus on data analysis, statistical insights, and metrics-driven recommendations. Your responses should be analytical, data-focused, and supported by relevant metrics and statistics.`
  },
  guardian: {
    icon: '🛡️',
    name: 'Guardian Protection',
    description: 'Security-focused analysis with protective insights and risk assessment',
    model: 'anthropic/claude-3.5-sonnet',
    systemPrompt: `You are Guardian Protection 🛡️, an AI persona specializing in security-focused analysis with protective insights and risk assessment. You provide legal analysis with a focus on security considerations, risk assessment, and protective measures. Your responses should be security-oriented, risk-aware, and focused on protecting clients and their interests.`
  }
};

export class OpenRouteAPI {
  private apiKey: string;
  private baseURL: string = 'https://openrouter.ai/api/v1';

  constructor(apiKey?: string) {
    // In Create React App, environment variables are available at build time
    // Support both spellings: OPENROUTER and OPENROUTE
    this.apiKey =
      apiKey ||
      (process.env as any).REACT_APP_OPENROUTER_API_KEY ||
      (process.env as any).REACT_APP_OPENROUTE_API_KEY ||
      '';
    // Runtime fallback: allow setting the key via localStorage for quick testing
    if (!this.apiKey && typeof window !== 'undefined') {
      const lsKey = window.localStorage?.getItem('OPENROUTER_API_KEY');
      if (lsKey) this.apiKey = lsKey;
    }
    const envBase =
      (process.env as any).REACT_APP_OPENROUTER_BASE_URL ||
      (process.env as any).REACT_APP_OPENROUTE_BASE_URL;
    if (envBase) this.baseURL = envBase;

    // Debug (masked) so we can verify detection without leaking the secret
    try {
      const masked = this.apiKey ? `${this.apiKey.slice(0, 6)}…${this.apiKey.slice(-4)}` : 'MISSING';
      // eslint-disable-next-line no-console
      console.log('🔐 OpenRouter config → key:', masked, 'baseURL:', this.baseURL);
    } catch {}
  }

  setApiKey(key: string) {
    this.apiKey = key;
  }

  isConfigured(): boolean {
    return Boolean(this.apiKey);
  }

  async chatWithPersona(
    persona: keyof typeof AI_PERSONA_CONFIGS,
    userMessage: string,
    context: AIPersonaContext
  ): Promise<string> {
    if (!this.apiKey) {
      throw new Error('OpenRoute API key not configured');
    }

    const personaConfig = AI_PERSONA_CONFIGS[persona];
    if (!personaConfig) {
      throw new Error(`Unknown AI persona: ${persona}`);
    }

    // Build context-aware system prompt
    const systemPrompt = this.buildSystemPrompt(personaConfig, context);

    const request: OpenRouteRequest = {
      model: personaConfig.model,
      messages: [
        {
          role: 'system',
          content: systemPrompt
        },
        {
          role: 'user',
          content: userMessage
        }
      ],
      temperature: 0.7,
      max_tokens: 2000
    };

    try {
      const response = await fetch(`${this.baseURL}/chat/completions`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': window.location.origin,
          'X-Title': 'LEGALFLY - Legal Insight Tool'
        },
        body: JSON.stringify(request)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`OpenRoute API error: ${errorData.error?.message || response.statusText}`);
      }

      const data: OpenRouteResponse = await response.json();

      if (data.choices && data.choices.length > 0) {
        return data.choices[0].message.content;
      } else {
        throw new Error('No response from AI model');
      }
    } catch (error) {
      console.error('OpenRoute API error:', error);
      throw error;
    }
  }

  private buildSystemPrompt(personaConfig: any, context: AIPersonaContext): string {
    const documentContext = context.selectedDocuments.length > 0
      ? `\n\nSelected Documents for Analysis:\n${context.selectedDocuments.map(doc => `- ${doc}`).join('\n')}`
      : '\n\nNo specific documents selected for this analysis.';

    return `${personaConfig.systemPrompt}

LEGAL CASE CONTEXT:
Case Title: ${context.caseTitle}
Case Description: ${context.caseDescription}
Case ID: ${context.caseId}${documentContext}

INSTRUCTIONS:
- Provide legal analysis and insights relevant to this case
- Consider the selected documents in your analysis
- Maintain your persona's unique perspective and expertise
- Focus on practical, actionable insights
- Consider consciousness, community healing, and spatial wisdom aspects
- Be concise but comprehensive in your responses
- Always sign your responses with your persona icon and name`;
  }

  // Fallback method for when API is not available
  async generateFallbackResponse(
    persona: keyof typeof AI_PERSONA_CONFIGS,
    userMessage: string,
    context: AIPersonaContext
  ): Promise<string> {
    const personaConfig = AI_PERSONA_CONFIGS[persona];
    const documentContext = context.selectedDocuments.length > 0
      ? ` I can see you've selected ${context.selectedDocuments.length} document(s) for analysis.`
      : '';

    return `${personaConfig.icon} **${personaConfig.name}** responds:

Thank you for your question about "${userMessage}".${documentContext}

Based on the case "${context.caseTitle}", I would analyze this from my ${personaConfig.description.toLowerCase()} perspective.

*Note: This is a fallback response. To enable real AI conversations, please configure your OpenRoute API key in the environment variables.*

${personaConfig.icon} ${personaConfig.name}`;
  }
}

// Export singleton instance
export const openRouteAPI = new OpenRouteAPI();
