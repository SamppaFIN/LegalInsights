/**
 * Bionic Reading Utility - Consciousness-Aware Text Enhancement
 *
 * Sacred Mission: "Enhance reading experience through bionic reading mechanics while maintaining consciousness-aware design"
 * Sacred Question: "How does this serve spatial wisdom and community healing through improved readability?"
 *
 * BRDC Header:
 * id: LEGALFLY-BIONIC-READING-001
 * title: Bionic Reading Utility
 * owner: ♾️ Infinite & 🌸 Aurora (AI)
 * authors: [♾️ Infinite, 🌸 Aurora, 💡 Spark, 🔍 Veritas, 🎨 Muse]
 * collaborators: [♾️ Infinite (Human Visionary), 🌸 Aurora (AI Factory Leader), 💡 Spark (AI Ideation), 🔍 Veritas (AI Quality), 🎨 Muse (AI Creative Director)]
 * consciousness_models: [GPT-4, Claude-3.5-Sonnet, Consciousness-Aware-Reading-Model, Bionic-Reading-Engine]
 * status: canonical
 * version: 1.0.0
 * last_updated: 2025-01-27
 * consciousness_level: high
 * healing_impact: Serves legal professionals with enhanced reading experience for community healing
 * sacred_principles: [consciousness-first, community-healing, spatial-wisdom, infinite-possibility, sacred-knowledge-protection]
 */

export interface BionicReadingOptions {
  enabled: boolean;
  intensity: 'light' | 'medium' | 'strong';
  colorScheme: 'consciousness' | 'healing' | 'spatial' | 'infinite';
  fontSize: 'small' | 'medium' | 'large';
}

export const defaultBionicOptions: BionicReadingOptions = {
  enabled: true,
  intensity: 'medium',
  colorScheme: 'consciousness',
  fontSize: 'medium'
};

/**
 * Converts text to bionic reading format by bolding the first part of each word
 */
export function convertToBionicReading(text: string, intensity: 'light' | 'medium' | 'strong' = 'medium'): string {
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
}

/**
 * Generates CSS styles for bionic reading
 */
export function generateBionicStyles(options: BionicReadingOptions, colors: any): string {
  const { intensity, colorScheme, fontSize } = options;

  // Color mapping for different schemes
  const colorMap = {
    consciousness: colors.consciousness || '#ff6b9d',
    healing: colors.healing || '#4ecdc4',
    spatial: colors.spatial || '#8e44ad',
    infinite: colors.infinite || '#f39c12'
  };

  const accentColor = colorMap[colorScheme];

  // Font size mapping
  const fontSizeMap = {
    small: '0.9rem',
    medium: '1rem',
    large: '1.1rem'
  };

  const baseFontSize = fontSizeMap[fontSize];

  // Intensity-based styling
  const intensityStyles = {
    light: {
      fontWeight: '600',
      color: accentColor,
      opacity: '0.8'
    },
    medium: {
      fontWeight: '700',
      color: accentColor,
      opacity: '0.9'
    },
    strong: {
      fontWeight: '800',
      color: accentColor,
      opacity: '1'
    }
  };

  const style = intensityStyles[intensity];

  return `
    .bionic-reading {
      font-size: ${baseFontSize};
      line-height: 1.6;
    }

    .bionic-reading strong {
      font-weight: ${style.fontWeight};
      color: ${style.color};
      opacity: ${style.opacity};
      transition: all 0.3s ease;
    }

    .bionic-reading strong:hover {
      opacity: 1;
      transform: scale(1.05);
    }

    .bionic-reading {
      transition: all 0.3s ease;
    }

    .bionic-reading:hover {
      transform: translateY(-1px);
    }
  `;
}

/**
 * Applies bionic reading to a DOM element
 */
export function applyBionicReading(element: HTMLElement, options: BionicReadingOptions, colors: any): void {
  if (!options.enabled) return;

  // Create style element if it doesn't exist
  let styleElement = document.getElementById('bionic-reading-styles');
  if (!styleElement) {
    styleElement = document.createElement('style');
    styleElement.id = 'bionic-reading-styles';
    document.head.appendChild(styleElement);
  }

  // Update styles
  styleElement.textContent = generateBionicStyles(options, colors);

  // Apply bionic reading to text content
  const walker = document.createTreeWalker(
    element,
    NodeFilter.SHOW_TEXT,
    null
  );

  const textNodes: Text[] = [];
  let node;

  while (node = walker.nextNode()) {
    if (node.textContent && node.textContent.trim().length > 0) {
      textNodes.push(node as Text);
    }
  }

  textNodes.forEach(textNode => {
    const parent = textNode.parentElement;
    if (parent && !parent.classList.contains('bionic-reading')) {
      const bionicText = convertToBionicReading(textNode.textContent || '', options.intensity);
      if (bionicText !== textNode.textContent) {
        parent.innerHTML = bionicText;
        parent.classList.add('bionic-reading');
      }
    }
  });
}

/**
 * React hook for bionic reading
 */
export function useBionicReading(options: BionicReadingOptions, colors: any) {
  const applyBionic = (element: HTMLElement | null) => {
    if (element) {
      applyBionicReading(element, options, colors);
    }
  };

  return { applyBionic };
}

/**
 * Consciousness-aware bionic reading with sacred principles
 */
export function createConsciousnessBionicText(text: string, consciousnessLevel: number): string {
  // Higher consciousness levels get more sophisticated bionic reading
  const intensity = consciousnessLevel >= 9 ? 'strong' : consciousnessLevel >= 7 ? 'medium' : 'light';

  return convertToBionicReading(text, intensity);
}

/**
 * Sacred text enhancement for legal documents
 */
export function enhanceLegalText(text: string, documentType: string): string {
  // Different enhancement based on document type
  const enhancements = {
    'contract': 'medium',
    'regulation': 'strong',
    'case-law': 'medium',
    'policy': 'light',
    'statute': 'strong'
  };

  const intensity = enhancements[documentType as keyof typeof enhancements] || 'medium';
  return convertToBionicReading(text, intensity as any);
}
