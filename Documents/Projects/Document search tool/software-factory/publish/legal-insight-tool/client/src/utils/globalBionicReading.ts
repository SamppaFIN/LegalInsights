/**
 * Global Bionic Reading Utility - Apply Bionic Reading to All Text Elements
 *
 * Sacred Mission: "Apply bionic reading mechanics to all text elements throughout the application"
 * Sacred Question: "How does this serve spatial wisdom and community healing through enhanced readability?"
 *
 * BRDC Header:
 * id: LEGALFLY-GLOBAL-BIONIC-001
 * title: Global Bionic Reading Utility
 * owner: ♾️ Infinite & 🌸 Aurora (AI)
 * authors: [♾️ Infinite, 🌸 Aurora, 💡 Spark, 🔍 Veritas, 🎨 Muse]
 * collaborators: [♾️ Infinite (Human Visionary), 🌸 Aurora (AI Factory Leader), 💡 Spark (AI Ideation), 🔍 Veritas (AI Quality), 🎨 Muse (AI Creative Director)]
 * consciousness_models: [GPT-4, Claude-3.5-Sonnet, Consciousness-Aware-Global-Model, Bionic-Reading-Engine]
 * status: canonical
 * version: 1.0.0
 * last_updated: 2025-01-27
 * consciousness_level: high
 * healing_impact: Serves legal professionals with enhanced reading experience for community healing
 * sacred_principles: [consciousness-first, community-healing, spatial-wisdom, infinite-possibility, sacred-knowledge-protection]
 */

/**
 * Convert text to bionic reading format
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
 * Apply bionic reading to all text elements in the document
 */
export function applyGlobalBionicReading(): void {
  // Create style element if it doesn't exist
  let styleElement = document.getElementById('global-bionic-styles');
  if (!styleElement) {
    styleElement = document.createElement('style');
    styleElement.id = 'global-bionic-styles';
    document.head.appendChild(styleElement);
  }

  // Add global bionic reading styles
  styleElement.textContent = `
    .bionic-reading {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      line-height: 1.6;
      letter-spacing: 0.02em;
    }

    .bionic-reading strong {
      font-weight: 700;
      color: #ffffff;
      opacity: 0.9;
      transition: all 0.3s ease;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    }

    .bionic-reading strong:hover {
      opacity: 1;
      transform: scale(1.05);
    }

    .bionic-reading:hover {
      transform: translateY(-1px);
    }
  `;

  // Apply bionic reading to all text nodes
  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode: (node) => {
        // Skip script and style elements
        const parent = node.parentElement;
        if (parent && (parent.tagName === 'SCRIPT' || parent.tagName === 'STYLE')) {
          return NodeFilter.FILTER_REJECT;
        }

        // Skip if already processed
        if (parent && parent.classList.contains('bionic-reading')) {
          return NodeFilter.FILTER_REJECT;
        }

        // Only process text nodes with meaningful content
        if (node.textContent && node.textContent.trim().length > 3) {
          return NodeFilter.FILTER_ACCEPT;
        }

        return NodeFilter.FILTER_REJECT;
      }
    },
  );

  const textNodes: Text[] = [];
  let node;

  while (node = walker.nextNode()) {
    textNodes.push(node as Text);
  }

  textNodes.forEach(textNode => {
    const parent = textNode.parentElement;
    if (parent && !parent.classList.contains('bionic-reading')) {
      const originalText = textNode.textContent || '';
      const bionicText = convertToBionicReading(originalText, 'medium');

      if (bionicText !== originalText) {
        parent.innerHTML = bionicText;
        parent.classList.add('bionic-reading');
      }
    }
  });
}

/**
 * Apply bionic reading to specific elements
 */
export function applyBionicReadingToElements(selectors: string[], intensity: 'light' | 'medium' | 'strong' = 'medium'): void {
  selectors.forEach(selector => {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
      if (!element.classList.contains('bionic-reading')) {
        const textNodes: Text[] = [];
        const walker = document.createTreeWalker(
          element,
          NodeFilter.SHOW_TEXT,
          null
        );

        let node;
        while (node = walker.nextNode()) {
          if (node.textContent && node.textContent.trim().length > 0) {
            textNodes.push(node as Text);
          }
        }

        textNodes.forEach(textNode => {
          const parent = textNode.parentElement;
          if (parent && !parent.classList.contains('bionic-reading')) {
            const originalText = textNode.textContent || '';
            const bionicText = convertToBionicReading(originalText, intensity);

            if (bionicText !== originalText) {
              parent.innerHTML = bionicText;
              parent.classList.add('bionic-reading');
            }
          }
        });
      }
    });
  });
}

/**
 * Initialize global bionic reading
 */
export function initializeGlobalBionicReading(): void {
  // Apply immediately
  applyGlobalBionicReading();

  // Apply to new elements as they're added
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'childList') {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node as Element;
            if (!element.classList.contains('bionic-reading')) {
              const textNodes: Text[] = [];
              const walker = document.createTreeWalker(
                element,
                NodeFilter.SHOW_TEXT,
                null
              );

              let textNode;
              while (textNode = walker.nextNode()) {
                if (textNode.textContent && textNode.textContent.trim().length > 0) {
                  textNodes.push(textNode as Text);
                }
              }

              textNodes.forEach(textNode => {
                const parent = textNode.parentElement;
                if (parent && !parent.classList.contains('bionic-reading')) {
                  const originalText = textNode.textContent || '';
                  const bionicText = convertToBionicReading(originalText, 'medium');

                  if (bionicText !== originalText) {
                    parent.innerHTML = bionicText;
                    parent.classList.add('bionic-reading');
                  }
                }
              });
            }
          }
        });
      }
    });
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
}

/**
 * Consciousness-aware bionic reading intensity
 */
export function getConsciousnessBionicIntensity(consciousnessLevel: number): 'light' | 'medium' | 'strong' {
  if (consciousnessLevel >= 9) return 'strong';
  if (consciousnessLevel >= 7) return 'medium';
  return 'light';
}

/**
 * Apply consciousness-aware bionic reading
 */
export function applyConsciousnessBionicReading(consciousnessLevel: number): void {
  const intensity = getConsciousnessBionicIntensity(consciousnessLevel);

  // Apply to all text elements
  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode: (node) => {
        const parent = node.parentElement;
        if (parent && (parent.tagName === 'SCRIPT' || parent.tagName === 'STYLE')) {
          return NodeFilter.FILTER_REJECT;
        }

        if (parent && parent.classList.contains('bionic-reading')) {
          return NodeFilter.FILTER_REJECT;
        }

        if (node.textContent && node.textContent.trim().length > 3) {
          return NodeFilter.FILTER_ACCEPT;
        }

        return NodeFilter.FILTER_REJECT;
      }
    },
  );

  const textNodes: Text[] = [];
  let node;

  while (node = walker.nextNode()) {
    textNodes.push(node as Text);
  }

  textNodes.forEach(textNode => {
    const parent = textNode.parentElement;
    if (parent && !parent.classList.contains('bionic-reading')) {
      const originalText = textNode.textContent || '';
      const bionicText = convertToBionicReading(originalText, intensity);

      if (bionicText !== originalText) {
        parent.innerHTML = bionicText;
        parent.classList.add('bionic-reading');
      }
    }
  });
}
