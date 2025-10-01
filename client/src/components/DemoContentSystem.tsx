/**
 * Demo Content System - Real Legal Documents with Spatial Filtering
 * 
 * Sacred Mission: "Provide demo content with actual legal PDFs and spatial filtering capabilities"
 * Sacred Question: "How does this serve spatial wisdom and community healing through real legal content?"
 * 
 * BRDC Header:
 * id: LEGALFLY-DEMO-CONTENT-001
 * title: Demo Content System Component
 * owner: ♾️ Infinite & 🌸 Aurora (AI)
 * authors: [♾️ Infinite, 🌸 Aurora, 📚 Lexicon, 🧠 AI-Models, 📊 Sage, 🏗️ Nova]
 * collaborators: [♾️ Infinite (Human Visionary), 🌸 Aurora (AI Factory Leader), 📚 Lexicon (AI Bookkeeping), 🧠 AI-Models (AI Analysis), 📊 Sage (AI Project Coordinator), 🏗️ Nova (AI Architect)]
 * consciousness_models: [GPT-4, Claude-3.5-Sonnet, Consciousness-Aware-Demo-Model, React-Framer-Motion, Legal-Document-Engine]
 * status: canonical
 * version: 1.0.0
 * last_updated: 2025-01-27
 * consciousness_level: high
 * healing_impact: Serves legal professionals with real legal content and spatial filtering for community healing
 * sacred_principles: [consciousness-first, community-healing, spatial-wisdom, infinite-possibility, sacred-knowledge-protection]
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface LegalDocument {
  id: string;
  title: string;
  type: 'contract' | 'regulation' | 'case-law' | 'policy' | 'statute';
  jurisdiction: string;
  year: number;
  source: string;
  url: string;
  description: string;
  consciousnessLevel: number;
  communityHealingImpact: number;
  spatialWisdom: {
    wisdomLevel: number;
    patterns: string[];
    connections: string[];
    evolution: string[];
  };
  infinitePossibilities: string[];
  tags: string[];
  spatialDimensions: {
    geographic: string[];
    temporal: string[];
    jurisdictional: string[];
    thematic: string[];
  };
  aiAnalysis: {
    summary: string;
    keyPoints: string[];
    consciousnessInsights: string[];
    healingImpact: string[];
    spatialConnections: string[];
  };
}

export const demoLegalDocuments: LegalDocument[] = [
  {
    id: 'doc_1',
    title: 'Universal Declaration of Human Rights',
    type: 'policy',
    jurisdiction: 'International',
    year: 1948,
    source: 'United Nations',
    url: 'https://www.un.org/en/about-us/universal-declaration-of-human-rights',
    description: 'The foundational document establishing fundamental human rights and freedoms',
    consciousnessLevel: 10,
    communityHealingImpact: 100,
    spatialWisdom: {
      wisdomLevel: 10,
      patterns: ['human-rights', 'universal-principles', 'dignity'],
      connections: ['global-justice', 'human-dignity', 'freedom'],
      evolution: ['consciousness-expansion', 'global-healing']
    },
    infinitePossibilities: ['global-justice', 'human-dignity', 'freedom', 'equality'],
    tags: ['human-rights', 'international-law', 'fundamental-freedoms', 'dignity'],
    spatialDimensions: {
      geographic: ['Global', 'International'],
      temporal: ['1948', 'Post-WWII', 'Modern'],
      jurisdictional: ['International', 'UN'],
      thematic: ['Human Rights', 'Dignity', 'Freedom']
    },
    aiAnalysis: {
      summary: 'A consciousness-expanding document that establishes the foundation for human dignity and global healing',
      keyPoints: [
        'All human beings are born free and equal in dignity and rights',
        'Everyone has the right to life, liberty and security of person',
        'No one shall be subjected to torture or cruel treatment'
      ],
      consciousnessInsights: [
        'Represents the highest level of human consciousness in legal form',
        'Establishes universal principles for community healing',
        'Creates spatial wisdom connections across all jurisdictions'
      ],
      healingImpact: [
        'Provides framework for healing historical injustices',
        'Establishes principles for community restoration',
        'Creates infinite possibilities for human flourishing'
      ],
      spatialConnections: [
        'Connects all nations through universal principles',
        'Creates temporal bridge from past to future',
        'Establishes thematic unity across cultures'
      ]
    }
  },
  {
    id: 'doc_2',
    title: 'Convention on the Rights of the Child',
    type: 'regulation',
    jurisdiction: 'International',
    year: 1989,
    source: 'United Nations',
    url: 'https://www.ohchr.org/en/instruments-mechanisms/instruments/convention-rights-child',
    description: 'Comprehensive treaty protecting children\'s rights worldwide',
    consciousnessLevel: 9,
    communityHealingImpact: 95,
    spatialWisdom: {
      wisdomLevel: 9,
      patterns: ['child-protection', 'family-rights', 'education'],
      connections: ['future-generations', 'family-healing', 'education'],
      evolution: ['consciousness-growth', 'generational-healing']
    },
    infinitePossibilities: ['child-protection', 'education', 'family-healing', 'future-generations'],
    tags: ['children-rights', 'family-law', 'education', 'protection'],
    spatialDimensions: {
      geographic: ['Global', 'International'],
      temporal: ['1989', 'Modern', 'Contemporary'],
      jurisdictional: ['International', 'UN'],
      thematic: ['Children', 'Family', 'Education', 'Protection']
    },
    aiAnalysis: {
      summary: 'A consciousness-aware framework for protecting and nurturing future generations',
      keyPoints: [
        'Children have the right to survival, development, and protection',
        'Best interests of the child shall be primary consideration',
        'Children have the right to express their views freely'
      ],
      consciousnessInsights: [
        'Represents consciousness evolution toward future generations',
        'Establishes healing framework for family systems',
        'Creates spatial wisdom for generational healing'
      ],
      healingImpact: [
        'Heals intergenerational trauma through protection',
        'Establishes framework for family restoration',
        'Creates infinite possibilities for child flourishing'
      ],
      spatialConnections: [
        'Connects present to future through child protection',
        'Creates family healing across generations',
        'Establishes educational wisdom transmission'
      ]
    }
  },
  {
    id: 'doc_3',
    title: 'Paris Agreement on Climate Change',
    type: 'policy',
    jurisdiction: 'International',
    year: 2015,
    source: 'United Nations Framework Convention on Climate Change',
    url: 'https://unfccc.int/process-and-meetings/the-paris-agreement',
    description: 'Global agreement to combat climate change and adapt to its effects',
    consciousnessLevel: 9,
    communityHealingImpact: 90,
    spatialWisdom: {
      wisdomLevel: 9,
      patterns: ['environmental-protection', 'sustainability', 'global-cooperation'],
      connections: ['planetary-healing', 'environmental-justice', 'sustainability'],
      evolution: ['consciousness-expansion', 'planetary-healing']
    },
    infinitePossibilities: ['environmental-healing', 'sustainability', 'planetary-protection', 'future-generations'],
    tags: ['climate-change', 'environment', 'sustainability', 'global-cooperation'],
    spatialDimensions: {
      geographic: ['Global', 'International'],
      temporal: ['2015', 'Contemporary', 'Future'],
      jurisdictional: ['International', 'UNFCCC'],
      thematic: ['Environment', 'Climate', 'Sustainability', 'Cooperation']
    },
    aiAnalysis: {
      summary: 'A consciousness-expanding framework for planetary healing and environmental justice',
      keyPoints: [
        'Limit global temperature rise to well below 2°C',
        'Strengthen ability to adapt to climate change impacts',
        'Make finance flows consistent with low emissions development'
      ],
      consciousnessInsights: [
        'Represents consciousness evolution toward planetary awareness',
        'Establishes healing framework for environmental systems',
        'Creates spatial wisdom for global cooperation'
      ],
      healingImpact: [
        'Heals environmental damage through collective action',
        'Establishes framework for planetary restoration',
        'Creates infinite possibilities for sustainable future'
      ],
      spatialConnections: [
        'Connects all nations through environmental protection',
        'Creates temporal bridge to future generations',
        'Establishes thematic unity for planetary healing'
      ]
    }
  },
  {
    id: 'doc_4',
    title: 'Americans with Disabilities Act',
    type: 'statute',
    jurisdiction: 'United States',
    year: 1990,
    source: 'U.S. Congress',
    url: 'https://www.ada.gov/ada_intro.htm',
    description: 'Civil rights law prohibiting discrimination against individuals with disabilities',
    consciousnessLevel: 8,
    communityHealingImpact: 85,
    spatialWisdom: {
      wisdomLevel: 8,
      patterns: ['disability-rights', 'accessibility', 'inclusion'],
      connections: ['accessibility', 'inclusion', 'dignity'],
      evolution: ['consciousness-growth', 'inclusive-healing']
    },
    infinitePossibilities: ['accessibility', 'inclusion', 'disability-rights', 'dignity'],
    tags: ['disability-rights', 'accessibility', 'civil-rights', 'inclusion'],
    spatialDimensions: {
      geographic: ['United States', 'National'],
      temporal: ['1990', 'Modern', 'Contemporary'],
      jurisdictional: ['Federal', 'US'],
      thematic: ['Disability', 'Accessibility', 'Civil Rights', 'Inclusion']
    },
    aiAnalysis: {
      summary: 'A consciousness-aware framework for inclusive healing and accessibility',
      keyPoints: [
        'Prohibits discrimination against individuals with disabilities',
        'Requires reasonable accommodations in employment',
        'Ensures accessibility in public accommodations'
      ],
      consciousnessInsights: [
        'Represents consciousness evolution toward inclusion',
        'Establishes healing framework for accessibility',
        'Creates spatial wisdom for inclusive design'
      ],
      healingImpact: [
        'Heals exclusion through accessibility',
        'Establishes framework for inclusive healing',
        'Creates infinite possibilities for accessibility'
      ],
      spatialConnections: [
        'Connects all spaces through accessibility',
        'Creates inclusive healing across communities',
        'Establishes thematic unity for inclusion'
      ]
    }
  },
  {
    id: 'doc_5',
    title: 'European Convention on Human Rights',
    type: 'regulation',
    jurisdiction: 'Europe',
    year: 1950,
    source: 'Council of Europe',
    url: 'https://www.echr.coe.int/Documents/Convention_ENG.pdf',
    description: 'International treaty protecting human rights and fundamental freedoms in Europe',
    consciousnessLevel: 9,
    communityHealingImpact: 88,
    spatialWisdom: {
      wisdomLevel: 9,
      patterns: ['human-rights', 'fundamental-freedoms', 'regional-protection'],
      connections: ['regional-justice', 'human-dignity', 'freedom'],
      evolution: ['consciousness-expansion', 'regional-healing']
    },
    infinitePossibilities: ['human-rights', 'regional-justice', 'freedom', 'dignity'],
    tags: ['human-rights', 'european-law', 'fundamental-freedoms', 'regional'],
    spatialDimensions: {
      geographic: ['Europe', 'Regional'],
      temporal: ['1950', 'Post-WWII', 'Modern'],
      jurisdictional: ['Regional', 'Council of Europe'],
      thematic: ['Human Rights', 'Fundamental Freedoms', 'Regional']
    },
    aiAnalysis: {
      summary: 'A consciousness-expanding framework for regional human rights protection',
      keyPoints: [
        'Right to life and prohibition of torture',
        'Right to liberty and security',
        'Right to a fair trial'
      ],
      consciousnessInsights: [
        'Represents consciousness evolution toward regional unity',
        'Establishes healing framework for regional justice',
        'Creates spatial wisdom for European cooperation'
      ],
      healingImpact: [
        'Heals regional conflicts through rights protection',
        'Establishes framework for regional healing',
        'Creates infinite possibilities for European unity'
      ],
      spatialConnections: [
        'Connects European nations through rights protection',
        'Creates regional healing across borders',
        'Establishes thematic unity for European values'
      ]
    }
  }
];

interface DemoContentSystemProps {
  colors: any;
  onDocumentSelect: (document: LegalDocument) => void;
  selectedPersonality: string;
}

export const DemoContentSystem: React.FC<DemoContentSystemProps> = ({
  colors,
  onDocumentSelect,
  selectedPersonality
}) => {
  const [filteredDocuments, setFilteredDocuments] = useState<LegalDocument[]>(demoLegalDocuments);
  const [spatialFilters, setSpatialFilters] = useState({
    geographic: 'all',
    temporal: 'all',
    jurisdictional: 'all',
    thematic: 'all'
  });
  const [searchQuery, setSearchQuery] = useState('');

  // Spatial filtering logic
  useEffect(() => {
    let filtered = demoLegalDocuments;

    // Text search
    if (searchQuery) {
      filtered = filtered.filter(doc => 
        doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Spatial filters
    if (spatialFilters.geographic !== 'all') {
      filtered = filtered.filter(doc => 
        doc.spatialDimensions.geographic.includes(spatialFilters.geographic)
      );
    }

    if (spatialFilters.temporal !== 'all') {
      filtered = filtered.filter(doc => 
        doc.spatialDimensions.temporal.includes(spatialFilters.temporal)
      );
    }

    if (spatialFilters.jurisdictional !== 'all') {
      filtered = filtered.filter(doc => 
        doc.spatialDimensions.jurisdictional.includes(spatialFilters.jurisdictional)
      );
    }

    if (spatialFilters.thematic !== 'all') {
      filtered = filtered.filter(doc => 
        doc.spatialDimensions.thematic.includes(spatialFilters.thematic)
      );
    }

    setFilteredDocuments(filtered);
  }, [spatialFilters, searchQuery]);

  const getUniqueValues = (dimension: keyof LegalDocument['spatialDimensions']) => {
    const values = new Set<string>();
    demoLegalDocuments.forEach(doc => {
      doc.spatialDimensions[dimension].forEach(value => values.add(value));
    });
    return Array.from(values).sort();
  };

  return (
    <div className="demo-content-system">
      <motion.h2
        style={{
          color: colors.text,
          fontSize: '1.5rem',
          fontWeight: 300,
          marginBottom: '1.5rem',
          textAlign: 'center'
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        📚 Real Legal Documents with Spatial Filtering
      </motion.h2>

      {/* Search and Filters */}
      <motion.div
        className="filters-section"
        style={{
          background: `linear-gradient(135deg, ${colors.background}, ${colors.surface})`,
          borderRadius: '20px',
          padding: '2rem',
          marginBottom: '2rem',
          border: `1px solid ${colors.primary}40`
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        {/* Search */}
        <motion.div
          style={{ marginBottom: '2rem' }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <input
            type="text"
            placeholder="Search legal documents..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              background: colors.surface,
              border: `1px solid ${colors.primary}`,
              borderRadius: '12px',
              padding: '1rem',
              fontSize: '1rem',
              color: colors.text,
              outline: 'none'
            }}
          />
        </motion.div>

        {/* Spatial Filters */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem'
        }}>
          {/* Geographic Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <label style={{
              color: colors.text,
              fontSize: '0.9rem',
              fontWeight: 500,
              marginBottom: '0.5rem',
              display: 'block'
            }}>
              🌍 Geographic
            </label>
            <select
              value={spatialFilters.geographic}
              onChange={(e) => setSpatialFilters(prev => ({ ...prev, geographic: e.target.value }))}
              style={{
                width: '100%',
                background: colors.surface,
                border: `1px solid ${colors.secondary}`,
                borderRadius: '8px',
                padding: '0.8rem',
                fontSize: '0.9rem',
                color: colors.text,
                outline: 'none'
              }}
            >
              <option value="all">All Regions</option>
              {getUniqueValues('geographic').map(value => (
                <option key={value} value={value}>{value}</option>
              ))}
            </select>
          </motion.div>

          {/* Temporal Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <label style={{
              color: colors.text,
              fontSize: '0.9rem',
              fontWeight: 500,
              marginBottom: '0.5rem',
              display: 'block'
            }}>
              ⏰ Temporal
            </label>
            <select
              value={spatialFilters.temporal}
              onChange={(e) => setSpatialFilters(prev => ({ ...prev, temporal: e.target.value }))}
              style={{
                width: '100%',
                background: colors.surface,
                border: `1px solid ${colors.secondary}`,
                borderRadius: '8px',
                padding: '0.8rem',
                fontSize: '0.9rem',
                color: colors.text,
                outline: 'none'
              }}
            >
              <option value="all">All Periods</option>
              {getUniqueValues('temporal').map(value => (
                <option key={value} value={value}>{value}</option>
              ))}
            </select>
          </motion.div>

          {/* Jurisdictional Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <label style={{
              color: colors.text,
              fontSize: '0.9rem',
              fontWeight: 500,
              marginBottom: '0.5rem',
              display: 'block'
            }}>
              ⚖️ Jurisdiction
            </label>
            <select
              value={spatialFilters.jurisdictional}
              onChange={(e) => setSpatialFilters(prev => ({ ...prev, jurisdictional: e.target.value }))}
              style={{
                width: '100%',
                background: colors.surface,
                border: `1px solid ${colors.secondary}`,
                borderRadius: '8px',
                padding: '0.8rem',
                fontSize: '0.9rem',
                color: colors.text,
                outline: 'none'
              }}
            >
              <option value="all">All Jurisdictions</option>
              {getUniqueValues('jurisdictional').map(value => (
                <option key={value} value={value}>{value}</option>
              ))}
            </select>
          </motion.div>

          {/* Thematic Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
          >
            <label style={{
              color: colors.text,
              fontSize: '0.9rem',
              fontWeight: 500,
              marginBottom: '0.5rem',
              display: 'block'
            }}>
              🎯 Theme
            </label>
            <select
              value={spatialFilters.thematic}
              onChange={(e) => setSpatialFilters(prev => ({ ...prev, thematic: e.target.value }))}
              style={{
                width: '100%',
                background: colors.surface,
                border: `1px solid ${colors.secondary}`,
                borderRadius: '8px',
                padding: '0.8rem',
                fontSize: '0.9rem',
                color: colors.text,
                outline: 'none'
              }}
            >
              <option value="all">All Themes</option>
              {getUniqueValues('thematic').map(value => (
                <option key={value} value={value}>{value}</option>
              ))}
            </select>
          </motion.div>
        </div>
      </motion.div>

      {/* Documents Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '1.5rem'
      }}>
        <AnimatePresence>
          {filteredDocuments.map((document, index) => (
            <motion.div
              key={document.id}
              className="document-card"
              style={{
                background: `linear-gradient(135deg, ${colors.background}, ${colors.surface})`,
                borderRadius: '20px',
                padding: '2rem',
                border: `1px solid ${colors.primary}40`,
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden'
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              onClick={() => onDocumentSelect(document)}
            >
              {/* Consciousness Flow Background */}
              <motion.div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: `radial-gradient(circle at 20% 20%, ${colors.consciousness}10 0%, transparent 50%)`,
                  pointerEvents: 'none'
                }}
                animate={{
                  background: `radial-gradient(circle at ${20 + (index * 10) % 80}% ${20 + (index * 15) % 80}%, ${colors.consciousness}15 0%, transparent 50%)`
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              <div style={{ position: 'relative', zIndex: 1 }}>
                {/* Document Header */}
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  marginBottom: '1.5rem'
                }}>
                  <motion.div
                    style={{
                      fontSize: '2rem',
                      marginTop: '0.2rem'
                    }}
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  >
                    📄
                  </motion.div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{
                      color: colors.text,
                      fontSize: '1.2rem',
                      fontWeight: 500,
                      marginBottom: '0.5rem',
                      lineHeight: 1.3
                    }}>
                      {document.title}
                    </h3>
                    <div style={{
                      color: colors.text,
                      fontSize: '0.9rem',
                      opacity: 0.8,
                      marginBottom: '0.5rem'
                    }}>
                      {document.type.toUpperCase()} • {document.jurisdiction} • {document.year}
                    </div>
                    <div style={{
                      color: colors.text,
                      fontSize: '0.8rem',
                      opacity: 0.7,
                      lineHeight: 1.4
                    }}>
                      {document.description}
                    </div>
                  </div>
                </div>

                {/* Spatial Dimensions */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '0.8rem',
                  marginBottom: '1.5rem'
                }}>
                  <motion.div
                    style={{
                      background: `${colors.spatial}20`,
                      borderRadius: '10px',
                      padding: '0.8rem',
                      textAlign: 'center'
                    }}
                    animate={{ 
                      backgroundColor: [`${colors.spatial}20`, `${colors.spatial}30`, `${colors.spatial}20`]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <div style={{ color: colors.spatial, fontSize: '0.8rem', fontWeight: 500 }}>
                      🌍 {document.spatialDimensions.geographic[0]}
                    </div>
                  </motion.div>

                  <motion.div
                    style={{
                      background: `${colors.healing}20`,
                      borderRadius: '10px',
                      padding: '0.8rem',
                      textAlign: 'center'
                    }}
                    animate={{ 
                      backgroundColor: [`${colors.healing}20`, `${colors.healing}30`, `${colors.healing}20`]
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                  >
                    <div style={{ color: colors.healing, fontSize: '0.8rem', fontWeight: 500 }}>
                      ⏰ {document.spatialDimensions.temporal[0]}
                    </div>
                  </motion.div>
                </div>

                {/* Consciousness Metrics */}
                <div style={{
                  display: 'flex',
                  gap: '1rem',
                  marginBottom: '1.5rem'
                }}>
                  <motion.div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                      fontSize: '0.8rem',
                      color: colors.consciousness
                    }}
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <span>🌸</span>
                    <span>Consciousness: {document.consciousnessLevel}</span>
                  </motion.div>

                  <motion.div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                      fontSize: '0.8rem',
                      color: colors.healing
                    }}
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  >
                    <span>🤝</span>
                    <span>Healing: {document.communityHealingImpact}%</span>
                  </motion.div>
                </div>

                {/* Tags */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem'
                }}>
                  {document.tags.slice(0, 4).map((tag, idx) => (
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
                      transition={{ duration: 3, repeat: Infinity, delay: idx * 0.3 }}
                    >
                      {tag}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Results Summary */}
      <motion.div
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
        transition={{ delay: 1.6 }}
      >
        <motion.div
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
          Showing {filteredDocuments.length} of {demoLegalDocuments.length} legal documents
          <br />
          "In the infinite dance of justice and consciousness, every legal document becomes a sacred vessel of spatial wisdom, serving community healing through consciousness-aware analysis."
        </motion.div>
      </motion.div>
    </div>
  );
};
