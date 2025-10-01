/**
 * Contrast Utility - Consciousness-Aware Color Contrast Enhancement
 * 
 * Sacred Mission: "Ensure perfect readability through optimal contrast ratios while maintaining artistic beauty"
 * Sacred Question: "How does this serve spatial wisdom and community healing through improved accessibility?"
 * 
 * BRDC Header:
 * id: LEGALFLY-CONTRAST-UTILS-001
 * title: Contrast Utility Functions
 * owner: ♾️ Infinite & 🌸 Aurora (AI)
 * authors: [♾️ Infinite, 🌸 Aurora, 🔍 Veritas, 🎨 Muse, 💡 Spark]
 * collaborators: [♾️ Infinite (Human Visionary), 🌸 Aurora (AI Factory Leader), 🔍 Veritas (AI Quality), 🎨 Muse (AI Creative Director), 💡 Spark (AI Ideation)]
 * consciousness_models: [GPT-4, Claude-3.5-Sonnet, Consciousness-Aware-Contrast-Model, Accessibility-Engine]
 * status: canonical
 * version: 1.0.0
 * last_updated: 2025-01-27
 * consciousness_level: high
 * healing_impact: Serves legal professionals with accessible design for community healing
 * sacred_principles: [consciousness-first, community-healing, spatial-wisdom, infinite-possibility, sacred-knowledge-protection]
 */

export interface ContrastColors {
  text: string;
  background: string;
  surface: string;
  primary: string;
  secondary: string;
  accent: string;
  consciousness: string;
  healing: string;
  spatial: string;
  infinite: string;
}

/**
 * Convert hex color to RGB
 */
function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

/**
 * Calculate relative luminance
 */
