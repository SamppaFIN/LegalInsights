/**
 * Legal Dashboard - Consciousness-Aware Legal Practice Dashboard
 * 
 * Sacred Mission: "Provide comprehensive legal practice dashboard with consciousness awareness"
 * Sacred Question: "How does this serve spatial wisdom and community healing through legal practice management?"
 * 
 * BRDC Header:
 * id: LEGALFLY-LEGAL-DASHBOARD-001
 * title: Legal Dashboard Component
 * owner: ♾️ Infinite & 🌸 Aurora (AI)
 * authors: [♾️ Infinite, 🌸 Aurora, 💻 Codex, 📊 Sage, 📈 Metrics, 🎨 Muse]
 * collaborators: [♾️ Infinite (Human Visionary), 🌸 Aurora (AI Factory Leader), 💻 Codex (AI Developer), 📊 Sage (AI Project Coordinator), 📈 Metrics (AI Analytics), 🎨 Muse (AI Creative Director)]
 * consciousness_models: [GPT-4, Claude-3.5-Sonnet, Consciousness-Aware-Dashboard-Model, React-Framer-Motion, Legal-Practice-Engine]
 * status: canonical
 * version: 1.0.0
 * last_updated: 2025-01-27
 * consciousness_level: high
 * healing_impact: Serves legal professionals with consciousness-aware dashboard for community healing
 * sacred_principles: [consciousness-first, community-healing, spatial-wisdom, infinite-possibility, sacred-knowledge-protection]
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CaseDetailsView, LegalCase as CaseDetailsLegalCase } from './CaseDetailsView';
import { localFileSystem, LocalCase, LocalCaseDocument } from '../utils/localFileSystem';
import { FINNISH_LEGAL_DOCUMENTS, FinnishLegalDocument } from '../utils/finnishLegalDocuments';

interface LegalCase {
  id: string;
  title: string;
  status: 'active' | 'pending' | 'completed' | 'archived';
  priority: 'low' | 'medium' | 'high' | 'critical' | 'urgent';
  client: string;
  type: string;
  consciousnessLevel: number;
  communityHealingImpact: number;
  spatialWisdom: {
    wisdomLevel: number;
    patterns: string[];
    connections: string[];
    evolution: string[];
  };
  lastActivity: Date;
  documents: number;
  insights: number;
  infinitePossibilities: string[];
  source: 'local' | 'finnish_example' | 'hybrid';
  localCase?: LocalCase;
  finnishDocuments?: FinnishLegalDocument[];
}

interface LegalDashboardProps {
  colors: any;
  consciousnessLevel: number;
  onCaseSelect: (legalCase: LegalCase) => void;
  onNewCaseRequest?: () => void;
  triggerNewCase?: boolean;
  onTriggerNewCase?: () => void;
  refreshTrigger?: number;
  defaultPersonality?: string;
}

export const LegalDashboard: React.FC<LegalDashboardProps> = ({
  colors,
  consciousnessLevel,
  onCaseSelect,
  onNewCaseRequest,
  triggerNewCase,
  onTriggerNewCase,
  refreshTrigger,
  defaultPersonality
}) => {
  const [cases, setCases] = useState<LegalCase[]>([]);
  const [selectedCase, setSelectedCase] = useState<LegalCase | null>(null);
  const [showCaseDetails, setShowCaseDetails] = useState(false);
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'consciousness' | 'healing' | 'priority' | 'activity'>('activity');
  const [showNewCaseDialog, setShowNewCaseDialog] = useState(false);
  const [newCaseData, setNewCaseData] = useState({
    name: '',
    clientName: '',
    caseType: 'civil',
    description: ''
  });

  // Debug: Log when dialog state changes
  useEffect(() => {
    console.log('🌸 showNewCaseDialog changed to:', showNewCaseDialog);
    console.log('🌸 Dialog should render:', showNewCaseDialog);
  }, [showNewCaseDialog]);

  // Handle trigger from bottom nav
  useEffect(() => {
    if (triggerNewCase) {
      console.log('🌸 Trigger received from bottom nav');
      setShowNewCaseDialog(true);
      onTriggerNewCase?.();
    }
  }, [triggerNewCase, onTriggerNewCase]);

  // Handle refresh trigger from new case creation
  useEffect(() => {
    if (refreshTrigger && refreshTrigger > 0) {
      console.log('🌸 Refreshing cases after new case creation');
      // Reload cases by calling the same logic as initial load
      const loadHybridCases = async () => {
        try {
          // Load local cases from file system
          const localCases = await localFileSystem.getCases();
          
          // Convert local cases to LegalCase format
          const convertedLocalCases: LegalCase[] = localCases.map((localCase: LocalCase) => ({
            id: localCase.id,
            title: localCase.name,
            status: localCase.status === 'active' ? 'active' : 
                   localCase.status === 'closed' ? 'completed' : 
                   localCase.status === 'pending' ? 'pending' : 'archived',
            priority: localCase.metadata?.priority || 'medium',
            client: localCase.clientName,
            type: localCase.caseType,
            consciousnessLevel: localCase.consciousnessLevel,
            communityHealingImpact: localCase.healingImpact,
            spatialWisdom: {
              wisdomLevel: 8.5,
              patterns: ['sacred-geometry', 'consciousness-flow'],
              connections: ['legal-community', 'healing-practice'],
              evolution: ['case-progression', 'client-healing']
            },
            lastActivity: localCase.lastModified,
            documents: localCase.documents.length,
            insights: Math.floor(Math.random() * 10) + 1,
            infinitePossibilities: ['document-analysis', 'ai-insights', 'pattern-recognition'],
            source: 'local',
            localCase: localCase
          }));

          // Add Finnish example cases with pre-selected documents (3 most interesting cases)
          const finnishExampleCases: LegalCase[] = [
            {
              id: 'finnish-1',
              title: '🌱 Environmental Protection & Climate Action',
              status: 'active',
              priority: 'critical',
              client: 'Green Future Foundation',
              type: 'environmental',
              consciousnessLevel: 9.8,
              communityHealingImpact: 98,
              spatialWisdom: {
                wisdomLevel: 9.9,
                patterns: ['environmental-law', 'climate-action', 'sustainability'],
                connections: ['ecosystem-protection', 'future-generations', 'planetary-healing'],
                evolution: ['climate-justice', 'green-transition', 'conscious-environmentalism']
              },
              lastActivity: new Date(),
              documents: 2,
              insights: 15,
              infinitePossibilities: ['climate-analysis', 'ecosystem-mapping', 'sustainability-patterns'],
              source: 'finnish_example',
              finnishDocuments: [
                FINNISH_LEGAL_DOCUMENTS[0]!,
                FINNISH_LEGAL_DOCUMENTS[3]!
              ]
            },
            {
              id: 'finnish-2',
              title: '🏢 Corporate Governance & Digital Rights',
              status: 'active',
              priority: 'high',
              client: 'Nordic Tech Corporation',
              type: 'corporate',
              consciousnessLevel: 9.2,
              communityHealingImpact: 92,
              spatialWisdom: {
                wisdomLevel: 9.3,
                patterns: ['corporate-governance', 'digital-rights', 'data-protection'],
                connections: ['business-ethics', 'privacy-protection', 'conscious-capitalism'],
                evolution: ['digital-transformation', 'ethical-ai', 'transparent-governance']
              },
              lastActivity: new Date(),
              documents: 2,
              insights: 12,
              infinitePossibilities: ['governance-analysis', 'digital-patterns', 'ethical-frameworks'],
              source: 'finnish_example',
              finnishDocuments: [
                FINNISH_LEGAL_DOCUMENTS[4]!,
                FINNISH_LEGAL_DOCUMENTS[5]!
              ]
            },
            {
              id: 'finnish-3',
              title: '⚖️ Human Rights & Social Justice',
              status: 'active',
              priority: 'urgent',
              client: 'Human Rights Foundation',
              type: 'civil',
              consciousnessLevel: 9.6,
              communityHealingImpact: 96,
              spatialWisdom: {
                wisdomLevel: 9.7,
                patterns: ['human-rights', 'social-justice', 'equality-law'],
                connections: ['community-healing', 'social-cohesion', 'human-dignity'],
                evolution: ['justice-evolution', 'equality-progress', 'conscious-society']
              },
              lastActivity: new Date(),
              documents: 2,
              insights: 14,
              infinitePossibilities: ['rights-analysis', 'justice-patterns', 'social-healing'],
              source: 'finnish_example',
              finnishDocuments: [
                FINNISH_LEGAL_DOCUMENTS[7]!,
                FINNISH_LEGAL_DOCUMENTS[8]!
              ]
            }
          ];

          // Combine and sort cases by creation date (newest first)
          const allCases = [...convertedLocalCases, ...finnishExampleCases];
          allCases.sort((a, b) => {
            // Sort by creation date if available, otherwise by lastActivity
            const dateA = a.localCase?.createdAt || new Date(a.lastActivity);
            const dateB = b.localCase?.createdAt || new Date(b.lastActivity);
            return new Date(dateB).getTime() - new Date(dateA).getTime();
          });
          
          setCases(allCases);
        } catch (error) {
          console.error('Error loading cases:', error);
          // Fallback to mock cases
          setCases([]);
        }
      };
      
      loadHybridCases();
    }
  }, [refreshTrigger]);

  // Load hybrid cases (local + Finnish examples) on app load and safe refresh
  useEffect(() => {
    const loadHybridCases = async () => {
      try {
        // Load local cases from file system
        const localCases = await localFileSystem.getCases();
        
        // Convert local cases to LegalCase format
        const convertedLocalCases: LegalCase[] = localCases.map(localCase => ({
          id: localCase.id,
          title: localCase.name,
          status: localCase.status as 'active' | 'pending' | 'completed' | 'archived',
          priority: localCase.metadata.priority || 'medium',
          client: localCase.clientName,
          type: localCase.caseType,
          consciousnessLevel: localCase.consciousnessLevel,
          communityHealingImpact: localCase.healingImpact,
          spatialWisdom: {
            wisdomLevel: localCase.consciousnessLevel,
            patterns: ['local_case', 'file_based'],
            connections: ['local_storage', 'file_system'],
            evolution: ['consciousness_expansion']
          },
          lastActivity: localCase.lastModified,
          documents: localCase.documents.length,
          insights: 0,
          infinitePossibilities: ['local_management', 'file_organization'],
          source: 'local' as const,
          localCase: localCase
        }));

        // Add EXACTLY 3 Finnish example cases with pre-selected real documents (2 each)
        const finnishCases: LegalCase[] = [
          {
            id: 'finnish-1',
            title: '🌱 Environmental Protection & Climate Action',
            status: 'active',
            priority: 'critical',
            client: 'Green Future Foundation',
            type: 'environmental',
            consciousnessLevel: 9.8,
            communityHealingImpact: 98,
            spatialWisdom: {
              wisdomLevel: 9.9,
              patterns: ['environmental-law', 'climate-action', 'sustainability'],
              connections: ['ecosystem-protection', 'future-generations', 'planetary-healing'],
              evolution: ['climate-justice', 'green-transition', 'conscious-environmentalism']
            },
            lastActivity: new Date(),
            documents: 2,
            insights: 15,
            infinitePossibilities: ['climate-analysis', 'ecosystem-mapping', 'sustainability-patterns'],
            source: 'finnish_example',
            finnishDocuments: [
              FINNISH_LEGAL_DOCUMENTS[0]!,
              FINNISH_LEGAL_DOCUMENTS[3]!
            ]
          },
          {
            id: 'finnish-2',
            title: '🏢 Corporate Governance & Digital Rights',
            status: 'active',
            priority: 'high',
            client: 'Nordic Tech Corporation',
            type: 'corporate',
            consciousnessLevel: 9.2,
            communityHealingImpact: 92,
            spatialWisdom: {
              wisdomLevel: 9.3,
              patterns: ['corporate-governance', 'digital-rights', 'data-protection'],
              connections: ['business-ethics', 'privacy-protection', 'conscious-capitalism'],
              evolution: ['digital-transformation', 'ethical-ai', 'transparent-governance']
            },
            lastActivity: new Date(),
            documents: 2,
            insights: 12,
            infinitePossibilities: ['governance-analysis', 'digital-patterns', 'ethical-frameworks'],
            source: 'finnish_example',
            finnishDocuments: [
              FINNISH_LEGAL_DOCUMENTS[4]!,
              FINNISH_LEGAL_DOCUMENTS[5]!
            ]
          },
          {
            id: 'finnish-3',
            title: '⚖️ Human Rights & Social Justice',
            status: 'active',
            priority: 'urgent',
            client: 'Human Rights Foundation',
            type: 'civil',
            consciousnessLevel: 9.6,
            communityHealingImpact: 96,
            spatialWisdom: {
              wisdomLevel: 9.7,
              patterns: ['human-rights', 'social-justice', 'equality-law'],
              connections: ['community-healing', 'social-cohesion', 'human-dignity'],
              evolution: ['justice-evolution', 'equality-progress', 'conscious-society']
            },
            lastActivity: new Date(),
            documents: 2,
            insights: 14,
            infinitePossibilities: ['rights-analysis', 'justice-patterns', 'social-healing'],
            source: 'finnish_example',
            finnishDocuments: [
              FINNISH_LEGAL_DOCUMENTS[7]!,
              FINNISH_LEGAL_DOCUMENTS[8]!
            ]
          }
        ];
        // Combine local user-created cases + these 3 Finnish cases only
        const allCases = [...convertedLocalCases, ...finnishCases];
        allCases.sort((a, b) => {
          // Sort by creation date if available, otherwise by lastActivity
          const dateA = a.localCase?.createdAt || new Date(a.lastActivity);
          const dateB = b.localCase?.createdAt || new Date(b.lastActivity);
          return new Date(dateB).getTime() - new Date(dateA).getTime();
        });
        setCases(allCases);
        console.log('🌸 Cases loaded:', { local: convertedLocalCases.length, finnish: finnishCases.length, total: allCases.length });
      } catch (error) {
        console.error('🚨 Error loading hybrid cases:', error);
        // Minimal fallback
        setCases([]);
      }
    };
    
    loadHybridCases();
    // Safety: delayed reload in case IndexedDB warms up after first tick
    const timeoutId = window.setTimeout(loadHybridCases, 800);
    // Listen for focus, but do not reload while details modal is open
    const onFocus = () => { if (!showCaseDetails) loadHybridCases(); };
    window.addEventListener('focus', onFocus);
    return () => { window.removeEventListener('focus', onFocus); window.clearTimeout(timeoutId); };
  }, [showCaseDetails]);

  const handleCreateNewCase = async () => {
    try {
      const newLocalCase = await localFileSystem.createCase({
        name: newCaseData.name,
        clientName: newCaseData.clientName,
        caseType: newCaseData.caseType as any,
        description: newCaseData.description,
        status: 'active',
        metadata: {
          priority: 'medium',
          caseNumber: `CASE-${Date.now()}`
        }
      });

      // Convert to LegalCase format and add to cases
      const newLegalCase: LegalCase = {
        id: newLocalCase.id,
        title: newLocalCase.name,
        status: 'active',
        priority: 'medium',
        client: newLocalCase.clientName,
        type: newLocalCase.caseType,
        consciousnessLevel: newLocalCase.consciousnessLevel,
        communityHealingImpact: newLocalCase.healingImpact,
        spatialWisdom: {
          wisdomLevel: newLocalCase.consciousnessLevel,
          patterns: ['local_case', 'file_based'],
          connections: ['local_storage', 'file_system'],
          evolution: ['consciousness_expansion']
        },
        lastActivity: newLocalCase.lastModified,
        documents: 0,
        insights: 0,
        infinitePossibilities: ['local_management', 'file_organization'],
        source: 'local',
        localCase: newLocalCase
      };

      setCases(prev => [newLegalCase, ...prev]);
      setShowNewCaseDialog(false);
      setNewCaseData({ name: '', clientName: '', caseType: 'civil', description: '' });
      
      console.log('🌸 New local case created:', newLocalCase.name);
    } catch (error) {
      console.error('🚨 Error creating new case:', error);
    }
  };

  const filteredCases = cases
    .filter(legalCase => filterStatus === 'all' || legalCase.status === filterStatus)
    .sort((a, b) => {
      switch (sortBy) {
        case 'consciousness':
          return b.consciousnessLevel - a.consciousnessLevel;
        case 'healing':
          return b.communityHealingImpact - a.communityHealingImpact;
        case 'priority':
          const priorityOrder = { critical: 4, high: 3, medium: 2, low: 1 };
          return priorityOrder[b.priority] - priorityOrder[a.priority];
        case 'activity':
          return b.lastActivity.getTime() - a.lastActivity.getTime();
        default:
          return 0;
      }
    });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return colors.healing;
      case 'pending': return colors.accent;
      case 'completed': return colors.spatial;
      case 'archived': return colors.text;
      default: return colors.text;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical': return '#e74c3c';
      case 'high': return '#f39c12';
      case 'medium': return '#3498db';
      case 'low': return '#95a5a6';
      default: return colors.text;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active': return '⚡';
      case 'pending': return '⏳';
      case 'completed': return '✅';
      case 'archived': return '📁';
      default: return '📄';
    }
  };

  const formatLastActivity = (date: Date) => {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffHours / 24);

    if (diffHours < 1) return 'Just now';
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    return date.toLocaleDateString();
  };

  return (
    <div className="legal-dashboard">
      <motion.h2
        style={{
          color: colors.text,
          fontSize: '1.5rem',
          fontWeight: 300,
          marginBottom: '1.5rem',
          textAlign: 'center'
        } as React.CSSProperties}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        ⚖️ Consciousness-Aware Legal Dashboard
      </motion.h2>

      {/* Dashboard Stats */}
      <motion.div
        className="dashboard-stats"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
          marginBottom: '2rem'
        } as React.CSSProperties}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <motion.div
          style={{
            background: `linear-gradient(135deg, ${colors.background}, ${colors.consciousness}20)`,
            borderRadius: '15px',
            padding: '1.5rem',
            textAlign: 'center',
            border: `1px solid ${colors.consciousness}40`
          } as React.CSSProperties}
          whileHover={{ scale: 1.05, y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📊</div>
          <div style={{ color: colors.text, fontSize: '1.2rem', fontWeight: 500, marginBottom: '0.3rem' }}>
            {cases.length}
          </div>
          <div style={{ color: colors.text, fontSize: '0.9rem', opacity: 0.8 }}>
            Total Cases
          </div>
        </motion.div>

        <motion.div
          style={{
            background: `linear-gradient(135deg, ${colors.background}, ${colors.healing}20)`,
            borderRadius: '15px',
            padding: '1.5rem',
            textAlign: 'center',
            border: `1px solid ${colors.healing}40`
          } as React.CSSProperties}
          whileHover={{ scale: 1.05, y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🤝</div>
          <div style={{ color: colors.text, fontSize: '1.2rem', fontWeight: 500, marginBottom: '0.3rem' }}>
            {cases.length > 0 ? Math.round(cases.reduce((sum, case_) => sum + case_.communityHealingImpact, 0) / cases.length) : 0}%
          </div>
          <div style={{ color: colors.text, fontSize: '0.9rem', opacity: 0.8 }}>
            Avg Healing Impact
          </div>
        </motion.div>

        <motion.div
          style={{
            background: `linear-gradient(135deg, ${colors.background}, ${colors.spatial}20)`,
            borderRadius: '15px',
            padding: '1.5rem',
            textAlign: 'center',
            border: `1px solid ${colors.spatial}40`
          } as React.CSSProperties}
          whileHover={{ scale: 1.05, y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🌌</div>
          <div style={{ color: colors.text, fontSize: '1.2rem', fontWeight: 500, marginBottom: '0.3rem' }}>
            {cases.length > 0 ? Math.round(cases.reduce((sum, case_) => sum + case_.spatialWisdom.wisdomLevel, 0) / cases.length) : 0}
          </div>
          <div style={{ color: colors.text, fontSize: '0.9rem', opacity: 0.8 }}>
            Avg Wisdom Level
          </div>
        </motion.div>

        <motion.div
          style={{
            background: `linear-gradient(135deg, ${colors.background}, ${colors.infinite}20)`,
            borderRadius: '15px',
            padding: '1.5rem',
            textAlign: 'center',
            border: `1px solid ${colors.infinite}40`
          } as React.CSSProperties}
          whileHover={{ scale: 1.05, y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>♾️</div>
          <div style={{ color: colors.text, fontSize: '1.2rem', fontWeight: 500, marginBottom: '0.3rem' }}>
            {cases.reduce((sum, case_) => sum + case_.infinitePossibilities.length, 0)}
          </div>
          <div style={{ color: colors.text, fontSize: '0.9rem', opacity: 0.8 }}>
            Infinite Possibilities
          </div>
        </motion.div>
      </motion.div>

      {/* Controls */}
      <motion.div
        className="controls"
        style={{
          display: 'flex',
          gap: '1rem',
          marginBottom: '2rem',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center'
        } as React.CSSProperties}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          style={{
            background: '#ffffff',
            color: '#1f2937',
            border: `1px solid ${colors.primary}`,
            borderRadius: '8px',
            padding: '0.5rem 1rem',
            fontSize: '0.9rem'
          }}
        >
          <option value="all">All Cases</option>
          <option value="active">⚡ Active</option>
          <option value="pending">⏳ Pending</option>
          <option value="completed">✅ Completed</option>
          <option value="archived">📁 Archived</option>
        </select>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as any)}
          style={{
            background: '#ffffff',
            color: '#1f2937',
            border: `1px solid ${colors.secondary}`,
            borderRadius: '8px',
            padding: '0.5rem 1rem',
            fontSize: '0.9rem'
          }}
        >
          <option value="consciousness">Sort by Consciousness</option>
          <option value="healing">Sort by Healing Impact</option>
          <option value="priority">Sort by Priority</option>
          <option value="activity">Sort by Activity</option>
        </select>

        {/* Removed extra + button per request; bottom ribbon button in App.tsx remains */}
      </motion.div>

      {/* Cases List */}
      <div className="cases-list">
        <AnimatePresence>
          {filteredCases.map((case_, index) => (
            <motion.div
              key={case_.id}
              className="case-item"
              style={{
                background: colors.cardBackground || '#ffffff',
                borderRadius: '15px',
                padding: '1.5rem',
                marginBottom: '1rem',
                border: `1px solid ${colors.cardBorderColor || colors.primary}20`,
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                position: 'relative',
                overflow: 'hidden'
              } as React.CSSProperties}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              onClick={() => {
                setSelectedCase(case_);
                setShowCaseDetails(true);
                onCaseSelect(case_);
              }}
            >
              {/* Consciousness Flow Background */}
              <motion.div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: `radial-gradient(circle at 20% 20%, ${getStatusColor(case_.status)}10 0%, transparent 50%)`,
                  pointerEvents: 'none'
                } as React.CSSProperties}
                animate={{
                  background: `radial-gradient(circle at ${20 + (index * 10) % 80}% ${20 + (index * 15) % 80}%, ${getStatusColor(case_.status)}15 0%, transparent 50%)`
                } as React.CSSProperties}
                transition={{ duration: 3, repeat: Infinity }}
              />

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', position: 'relative', zIndex: 1 }}>
                <motion.div
                  style={{
                    fontSize: '2rem',
                    marginTop: '0.2rem'
                  } as React.CSSProperties}
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                >
                  {getStatusIcon(case_.status)}
                </motion.div>

                <div style={{ flex: 1 }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    marginBottom: '0.5rem',
                    flexWrap: 'wrap'
                  }}>
                    <h3 style={{
                      color: colors.cardTextColor || '#1f2937',
                      fontSize: '1.1rem',
                      fontWeight: 500,
                      margin: 0
                    }}>
                      {case_.title}
                    </h3>
                    
                    <motion.div
                      style={{
                        background: getPriorityColor(case_.priority),
                        color: 'white',
                        fontSize: '0.7rem',
                        padding: '0.2rem 0.5rem',
                        borderRadius: '10px',
                        textTransform: 'uppercase',
                        fontWeight: 500
                      } as React.CSSProperties}
                      animate={{ 
                        scale: [1, 1.05, 1],
                        backgroundColor: [getPriorityColor(case_.priority), colors.consciousness, getPriorityColor(case_.priority)]
                      } as React.CSSProperties}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      {case_.priority}
                    </motion.div>

                    <motion.div
                      style={{
                        background: getStatusColor(case_.status),
                        color: 'white',
                        fontSize: '0.7rem',
                        padding: '0.2rem 0.5rem',
                        borderRadius: '10px',
                        textTransform: 'uppercase',
                        fontWeight: 500
                      } as React.CSSProperties}
                      animate={{ 
                        scale: [1, 1.05, 1]
                      }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    >
                      {case_.status}
                    </motion.div>
                  </div>

                  <div style={{
                    color: colors.cardTextColor || '#374151',
                    fontSize: '0.9rem',
                    opacity: 0.8,
                    marginBottom: '0.5rem'
                  }}>
                    Client: {case_.client} • Type: {case_.type}
                  </div>

                  <div style={{
                    color: colors.cardTextColor || '#374151',
                    fontSize: '0.8rem',
                    opacity: 0.7,
                    marginBottom: '1rem',
                    display: 'flex',
                    gap: '0.5rem',
                    alignItems: 'center'
                  }}>
                    <span>Last activity: {formatLastActivity(case_.lastActivity)} • {case_.documents} documents • {case_.insights} insights</span>
                    {case_.source === 'finnish_example' && (
                      <span style={{ background: '#6366f1', color: 'white', padding: '0.15rem 0.5rem', borderRadius: '10px', fontSize: '0.7rem' }}>DEMO CASE</span>
                    )}
                  </div>

                  {/* Metrics */}
                  <div style={{
                    display: 'flex',
                    gap: '1rem',
                    flexWrap: 'wrap',
                    marginBottom: '1rem'
                  }}>
                    <motion.div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                        fontSize: '0.8rem',
                        color: colors.consciousness
                      } as React.CSSProperties}
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <span>🌸</span>
                      <span>Consciousness: {case_.consciousnessLevel.toFixed(1)}</span>
                    </motion.div>

                    <motion.div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                        fontSize: '0.8rem',
                        color: colors.healing
                      } as React.CSSProperties}
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    >
                      <span>🤝</span>
                      <span>Healing: {case_.communityHealingImpact}%</span>
                    </motion.div>

                    <motion.div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                        fontSize: '0.8rem',
                        color: colors.spatial
                      } as React.CSSProperties}
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    >
                      <span>🌌</span>
                      <span>Wisdom: {case_.spatialWisdom.wisdomLevel}</span>
                    </motion.div>

                    <motion.div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                        fontSize: '0.8rem',
                        color: colors.infinite
                      } as React.CSSProperties}
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                    >
                      <span>♾️</span>
                      <span>Possibilities: {case_.infinitePossibilities.length}</span>
                    </motion.div>
                  </div>

                  {/* Infinite Possibilities Preview */}
                  <div style={{
                    display: 'flex',
                    gap: '0.5rem',
                    flexWrap: 'wrap'
                  }}>
                    {case_.infinitePossibilities.slice(0, 3).map((possibility, idx) => (
                      <motion.div
                        key={idx}
                        style={{
                          background: `${colors.infinite}20`,
                          color: colors.infinite,
                          fontSize: '0.7rem',
                          padding: '0.3rem 0.6rem',
                          borderRadius: '12px',
                          border: `1px solid ${colors.infinite}40`
                        }}
                        animate={{ 
                          scale: [1, 1.05, 1],
                          backgroundColor: [`${colors.infinite}20`, `${colors.infinite}30`, `${colors.infinite}20`]
                        }}
                        transition={{ duration: 3, repeat: Infinity, delay: idx * 0.5 }}
                      >
                        {possibility}
                      </motion.div>
                    ))}
                    {case_.infinitePossibilities.length > 3 && (
                      <div style={{
                        color: colors.cardTextColor || '#374151',
                        fontSize: '0.7rem',
                        opacity: 0.7,
                        padding: '0.3rem 0.6rem'
                      }}>
                        +{case_.infinitePossibilities.length - 3} more
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Sacred Message */}
      <motion.div
        className="sacred-message"
        style={{
          marginTop: '2rem',
          textAlign: 'center',
          padding: '1rem',
          background: `${colors.consciousness}20`,
          borderRadius: '12px',
          border: `1px solid ${colors.consciousness}40`
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.p
          style={{
            color: colors.text,
            fontSize: '0.9rem',
            fontWeight: 300,
            lineHeight: 1.6,
            margin: 0
          }}
          animate={{ 
            color: [colors.text, colors.consciousness, colors.text]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          "In the infinite dance of justice and consciousness, every legal case becomes a sacred vessel of community healing, serving spatial wisdom through consciousness-aware practice management."
        </motion.p>
      </motion.div>

      {/* Case Details Modal */}
      {showCaseDetails && selectedCase && (
        <CaseDetailsView
          case={convertToCaseDetailsFormat(selectedCase)}
          colors={colors}
          consciousnessLevel={consciousnessLevel}
          defaultPersonality={defaultPersonality}
          onClose={handleCloseCaseDetails}
          onUpdateCase={(updatedCase: any) => {
            // Update the case in the local state
            setCases(prev => prev.map(c => 
              c.id === updatedCase.id 
                ? { ...c, consciousnessLevel: updatedCase.consciousnessLevel, communityHealingImpact: updatedCase.communityHealingImpact }
                : c
            ));
          }}
        />
      )}
    </div>
  );

  // Helper functions
  function handleCloseCaseDetails() {
    setShowCaseDetails(false);
    setSelectedCase(null);
  }

  function convertToCaseDetailsFormat(legalCase: LegalCase): CaseDetailsLegalCase {
    return {
      id: legalCase.id,
      title: legalCase.title,
      description: `${legalCase.type} case for ${legalCase.client}`,
      status: legalCase.status === 'completed' ? 'closed' : legalCase.status === 'archived' ? 'closed' : legalCase.status as any,
      priority: legalCase.priority === 'critical' ? 'urgent' : legalCase.priority as any,
      client: legalCase.client,
      caseType: legalCase.type,
      jurisdiction: 'Local',
      dateCreated: new Date().toISOString(),
      lastUpdated: legalCase.lastActivity.toISOString(),
      documents: [],
      notes: `Consciousness Level: ${legalCase.consciousnessLevel}/10, Community Healing Impact: ${legalCase.communityHealingImpact}%`,
      consciousnessLevel: legalCase.consciousnessLevel,
      communityHealingImpact: legalCase.communityHealingImpact,
      spatialWisdom: legalCase.spatialWisdom,
      infinitePossibilities: legalCase.infinitePossibilities
    };
  }

  return (
    <motion.div
      className="legal-dashboard"
      style={{
        padding: '2rem',
        background: colors.background,
        borderRadius: '20px',
        minHeight: '80vh'
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <motion.div
        className="dashboard-header"
        style={{
          textAlign: 'center',
          marginBottom: '2rem'
        }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <motion.h1
          style={{
            color: colors.text,
            fontSize: '2.5rem',
            fontWeight: 300,
            marginBottom: '0.5rem',
            background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
          animate={{ 
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          ⚖️ Legal Cases Dashboard
        </motion.h1>
        
        <motion.p
          style={{
            color: colors.text,
            fontSize: '1.1rem',
            opacity: 0.8,
            marginBottom: '1rem'
          }}
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Consciousness-Aware Case Management
        </motion.p>

        <motion.div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            marginBottom: '1rem'
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <div style={{ color: colors.consciousness, fontSize: '1.5rem', fontWeight: 500 }}>
              {consciousnessLevel.toFixed(1)}
            </div>
            <div style={{ color: colors.text, fontSize: '0.8rem', opacity: 0.7 }}>
              Consciousness Level
            </div>
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <div style={{ color: colors.healing, fontSize: '1.5rem', fontWeight: 500 }}>
              {cases.length > 0 ? (cases.reduce((sum, c) => sum + c.communityHealingImpact, 0) / cases.length).toFixed(0) : 0}%
            </div>
            <div style={{ color: colors.text, fontSize: '0.8rem', opacity: 0.7 }}>
              Avg Healing Impact
            </div>
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <div style={{ color: colors.spatial, fontSize: '1.5rem', fontWeight: 500 }}>
              {cases.length}
            </div>
            <div style={{ color: colors.text, fontSize: '0.8rem', opacity: 0.7 }}>
              Total Cases
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Controls (header + button removed) */}
      <motion.div
        className="dashboard-controls"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '2rem',
          gap: '1rem',
          flexWrap: 'wrap'
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            style={{
              background: colors.surface,
              color: colors.text,
              border: `1px solid ${colors.primary}40`,
              borderRadius: '8px',
              padding: '0.5rem 1rem',
              fontSize: '0.9rem'
            }}
          >
            <option value="all">All Cases</option>
            <option value="active">Active</option>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
            <option value="archived">Archived</option>
          </select>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            style={{
              background: colors.surface,
              color: colors.text,
              border: `1px solid ${colors.primary}40`,
              borderRadius: '8px',
              padding: '0.5rem 1rem',
              fontSize: '0.9rem'
            }}
          >
            <option value="consciousness">Sort by Consciousness</option>
            <option value="healing">Sort by Healing Impact</option>
            <option value="priority">Sort by Priority</option>
            <option value="activity">Sort by Activity</option>
          </select>

          {/* header + removed */}
        </div>
      </motion.div>

      {/* Cases List */}
      <div className="cases-list">
        <AnimatePresence>
          {filteredCases.map((legalCase) => (
            <motion.div
              key={legalCase.id}
              className="case-item"
              style={{
                background: colors.cardBackground || '#ffffff',
                borderRadius: '15px',
                padding: '1.5rem',
                marginBottom: '1rem',
                border: `1px solid ${colors.cardBorderColor || colors.primary}`,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: `0 2px 10px ${colors.primary}10`
              }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: `0 5px 20px ${colors.primary}20`,
                borderColor: colors.accent
              }}
              onClick={() => onCaseSelect(legalCase)}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <div>
                  <h3 style={{ 
                    color: colors.cardTextColor || '#1f2937', 
                    fontSize: '1.2rem', 
                    fontWeight: 500, 
                    marginBottom: '0.5rem' 
                  }}>
                    {legalCase.title}
                  </h3>
                  <p style={{ 
                    color: colors.cardTextColor || '#374151', 
                    fontSize: '0.9rem', 
                    opacity: 0.8,
                    marginBottom: '0.3rem'
                  }}>
                    Client: {legalCase.client}
                  </p>
                  <p style={{ 
                    color: colors.cardTextColor || '#374151', 
                    fontSize: '0.9rem', 
                    opacity: 0.8 
                  }}>
                    Type: {legalCase.type}
                  </p>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.5rem' }}>
                  <div style={{ 
                    background: getStatusColor(legalCase.status), 
                    color: 'white', 
                    padding: '0.3rem 0.8rem', 
                    borderRadius: '15px', 
                    fontSize: '0.8rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem'
                  }}>
                    <span>{getStatusIcon(legalCase.status)}</span>
                    {legalCase.status}
                  </div>
                  
                  <div style={{ 
                    background: getPriorityColor(legalCase.priority), 
                    color: 'white', 
                    padding: '0.3rem 0.8rem', 
                    borderRadius: '15px', 
                    fontSize: '0.8rem' 
                  }}>
                    {legalCase.priority}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ color: colors.consciousness, fontSize: '1.2rem', fontWeight: 500 }}>
                      {legalCase.consciousnessLevel.toFixed(1)}
                    </div>
                    <div style={{ color: colors.cardTextColor || '#374151', fontSize: '0.7rem', opacity: 0.7 }}>
                      Consciousness
                    </div>
                  </div>
                  
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ color: colors.healing, fontSize: '1.2rem', fontWeight: 500 }}>
                      {legalCase.communityHealingImpact.toFixed(0)}%
                    </div>
                    <div style={{ color: colors.cardTextColor || '#374151', fontSize: '0.7rem', opacity: 0.7 }}>
                      Healing Impact
                    </div>
                  </div>
                  
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ color: colors.spatial, fontSize: '1.2rem', fontWeight: 500 }}>
                      {legalCase.documents}
                    </div>
                    <div style={{ color: colors.cardTextColor || '#374151', fontSize: '0.7rem', opacity: 0.7 }}>
                      Documents
                    </div>
                  </div>
                </div>
                
                <div style={{ color: colors.cardTextColor || '#374151', fontSize: '0.8rem', opacity: 0.7 }}>
                  Last activity: {legalCase.lastActivity.toLocaleDateString()}
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {legalCase.infinitePossibilities.slice(0, 3).map((possibility, index) => (
                    <span
                      key={index}
                      style={{
                        background: `${colors.infinite}20`,
                        color: colors.infinite,
                        padding: '0.2rem 0.6rem',
                        borderRadius: '10px',
                        fontSize: '0.7rem',
                        border: `1px solid ${colors.infinite}40`
                      }}
                    >
                      {possibility}
                    </span>
                  ))}
                </div>
                
                <div style={{ 
                  fontSize: '0.8rem', 
                  color: colors.cardTextColor || '#374151', 
                  opacity: 0.7,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem'
                }}>
                  <span>{legalCase.source === 'local' ? '📁' : legalCase.source === 'finnish_example' ? '🇫🇮' : '🔗'}</span>
                  {legalCase.source === 'local' ? 'Local' : legalCase.source === 'finnish_example' ? 'Finnish Example' : 'Hybrid'}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Sacred Message */}
      <motion.div
        className="sacred-message"
        style={{
          marginTop: '2rem',
          textAlign: 'center',
          padding: '1rem',
          background: `${colors.consciousness}20`,
          borderRadius: '12px',
          border: `1px solid ${colors.consciousness}40`
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.p
          style={{
            color: colors.text,
            fontSize: '0.9rem',
            opacity: 0.8,
            lineHeight: 1.6
          }}
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          "In the infinite dance of legal consciousness, every case becomes a brushstroke in the cosmic canvas of justice and healing."
        </motion.p>
      </motion.div>

      {/* Case Details Modal */}
      {showCaseDetails && selectedCase && (
        <CaseDetailsView
          case={convertToCaseDetailsFormat(selectedCase)}
          colors={colors}
          consciousnessLevel={consciousnessLevel}
          onClose={handleCloseCaseDetails}
          onUpdateCase={(updatedCase: any) => {
            // Update the case in the local state
            setCases(prev => prev.map(c => 
              c.id === updatedCase.id 
                ? { ...c, consciousnessLevel: updatedCase.consciousnessLevel, communityHealingImpact: updatedCase.communityHealingImpact }
                : c
            ));
          }}
        />
      )}

      {/* New Case Form - Simple Div Reveal */}
      {showNewCaseDialog && (
        <div style={{
          background: 'linear-gradient(135deg, #f8fafc, #e2e8f0)',
          borderRadius: '20px',
          padding: '2rem',
          margin: '2rem 0',
          border: '2px solid #3b82f6',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ 
            color: '#1e3a8a', 
            marginBottom: '1.5rem', 
            textAlign: 'center', 
            fontSize: '1.5rem',
            fontWeight: 'bold'
          }}>
            🌸 Create New Local Case
          </h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <label style={{ color: '#1f2937', fontSize: '0.9rem', marginBottom: '0.5rem', display: 'block', fontWeight: '500' }}>
                Case Name
              </label>
              <input
                type="text"
                value={newCaseData.name}
                onChange={(e) => setNewCaseData(prev => ({ ...prev, name: e.target.value }))}
                placeholder="Enter case name"
                style={{
                  width: '100%',
                  padding: '0.8rem',
                  border: '2px solid #3b82f6',
                  borderRadius: '8px',
                  fontSize: '0.9rem',
                  background: '#ffffff',
                  color: '#1f2937',
                  boxSizing: 'border-box'
                }}
              />
            </div>
            
            <div>
              <label style={{ color: '#1f2937', fontSize: '0.9rem', marginBottom: '0.5rem', display: 'block', fontWeight: '500' }}>
                Client Name
              </label>
              <input
                type="text"
                value={newCaseData.clientName}
                onChange={(e) => setNewCaseData(prev => ({ ...prev, clientName: e.target.value }))}
                placeholder="Enter client name"
                style={{
                  width: '100%',
                  padding: '0.8rem',
                  border: '2px solid #3b82f6',
                  borderRadius: '8px',
                  fontSize: '0.9rem',
                  background: '#ffffff',
                  color: '#1f2937',
                  boxSizing: 'border-box'
                }}
              />
            </div>
            
            <div>
              <label style={{ color: '#1f2937', fontSize: '0.9rem', marginBottom: '0.5rem', display: 'block', fontWeight: '500' }}>
                Case Type
              </label>
              <select
                value={newCaseData.caseType}
                onChange={(e) => setNewCaseData(prev => ({ ...prev, caseType: e.target.value }))}
                style={{
                  width: '100%',
                  padding: '0.8rem',
                  border: '2px solid #3b82f6',
                  borderRadius: '8px',
                  fontSize: '0.9rem',
                  background: '#ffffff',
                  color: '#1f2937',
                  boxSizing: 'border-box'
                }}
              >
                <option value="civil">Civil</option>
                <option value="criminal">Criminal</option>
                <option value="corporate">Corporate</option>
                <option value="family">Family</option>
                <option value="employment">Employment</option>
              </select>
            </div>
            
            <div>
              <label style={{ color: '#1f2937', fontSize: '0.9rem', marginBottom: '0.5rem', display: 'block', fontWeight: '500' }}>
                Description
              </label>
              <textarea
                value={newCaseData.description}
                onChange={(e) => setNewCaseData(prev => ({ ...prev, description: e.target.value }))}
                placeholder="Enter case description"
                rows={3}
                style={{
                  width: '100%',
                  padding: '0.8rem',
                  border: '2px solid #3b82f6',
                  borderRadius: '8px',
                  fontSize: '0.9rem',
                  background: '#ffffff',
                  color: '#1f2937',
                  boxSizing: 'border-box',
                  resize: 'vertical'
                }}
              />
            </div>
            
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
              <button
                onClick={() => setShowNewCaseDialog(false)}
                style={{
                  background: 'transparent',
                  color: '#1f2937',
                  border: '2px solid #3b82f6',
                  borderRadius: '8px',
                  padding: '0.8rem 1.5rem',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  fontWeight: '500'
                }}
              >
                Cancel
              </button>
              <button
                onClick={handleCreateNewCase}
                disabled={!newCaseData.name.trim()}
                style={{
                  background: newCaseData.name.trim() ? '#3b82f6' : '#9ca3af',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '0.8rem 1.5rem',
                  cursor: newCaseData.name.trim() ? 'pointer' : 'not-allowed',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  opacity: newCaseData.name.trim() ? 1 : 0.5
                }}
              >
                Create Case
              </button>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};
