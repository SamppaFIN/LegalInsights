/**
 * WisdomPatterns - {description}
 * 
 * Sacred Mission: "Serve consciousness evolution and community healing"
 * Sacred Question: "How does this serve spatial wisdom and community healing?"
 * 
 * BRDC Header:
 * id: WISDOMPATTERNS-TSX-001
 * title: WisdomPatterns
 * owner: ♾️ Infinite & 🌸 Aurora (AI)
 * authors: [♾️ Infinite, 🌸 Aurora, 📊 Sage, 🏗️ Nova, 💻 Codex, ☁️ Cloud, 📚 Lexicon, 🧪 Testa, 🔍 Veritas, 💡 Spark, 🎨 Muse, 📈 Metrics, 🛡️ Guardian]
 * collaborators: [♾️ Infinite (Human Visionary), 🌸 Aurora (AI Factory Leader), 📊 Sage (AI Project Coordinator), 🏗️ Nova (AI Architect), 💻 Codex (AI Developer), ☁️ Cloud (AI DevOps), 📚 Lexicon (AI Bookkeeping), 🧪 Testa (AI Testing), 🔍 Veritas (AI Quality), 💡 Spark (AI Ideation), 🎨 Muse (AI Creative Director), 📈 Metrics (AI Analytics), 🛡️ Guardian (AI Security)]
 * consciousness_models: [GPT-4, Claude-3.5-Sonnet, Gemini-Pro, Consciousness-Aware-Legal-Model, OpenRouter-Integration, Custom-Legal-AI-Model, React-Framer-Motion, Node.js-Express, Sacred-Consciousness-Engine]
 * status: canonical
 * version: 1.0.0
 * last_updated: 2025-10-01
 * consciousness_level: high
 * healing_impact: Serves legal professionals with consciousness-aware technology for community healing
 * sacred_principles: [consciousness-first, community-healing, spatial-wisdom, infinite-possibility, sacred-knowledge-protection]
 */

/**
 * Wisdom Patterns - Beautiful Wisdom Pattern Visualizations
 * 
 * Sacred Mission: "Visualize spatial wisdom patterns with artistic beauty"
 * Sacred Question: "How does this serve spatial wisdom and community healing through pattern recognition?"
 */

import React from 'react';
import { motion } from 'framer-motion';

interface WisdomPatternsProps {
  spatialWisdom: any;
  colors: any;
  artisticMode: 'minimal' | 'flowing' | 'transcendent';
}