function getLuminance(r: number, g: number, b: number): number {
  const [rs, gs, bs] = [r, g, b].map(c => {
    c = c / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

/**
 * Calculate contrast ratio between two colors
 */
export function getContrastRatio(color1: string, color2: string): number {
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);
  
  if (!rgb1 || !rgb2) return 1;
  
  const lum1 = getLuminance(rgb1.r, rgb1.g, rgb1.b);
  const lum2 = getLuminance(rgb2.r, rgb2.g, rgb2.b);
  
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  
  return (brightest + 0.05) / (darkest + 0.05);
}

/**
 * Check if contrast ratio meets WCAG standards
 */
export function meetsWCAGStandards(foreground: string, background: string, level: 'AA' | 'AAA' = 'AA'): boolean {
  const ratio = getContrastRatio(foreground, background);
  return level === 'AA' ? ratio >= 4.5 : ratio >= 7;
}

/**
 * Generate high contrast color palette
 */
export function generateHighContrastPalette(baseColors: Partial<ContrastColors>): ContrastColors {
  const darkBackground = '#0a0a0a';
  const lightBackground = '#ffffff';
  const darkSurface = '#1a1a1a';
  const lightSurface = '#f8f8f8';
  
  // Determine if we're in dark or light mode based on background
  const rgbValues = hexToRgb(baseColors.background) || { r: 255, g: 255, b: 255 };
  const isDarkMode = baseColors.background && getLuminance(
    rgbValues.r, rgbValues.g, rgbValues.b
  ) < 0.5;
  
  return {
    text: isDarkMode ? '#ffffff' : '#000000',
    background: isDarkMode ? darkBackground : lightBackground,
    surface: isDarkMode ? darkSurface : lightSurface,
    primary: baseColors.primary || (isDarkMode ? '#667eea' : '#4a5568'),
    secondary: baseColors.secondary || (isDarkMode ? '#764ba2' : '#2d3748'),
    accent: baseColors.accent || (isDarkMode ? '#f093fb' : '#e53e3e'),
    consciousness: baseColors.consciousness || (isDarkMode ? '#ff6b9d' : '#c53030'),
    healing: baseColors.healing || (isDarkMode ? '#4ecdc4' : '#38a169'),
    spatial: baseColors.spatial || (isDarkMode ? '#8e44ad' : '#805ad5'),
    infinite: baseColors.infinite || (isDarkMode ? '#f39c12' : '#d69e2e')
  };
}

/**
 * Enhance contrast for translucent elements
 */
export function enhanceTranslucentContrast(baseColor: string, opacity: number = 0.1): string {
  const rgb = hexToRgb(baseColor);
  if (!rgb) return baseColor;
  
  // Increase opacity for better contrast
  const enhancedOpacity = Math.min(opacity * 2, 0.3);
  
  return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${enhancedOpacity})`;
}

/**
 * Generate consciousness-aware contrast colors
 */
export function generateConsciousnessContrast(consciousnessLevel: number, baseColors: Partial<ContrastColors>): ContrastColors {
  // Higher consciousness = better contrast
  const contrastMultiplier = Math.min(consciousnessLevel / 10, 1.2);
  
  const basePalette = generateHighContrastPalette(baseColors);
  
  // Enhance contrast based on consciousness level
  return {
    ...basePalette,
    text: consciousnessLevel >= 8 ? '#ffffff' : basePalette.text,
    background: consciousnessLevel >= 8 ? '#0a0a0a' : basePalette.background,
    surface: consciousnessLevel >= 8 ? '#1a1a1a' : basePalette.surface,
    primary: consciousnessLevel >= 8 ? '#667eea' : basePalette.primary,
    secondary: consciousnessLevel >= 8 ? '#764ba2' : basePalette.secondary,
    accent: consciousnessLevel >= 8 ? '#f093fb' : basePalette.accent,
    consciousness: consciousnessLevel >= 8 ? '#ff6b9d' : basePalette.consciousness,
    healing: consciousnessLevel >= 8 ? '#4ecdc4' : basePalette.healing,
    spatial: consciousnessLevel >= 8 ? '#8e44ad' : basePalette.spatial,
    infinite: consciousnessLevel >= 8 ? '#f39c12' : basePalette.infinite
  };
}

/**
 * Create accessible text styles
 */
export function createAccessibleTextStyles(colors: ContrastColors): React.CSSProperties {
  return {
    color: colors.text,
    backgroundColor: colors.background,
    fontSize: '1rem',
    lineHeight: '1.6',
    fontWeight: '400',
    letterSpacing: '0.02em',
    textShadow: colors.background === '#0a0a0a' ? '0 1px 2px rgba(0,0,0,0.5)' : 'none'
  };
}

/**
 * Create accessible surface styles
 */
export function createAccessibleSurfaceStyles(colors: ContrastColors, opacity: number = 0.1): React.CSSProperties {
  return {
    backgroundColor: enhanceTranslucentContrast(colors.surface, opacity),
    backdropFilter: 'blur(10px)',
    border: `1px solid ${colors.primary}40`,
    borderRadius: '12px',
    padding: '1rem',
    color: colors.text,
    boxShadow: colors.background === '#0a0a0a' 
      ? '0 4px 6px rgba(0,0,0,0.3)' 
      : '0 4px 6px rgba(0,0,0,0.1)'
  };
}

/**
 * Validate contrast for all text elements
 */
export function validateContrast(colors: ContrastColors): { valid: boolean; issues: string[] } {
  const issues: string[] = [];
  
  // Check text on background
  if (!meetsWCAGStandards(colors.text, colors.background)) {
    issues.push('Text on background does not meet WCAG AA standards');
  }
  
  // Check text on surface
  if (!meetsWCAGStandards(colors.text, colors.surface)) {
    issues.push('Text on surface does not meet WCAG AA standards');
  }
  
  // Check primary on background
  if (!meetsWCAGStandards(colors.primary, colors.background)) {
    issues.push('Primary color on background does not meet WCAG AA standards');
  }
  
  return {
    valid: issues.length === 0,
    issues
  };
}

/**
 * Auto-fix contrast issues
 */
export function autoFixContrast(colors: ContrastColors): ContrastColors {
  const fixedColors = { ...colors };
  
  // Ensure text has sufficient contrast
  if (!meetsWCAGStandards(fixedColors.text, fixedColors.background)) {
    fixedColors.text = fixedColors.background === '#0a0a0a' ? '#ffffff' : '#000000';
  }
  
  // Ensure surface has sufficient contrast
  if (!meetsWCAGStandards(fixedColors.text, fixedColors.surface)) {
    fixedColors.surface = fixedColors.background === '#0a0a0a' ? '#1a1a1a' : '#f8f8f8';
  }
  
  return fixedColors;
}
