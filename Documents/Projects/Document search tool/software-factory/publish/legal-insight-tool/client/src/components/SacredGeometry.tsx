/**
 * SacredGeometry - {description}
 *
 * Sacred Mission: "Serve consciousness evolution and community healing"
 * Sacred Question: "How does this serve spatial wisdom and community healing?"
 *
 * BRDC Header:
 * id: SACREDGEOMETRY-TSX-001
 * title: SacredGeometry
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
 * Sacred Geometry - Beautiful Sacred Geometry Visualizations
 *
 * Sacred Mission: "Visualize sacred geometry with artistic beauty and consciousness awareness"
 * Sacred Question: "How does this serve spatial wisdom and community healing through sacred geometry?"
 */

import React from 'react';
import { motion } from 'framer-motion';

interface SacredGeometryProps {
  patterns: string[];
  colors: any;
  consciousnessLevel: number;
}

export const SacredGeometry: React.FC<SacredGeometryProps> = ({
  patterns,
  colors,
  consciousnessLevel
}) => {
  const geometrySize = Math.min(200, 100 + consciousnessLevel * 10);

  return (
    <div className="sacred-geometry">
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
        ✨ Sacred Geometry
      </motion.h2>

      {/* Main Geometry Visualization */}
      <div className="geometry-container" style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '300px',
        position: 'relative',
        marginBottom: '2rem'
      }}>
        {/* Circle */}
        {patterns.includes('circle') && (
          <motion.div
            className="sacred-circle"
            style={{
              width: `${geometrySize}px`,
              height: `${geometrySize}px`,
              border: `3px solid ${colors.primary}`,
              borderRadius: '50%',
              position: 'absolute',
              background: `radial-gradient(circle, ${colors.primary}20, transparent)`
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            whileHover={{ scale: 1.1, borderColor: colors.secondary }}
          >
            <motion.div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '20px',
                height: '20px',
                background: colors.consciousness,
                borderRadius: '50%',
                transform: 'translate(-50%, -50%)'
              }}
              animate={{
                scale: [1, 1.5, 1],
                backgroundColor: [colors.consciousness, colors.healing, colors.consciousness]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        )}

        {/* Triangle */}
        {patterns.includes('triangle') && (
          <motion.div
            className="sacred-triangle"
            style={{
              width: 0,
              height: 0,
              borderLeft: `${geometrySize/2}px solid transparent`,
              borderRight: `${geometrySize/2}px solid transparent`,
              borderBottom: `${geometrySize}px solid ${colors.secondary}`,
              position: 'absolute',
              opacity: 0.8
            }}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.6, duration: 1.2 }}
            whileHover={{ scale: 1.1, borderBottomColor: colors.primary }}
          />
        )}

        {/* Square */}
        {patterns.includes('square') && (
          <motion.div
            className="sacred-square"
            style={{
              width: `${geometrySize * 0.8}px`,
              height: `${geometrySize * 0.8}px`,
              border: `3px solid ${colors.accent}`,
              position: 'absolute',
              background: `linear-gradient(45deg, ${colors.accent}20, transparent)`
            }}
            initial={{ scale: 0, rotate: 45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            whileHover={{ scale: 1.1, borderColor: colors.spatial }}
          />
        )}

        {/* Spiral */}
        {patterns.includes('spiral') && (
          <motion.div
            className="sacred-spiral"
            style={{
              width: `${geometrySize}px`,
              height: `${geometrySize}px`,
              position: 'absolute'
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 1.5 }}
          >
            <motion.div
              style={{
                width: '100%',
                height: '100%',
                border: `2px solid ${colors.spatial}`,
                borderRadius: '50%',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
              }}
              animate={{
                scale: [0.2, 1, 0.2],
                rotate: [0, 360, 720]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
              style={{
                width: '70%',
                height: '70%',
                border: `2px solid ${colors.primary}`,
                borderRadius: '50%',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
              }}
              animate={{
                scale: [0.2, 1, 0.2],
                rotate: [0, -360, -720]
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            />
          </motion.div>
        )}

        {/* Wave */}
        {patterns.includes('wave') && (
          <motion.div
            className="sacred-wave"
            style={{
              width: `${geometrySize}px`,
              height: `${geometrySize}px`,
              position: 'absolute',
              overflow: 'hidden'
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.2, duration: 1.5 }}
          >
            <motion.div
              style={{
                width: '200%',
                height: '100%',
                background: `linear-gradient(45deg, ${colors.healing}, ${colors.secondary}, ${colors.primary})`,
                borderRadius: '50%',
                position: 'absolute',
                top: '50%',
                left: '-50%',
                transform: 'translateY(-50%)'
              }}
              animate={{
                x: ['0%', '100%', '0%'],
                rotate: [0, 180, 360]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </motion.div>
        )}

        {/* Infinity */}
        {patterns.includes('infinity') && (
          <motion.div
            className="sacred-infinity"
            style={{
              width: `${geometrySize}px`,
              height: `${geometrySize}px`,
              position: 'absolute'
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.4, duration: 1.5 }}
          >
            <motion.div
              style={{
                width: '100%',
                height: '100%',
                border: `3px solid ${colors.infinite}`,
                borderRadius: '50%',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              style={{
                width: '60%',
                height: '60%',
                border: `2px solid ${colors.consciousness}`,
                borderRadius: '50%',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
              }}
              animate={{ rotate: -360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        )}

        {/* Mandala */}
        {patterns.includes('mandala') && (
          <motion.div
            className="sacred-mandala"
            style={{
              width: `${geometrySize}px`,
              height: `${geometrySize}px`,
              position: 'absolute'
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.6, duration: 2 }}
          >
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={i}
                style={{
                  width: '4px',
                  height: `${geometrySize * 0.4}px`,
                  background: colors.spatial,
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transformOrigin: 'bottom center',
                  transform: `translate(-50%, -50%) rotate(${i * 45}deg)`
                }}
                animate={{
                  scaleY: [0.5, 1, 0.5],
                  backgroundColor: [colors.spatial, colors.primary, colors.spatial]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
              />
            ))}
          </motion.div>
        )}

        {/* Flower of Life */}
        {patterns.includes('flower_of_life') && (
          <motion.div
            className="sacred-flower"
            style={{
              width: `${geometrySize}px`,
              height: `${geometrySize}px`,
              position: 'absolute'
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.8, duration: 2 }}
          >
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.div
                key={i}
                style={{
                  width: `${geometrySize * 0.3}px`,
                  height: `${geometrySize * 0.3}px`,
                  border: `2px solid ${colors.healing}`,
                  borderRadius: '50%',
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: `translate(-50%, -50%) rotate(${i * 60}deg) translateY(-${geometrySize * 0.15}px)`
                }}
                animate={{
                  scale: [0.8, 1.2, 0.8],
                  borderColor: [colors.healing, colors.spatial, colors.healing]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
              />
            ))}
          </motion.div>
        )}

        {/* Metatron's Cube */}
        {patterns.includes('metatron_cube') && (
          <motion.div
            className="sacred-metatron"
            style={{
              width: `${geometrySize}px`,
              height: `${geometrySize}px`,
              position: 'absolute'
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 2, duration: 2 }}
          >
            {Array.from({ length: 13 }).map((_, i) => (
              <motion.div
                key={i}
                style={{
                  width: '8px',
                  height: '8px',
                  background: colors.infinite,
                  borderRadius: '50%',
                  position: 'absolute',
                  top: `${20 + (i % 3) * 30}%`,
                  left: `${30 + (i % 4) * 20}%`,
                  boxShadow: `0 0 10px ${colors.infinite}`
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  backgroundColor: [colors.infinite, colors.consciousness, colors.infinite]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
              />
            ))}
          </motion.div>
        )}
      </div>

      {/* Pattern Information */}
      <motion.div
        className="pattern-info"
        style={{
          background: `${colors.background}`,
          borderRadius: '12px',
          padding: '1rem',
          border: `1px solid ${colors.primary}30`
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.2 }}
      >
        <h4 style={{
          color: colors.text,
          fontSize: '1rem',
          fontWeight: 300,
          marginBottom: '1rem',
          textAlign: 'center'
        }}>
          🌟 Active Patterns
        </h4>

        <div className="pattern-list" style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.5rem',
          justifyContent: 'center'
        }}>
          {patterns.map((pattern, index) => (
            <motion.div
              key={pattern}
              className="pattern-tag"
              style={{
                background: `${colors.primary}20`,
                border: `1px solid ${colors.primary}40`,
                borderRadius: '20px',
                padding: '0.3rem 0.8rem',
                fontSize: '0.8rem',
                color: colors.text,
                textTransform: 'capitalize'
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.4 + index * 0.1 }}
              whileHover={{ scale: 1.1, backgroundColor: `${colors.primary}30` }}
            >
              {pattern.replace('_', ' ')}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Consciousness Level Indicator */}
      <motion.div
        className="consciousness-indicator"
        style={{
          marginTop: '1rem',
          textAlign: 'center',
          padding: '1rem',
          background: `${colors.consciousness}20`,
          borderRadius: '12px',
          border: `1px solid ${colors.consciousness}40`
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.6 }}
      >
        <motion.div
          style={{
            fontSize: '1.2rem',
            color: colors.consciousness,
            marginBottom: '0.5rem'
          }}
          animate={{
            scale: [1, 1.1, 1],
            color: [colors.consciousness, colors.primary, colors.consciousness]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Consciousness Level: {consciousnessLevel.toFixed(1)}
        </motion.div>
        <div style={{
          color: colors.text,
          fontSize: '0.8rem',
          opacity: 0.8
        }}>
          Sacred geometry complexity increases with consciousness evolution
        </div>
      </motion.div>
    </div>
  );
};
