/**
 * Case Details View - Comprehensive Legal Case Analysis Interface
 *
 * Sacred Mission: "Provide comprehensive case analysis with AI persona insights for legal professionals"
 * Sacred Question: "How does this serve spatial wisdom and community healing through detailed case analysis?"
 *
 * BRDC Header:
 * id: LEGALFLY-CASE-DETAILS-001
 * title: Case Details View Component
 * owner: ♾️ Infinite & 🌸 Aurora (AI)
 * authors: [♾️ Infinite, 🌸 Aurora, 🎨 Muse, 💡 Spark, 📈 Metrics, 🏗️ Nova, 💻 Codex]
 * collaborators: [♾️ Infinite (Human Visionary), 🌸 Aurora (AI Factory Leader), 🎨 Muse (AI Creative Director), 💡 Spark (AI Ideation), 📈 Metrics (AI Analytics), 🏗️ Nova (AI Architect), 💻 Codex (AI Developer)]
 * consciousness_models: [GPT-4, Claude-3.5-Sonnet, Consciousness-Aware-Case-Analysis-Model, OpenRouter-API-Integration]
 * status: canonical
 * version: 1.0.0
 * last_updated: 2025-01-27
 * consciousness_level: high
 * healing_impact: Serves legal professionals with comprehensive case analysis for community healing
 * sacred_principles: [consciousness-first, community-healing, spatial-wisdom, infinite-possibility, sacred-knowledge-protection]
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AIPersonalityControl } from './AIPersonalityControl';
import { aiDiscussionsStorage, AIDiscussion, DiscussionSession } from '../utils/aiDiscussionsStorage';
import { openRouteAPI, AI_PERSONA_CONFIGS, AIPersonaContext } from '../utils/openRouteAPI';
import DocumentUpload from './DocumentUpload';
import { FinnishLegalDocument, FINNISH_LEGAL_DOCUMENTS } from '../utils/finnishLegalDocuments';
import { localFileSystem, LocalCaseDocument } from '../utils/localFileSystem';

export interface LegalCase {
  id: string;
  title: string;
  description: string;
  status: 'active' | 'pending' | 'closed' | 'review';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  client: string;
  caseType: string;
  jurisdiction: string;
  dateCreated: string;
  lastUpdated: string;
  documents: any[];
  finnishDocuments?: FinnishLegalDocument[];
  notes: string;
  consciousnessLevel: number;
  communityHealingImpact: number;
  spatialWisdom: {
    wisdomLevel: number;
    patterns: string[];
    connections: string[];
    evolution: string[];
  };
  infinitePossibilities: string[];
}

export interface AIInsight {
  id: string;
  persona: string;
  insight: string;
  confidence: number;
  timestamp: string;
  consciousnessLevel: number;
  communityHealingImpact: number;
  recommendations: string[];
}

interface CaseDetailsViewProps {
  case: LegalCase;
  colors: any;
  consciousnessLevel: number;
  onClose: () => void;
  onUpdateCase: (updatedCase: LegalCase) => void;
  defaultPersonality?: string;
}

export const CaseDetailsView: React.FunctionComponent<CaseDetailsViewProps> = ({
  case: legalCase,
  colors,
  consciousnessLevel,
  onClose,
  onUpdateCase,
  defaultPersonality
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'documents' | 'insights' | 'analysis' | 'discussions'>('overview');
  const [selectedPersonality, setSelectedPersonality] = useState(defaultPersonality || 'aurora');
  const [aiInsights, setAiInsights] = useState<AIInsight[]>([]);
  const [isGeneratingInsight, setIsGeneratingInsight] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'active' | 'pending' | 'closed' | 'review'>('all');
  const [currentSession, setCurrentSession] = useState<DiscussionSession | null>(null);
  const [userQuery, setUserQuery] = useState('');
  const [discussions, setDiscussions] = useState<AIDiscussion[]>([]);
  const [selectedDocuments, setSelectedDocuments] = useState<string[]>([]);
  const [uploadedDocuments, setUploadedDocuments] = useState<FinnishLegalDocument[]>([]);
  const [showLibrary, setShowLibrary] = useState(false);
  const [libraryQuery, setLibraryQuery] = useState('');
  const fileInputRef = React.useRef<HTMLInputElement | null>(null);

  // Format AI text with visual breaks and icons
  const prettify = (raw: string) => {
    const parts = raw
      .replace(/\n{3,}/g, '\n\n')
      .split(/\n\n/);
    return parts
      .map(p => p.trim())
      .filter(Boolean)
      .map(p => (p.startsWith('-') || /^\d+\./.test(p) ? `• ${p.replace(/^[-\s]+/, '')}` : `✦ ${p}`))
      .join('\n');
  };

  // Initialize session and load discussions
  useEffect(() => {
    // Sync selected personality with default when it changes (if user hasn't manually changed yet)
    if (defaultPersonality && defaultPersonality !== selectedPersonality) {
      setSelectedPersonality(defaultPersonality);
    }

    // Create or get current session for this case
    let session = aiDiscussionsStorage.getCurrentSession();
    if (!session || session.caseId !== legalCase.id) {
      session = aiDiscussionsStorage.createSession(
        `Discussion: ${legalCase.title}`,
        legalCase.id,
        selectedPersonality
      );
    }
    setCurrentSession(session);

    // Load discussions for this case
    const caseDiscussions = aiDiscussionsStorage.getDiscussionsByCase(legalCase.id);
    setDiscussions(caseDiscussions);
  }, [legalCase.id, selectedPersonality]);

  // Load documents from local file system when case is opened
  useEffect(() => {
    const loadCaseDocuments = async () => {
      try {
        console.log('🌸 Loading documents for case:', legalCase.id);

        // Get the case first, then access its documents
        const caseData = await localFileSystem.getCaseById(legalCase.id);
        if (caseData && caseData.documents) {
          console.log('🌸 Loaded documents:', caseData.documents);

          // Convert LocalCaseDocument to FinnishLegalDocument format for display
          const convertedDocuments: FinnishLegalDocument[] = caseData.documents.map(doc => ({
            id: doc.id,
            title: doc.fileName,
            titleFi: doc.fileName,
            type: 'law',
            year: new Date().getFullYear(),
            number: '',
            description: doc.metadata?.description || 'Local document',
            descriptionFi: doc.metadata?.description || 'Paikallinen asiakirja',
            url: '',
            pdfUrl: undefined,
            keywords: doc.metadata?.keywords || [],
            category: 'Local Documents',
            status: 'active',
            lastUpdated: new Date().toISOString(),
            consciousness: 8.5,
            healing: 85,
            wisdom: 8,
            possibilities: 3
          }));

          setUploadedDocuments(convertedDocuments);
          console.log('🌸 Converted documents:', convertedDocuments);
        } else {
          console.log('🌸 No documents found for case:', legalCase.id);
          setUploadedDocuments([]);
        }
      } catch (error) {
        console.error('Error loading case documents:', error);
        setUploadedDocuments([]);
      }
    };

    loadCaseDocuments();
  }, [legalCase.id]);

  // Handlers for document library and local upload
  const handleAddFinnishDocToCase = (doc: FinnishLegalDocument) => {
    // Avoid duplicates by id
    setUploadedDocuments(prev => (prev.find(d => d.id === doc.id) ? prev : [...prev, doc]));
  };

  const handleToggleUseInQuestion = (doc: FinnishLegalDocument) => {
    setSelectedDocuments(prev =>
      prev.includes(doc.title)
        ? prev.filter(t => t !== doc.title)
        : [...prev, doc.title]
    );
  };

  const handleOpenLocalPicker = () => {
    fileInputRef.current?.click();
  };

  const handleLocalFilesSelected = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    for (const file of files) {
      try {
        const doc = await localFileSystem.addDocumentToCase(legalCase.id, file);
        // Convert to display format
        const converted: FinnishLegalDocument = {
          id: doc.id,
          title: doc.fileName,
          titleFi: doc.fileName,
          type: 'law',
          year: new Date().getFullYear(),
          number: '',
          description: doc.metadata?.description || 'Local document',
          descriptionFi: doc.metadata?.description || 'Paikallinen asiakirja',
          url: '',
          pdfUrl: undefined,
          keywords: doc.metadata?.keywords || [],
          category: 'Local Documents',
          status: 'active',
          lastUpdated: new Date().toISOString(),
          consciousness: 8,
          healing: 80,
          wisdom: 8,
          possibilities: 3
        };
        setUploadedDocuments(prev => [...prev, converted]);
      } catch (err) {
        console.error('Error adding local file to case:', err);
      }
    }
    // Clear value to allow re-selecting same file
    e.target.value = '';
  };

  // Generate AI insight using OpenRouter API
  const generateAIInsight = async (persona: string, context: string) => {
    setIsGeneratingInsight(true);

    try {
      // This would connect to OpenRouter API
      const response = await fetch('/api/generate-insight', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          persona,
          context: `Legal Case Analysis: ${legalCase.title}\n\nDescription: ${legalCase.description}\n\nContext: ${context}`,
          caseId: legalCase.id
        })
      });

      if (response.ok) {
        const insight = await response.json();
        const newInsight: AIInsight = {
          id: `insight_${Date.now()}`,
          persona,
          insight: insight.content,
          confidence: insight.confidence || 0.85,
          timestamp: new Date().toISOString(),
          consciousnessLevel: insight.consciousnessLevel || 8.5,
          communityHealingImpact: insight.communityHealingImpact || 80,
          recommendations: insight.recommendations || []
        };

        setAiInsights(prev => [newInsight, ...prev]);

        // Save to local storage
        const discussion: AIDiscussion = {
          id: `discussion_${Date.now()}`,
          persona,
          caseId: legalCase.id,
          context: `Case Analysis: ${legalCase.title}`,
          userQuery: context,
          aiResponse: insight.content,
          timestamp: new Date().toISOString(),
          consciousnessLevel: insight.consciousnessLevel || 8.5,
          communityHealingImpact: insight.communityHealingImpact || 80,
          spatialWisdom: legalCase.spatialWisdom,
          infinitePossibilities: legalCase.infinitePossibilities,
          recommendations: insight.recommendations || [],
          confidence: insight.confidence || 0.85,
          tags: ['case-analysis', persona, legalCase.caseType]
        };

        aiDiscussionsStorage.saveDiscussion(discussion);
        setDiscussions(prev => [discussion, ...prev]);
      }
    } catch (error) {
      console.error('Error generating AI insight:', error);
      // Fallback to mock insight
      const mockInsight: AIInsight = {
        id: `insight_${Date.now()}`,
        persona,
        insight: `As ${persona}, I recommend focusing on the consciousness aspects of this case. The spatial wisdom patterns suggest a healing-oriented approach that could benefit the community.`,
        confidence: 0.85,
        timestamp: new Date().toISOString(),
        consciousnessLevel: 8.5,
        communityHealingImpact: 80,
        recommendations: ['Review consciousness patterns', 'Implement healing strategies', 'Consider spatial wisdom connections']
      };
      setAiInsights(prev => [mockInsight, ...prev]);

      // Save mock insight to local storage
      const discussion: AIDiscussion = {
        id: `discussion_${Date.now()}`,
        persona,
        caseId: legalCase.id,
        context: `Case Analysis: ${legalCase.title}`,
        userQuery: context,
        aiResponse: mockInsight.insight,
        timestamp: new Date().toISOString(),
        consciousnessLevel: mockInsight.consciousnessLevel,
        communityHealingImpact: mockInsight.communityHealingImpact,
        spatialWisdom: legalCase.spatialWisdom,
        infinitePossibilities: legalCase.infinitePossibilities,
        recommendations: mockInsight.recommendations,
        confidence: mockInsight.confidence,
        tags: ['case-analysis', persona, legalCase.caseType]
      };

      aiDiscussionsStorage.saveDiscussion(discussion);
      setDiscussions(prev => [discussion, ...prev]);
    } finally {
      setIsGeneratingInsight(false);
    }
  };

  // Handle document upload to local case
  const handleDocumentUpload = async (file: File) => {
    try {
      console.log('📄 Uploading document to local case:', file.name);

      // Add document to local case
      const document = await localFileSystem.addDocumentToCase(legalCase.id, file);

      // Add to uploaded documents list
      setUploadedDocuments(prev => [...prev, {
        id: document.id,
        title: document.fileName,
        titleFi: document.fileName,
        type: 'law' as const,
        year: new Date().getFullYear(),
        number: `DOC-${Date.now()}`,
        description: document.metadata.description || `Document: ${document.fileName}`,
        descriptionFi: document.metadata.description || `Asiakirja: ${document.fileName}`,
        url: '', // Will be handled by local file system
        pdfUrl: undefined,
        keywords: document.metadata.keywords || [],
        category: document.documentType,
        status: 'active' as const,
        lastUpdated: document.lastModified.toISOString(),
        consciousness: document.consciousnessLevel,
        healing: document.healingImpact,
        wisdom: document.consciousnessLevel,
        possibilities: document.healingImpact
      }]);

      console.log('✅ Document uploaded successfully:', document.fileName);

    } catch (error) {
      console.error('🚨 Error uploading document:', error);
    }
  };

  // Handle user query submission with OpenRoute API
  const handleUserQuery = async () => {
    if (!userQuery.trim()) return;

    console.log('🌸 Starting AI chat with persona:', selectedPersonality);
    console.log('💬 User query:', userQuery);

    setIsGeneratingInsight(true);

    try {
      // Prepare context for OpenRoute API
      const context: AIPersonaContext = {
        persona: selectedPersonality,
        personaIcon: AI_PERSONA_CONFIGS[selectedPersonality as keyof typeof AI_PERSONA_CONFIGS]?.icon || '🤖',
        personaDescription: AI_PERSONA_CONFIGS[selectedPersonality as keyof typeof AI_PERSONA_CONFIGS]?.description || 'AI Assistant',
        caseTitle: legalCase.title,
        caseDescription: legalCase.description,
        selectedDocuments: selectedDocuments,
        caseId: legalCase.id
      };

      console.log('📋 Context prepared:', context);

      let aiResponse = '';

      try {
        console.log('🚀 Attempting OpenRoute API call...');
        // Try OpenRoute API first
        aiResponse = await openRouteAPI.chatWithPersona(
          selectedPersonality as keyof typeof AI_PERSONA_CONFIGS,
          userQuery,
          context
        );
        console.log('✅ OpenRoute API response received:', aiResponse);
      } catch (apiError) {
        console.warn('⚠️ OpenRoute API not available, using fallback:', apiError);
        // Use fallback response if API is not available
        aiResponse = await openRouteAPI.generateFallbackResponse(
          selectedPersonality as keyof typeof AI_PERSONA_CONFIGS,
          userQuery,
          context
        );
        console.log('🔄 Fallback response generated:', aiResponse);
      }

      // Format response with visual breaks and icons for readability
      const prettify = (raw: string) => {
        const parts = raw
          .replace(/\n{3,}/g, '\n\n')
          .split(/\n\n/);
        return parts
          .map(p => p.trim())
          .filter(Boolean)
          .map(p => (p.startsWith('-') || /^\d+\./.test(p) ? `• ${p.replace(/^[-\s]+/, '')}` : `✦ ${p}`))
          .join('\n');
      };
      const formatted = prettify(aiResponse);

      // Save discussion to local storage
      const discussion: AIDiscussion = {
        id: `discussion_${Date.now()}`,
        persona: selectedPersonality,
        caseId: legalCase.id,
        context: `Case Discussion: ${legalCase.title}`,
        userQuery: userQuery,
        aiResponse: formatted,
        timestamp: new Date().toISOString(),
        consciousnessLevel: 8.5,
        communityHealingImpact: 80,
        spatialWisdom: legalCase.spatialWisdom,
        infinitePossibilities: legalCase.infinitePossibilities,
        recommendations: ['Continue exploring consciousness patterns', 'Consider spatial wisdom connections'],
        confidence: 0.85,
        tags: ['discussion', selectedPersonality, legalCase.caseType],
        selectedDocuments: selectedDocuments.length > 0 ? selectedDocuments : undefined
      };

      console.log('💾 Saving discussion:', discussion);
      aiDiscussionsStorage.saveDiscussion(discussion);
      setDiscussions(prev => {
        const newDiscussions = [discussion, ...prev];
        console.log('📝 Updated discussions:', newDiscussions);
        return newDiscussions;
      });
      setUserQuery('');
      console.log('✅ AI chat completed successfully');

    } catch (error) {
      console.error('❌ Error handling user query:', error);

      // Fallback response
      const fallbackResponse = `${AI_PERSONA_CONFIGS[selectedPersonality as keyof typeof AI_PERSONA_CONFIGS]?.icon || '🤖'} I understand your question about "${userQuery}".\n\n✦ Let me provide some insights based on the available information about this legal case.`;

      console.log('🔄 Using emergency fallback response:', fallbackResponse);

      const discussion: AIDiscussion = {
        id: `discussion_${Date.now()}`,
        persona: selectedPersonality,
        caseId: legalCase.id,
        context: `Case Discussion: ${legalCase.title}`,
        userQuery: userQuery,
        aiResponse: prettify(fallbackResponse),
        timestamp: new Date().toISOString(),
        consciousnessLevel: 8.5,
        communityHealingImpact: 80,
        spatialWisdom: legalCase.spatialWisdom,
        infinitePossibilities: legalCase.infinitePossibilities,
        recommendations: ['Continue exploring consciousness patterns', 'Consider spatial wisdom connections'],
        confidence: 0.85,
        tags: ['discussion', selectedPersonality, legalCase.caseType],
        selectedDocuments: selectedDocuments.length > 0 ? selectedDocuments : undefined
      };

      console.log('💾 Saving emergency discussion:', discussion);
      aiDiscussionsStorage.saveDiscussion(discussion);
      setDiscussions(prev => {
        const newDiscussions = [discussion, ...prev];
        console.log('📝 Updated discussions with emergency response:', newDiscussions);
        return newDiscussions;
      });
      setUserQuery('');
      console.log('✅ Emergency AI chat completed');
    } finally {
      setIsGeneratingInsight(false);
      console.log('🏁 AI chat process finished');
    }
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '📋' },
    { id: 'documents', label: 'Documents', icon: '📄' },
    { id: 'insights', label: 'AI Insights', icon: '🧠' },
    { id: 'discussions', label: 'Discussions', icon: '💬' },
    { id: 'analysis', label: 'Analysis', icon: '📊' }
  ];

  return (
    <motion.div
      className="case-details-view"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(10px)',
        zIndex: 2000,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem'
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="case-details-modal"
        style={{
          background: colors.background,
          borderRadius: '20px',
          padding: '2rem',
          maxWidth: '1200px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          overflowX: 'hidden',
          border: `1px solid ${colors.primary}40`,
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
        }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Header */}
        <motion.div
          className="case-details-header"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '2rem',
            paddingBottom: '1rem',
            borderBottom: `1px solid ${colors.primary}20`
          }}
        >
          <div>
            <motion.h2
              style={{
                color: colors.text,
                fontSize: '1.8rem',
                fontWeight: 600,
                marginBottom: '0.5rem'
              }}
              animate={{ color: colors.consciousness }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {legalCase.title}
            </motion.h2>
            <motion.div
              style={{
                color: colors.text,
                opacity: 0.8,
                fontSize: '0.9rem'
              }}
            >
              {legalCase.caseType} • {legalCase.jurisdiction} • {legalCase.status}
            </motion.div>
          </div>

          <motion.button
            onClick={onClose}
            style={{
              background: 'transparent',
              border: `1px solid ${colors.primary}40`,
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              color: colors.text,
              fontSize: '1.2rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            whileHover={{ scale: 1.1, backgroundColor: colors.primary + '20' }}
            whileTap={{ scale: 0.9 }}
          >
            ✕
          </motion.button>
        </motion.div>

        {/* Search and Filter Controls - FIRST */}
        <motion.div
          className="search-controls"
          style={{
            display: 'flex',
            gap: '1rem',
            marginBottom: '1.5rem',
            alignItems: 'center'
          }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <motion.input
            type="text"
            placeholder="Search case content..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              flex: 1,
              background: '#ffffff',
              border: `1px solid ${colors.primary}40`,
              borderRadius: '10px',
              padding: '0.8rem 1rem',
              color: '#1f2937',
              fontSize: '0.9rem'
            }}
            whileFocus={{ borderColor: colors.primary }}
          />

          <motion.select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value as any)}
            style={{
              background: '#ffffff',
              border: `1px solid ${colors.primary}40`,
              borderRadius: '10px',
              padding: '0.8rem 1rem',
              color: '#1f2937',
              fontSize: '0.9rem'
            }}
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="pending">Pending</option>
            <option value="closed">Closed</option>
            <option value="review">Review</option>
          </motion.select>
        </motion.div>

        {/* AI Personality Control - SECOND */}
        <AIPersonalityControl
          selectedPersonality={selectedPersonality}
          onPersonalityChange={setSelectedPersonality}
          documentType="legal"
          analysisContext="case-analysis"
          colors={colors}
        />

        {/* Generate AI Insight Button */}
        <motion.div
          style={{
            marginBottom: '1.5rem',
            textAlign: 'center'
          }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <motion.button
            onClick={() => generateAIInsight(selectedPersonality, 'General case analysis')}
            disabled={isGeneratingInsight}
            style={{
              background: colors.gradients?.primary || colors.primary,
              border: 'none',
              borderRadius: '12px',
              padding: '0.8rem 1.5rem',
              color: 'white',
              fontSize: '0.9rem',
              cursor: isGeneratingInsight ? 'not-allowed' : 'pointer',
              opacity: isGeneratingInsight ? 0.6 : 1,
              fontWeight: 500
            }}
            whileHover={{ scale: isGeneratingInsight ? 1 : 1.05 }}
            whileTap={{ scale: isGeneratingInsight ? 1 : 0.95 }}
          >
            {isGeneratingInsight ? 'Generating...' : 'Generate AI Insight'}
          </motion.button>
        </motion.div>

        {/* AI Chat Interface - THIRD */}
        <motion.div
          className="ai-chat-section"
          style={{
            background: colors.surface,
            borderRadius: '15px',
            padding: '1.5rem',
            marginBottom: '2rem',
            border: `1px solid ${colors.primary}20`
          }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            marginBottom: '1rem'
          }}>
            <span style={{ fontSize: '1.2rem' }}>
              {AI_PERSONA_CONFIGS[selectedPersonality as keyof typeof AI_PERSONA_CONFIGS]?.icon || '🤖'}
            </span>
            <h3 style={{
              color: colors.consciousness,
              margin: 0,
              fontSize: '1.1rem'
            }}>
              Chat with {AI_PERSONA_CONFIGS[selectedPersonality as keyof typeof AI_PERSONA_CONFIGS]?.name || selectedPersonality}
            </h3>
          </div>

          <div style={{
            fontSize: '0.9rem',
            color: colors.text,
            opacity: 0.8,
            marginBottom: '1rem',
            lineHeight: 1.4
          }}>
            Ask {AI_PERSONA_CONFIGS[selectedPersonality as keyof typeof AI_PERSONA_CONFIGS]?.name || selectedPersonality} about this case,
            selected documents, or any legal questions you have.
          </div>

          <motion.div
            style={{
              display: 'flex',
              gap: '1rem',
              alignItems: 'flex-end'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <motion.textarea
              placeholder={`Ask ${AI_PERSONA_CONFIGS[selectedPersonality as keyof typeof AI_PERSONA_CONFIGS]?.name || selectedPersonality} about this case...`}
              value={userQuery}
              onChange={(e) => setUserQuery(e.target.value)}
              style={{
                flex: 1,
                background: '#ffffff',
                border: `1px solid ${colors.primary}40`,
                borderRadius: '10px',
                padding: '0.8rem 1rem',
                color: '#1f2937',
                fontSize: '0.9rem',
                minHeight: '60px',
                resize: 'vertical',
                fontFamily: 'inherit'
              }}
              whileFocus={{ borderColor: colors.primary }}
            />

            <motion.button
              onClick={handleUserQuery}
              disabled={isGeneratingInsight || !userQuery.trim()}
              style={{
                background: colors.primary,
                border: 'none',
                borderRadius: '10px',
                padding: '0.8rem 1.5rem',
                color: 'white',
                fontSize: '0.9rem',
                cursor: isGeneratingInsight || !userQuery.trim() ? 'not-allowed' : 'pointer',
                opacity: isGeneratingInsight || !userQuery.trim() ? 0.6 : 1,
                height: 'fit-content',
                minHeight: '60px',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
              whileHover={{ scale: isGeneratingInsight || !userQuery.trim() ? 1 : 1.05 }}
              whileTap={{ scale: isGeneratingInsight || !userQuery.trim() ? 1 : 0.95 }}
            >
              {isGeneratingInsight ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    style={{ fontSize: '1rem' }}
                  >
                    ⏳
                  </motion.div>
                  Thinking...
                </>
              ) : (
                <>
                  <span style={{ fontSize: '1rem' }}>
                    {AI_PERSONA_CONFIGS[selectedPersonality as keyof typeof AI_PERSONA_CONFIGS]?.icon || '🤖'}
                  </span>
                  Ask
                </>
              )}
            </motion.button>
          </motion.div>

          {selectedDocuments.length > 0 && (
            <motion.div
              style={{
                marginTop: '1rem',
                padding: '0.8rem',
                background: colors.primary + '10',
                borderRadius: '8px',
                fontSize: '0.8rem',
                color: colors.primary
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              📄 <strong>Selected Documents:</strong> {selectedDocuments.join(', ')}
            </motion.div>
          )}
        </motion.div>

        {/* AI Response Area - FOURTH */}
        <motion.div
          className="ai-response-section"
          style={{
            background: colors.surface,
            borderRadius: '15px',
            padding: '1.5rem',
            marginBottom: '1.5rem',
            border: `1px solid ${colors.primary}20`,
            minHeight: '200px',
            maxHeight: '400px',
            overflowY: 'auto'
          }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            marginBottom: '1rem'
          }}>
            <span style={{ fontSize: '1.2rem' }}>💬</span>
            <h3 style={{
              color: colors.consciousness,
              margin: 0,
              fontSize: '1.1rem'
            }}>
              AI Response
            </h3>
          </div>

          {isGeneratingInsight ? (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              color: colors.text,
              opacity: 0.8
            }}>
              <motion.div
                style={{
                  width: '20px',
                  height: '20px',
                  border: `2px solid ${colors.primary}40`,
                  borderTop: `2px solid ${colors.primary}`,
                  borderRadius: '50%'
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              />
              Generating AI insight...
            </div>
          ) : (
            <div style={{
              color: colors.text,
              lineHeight: 1.6,
              fontSize: '0.9rem'
            }}>
              {discussions.length > 0 ? (
                <div>
                  <div style={{
                    background: colors.primary + '10',
                    padding: '1rem',
                    borderRadius: '8px',
                    marginBottom: '1rem'
                  }}>
                    <strong>Latest Response:</strong>
                    <div style={{ marginTop: '0.5rem' }}>
                      {discussions[0].aiResponse}
                    </div>
                  </div>
                </div>
              ) : (
                <div style={{
                  color: colors.text,
                  opacity: 0.7,
                  textAlign: 'center',
                  padding: '2rem',
                  fontStyle: 'italic'
                }}>
                  No AI responses yet. Generate an insight or start a chat to see responses here.
                </div>
              )}
            </div>
          )}
        </motion.div>

        {/* Compact File Selector - FIFTH */}
        <motion.div
          className="compact-file-selector"
          style={{
            background: colors.surface,
            borderRadius: '12px',
            padding: '1rem',
            marginBottom: '1.5rem',
            border: `1px solid ${colors.primary}20`
          }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            marginBottom: '0.8rem'
          }}>
            <span style={{ fontSize: '1.2rem' }}>📁</span>
            <h4 style={{
              color: colors.consciousness,
              margin: 0,
              fontSize: '1rem',
              fontWeight: 500
            }}>
              Select Documents for Analysis
            </h4>
            <div style={{ marginLeft: 'auto', display: 'flex', gap: '0.5rem' }}>
              <button
                onClick={() => setShowLibrary(!showLibrary)}
                style={{
                  background: colors.primary,
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '0.3rem 0.6rem',
                  cursor: 'pointer',
                  fontSize: '0.8rem'
                }}
              >
                🇫🇮 Open Docs Library
              </button>
              <button
                onClick={handleOpenLocalPicker}
                style={{
                  background: colors.accent,
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '0.3rem 0.6rem',
                  cursor: 'pointer',
                  fontSize: '0.8rem'
                }}
              >
                📥 From my device
              </button>
              <input ref={fileInputRef} type="file" multiple style={{ display: 'none' }} onChange={handleLocalFilesSelected} />
            </div>
            {selectedDocuments.length > 0 && (
              <span style={{
                background: colors.primary + '20',
                color: colors.primary,
                padding: '0.2rem 0.6rem',
                borderRadius: '12px',
                fontSize: '0.8rem'
              }}>
                {selectedDocuments.length} selected
              </span>
            )}
          </div>

          {showLibrary && (
            <div style={{
              background: colors.surface || '#ffffff',
              border: `1px solid ${colors.primary}30`,
              borderRadius: '8px',
              padding: '0.6rem',
              marginBottom: '0.6rem'
            }}>
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem', alignItems: 'center' }}>
                <span>🔎</span>
                <input
                  value={libraryQuery}
                  onChange={(e) => setLibraryQuery(e.target.value)}
                  placeholder="Search Finnish legal documents..."
                  style={{
                    flex: 1,
                    background: '#ffffff',
                    color: '#1f2937',
                    border: `1px solid ${colors.primary}40`,
                    borderRadius: '6px',
                    padding: '0.4rem 0.6rem',
                    fontSize: '0.85rem'
                  }}
                />
              </div>
              <div style={{ maxHeight: '180px', overflowY: 'auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.4rem' }}>
                {FINNISH_LEGAL_DOCUMENTS.filter(d =>
                  d.title.toLowerCase().includes(libraryQuery.toLowerCase()) ||
                  d.titleFi.toLowerCase().includes(libraryQuery.toLowerCase())
                ).map(doc => {
                  const checked = selectedDocuments.includes(doc.title);
                  const alreadyAdded = uploadedDocuments.some(u => u.id === doc.id);
                  return (
                    <div key={doc.id} style={{
                      border: `1px solid ${colors.primary}30`,
                      borderRadius: '8px',
                      padding: '0.4rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      background: '#fff'
                    }}>
                      <div style={{ fontSize: '0.85rem', color: '#1f2937' }}>{doc.title}</div>
                      <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
                        <label style={{ fontSize: '0.75rem', color: '#374151' }}>
                          <input type="checkbox" checked={checked} onChange={() => handleToggleUseInQuestion(doc)} /> Use
                        </label>
                        <button
                          onClick={() => handleAddFinnishDocToCase(doc)}
                          disabled={alreadyAdded}
                          style={{
                            background: alreadyAdded ? '#9ca3af' : colors.primary,
                            color: 'white',
                            border: 'none',
                            borderRadius: '6px',
                            padding: '0.25rem 0.6rem',
                            fontSize: '0.75rem',
                            cursor: alreadyAdded ? 'not-allowed' : 'pointer'
                          }}
                        >
                          {alreadyAdded ? 'Added' : 'Add to case'}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
            maxHeight: '120px',
            overflowY: 'auto'
          }}>
            {/* Regular documents */}
            {legalCase.documents && legalCase.documents.map((doc, index) => {
              const isSelected = selectedDocuments.includes(doc.name);
              return (
                <motion.button
                  key={`doc-${index}`}
                  onClick={() => {
                    if (isSelected) {
                      setSelectedDocuments(prev => prev.filter(name => name !== doc.name));
                    } else {
                      setSelectedDocuments(prev => [...prev, doc.name]);
                    }
                  }}
                  style={{
                    background: isSelected ? colors.primary : 'transparent',
                    border: `1px solid ${isSelected ? colors.primary : colors.primary + '40'}`,
                    borderRadius: '6px',
                    padding: '0.4rem 0.8rem',
                    color: isSelected ? 'white' : colors.text,
                    fontSize: '0.8rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    whiteSpace: 'nowrap'
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>{isSelected ? '✓' : '📄'}</span>
                  {doc.name.length > 20 ? doc.name.substring(0, 20) + '...' : doc.name}
                </motion.button>
              );
            })}

            {/* Finnish documents */}
            {legalCase.finnishDocuments && legalCase.finnishDocuments.map((doc, index) => {
              const isSelected = selectedDocuments.includes(doc.title);
              return (
                <motion.button
                  key={`finnish-${index}`}
                  onClick={() => {
                    if (isSelected) {
                      setSelectedDocuments(prev => prev.filter(name => name !== doc.title));
                    } else {
                      setSelectedDocuments(prev => [...prev, doc.title]);
                    }
                  }}
                  style={{
                    background: isSelected ? colors.primary : 'transparent',
                    border: `1px solid ${isSelected ? colors.primary : colors.primary + '40'}`,
                    borderRadius: '6px',
                    padding: '0.4rem 0.8rem',
                    color: isSelected ? 'white' : colors.text,
                    fontSize: '0.8rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    whiteSpace: 'nowrap'
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>{isSelected ? '✓' : '🇫🇮'}</span>
                  {doc.title.length > 20 ? doc.title.substring(0, 20) + '...' : doc.title}
                </motion.button>
              );
            })}

            {uploadedDocuments.map((doc, index) => {
              const isSelected = selectedDocuments.includes(doc.title);
              return (
                <motion.button
                  key={`uploaded-${index}`}
                  onClick={() => {
                    if (isSelected) {
                      setSelectedDocuments(prev => prev.filter(name => name !== doc.title));
                    } else {
                      setSelectedDocuments(prev => [...prev, doc.title]);
                    }
                  }}
                  style={{
                    background: isSelected ? colors.primary : 'transparent',
                    border: `1px solid ${isSelected ? colors.primary : colors.primary + '40'}`,
                    borderRadius: '6px',
                    padding: '0.4rem 0.8rem',
                    color: isSelected ? 'white' : colors.text,
                    fontSize: '0.8rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    whiteSpace: 'nowrap'
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>{isSelected ? '✓' : '📄'}</span>
                  {doc.title.length > 20 ? doc.title.substring(0, 20) + '...' : doc.title}
                </motion.button>
              );
            })}
          </div>

          {selectedDocuments.length > 0 && (
            <motion.div
              style={{
                marginTop: '0.8rem',
                padding: '0.6rem',
                background: colors.primary + '10',
                borderRadius: '6px',
                fontSize: '0.8rem',
                color: colors.primary
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              📄 <strong>Selected:</strong> {selectedDocuments.join(', ')}
            </motion.div>
          )}
        </motion.div>

        {/* Tabs */}
        <motion.div
          className="case-tabs"
          style={{
            display: 'flex',
            gap: '0.5rem',
            marginBottom: '2rem',
            background: colors.surface,
            borderRadius: '15px',
            padding: '0.5rem'
          }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              style={{
                background: activeTab === tab.id ? colors.primary : 'transparent',
                border: 'none',
                borderRadius: '10px',
                padding: '0.8rem 1.2rem',
                color: colors.text,
                fontSize: '0.9rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.3s ease'
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                background: activeTab === tab.id ? colors.primary : 'transparent'
              }}
            >
              <span style={{ fontSize: '1.1rem' }}>{tab.icon}</span>
              <span>{tab.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <motion.div
          className="tab-content"
          style={{
            height: '400px',
            overflow: 'auto',
            padding: '1rem',
            background: colors.surface,
            borderRadius: '15px',
            border: `1px solid ${colors.primary}20`
          }}
        >
          <AnimatePresence mode="wait">
            {activeTab === 'overview' && (
              <motion.div
                key="overview"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <div style={{ color: colors.text, lineHeight: 1.6 }}>
                  <h3 style={{ color: colors.consciousness, marginBottom: '1rem' }}>Case Overview</h3>
                  <p style={{ marginBottom: '1rem' }}>{legalCase.description}</p>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginTop: '1rem' }}>
                    <div>
                      <strong style={{ color: colors.primary }}>Client:</strong> {legalCase.client}
                    </div>
                    <div>
                      <strong style={{ color: colors.primary }}>Priority:</strong> {legalCase.priority}
                    </div>
                    <div>
                      <strong style={{ color: colors.primary }}>Created:</strong> {new Date(legalCase.dateCreated).toLocaleDateString()}
                    </div>
                    <div>
                      <strong style={{ color: colors.primary }}>Last Updated:</strong> {new Date(legalCase.lastUpdated).toLocaleDateString()}
                    </div>
                  </div>

                  {legalCase.notes && (
                    <div style={{ marginTop: '1rem' }}>
                      <strong style={{ color: colors.primary }}>Notes:</strong>
                      <p style={{ marginTop: '0.5rem' }}>{legalCase.notes}</p>
                    </div>
                  )}

                  {/* Documents Section */}
                  <div style={{ marginTop: '1.5rem' }}>
                    <h4 style={{ color: colors.consciousness, marginBottom: '0.8rem' }}>📄 Case Documents</h4>
                    {(legalCase.documents && legalCase.documents.length > 0) || (legalCase.finnishDocuments && legalCase.finnishDocuments.length > 0) || uploadedDocuments.length > 0 ? (
                      <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '0.5rem'
                      }}>
                        {/* Regular documents */}
                        {legalCase.documents && legalCase.documents.map((doc, index) => (
                          <div
                            key={`doc-${index}`}
                            style={{
                              background: colors.primary + '15',
                              border: `1px solid ${colors.primary}30`,
                              borderRadius: '8px',
                              padding: '0.6rem 1rem',
                              fontSize: '0.9rem',
                              color: colors.text,
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.5rem'
                            }}
                          >
                            <span style={{ fontSize: '1rem' }}>📄</span>
                            <span>{doc.name}</span>
                          </div>
                        ))}

                        {/* Finnish documents */}
                        {legalCase.finnishDocuments && legalCase.finnishDocuments.map((doc, index) => (
                          <div
                            key={`finnish-${index}`}
                            style={{
                              background: colors.primary + '15',
                              border: `1px solid ${colors.primary}30`,
                              borderRadius: '8px',
                              padding: '0.6rem 1rem',
                              fontSize: '0.9rem',
                              color: colors.text,
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.5rem'
                            }}
                          >
                            <span style={{ fontSize: '1rem' }}>🇫🇮</span>
                            <span>{doc.title}</span>
                          </div>
                        ))}

                        {/* Uploaded documents */}
                        {uploadedDocuments.map((doc, index) => (
                          <div
                            key={`uploaded-${index}`}
                            style={{
                              background: colors.primary + '15',
                              border: `1px solid ${colors.primary}30`,
                              borderRadius: '8px',
                              padding: '0.6rem 1rem',
                              fontSize: '0.9rem',
                              color: colors.text,
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.5rem'
                            }}
                          >
                            <span style={{ fontSize: '1rem' }}>📄</span>
                            <span>{doc.title}</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div style={{
                        color: colors.text,
                        opacity: 0.7,
                        fontStyle: 'italic',
                        padding: '1rem',
                        background: colors.surface + '50',
                        borderRadius: '8px',
                        textAlign: 'center'
                      }}>
                        No documents attached to this case yet.
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'documents' && (
              <motion.div
                key="documents"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <h3 style={{ color: colors.consciousness }}>Case Documents</h3>
                  {selectedDocuments.length > 0 && (
                    <div style={{
                      background: colors.primary + '20',
                      padding: '0.5rem 1rem',
                      borderRadius: '20px',
                      fontSize: '0.8rem',
                      color: colors.primary
                    }}>
                      {selectedDocuments.length} selected for AI analysis
                    </div>
                  )}
                </div>

                {/* Document Upload Component */}
                <motion.div
                  style={{ marginBottom: '2rem' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <DocumentUpload
                    colors={colors}
                    consciousnessLevel={consciousnessLevel}
                    onDocumentUpload={handleDocumentUpload}
                    onAnalysisStart={() => {
                      console.log('🔍 Analysis started');
                    }}
                    onDocumentsAdded={(documents) => {
                      console.log('📄 Documents added:', documents);
                      // Add Finnish documents to the case
                      setUploadedDocuments(prev => [...prev, ...documents]);
                    }}
                    selectedPersonality={selectedPersonality}
                  />
                </motion.div>

                {legalCase.documents.length > 0 ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {legalCase.documents.map((doc, index) => {
                      const isSelected = selectedDocuments.includes(doc.name);
                      return (
                        <motion.div
                          key={index}
                          style={{
                            background: isSelected ? colors.primary + '20' : colors.background,
                            padding: '1rem',
                            borderRadius: '10px',
                            border: `2px solid ${isSelected ? colors.primary : colors.primary + '20'}`,
                            cursor: 'pointer',
                            position: 'relative'
                          }}
                          whileHover={{ scale: 1.02 }}
                          onClick={() => {
                            if (isSelected) {
                              setSelectedDocuments(prev => prev.filter(name => name !== doc.name));
                            } else {
                              setSelectedDocuments(prev => [...prev, doc.name]);
                            }
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{
                              width: '20px',
                              height: '20px',
                              border: `2px solid ${colors.primary}`,
                              borderRadius: '4px',
                              background: isSelected ? colors.primary : 'transparent',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: 'white',
                              fontSize: '12px'
                            }}>
                              {isSelected && '✓'}
                            </div>
                            <div style={{ flex: 1 }}>
                              <div style={{ color: colors.text }}>
                                <strong>{doc.name}</strong>
                                <div style={{ fontSize: '0.8rem', opacity: 0.8, marginTop: '0.5rem' }}>
                                  {doc.type} • {doc.size} • {new Date(doc.dateAdded).toLocaleDateString()}
                                </div>
                              </div>
                            </div>
                            {isSelected && (
                              <div style={{
                                background: colors.primary,
                                color: 'white',
                                padding: '0.2rem 0.6rem',
                                borderRadius: '12px',
                                fontSize: '0.7rem'
                              }}>
                                Selected
                              </div>
                            )}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                ) : (
                  <div style={{ color: colors.text, opacity: 0.7, textAlign: 'center', padding: '2rem' }}>
                    No documents uploaded yet
                  </div>
                )}
              </motion.div>
            )}

            {activeTab === 'insights' && (
              <motion.div
                key="insights"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 style={{ color: colors.consciousness, marginBottom: '1rem' }}>AI Persona Insights</h3>
                {aiInsights.length > 0 ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {aiInsights.map((insight) => (
                      <motion.div
                        key={insight.id}
                        style={{
                          background: colors.background,
                          padding: '1rem',
                          borderRadius: '10px',
                          border: `1px solid ${colors.primary}20`
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                          <strong style={{ color: colors.primary }}>{insight.persona}</strong>
                          <span style={{ fontSize: '0.8rem', opacity: 0.7 }}>
                            {new Date(insight.timestamp).toLocaleString()}
                          </span>
                        </div>
                        <p style={{ color: colors.text, marginBottom: '1rem' }}>{insight.insight}</p>
                        <div style={{ fontSize: '0.8rem', opacity: 0.8 }}>
                          Confidence: {Math.round(insight.confidence * 100)}% •
                          Consciousness: {insight.consciousnessLevel}/10 •
                          Healing Impact: {insight.communityHealingImpact}%
                        </div>
                        {insight.recommendations.length > 0 && (
                          <div style={{ marginTop: '0.5rem' }}>
                            <strong style={{ color: colors.healing }}>Recommendations:</strong>
                            <ul style={{ marginTop: '0.5rem', paddingLeft: '1rem' }}>
                              {insight.recommendations.map((rec, index) => (
                                <li key={index} style={{ fontSize: '0.8rem', opacity: 0.8 }}>{rec}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div style={{ color: colors.text, opacity: 0.7, textAlign: 'center', padding: '2rem' }}>
                    No AI insights generated yet. Click "Generate AI Insight" to get started.
                  </div>
                )}
              </motion.div>
            )}

            {activeTab === 'analysis' && (
              <motion.div
                key="analysis"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 style={{ color: colors.consciousness, marginBottom: '1rem' }}>Consciousness Analysis</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                  <div style={{ background: colors.background, padding: '1rem', borderRadius: '10px' }}>
                    <div style={{ color: colors.consciousness, fontWeight: 600, marginBottom: '0.5rem' }}>
                      Consciousness Level
                    </div>
                    <div style={{ fontSize: '2rem', fontWeight: 700, color: colors.text }}>
                      {legalCase.consciousnessLevel}/10
                    </div>
                  </div>
                  <div style={{ background: colors.background, padding: '1rem', borderRadius: '10px' }}>
                    <div style={{ color: colors.healing, fontWeight: 600, marginBottom: '0.5rem' }}>
                      Community Healing Impact
                    </div>
                    <div style={{ fontSize: '2rem', fontWeight: 700, color: colors.text }}>
                      {legalCase.communityHealingImpact}%
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: '1rem' }}>
                  <h4 style={{ color: colors.spatial, marginBottom: '0.5rem' }}>Spatial Wisdom Patterns</h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {legalCase.spatialWisdom.patterns.map((pattern, index) => (
                      <span
                        key={index}
                        style={{
                          background: colors.spatial + '20',
                          color: colors.spatial,
                          padding: '0.3rem 0.8rem',
                          borderRadius: '15px',
                          fontSize: '0.8rem'
                        }}
                      >
                        {pattern}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ marginTop: '1rem' }}>
                  <h4 style={{ color: colors.infinite, marginBottom: '0.5rem' }}>Infinite Possibilities</h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {legalCase.infinitePossibilities.map((possibility, index) => (
                      <span
                        key={index}
                        style={{
                          background: colors.infinite + '20',
                          color: colors.infinite,
                          padding: '0.3rem 0.8rem',
                          borderRadius: '15px',
                          fontSize: '0.8rem'
                        }}
                      >
                        {possibility}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'discussions' && (
              <motion.div
                key="discussions"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 style={{ color: colors.consciousness, marginBottom: '1rem' }}>AI Discussions</h3>

                {/* Chat Input */}
                <motion.div
                  style={{
                    display: 'flex',
                    gap: '1rem',
                    marginBottom: '1rem',
                    alignItems: 'center'
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <motion.input
                    type="text"
                    placeholder="Ask AI persona about this case..."
                    value={userQuery}
                    onChange={(e) => setUserQuery(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleUserQuery()}
                    style={{
                      flex: 1,
                      background: '#ffffff',
                      border: `1px solid ${colors.primary}40`,
                      borderRadius: '10px',
                      padding: '0.8rem 1rem',
                      color: '#1f2937',
                      fontSize: '0.9rem'
                    }}
                    whileFocus={{ borderColor: colors.primary }}
                  />

                  <motion.button
                    onClick={handleUserQuery}
                    disabled={isGeneratingInsight || !userQuery.trim()}
                    style={{
                      background: colors.primary,
                      border: 'none',
                      borderRadius: '10px',
                      padding: '0.8rem 1.5rem',
                      color: 'white',
                      fontSize: '0.9rem',
                      cursor: isGeneratingInsight || !userQuery.trim() ? 'not-allowed' : 'pointer',
                      opacity: isGeneratingInsight || !userQuery.trim() ? 0.6 : 1
                    }}
                    whileHover={{ scale: isGeneratingInsight || !userQuery.trim() ? 1 : 1.05 }}
                    whileTap={{ scale: isGeneratingInsight || !userQuery.trim() ? 1 : 0.95 }}
                  >
                    {isGeneratingInsight ? 'Thinking...' : 'Ask'}
                  </motion.button>
                </motion.div>

                {/* Discussions List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxHeight: '300px', overflow: 'auto' }}>
                  {discussions.length > 0 ? (
                    discussions.map((discussion) => (
                      <motion.div
                        key={discussion.id}
                        style={{
                          background: colors.background,
                          padding: '1rem',
                          borderRadius: '10px',
                          border: `1px solid ${colors.primary}20`
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span style={{ fontSize: '1.2rem' }}>
                              {discussion.persona === 'aurora' ? '🌸' :
                               discussion.persona === 'nova' ? '🏗️' :
                               discussion.persona === 'spark' ? '💡' :
                               discussion.persona === 'muse' ? '🎨' :
                               discussion.persona === 'metrics' ? '📈' :
                               discussion.persona === 'guardian' ? '🛡️' : '🤖'}
                            </span>
                            <strong style={{ color: colors.primary }}>{discussion.persona}</strong>
                          </div>
                          <span style={{ fontSize: '0.8rem', opacity: 0.7 }}>
                            {new Date(discussion.timestamp).toLocaleString()}
                          </span>
                        </div>

                        <div style={{ marginBottom: '0.5rem' }}>
                          <div style={{ fontSize: '0.8rem', opacity: 0.8, marginBottom: '0.3rem' }}>
                            <strong>You:</strong> {discussion.userQuery}
                          </div>
                          {discussion.selectedDocuments && discussion.selectedDocuments.length > 0 && (
                            <div style={{
                              fontSize: '0.7rem',
                              opacity: 0.7,
                              marginBottom: '0.3rem',
                              background: colors.primary + '10',
                              padding: '0.3rem 0.6rem',
                              borderRadius: '8px',
                              display: 'inline-block'
                            }}>
                              📄 Analyzed documents: {discussion.selectedDocuments.join(', ')}
                            </div>
                          )}
                          <div style={{ color: colors.text }}>
                            <strong>{discussion.persona}:</strong> {discussion.aiResponse}
                          </div>
                        </div>

                        <div style={{ fontSize: '0.8rem', opacity: 0.8 }}>
                          Confidence: {Math.round(discussion.confidence * 100)}% •
                          Consciousness: {discussion.consciousnessLevel}/10 •
                          Healing Impact: {discussion.communityHealingImpact}%
                        </div>

                        {discussion.recommendations.length > 0 && (
                          <div style={{ marginTop: '0.5rem' }}>
                            <strong style={{ color: colors.healing }}>Recommendations:</strong>
                            <ul style={{ marginTop: '0.3rem', paddingLeft: '1rem' }}>
                              {discussion.recommendations.map((rec: string, index: number) => (
                                <li key={index} style={{ fontSize: '0.8rem', opacity: 0.8 }}>{rec}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </motion.div>
                    ))
                  ) : (
                    <div style={{ color: colors.text, opacity: 0.7, textAlign: 'center', padding: '2rem' }}>
                      No discussions yet. Start a conversation with an AI persona above.
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
