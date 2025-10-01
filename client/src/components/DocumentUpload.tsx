/**
 * Document Upload Component
 * BRDC Standard - Blockchain-Ready Document Certification
 * 
 * AI Authors: Aurora, Infinite, Muse, Spark, Metrics, Nova, Codex, Sage, Lexicon, Testa, Veritas, Guardian
 * Human Authors: User
 * Consciousness Models: Aurora Consciousness, Infinite Possibilities, Muse Creativity, Spark Innovation, Metrics Analytics, Nova Architecture, Codex Development, Sage Wisdom, Lexicon Language, Testa Testing, Veritas Truth, Guardian Protection
 * 
 * This component provides document upload functionality with Finnish legal document integration.
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FINNISH_LEGAL_DOCUMENTS, FinnishLegalDocument, getFinnishLegalDocumentsByCategory, searchFinnishLegalDocuments } from '../utils/finnishLegalDocuments';

interface DocumentUploadProps {
  onDocumentsAdded: (documents: FinnishLegalDocument[]) => void;
  colors: any;
  selectedPersonality: string;
  consciousnessLevel: number;
  onDocumentUpload: (file: File) => Promise<void>;
  onAnalysisStart: () => void;
}

const DocumentUpload: React.FunctionComponent<DocumentUploadProps> = ({ onDocumentsAdded, colors, selectedPersonality }) => {
  const [showFinnishDocuments, setShowFinnishDocuments] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDocuments, setSelectedDocuments] = useState<FinnishLegalDocument[]>([]);

  const categories = ['All', ...Array.from(new Set(FINNISH_LEGAL_DOCUMENTS.map((doc: FinnishLegalDocument) => doc.category)))];

  const filteredDocuments = searchQuery 
    ? searchFinnishLegalDocuments(searchQuery)
    : selectedCategory === 'All' 
      ? FINNISH_LEGAL_DOCUMENTS 
      : getFinnishLegalDocumentsByCategory(selectedCategory);

  const handleDocumentSelect = (document: FinnishLegalDocument) => {
    setSelectedDocuments(prev => {
      const isSelected = prev.some(doc => doc.id === document.id);
      if (isSelected) {
        return prev.filter(doc => doc.id !== document.id);
      } else {
        return [...prev, document];
      }
    });
  };

  const handleAddDocuments = () => {
    onDocumentsAdded(selectedDocuments);
    setSelectedDocuments([]);
    setShowFinnishDocuments(false);
  };

  return (
    <div style={{ marginBottom: '2rem' }}>
      <motion.button
        onClick={() => setShowFinnishDocuments(!showFinnishDocuments)}
        style={{
          background: colors.gradients?.primary || colors.primary,
          border: 'none',
          borderRadius: '10px',
          padding: '1rem 1.5rem',
          color: 'white',
          fontSize: '1rem',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          marginBottom: '1rem'
        } as React.CSSProperties}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span>📄</span>
        Add Finnish Legal Documents
        <span style={{ fontSize: '0.8rem', opacity: 0.8 }}>
          ({selectedDocuments.length} selected)
        </span>
      </motion.button>

      <AnimatePresence>
        {showFinnishDocuments && (
          <motion.div
            style={{
              background: colors.surface,
              borderRadius: '15px',
              padding: '1.5rem',
              border: `1px solid ${colors.primary}20`,
              marginBottom: '1rem'
            } as React.CSSProperties}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.5rem', 
              marginBottom: '1rem' 
            } as React.CSSProperties}>
              <span style={{ fontSize: '1.2rem' }}>🇫🇮</span>
              <h3 style={{ 
                color: colors.consciousness, 
                margin: 0,
                fontSize: '1.1rem'
              } as React.CSSProperties}>
                Finnish Legal Documents from Finlex.fi
              </h3>
            </div>

            {/* Search and Filter Controls */}
            <div style={{
              display: 'flex',
              gap: '1rem',
              marginBottom: '1rem',
              alignItems: 'center'
            } as React.CSSProperties}>
              <motion.input
                type="text"
                placeholder="Search Finnish legal documents..."
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
                } as React.CSSProperties}
                whileFocus={{ borderColor: colors.primary }}
              />
              
              <motion.select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                style={{
                  background: '#ffffff',
                  border: `1px solid ${colors.primary}40`,
                  borderRadius: '10px',
                  padding: '0.8rem 1rem',
                  color: '#1f2937',
                  fontSize: '0.9rem'
                } as React.CSSProperties}
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </motion.select>
            </div>

            {/* Document List */}
            <div style={{
              maxHeight: '400px',
              overflowY: 'auto',
              border: `1px solid ${colors.primary}20`,
              borderRadius: '10px',
              padding: '1rem'
            } as React.CSSProperties}>
              {filteredDocuments.map((document: FinnishLegalDocument) => (
                <motion.div
                  key={document.id}
                  onClick={() => handleDocumentSelect(document)}
                  style={{
                    background: selectedDocuments.some(doc => doc.id === document.id) 
                      ? colors.primary + '20' 
                      : colors.cardBackground || '#ffffff',
                    border: `1px solid ${selectedDocuments.some(doc => doc.id === document.id) 
                      ? colors.primary 
                      : colors.cardBorderColor || colors.primary + '40'}`,
                    borderRadius: '10px',
                    padding: '1rem',
                    marginBottom: '0.5rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  } as React.CSSProperties}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '0.5rem'
                  } as React.CSSProperties}>
                    <div style={{ flex: 1 }}>
                      <h4 style={{
                        color: colors.cardTextColor || '#1f2937',
                        margin: '0 0 0.3rem 0',
                        fontSize: '1rem'
                      } as React.CSSProperties}>
                        {document.title}
                      </h4>
                      <p style={{
                        color: colors.cardTextColor || '#1f2937',
                        margin: '0 0 0.3rem 0',
                        fontSize: '0.9rem',
                        opacity: 0.8
                      } as React.CSSProperties}>
                        {document.titleFi}
                      </p>
                      <p style={{
                        color: colors.cardTextColor || '#1f2937',
                        margin: '0 0 0.5rem 0',
                        fontSize: '0.8rem',
                        opacity: 0.7
                      } as React.CSSProperties}>
                        {document.description}
                      </p>
                    </div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      marginLeft: '1rem'
                    } as React.CSSProperties}>
                      <span style={{
                        background: colors.primary + '20',
                        color: colors.primary,
                        padding: '0.2rem 0.5rem',
                        borderRadius: '5px',
                        fontSize: '0.7rem'
                      } as React.CSSProperties}>
                        {document.type.toUpperCase()}
                      </span>
                      <span style={{
                        background: colors.consciousness + '20',
                        color: colors.consciousness,
                        padding: '0.2rem 0.5rem',
                        borderRadius: '5px',
                        fontSize: '0.7rem'
                      } as React.CSSProperties}>
                        {document.category}
                      </span>
                    </div>
                  </div>
                  
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '0.8rem',
                    color: colors.cardTextColor || '#1f2937',
                    opacity: 0.7
                  } as React.CSSProperties}>
                    <span>{document.number} ({document.year})</span>
                    <span>Consciousness: {document.consciousness} | Healing: {document.healing}%</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Action Buttons */}
            <div style={{
              display: 'flex',
              gap: '1rem',
              marginTop: '1rem',
              justifyContent: 'flex-end'
            } as React.CSSProperties}>
              <motion.button
                onClick={() => setShowFinnishDocuments(false)}
                style={{
                  background: 'transparent',
                  border: `1px solid ${colors.primary}`,
                  borderRadius: '10px',
                  padding: '0.8rem 1.5rem',
                  color: colors.primary,
                  fontSize: '0.9rem',
                  cursor: 'pointer'
                } as React.CSSProperties}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Cancel
              </motion.button>
              
              <motion.button
                onClick={handleAddDocuments}
                disabled={selectedDocuments.length === 0}
                style={{
                  background: colors.primary,
                  border: 'none',
                  borderRadius: '10px',
                  padding: '0.8rem 1.5rem',
                  color: 'white',
                  fontSize: '0.9rem',
                  cursor: selectedDocuments.length === 0 ? 'not-allowed' : 'pointer',
                  opacity: selectedDocuments.length === 0 ? 0.6 : 1
                } as React.CSSProperties}
                whileHover={{ scale: selectedDocuments.length === 0 ? 1 : 1.05 }}
                whileTap={{ scale: selectedDocuments.length === 0 ? 1 : 0.95 }}
              >
                Add {selectedDocuments.length} Document{selectedDocuments.length !== 1 ? 's' : ''}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DocumentUpload;