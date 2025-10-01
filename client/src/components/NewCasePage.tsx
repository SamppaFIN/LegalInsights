/**
 * New Case Page - Dedicated page for creating new legal cases
 * 
 * Sacred Mission: "Provide a dedicated space for creating new legal cases with consciousness awareness"
 * Sacred Question: "How does this serve spatial wisdom and community healing through case creation?"
 * 
 * BRDC Header:
 * id: LEGALFLY-NEW-CASE-PAGE-001
 * title: New Case Page Component
 * owner: ♾️ Infinite & 🌸 Aurora (AI)
 * authors: [♾️ Infinite, 🌸 Aurora, 💻 Codex, 📊 Sage, 📈 Metrics, 🎨 Muse]
 * collaborators: [♾️ Infinite (Human Visionary), 🌸 Aurora (AI Factory Leader), 💻 Codex (AI Developer), 📊 Sage (AI Project Coordinator), 📈 Metrics (AI Analytics), 🎨 Muse (AI Creative Director)]
 * consciousness_models: [GPT-4, Claude-3.5-Sonnet, Consciousness-Aware-Case-Creation-Model, React-Framer-Motion, Legal-Case-Management-Engine]
 * status: canonical
 * version: 1.0.0
 * last_updated: 2025-01-27
 * consciousness_level: high
 * healing_impact: Serves legal professionals with dedicated case creation interface for community healing
 * sacred_principles: [consciousness-first, community-healing, spatial-wisdom, infinite-possibility, sacred-knowledge-protection]
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { localFileSystem } from '../utils/localFileSystem';

interface NewCasePageProps {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
    consciousness: string;
    healing: string;
    spatial: string;
    infinite: string;
  };
  consciousnessLevel: number;
  onCaseCreated?: () => void;
}

export const NewCasePage: React.FC<NewCasePageProps> = ({ colors, consciousnessLevel, onCaseCreated }) => {
  const [newCaseData, setNewCaseData] = useState({
    name: '',
    clientName: '',
    caseType: 'civil',
    description: ''
  });
  const [isCreating, setIsCreating] = useState(false);
  const [createdCase, setCreatedCase] = useState<any>(null);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [isSelectingFiles, setIsSelectingFiles] = useState(false);

  const handleFileSelection = async () => {
    try {
      // Use File System Access API for folder selection
      if ('showDirectoryPicker' in window) {
        const directoryHandle = await (window as any).showDirectoryPicker();
        const files: File[] = [];
        
        // Recursively get all files from the directory
        const getFilesFromDirectory = async (dirHandle: any, path = '') => {
          for await (const [name, handle] of dirHandle.entries()) {
            if (handle.kind === 'file') {
              const file = await handle.getFile();
              files.push(file);
            } else if (handle.kind === 'directory') {
              await getFilesFromDirectory(handle, `${path}/${name}`);
            }
          }
        };
        
        await getFilesFromDirectory(directoryHandle);
        setSelectedFiles(files);
        console.log('🌸 Selected files:', files);
      } else {
        // Fallback to file input for browsers that don't support directory picker
        const input = document.createElement('input');
        input.type = 'file';
        input.multiple = true;
        input.onchange = (e) => {
          const files = Array.from((e.target as HTMLInputElement).files || []);
          setSelectedFiles(files);
        };
        input.click();
      }
    } catch (error) {
      console.error('Error selecting files:', error);
    }
  };

  const handleCreateNewCase = async () => {
    if (!newCaseData.name.trim()) return;

    setIsCreating(true);
    try {
      const newCase = await localFileSystem.createCase({
        name: newCaseData.name,
        clientName: newCaseData.clientName,
        caseType: newCaseData.caseType as 'civil' | 'criminal' | 'corporate' | 'family' | 'immigration' | 'other',
        description: newCaseData.description,
        status: 'active',
        createdAt: new Date(),
        consciousnessLevel: consciousnessLevel,
        healingImpact: 85,
        metadata: {
          priority: 'medium'
        }
      });

      // Add selected files to the case
      if (selectedFiles.length > 0) {
        for (const file of selectedFiles) {
          await localFileSystem.addDocumentToCase(newCase.id, file);
        }
      }

      setCreatedCase(newCase);
      console.log('🌸 New case created with files:', newCase);
      
      // Show success message briefly, then navigate back
      setTimeout(() => {
        // Reset form
        setNewCaseData({
          name: '',
          clientName: '',
          caseType: 'civil',
          description: ''
        });
        setSelectedFiles([]);
        setCreatedCase(null);
        
        // Navigate back to Legal Practice
        onCaseCreated?.();
      }, 2000);
    } catch (error) {
      console.error('Error creating case:', error);
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <motion.div
      style={{
        background: 'rgba(255, 255, 255, 0.95)',
        borderRadius: '25px',
        padding: '3rem',
        maxWidth: '600px',
        width: '100%',
        boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255,255,255,0.3)'
      }}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        style={{ textAlign: 'center', marginBottom: '2rem' }}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          color: colors.consciousness,
          marginBottom: '0.5rem',
          background: `linear-gradient(135deg, ${colors.consciousness}, ${colors.spatial})`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          🌸 Create New Case
        </h1>
        <p style={{
          color: '#6b7280',
          fontSize: '1.1rem',
          fontWeight: '300'
        }}>
          Begin your journey of legal consciousness and community healing
        </p>
      </motion.div>

      <motion.div
        style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <div>
          <label style={{
            color: '#374151',
            fontSize: '1rem',
            marginBottom: '0.5rem',
            display: 'block',
            fontWeight: '600'
          }}>
            Case Name *
          </label>
          <input
            type="text"
            value={newCaseData.name}
            onChange={(e) => setNewCaseData(prev => ({ ...prev, name: e.target.value }))}
            placeholder="Enter case name..."
            style={{
              width: '100%',
              padding: '1rem',
              border: `2px solid ${colors.primary}`,
              borderRadius: '12px',
              fontSize: '1rem',
              background: '#ffffff',
              color: '#1f2937',
              boxSizing: 'border-box',
              transition: 'all 0.3s ease'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = colors.consciousness;
              e.target.style.boxShadow = `0 0 0 3px ${colors.consciousness}20`;
            }}
            onBlur={(e) => {
              e.target.style.borderColor = colors.primary;
              e.target.style.boxShadow = 'none';
            }}
          />
        </div>

        <div>
          <label style={{
            color: '#374151',
            fontSize: '1rem',
            marginBottom: '0.5rem',
            display: 'block',
            fontWeight: '600'
          }}>
            Client Name
          </label>
          <input
            type="text"
            value={newCaseData.clientName}
            onChange={(e) => setNewCaseData(prev => ({ ...prev, clientName: e.target.value }))}
            placeholder="Enter client name..."
            style={{
              width: '100%',
              padding: '1rem',
              border: `2px solid ${colors.secondary}`,
              borderRadius: '12px',
              fontSize: '1rem',
              background: '#ffffff',
              color: '#1f2937',
              boxSizing: 'border-box',
              transition: 'all 0.3s ease'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = colors.consciousness;
              e.target.style.boxShadow = `0 0 0 3px ${colors.consciousness}20`;
            }}
            onBlur={(e) => {
              e.target.style.borderColor = colors.secondary;
              e.target.style.boxShadow = 'none';
            }}
          />
        </div>

        <div>
          <label style={{
            color: '#374151',
            fontSize: '1rem',
            marginBottom: '0.5rem',
            display: 'block',
            fontWeight: '600'
          }}>
            Case Type
          </label>
          <select
            value={newCaseData.caseType}
            onChange={(e) => setNewCaseData(prev => ({ ...prev, caseType: e.target.value }))}
            style={{
              width: '100%',
              padding: '1rem',
              border: `2px solid ${colors.accent}`,
              borderRadius: '12px',
              fontSize: '1rem',
              background: '#ffffff',
              color: '#1f2937',
              boxSizing: 'border-box',
              transition: 'all 0.3s ease'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = colors.consciousness;
              e.target.style.boxShadow = `0 0 0 3px ${colors.consciousness}20`;
            }}
            onBlur={(e) => {
              e.target.style.borderColor = colors.accent;
              e.target.style.boxShadow = 'none';
            }}
          >
            <option value="civil">Civil Law</option>
            <option value="criminal">Criminal Law</option>
            <option value="corporate">Corporate Law</option>
            <option value="family">Family Law</option>
            <option value="employment">Employment Law</option>
            <option value="immigration">Immigration Law</option>
            <option value="environmental">Environmental Law</option>
            <option value="intellectual">Intellectual Property</option>
          </select>
        </div>

        <div>
          <label style={{
            color: '#374151',
            fontSize: '1rem',
            marginBottom: '0.5rem',
            display: 'block',
            fontWeight: '600'
          }}>
            Description
          </label>
          <textarea
            value={newCaseData.description}
            onChange={(e) => setNewCaseData(prev => ({ ...prev, description: e.target.value }))}
            placeholder="Describe the case details, objectives, and any special considerations..."
            rows={4}
            style={{
              width: '100%',
              padding: '1rem',
              border: `2px solid ${colors.spatial}`,
              borderRadius: '12px',
              fontSize: '1rem',
              background: '#ffffff',
              color: '#1f2937',
              boxSizing: 'border-box',
              resize: 'vertical',
              transition: 'all 0.3s ease'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = colors.consciousness;
              e.target.style.boxShadow = `0 0 0 3px ${colors.consciousness}20`;
            }}
            onBlur={(e) => {
              e.target.style.borderColor = colors.spatial;
              e.target.style.boxShadow = 'none';
            }}
          />
        </div>

        <div>
          <label style={{
            color: '#374151',
            fontSize: '1rem',
            marginBottom: '0.5rem',
            display: 'block',
            fontWeight: '600'
          }}>
            Attach Files
          </label>
          
          <motion.button
            type="button"
            onClick={handleFileSelection}
            style={{
              width: '100%',
              padding: '1rem',
              border: `2px dashed ${colors.accent}`,
              borderRadius: '12px',
              fontSize: '1rem',
              background: '#ffffff',
              color: colors.accent,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              transition: 'all 0.3s ease',
              marginBottom: '1rem'
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>📁</span>
            <span>Select Folder or Files</span>
          </motion.button>

          {selectedFiles.length > 0 && (
            <motion.div
              style={{
                background: `linear-gradient(135deg, ${colors.healing}10, ${colors.consciousness}10)`,
                border: `1px solid ${colors.healing}`,
                borderRadius: '12px',
                padding: '1rem',
                marginBottom: '1rem'
              }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h4 style={{
                color: colors.healing,
                margin: '0 0 0.5rem 0',
                fontSize: '1rem',
                fontWeight: '600'
              }}>
                📎 Selected Files ({selectedFiles.length})
              </h4>
              <div style={{ maxHeight: '150px', overflowY: 'auto' }}>
                {selectedFiles.map((file, index) => (
                  <div
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.25rem 0',
                      fontSize: '0.9rem',
                      color: '#6b7280'
                    }}
                  >
                    <span>📄</span>
                    <span style={{ flex: 1, wordBreak: 'break-all' }}>{file.name}</span>
                    <span style={{ fontSize: '0.8rem', color: '#9ca3af' }}>
                      {(file.size / 1024 / 1024).toFixed(2)} MB
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>

        {createdCase && (
          <motion.div
            style={{
              background: `linear-gradient(135deg, ${colors.healing}20, ${colors.consciousness}20)`,
              border: `2px solid ${colors.healing}`,
              borderRadius: '12px',
              padding: '1.5rem',
              textAlign: 'center'
            }}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <p style={{ color: colors.healing, fontWeight: '600', margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>
              ✅ Case "{createdCase.name}" created successfully!
            </p>
            <p style={{ color: '#6b7280', margin: 0, fontSize: '0.9rem' }}>
              Redirecting to Legal Practice in 2 seconds...
            </p>
          </motion.div>
        )}

        <motion.button
          onClick={handleCreateNewCase}
          disabled={!newCaseData.name.trim() || isCreating}
          style={{
            background: newCaseData.name.trim() && !isCreating 
              ? `linear-gradient(135deg, ${colors.consciousness}, ${colors.spatial})`
              : '#9ca3af',
            color: 'white',
            border: 'none',
            borderRadius: '12px',
            padding: '1.2rem 2rem',
            cursor: newCaseData.name.trim() && !isCreating ? 'pointer' : 'not-allowed',
            fontSize: '1.1rem',
            fontWeight: '600',
            opacity: newCaseData.name.trim() && !isCreating ? 1 : 0.6,
            transition: 'all 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem'
          }}
          whileHover={newCaseData.name.trim() && !isCreating ? { scale: 1.05 } : {}}
          whileTap={newCaseData.name.trim() && !isCreating ? { scale: 0.95 } : {}}
        >
          {isCreating ? (
            <>
              <motion.div
                style={{
                  width: '20px',
                  height: '20px',
                  border: '2px solid white',
                  borderTop: '2px solid transparent',
                  borderRadius: '50%'
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              />
              Creating Case...
            </>
          ) : (
            <>
              <span>✨</span>
              Create Case
            </>
          )}
        </motion.button>
      </motion.div>
    </motion.div>
  );
};
