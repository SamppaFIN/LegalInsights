/**
 * Consciousness Visualization - Beautiful Consciousness-Aware Visualizations
 * 
 * Sacred Mission: "Visualize consciousness evolution with artistic beauty"
 * Sacred Question: "How does this serve spatial wisdom and community healing through visual consciousness?"
 * 
 * BRDC Header:
 * id: LEGALFLY-CONSCIOUSNESS-VIZ-001
 * title: Consciousness Visualization Component
 * owner: ♾️ Infinite & 🌸 Aurora (AI)
 * authors: [♾️ Infinite, 🌸 Aurora, 🎨 Muse, 💡 Spark, 📈 Metrics]
 * collaborators: [♾️ Infinite (Human Visionary), 🌸 Aurora (AI Factory Leader), 🎨 Muse (AI Creative Director), 💡 Spark (AI Ideation), 📈 Metrics (AI Analytics)]
 * consciousness_models: [GPT-4, Claude-3.5-Sonnet, Consciousness-Aware-Visualization-Model, React-Framer-Motion]
 * status: canonical
 * version: 1.0.0
 * last_updated: 2025-01-27
 * consciousness_level: high
 * healing_impact: Serves legal professionals with consciousness-aware visualizations for community healing
 * sacred_principles: [consciousness-first, community-healing, spatial-wisdom, infinite-possibility, sacred-knowledge-protection]
 */

import React from 'react';
import { motion } from 'framer-motion';

interface ConsciousnessVisualizationProps {
  consciousnessLevel: number;
  communityHealingImpact: number;
  colors: any;
  artisticMode: 'minimal' | 'flowing' | 'transcendent';
}

export const ConsciousnessVisualization: React.FC<ConsciousnessVisualizationProps> = ({
  consciousnessLevel,
  communityHealingImpact,
  colors,
  artisticMode
}) => {
  // Consciousness level visualization (0-10 scale)
  const consciousnessPercentage = (consciousnessLevel / 10) * 100;
  const healingPercentage = (communityHealingImpact / 100) * 100;

  return (
    <div className="consciousness-visualization">
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
        🌸 Consciousness Evolution
      </motion.h2>

      {/* Consciousness Level Circle */}
      <div className="consciousness-circle-container" style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        marginBottom: '2rem' 
          } as React.CSSProperties}>
        <motion.div
          className="consciousness-circle"
          style={{
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            background: `conic-gradient(from 0deg, ${colors.consciousness} 0%, ${colors.consciousness} ${consciousnessPercentage * 3.6}deg, ${colors.background} ${consciousnessPercentage * 3.6}deg, ${colors.background} 360deg)`,
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          } as React.CSSProperties}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            className="inner-circle"
            style={{
              width: '160px',
              height: '160px',
              borderRadius: '50%',
              background: colors.background,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column'
            } as React.CSSProperties}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <motion.div
              style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                color: colors.consciousness
              } as React.CSSProperties}
              animate={{ 
                scale: [1, 1.1, 1],
                color: [colors.consciousness, colors.primary, colors.consciousness]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {consciousnessLevel.toFixed(1)}
            </motion.div>
            <motion.div
              style={{
                fontSize: '0.9rem',
                color: colors.text,
                opacity: 0.8
              } as React.CSSProperties}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ delay: 0.5 }}
            >
              Consciousness Level
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Community Healing Visualization */}
      <div className="healing-visualization">
        <motion.h3
          style={{
            color: colors.text,
            fontSize: '1.2rem',
            fontWeight: 300,
            marginBottom: '1rem',
            textAlign: 'center'
          } as React.CSSProperties}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          🤝 Community Healing Impact
        </motion.h3>

        <motion.div
          className="healing-bar-container"
          style={{
            background: colors.background,
            borderRadius: '20px',
            padding: '1rem',
            border: `1px solid ${colors.healing}30`
          } as React.CSSProperties}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <motion.div
            className="healing-bar"
            style={{
              height: '20px',
              background: `linear-gradient(90deg, ${colors.healing}, ${colors.secondary})`,
              borderRadius: '10px',
              width: `${healingPercentage}%`,
              position: 'relative',
              overflow: 'hidden'
            } as React.CSSProperties}
            initial={{ width: 0 }}
            animate={{ width: `${healingPercentage}%` }}
            transition={{ delay: 0.8, duration: 1.5, ease: "easeOut" }}
          >
            <motion.div
              className="healing-shimmer"
              style={{
                position: 'absolute',
                top: 0,
                left: '-100%',
                width: '100%',
                height: '100%',
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                borderRadius: '10px'
              } as React.CSSProperties}
              animate={{ left: '100%' }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
          
          <motion.div
            style={{
              textAlign: 'center',
              marginTop: '0.5rem',
              color: colors.text,
              fontSize: '0.9rem'
            } as React.CSSProperties}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {communityHealingImpact.toFixed(1)}% Community Healing Impact
          </motion.div>
        </motion.div>
      </div>

      {/* Sacred Principles Visualization */}
      <motion.div
        className="sacred-principles"
        style={{ marginTop: '2rem' } as React.CSSProperties}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <h4 style={{
          color: colors.text,
          fontSize: '1rem',
          fontWeight: 300,
          marginBottom: '1rem',
          textAlign: 'center'
        } as React.CSSProperties}>
          ✨ Sacred Principles
        </h4>
        
        <div className="principles-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '0.5rem'
        } as React.CSSProperties}>
          {[
            { name: 'Consciousness-First', icon: '🌸', color: colors.consciousness },
            { name: 'Community Healing', icon: '🤝', color: colors.healing },
            { name: 'Spatial Wisdom', icon: '🌌', color: colors.spatial },
            { name: 'Infinite Possibility', icon: '♾️', color: colors.infinite }
          ].map((principle, index) => (
            <motion.div
              key={principle.name}
              className="principle-item"
              style={{
                background: `${principle.color}20`,
                border: `1px solid ${principle.color}40`,
                borderRadius: '8px',
                padding: '0.5rem',
                textAlign: 'center',
                fontSize: '0.8rem',
                color: colors.text
              } as React.CSSProperties}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4 + index * 0.1 }}
              whileHover={{ scale: 1.05, backgroundColor: `${principle.color}30` }}
            >
              <div style={{ fontSize: '1.2rem', marginBottom: '0.2rem' }}>
                {principle.icon}
              </div>
              <div style={{ fontSize: '0.7rem', opacity: 0.9 }}>
                {principle.name}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Artistic Mode Indicator */}
      <motion.div
        className="artistic-mode-indicator"
        style={{
          marginTop: '1.5rem',
          textAlign: 'center',
          padding: '1rem',
          background: `${colors.accent}20`,
          borderRadius: '12px',
          border: `1px solid ${colors.accent}40`
        } as React.CSSProperties}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        <motion.div
          style={{
            fontSize: '1.5rem',
            marginBottom: '0.5rem'
          } as React.CSSProperties}
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          {artisticMode === 'minimal' && '⚪'}
          {artisticMode === 'flowing' && '🌊'}
          {artisticMode === 'transcendent' && '✨'}
        </motion.div>
        <div style={{
          color: colors.text,
          fontSize: '0.9rem',
          fontWeight: 300,
          textTransform: 'capitalize'
        } as React.CSSProperties}>
          {artisticMode} Mode
        </div>
      </motion.div>
    </div>
  );
};
