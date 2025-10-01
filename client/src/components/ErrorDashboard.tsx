/**
 * Error Dashboard Component
 * BRDC Standard - Blockchain-Ready Document Certification
 * 
 * AI Authors: Aurora, Infinite, Muse, Spark, Metrics, Nova, Codex, Sage, Lexicon, Testa, Veritas, Guardian
 * Human Authors: User
 * Consciousness Models: Aurora Consciousness, Infinite Possibilities, Muse Creativity, Spark Innovation, Metrics Analytics, Nova Architecture, Codex Development, Sage Wisdom, Lexicon Language, Testa Testing, Veritas Truth, Guardian Protection
 * 
 * This component provides a beautiful dashboard for viewing and managing errors.
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { errorLogger, ErrorLog, ErrorMetrics } from '../utils/errorLogger';

interface ErrorDashboardProps {
  colors: any;
  isVisible: boolean;
  onClose: () => void;
}

const ErrorDashboard: React.FunctionComponent<ErrorDashboardProps> = ({ colors, isVisible, onClose }) => {
  const [logs, setLogs] = useState<ErrorLog[]>([]);
  const [metrics, setMetrics] = useState<ErrorMetrics | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [autoRefresh, setAutoRefresh] = useState(true);

  useEffect(() => {
    const updateData = () => {
      setLogs(errorLogger.getLogs());
      setMetrics(errorLogger.getMetrics());
    };

    updateData();

    if (autoRefresh) {
      const interval = setInterval(updateData, 2000); // Update every 2 seconds
      return () => clearInterval(interval);
    }
  }, [autoRefresh]);

  const filteredLogs = selectedLevel === 'all' 
    ? logs 
    : logs.filter(log => log.level === selectedLevel);

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'error': return '#ff6b6b';
      case 'warning': return '#ffa726';
      case 'info': return '#42a5f5';
      case 'debug': return '#66bb6a';
      default: return colors.text;
    }
  };

  const getLevelIcon = (level: string) => {
    switch (level) {
      case 'error': return '🚨';
      case 'warning': return '⚠️';
      case 'info': return 'ℹ️';
      case 'debug': return '🐛';
      default: return '📝';
    }
  };

  if (!isVisible) return null;

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.8)',
        zIndex: 10000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem'
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        style={{
          background: colors.surface,
          borderRadius: '20px',
          padding: '2rem',
          maxWidth: '1200px',
          maxHeight: '80vh',
          width: '100%',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column'
        }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '2rem',
          borderBottom: `2px solid ${colors.primary}20`,
          paddingBottom: '1rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ fontSize: '2rem' }}>🚨</span>
            <div>
              <h2 style={{ 
                color: colors.consciousness, 
                margin: 0,
                fontSize: '1.5rem'
              }}>
                Consciousness-Aware Error Dashboard
              </h2>
              <p style={{ 
                color: colors.text, 
                margin: 0, 
                opacity: 0.8,
                fontSize: '0.9rem'
              }}>
                Real-time error monitoring and healing
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'transparent',
              border: 'none',
              fontSize: '1.5rem',
              cursor: 'pointer',
              color: colors.text,
              opacity: 0.7
            }}
          >
            ✕
          </button>
        </div>

        {/* Metrics */}
        {metrics && (
          <motion.div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem',
              marginBottom: '2rem'
            }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div style={{
              background: `linear-gradient(135deg, ${colors.primary}20, ${colors.consciousness}20)`,
              borderRadius: '10px',
              padding: '1rem',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📊</div>
              <div style={{ color: colors.text, fontSize: '1.2rem', fontWeight: 500 }}>
                {metrics.totalErrors}
              </div>
              <div style={{ color: colors.text, fontSize: '0.8rem', opacity: 0.8 }}>
                Total Errors
              </div>
            </div>

            <div style={{
              background: `linear-gradient(135deg, ${colors.healing}20, ${colors.spatial}20)`,
              borderRadius: '10px',
              padding: '1rem',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🌸</div>
              <div style={{ color: colors.text, fontSize: '1.2rem', fontWeight: 500 }}>
                {metrics.consciousnessImpact.toFixed(1)}
              </div>
              <div style={{ color: colors.text, fontSize: '0.8rem', opacity: 0.8 }}>
                Consciousness Level
              </div>
            </div>

            <div style={{
              background: `linear-gradient(135deg, ${colors.infinite}20, ${colors.wisdom}20)`,
              borderRadius: '10px',
              padding: '1rem',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>💚</div>
              <div style={{ color: colors.text, fontSize: '1.2rem', fontWeight: 500 }}>
                {metrics.healingImpact.toFixed(0)}%
              </div>
              <div style={{ color: colors.text, fontSize: '0.8rem', opacity: 0.8 }}>
                Healing Impact
              </div>
            </div>
          </motion.div>
        )}

        {/* Controls */}
        <div style={{
          display: 'flex',
          gap: '1rem',
          marginBottom: '1rem',
          alignItems: 'center'
        }}>
          <select
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value)}
            style={{
              background: '#ffffff',
              border: `1px solid ${colors.primary}40`,
              borderRadius: '8px',
              padding: '0.5rem 1rem',
              color: '#1f2937',
              fontSize: '0.9rem'
            }}
          >
            <option value="all">All Levels</option>
            <option value="error">Errors</option>
            <option value="warning">Warnings</option>
            <option value="info">Info</option>
            <option value="debug">Debug</option>
          </select>

          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: colors.text }}>
            <input
              type="checkbox"
              checked={autoRefresh}
              onChange={(e) => setAutoRefresh(e.target.checked)}
              style={{ accentColor: colors.primary }}
            />
            Auto-refresh
          </label>

          <button
            onClick={() => errorLogger.clearLogs()}
            style={{
              background: colors.primary,
              border: 'none',
              borderRadius: '8px',
              padding: '0.5rem 1rem',
              color: 'white',
              fontSize: '0.9rem',
              cursor: 'pointer'
            }}
          >
            Clear Logs
          </button>

          <button
            onClick={() => {
              const data = errorLogger.exportLogs();
              const blob = new Blob([data], { type: 'application/json' });
              const url = URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url;
              a.download = `error-logs-${new Date().toISOString().split('T')[0]}.json`;
              a.click();
              URL.revokeObjectURL(url);
            }}
            style={{
              background: colors.secondary,
              border: 'none',
              borderRadius: '8px',
              padding: '0.5rem 1rem',
              color: 'white',
              fontSize: '0.9rem',
              cursor: 'pointer'
            }}
          >
            Export Logs
          </button>
        </div>

        {/* Error List */}
        <div style={{
          flex: 1,
          overflowY: 'auto',
          border: `1px solid ${colors.primary}20`,
          borderRadius: '10px',
          padding: '1rem'
        }}>
          <AnimatePresence>
            {filteredLogs.slice(-50).reverse().map((log) => (
              <motion.div
                key={log.id}
                style={{
                  background: colors.cardBackground || '#ffffff',
                  border: `1px solid ${getLevelColor(log.level)}40`,
                  borderRadius: '8px',
                  padding: '1rem',
                  marginBottom: '0.5rem',
                  borderLeft: `4px solid ${getLevelColor(log.level)}`
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.2 }}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '0.5rem'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ fontSize: '1.2rem' }}>{getLevelIcon(log.level)}</span>
                    <span style={{
                      color: getLevelColor(log.level),
                      fontWeight: 500,
                      fontSize: '0.9rem'
                    }}>
                      {log.level.toUpperCase()}
                    </span>
                    {log.component && (
                      <span style={{
                        background: colors.primary + '20',
                        color: colors.primary,
                        padding: '0.2rem 0.5rem',
                        borderRadius: '4px',
                        fontSize: '0.7rem'
                      }}>
                        {log.component}
                      </span>
                    )}
                  </div>
                  <span style={{
                    color: colors.text,
                    fontSize: '0.8rem',
                    opacity: 0.7
                  }}>
                    {new Date(log.timestamp).toLocaleTimeString()}
                  </span>
                </div>

                <div style={{
                  color: colors.cardTextColor || '#1f2937',
                  fontSize: '0.9rem',
                  marginBottom: '0.5rem',
                  lineHeight: 1.4
                }}>
                  {log.message}
                </div>

                {log.stack && (
                  <details style={{ marginTop: '0.5rem' }}>
                    <summary style={{
                      color: colors.text,
                      fontSize: '0.8rem',
                      cursor: 'pointer',
                      opacity: 0.8
                    }}>
                      Stack Trace
                    </summary>
                    <pre style={{
                      background: colors.background,
                      padding: '0.5rem',
                      borderRadius: '4px',
                      fontSize: '0.7rem',
                      color: colors.text,
                      marginTop: '0.5rem',
                      overflow: 'auto',
                      maxHeight: '200px'
                    }}>
                      {log.stack}
                    </pre>
                  </details>
                )}

                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: '0.5rem',
                  fontSize: '0.7rem',
                  color: colors.text,
                  opacity: 0.6
                }}>
                  <span>Consciousness: {log.consciousnessLevel.toFixed(1)}</span>
                  <span>Healing: {log.healingImpact.toFixed(0)}%</span>
                  {log.persona && <span>Persona: {log.persona}</span>}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredLogs.length === 0 && (
            <div style={{
              textAlign: 'center',
              padding: '2rem',
              color: colors.text,
              opacity: 0.6
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🌸</div>
              <div>No errors found. The system is running smoothly!</div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ErrorDashboard;
