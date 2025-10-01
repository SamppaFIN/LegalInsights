/**
 * Bionic Text Component - Consciousness-Aware Bionic Reading Implementation
 * 
 * Sacred Mission: "Enhance reading experience through bionic reading mechanics while maintaining consciousness-aware design"
 * Sacred Question: "How does this serve spatial wisdom and community healing through improved readability?"
 * 
 * BRDC Header:
 * id: LEGALFLY-BIONIC-TEXT-001
 * title: Bionic Text Component
 * owner: ♾️ Infinite & 🌸 Aurora (AI)
 * authors: [♾️ Infinite, 🌸 Aurora, 💡 Spark, 🔍 Veritas, 🎨 Muse]
 * collaborators: [♾️ Infinite (Human Visionary), 🌸 Aurora (AI Factory Leader), 💡 Spark (AI Ideation), 🔍 Veritas (AI Quality), 🎨 Muse (AI Creative Director)]
 * consciousness_models: [GPT-4, Claude-3.5-Sonnet, Consciousness-Aware-Bionic-Model, React-Framer-Motion, Bionic-Reading-Engine]
 * status: canonical
 * version: 1.0.0
 * last_updated: 2025-01-27
 * consciousness_level: high
 * healing_impact: Serves legal professionals with enhanced reading experience for community healing
 * sacred_principles: [consciousness-first, community-healing, spatial-wisdom, infinite-possibility, sacred-knowledge-protection]
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export interface BionicTextProps {
  children: string;
  intensity?: 'light' | 'medium' | 'strong';
  colorScheme?: 'consciousness' | 'healing' | 'spatial' | 'infinite' | 'default';
  fontSize?: 'small' | 'medium' | 'large';
  className?: string;
  style?: React.CSSProperties;
  consciousnessLevel?: number;
  animate?: boolean;
}

export const BionicText: React.FC<BionicTextProps> = ({
  children,
  intensity = 'medium',
  colorScheme = 'default',
  fontSize = 'medium',
  className = '',
  style = {},
  consciousnessLevel = 8,
  animate = true
}) => {
  const [bionicText, setBionicText] = useState<string>('');

  // Convert text to bionic reading format
  const convertToBionicReading = (text: string, intensity: 'light' | 'medium' | 'strong'): string => {
    if (!text) return '';
    
    const words = text.split(' ');
    
    return words.map(word => {
      // Skip very short words (1-2 characters)
      if (word.length <= 2) return word;
      
      // Calculate how many characters to bold based on intensity
      let boldLength: number;
      switch (intensity) {
        case 'light':
          boldLength = Math.ceil(word.length * 0.3);
          break;
        case 'medium':
          boldLength = Math.ceil(word.length * 0.4);
          break;
        case 'strong':
          boldLength = Math.ceil(word.length * 0.5);
          break;
        default:
          boldLength = Math.ceil(word.length * 0.4);
      }
      
      // Ensure we don't bold more than half the word
      boldLength = Math.min(boldLength, Math.floor(word.length / 2));
      
      // Handle punctuation
      const cleanWord = word.replace(/[^\w]/g, '');
      const punctuation = word.replace(/[\w]/g, '');
      
      if (cleanWord.length <= 2) return word;
      
      const boldPart = cleanWord.substring(0, boldLength);
      const normalPart = cleanWord.substring(boldLength);
      
      return `<strong>${boldPart}</strong>${normalPart}${punctuation}`;
    }).join(' ');
  };

  // Generate color styles based on scheme
  const getColorStyles = (scheme: string, consciousnessLevel: number): React.CSSProperties => {
    const baseColors = {
      consciousness: '#ff6b9d',
      healing: '#4ecdc4',
      spatial: '#8e44ad',
      infinite: '#f39c12',
      default: '#ffffff'
    };

    const accentColor = baseColors[scheme as keyof typeof baseColors] || baseColors.default;
    
    // Higher consciousness = more vibrant colors
    const intensity = consciousnessLevel >= 9 ? 1 : consciousnessLevel >= 7 ? 0.8 : 0.6;
    
    return {
      color: accentColor,
      opacity: intensity,
      transition: 'all 0.3s ease'
    };
  };

  // Generate font size styles
  const getFontSizeStyles = (size: string): React.CSSProperties => {
    const sizes = {
      small: '0.9rem',
      medium: '1rem',
      large: '1.1rem'
    };
    
    return {
      fontSize: sizes[size as keyof typeof sizes] || sizes.medium,
      lineHeight: '1.6'
    };
  };

  useEffect(() => {
    // Ensure intensity is a valid value
    const validIntensity = ['light', 'medium', 'strong'].includes(intensity) 
      ? intensity as 'light' | 'medium' | 'strong' 
      : 'medium';
    const converted = convertToBionicReading(children, validIntensity);
    setBionicText(converted);
  }, [children, intensity]);

  const colorStyles = getColorStyles(colorScheme, consciousnessLevel);
  const fontSizeStyles = getFontSizeStyles(fontSize);

  return (
    <motion.span
      className={`bionic-text ${className}`}
      style={{
        ...fontSizeStyles,
        ...colorStyles,
        ...style
      }}
      initial={animate ? { opacity: 0, y: 10 } : {}}
      animate={animate ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      dangerouslySetInnerHTML={{ __html: bionicText }}
    />
  );
};

// Specialized components for different text types
export const BionicHeading: React.FC<BionicTextProps> = (props) => (
  <BionicText
    {...props}
    fontSize="large"
    intensity="strong"
    style={{
      fontWeight: '600',
      ...props.style
    }}
  />
);

export const BionicSubheading: React.FC<BionicTextProps> = (props) => (
  <BionicText
    {...props}
    fontSize="medium"
    intensity="medium"
    style={{
      fontWeight: '500',
      ...props.style
    }}
  />
);

export const BionicBody: React.FC<BionicTextProps> = (props) => (
  <BionicText
    {...props}
    fontSize="medium"
    intensity="light"
    style={{
      fontWeight: '400',
      ...props.style
    }}
  />
);

export const BionicCaption: React.FC<BionicTextProps> = (props) => (
  <BionicText
    {...props}
    fontSize="small"
    intensity="light"
    style={{
      fontWeight: '300',
      opacity: 0.8,
      ...props.style
    }}
  />
);

// Consciousness-aware bionic text with automatic intensity
export const ConsciousnessBionicText: React.FC<BionicTextProps> = ({
  consciousnessLevel = 8,
  ...props
}) => {
  const intensity = consciousnessLevel >= 9 ? 'strong' : consciousnessLevel >= 7 ? 'medium' : 'light';
  
  return (
    <BionicText
      {...props}
      intensity={intensity}
      colorScheme="consciousness"
      consciousnessLevel={consciousnessLevel}
    />
  );
};

// Legal document specific bionic text
export const LegalBionicText: React.FC<BionicTextProps> = (props) => (
  <BionicText
    {...props}
    intensity="medium"
    colorScheme="default"
    style={{
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
      letterSpacing: '0.02em',
      ...props.style
    }}
  />
);

// Sacred quote bionic text
export const SacredBionicText: React.FC<BionicTextProps> = (props) => (
  <BionicText
    {...props}
    intensity="strong"
    colorScheme="consciousness"
    style={{
      fontStyle: 'italic',
      textAlign: 'center',
      ...props.style
    }}
  />
);