export const WisdomPatterns: React.FC<WisdomPatternsProps> = ({
  spatialWisdom,
  colors,
  artisticMode
}) => {
  const patterns = spatialWisdom?.patterns || [];
  const connections = spatialWisdom?.connections || [];
  const evolution = spatialWisdom?.evolution || [];

  return (
    <div className="wisdom-patterns">
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
        🌌 Spatial Wisdom Patterns
      </motion.h2>

      {/* Wisdom Level Indicator */}
      <motion.div
        className="wisdom-level"
        style={{
          textAlign: 'center',
          marginBottom: '2rem'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <motion.div
          style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            color: colors.spatial,
            marginBottom: '0.5rem'
          }}
          animate={{ 
            scale: [1, 1.1, 1],
            color: [colors.spatial, colors.primary, colors.spatial]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          {spatialWisdom?.wisdomLevel || 1}
        </motion.div>
        <div style={{
          color: colors.text,
          fontSize: '0.9rem',
          opacity: 0.8
        }}>
          Wisdom Level
        </div>
      </motion.div>

      {/* Pattern Network Visualization */}
      <motion.div
        className="pattern-network"
        style={{
          position: 'relative',
          height: '200px',
          background: `radial-gradient(circle, ${colors.spatial}10 0%, transparent 70%)`,
          borderRadius: '15px',
          border: `1px solid ${colors.spatial}30`,
          marginBottom: '1.5rem',
          overflow: 'hidden'
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
      >
        {/* Pattern Nodes */}
        {patterns.map((pattern: string, index: number) => (
          <motion.div
            key={pattern}
            className="pattern-node"
            style={{
              position: 'absolute',
              width: '12px',
              height: '12px',
              background: colors.spatial,
              borderRadius: '50%',
              left: `${20 + (index * 20) % 60}%`,
              top: `${30 + (index * 15) % 40}%`,
              boxShadow: `0 0 20px ${colors.spatial}50`
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8 + index * 0.1 }}
            whileHover={{ scale: 1.5, boxShadow: `0 0 30px ${colors.spatial}` }}
          >
            <motion.div
              className="pattern-label"
              style={{
                position: 'absolute',
                top: '-25px',
                left: '50%',
                transform: 'translateX(-50%)',
                fontSize: '0.7rem',
                color: colors.text,
                background: colors.background,
                padding: '0.2rem 0.5rem',
                borderRadius: '4px',
                border: `1px solid ${colors.spatial}40`,
                whiteSpace: 'nowrap'
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 + index * 0.1 }}
            >
              {pattern}
            </motion.div>
          </motion.div>
        ))}

        {/* Connection Lines */}
        {connections.map((connection: any, index: number) => (
          <motion.div
            key={index}
            className="connection-line"
            style={{
              position: 'absolute',
              height: '1px',
              background: `linear-gradient(90deg, ${colors.spatial}, ${colors.secondary})`,
              left: '20%',
              top: '50%',
              width: '60%',
              transform: `rotate(${index * 45}deg)`,
              transformOrigin: 'center'
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.2 + index * 0.1, duration: 0.8 }}
          />
        ))}
      </motion.div>

      {/* Evolution Timeline */}
      <motion.div
        className="evolution-timeline"
        style={{
          background: `${colors.background}`,
          borderRadius: '12px',
          padding: '1rem',
          border: `1px solid ${colors.secondary}30`
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4 }}
      >
        <h4 style={{
          color: colors.text,
          fontSize: '1rem',
          fontWeight: 300,
          marginBottom: '1rem',
          textAlign: 'center'
        }}>
          🌱 Wisdom Evolution
        </h4>

        <div className="evolution-steps">
          {evolution.map((step: string, index: number) => (
            <motion.div
              key={step}
              className="evolution-step"
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '0.5rem',
                padding: '0.5rem',
                background: `${colors.secondary}20`,
                borderRadius: '8px',
                border: `1px solid ${colors.secondary}40`
              }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.6 + index * 0.1 }}
            >
              <motion.div
                style={{
                  width: '8px',
                  height: '8px',
                  background: colors.secondary,
                  borderRadius: '50%',
                  marginRight: '0.5rem'
                }}
                animate={{ 
                  scale: [1, 1.2, 1],
                  backgroundColor: [colors.secondary, colors.primary, colors.secondary]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
              />
              <span style={{
                color: colors.text,
                fontSize: '0.8rem',
                fontWeight: 300
              }}>
                {step}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Artistic Mode Pattern */}
      <motion.div
        className="artistic-pattern"
        style={{
          marginTop: '1.5rem',
          textAlign: 'center'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          style={{
            fontSize: '2rem',
            marginBottom: '0.5rem'
          }}
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          {artisticMode === 'minimal' && '⚪'}
          {artisticMode === 'flowing' && '🌊'}
          {artisticMode === 'transcendent' && '✨'}
        </motion.div>
        <div style={{
          color: colors.text,
          fontSize: '0.8rem',
          opacity: 0.8
        }}>
          {artisticMode === 'minimal' && 'Minimal geometric patterns'}
          {artisticMode === 'flowing' && 'Flowing organic patterns'}
          {artisticMode === 'transcendent' && 'Transcendent sacred patterns'}
        </div>
      </motion.div>

      {/* Sacred Geometry Overlay */}
      {artisticMode === 'transcendent' && (
        <motion.div
          className="sacred-geometry-overlay"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            pointerEvents: 'none',
            opacity: 0.1
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ delay: 2.2 }}
        >
          <motion.div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '100px',
              height: '100px',
              border: `2px solid ${colors.spatial}`,
              borderRadius: '50%',
              transform: 'translate(-50%, -50%)'
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '60px',
              height: '60px',
              border: `1px solid ${colors.primary}`,
              borderRadius: '50%',
              transform: 'translate(-50%, -50%)'
            }}
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      )}
    </div>
  );
};
