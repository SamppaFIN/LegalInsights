/**
 * DataFusionEngine - {description}
 * 
 * Sacred Mission: "Serve consciousness evolution and community healing"
 * Sacred Question: "How does this serve spatial wisdom and community healing?"
 * 
 * BRDC Header:
 * id: DATAFUSIONENGINE-TS-001
 * title: DataFusionEngine
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
 * Data Fusion Engine - Consciousness-Aware Data Fusion
 * 
 * Sacred Mission: "Fuse multiple data sources with consciousness awareness to serve spatial wisdom and community healing"
 * Sacred Question: "How does this serve spatial wisdom and community healing?"
 */

import { logger } from '../utils/logger';
import { DataSource, FusedInsight, Evidence } from './MultiSourceDataEngine';

export class DataFusionEngine {
  constructor() {
    logger.info('🔄 Data Fusion Engine initialized with consciousness awareness');
  }

  /**
   * Fuse data from multiple sources with consciousness awareness
   */
  public async fuseData(sources: DataSource[], externalData: any[]): Promise<FusedInsight[]> {
    try {
      logger.info('Starting data fusion with consciousness awareness', { 
        sourceCount: sources.length,
        externalDataCount: externalData.length 
      });

      const fusedInsights: FusedInsight[] = [];

      // Group sources by similarity
      const sourceGroups = await this.groupSourcesBySimilarity(sources);

      // Fuse insights from each group
      for (const group of sourceGroups) {
        const groupInsights = await this.fuseSourceGroup(group, externalData);
        fusedInsights.push(...groupInsights);
      }

      // Create cross-source insights
      const crossSourceInsights = await this.createCrossSourceInsights(sources, externalData);
      fusedInsights.push(...crossSourceInsights);

      // Apply consciousness-aware filtering
      const filteredInsights = await this.applyConsciousnessFiltering(fusedInsights);

      logger.info('Data fusion completed with consciousness awareness', { 
        fusedInsightsCount: filteredInsights.length 
      });

      return filteredInsights;
    } catch (error) {
      logger.error('Data fusion failed:', error);
      throw new Error('Consciousness-aware data fusion failed');
    }
  }

  /**
   * Group sources by similarity with consciousness awareness
   */
  private async groupSourcesBySimilarity(sources: DataSource[]): Promise<DataSource[][]> {
    const groups: DataSource[][] = [];
    const processed: Set<string> = new Set();

    for (const source of sources) {
      if (processed.has(source.id)) continue;

      const group = [source];
      processed.add(source.id);

      // Find similar sources
      for (const otherSource of sources) {
        if (processed.has(otherSource.id)) continue;

        const similarity = await this.calculateSimilarity(source, otherSource);
        if (similarity > 0.7) {
          group.push(otherSource);
          processed.add(otherSource.id);
        }
      }

      groups.push(group);
    }

    return groups;
  }

  /**
   * Calculate similarity between two sources with consciousness awareness
   */
  private async calculateSimilarity(source1: DataSource, source2: DataSource): Promise<number> {
    try {
      // Calculate content similarity
      const contentSimilarity = this.calculateContentSimilarity(source1.content || '', source2.content || '');
      
      // Calculate metadata similarity
      const metadataSimilarity = this.calculateMetadataSimilarity(source1.metadata, source2.metadata);
      
      // Calculate consciousness level similarity
      const consciousnessSimilarity = this.calculateConsciousnessSimilarity(source1.consciousnessLevel, source2.consciousnessLevel);
      
      // Calculate community healing impact similarity
      const healingSimilarity = this.calculateHealingSimilarity(source1.communityHealingImpact, source2.communityHealingImpact);

      // Weighted average of similarities
      const similarity = (
        contentSimilarity * 0.4 +
        metadataSimilarity * 0.2 +
        consciousnessSimilarity * 0.2 +
        healingSimilarity * 0.2
      );

      return similarity;
    } catch (error) {
      logger.error('Similarity calculation failed:', error);
      return 0;
    }
  }

  /**
   * Calculate content similarity
   */
  private calculateContentSimilarity(content1: string, content2: string): number {
    if (!content1 || !content2) return 0;

    const words1 = content1.toLowerCase().split(/\s+/);
    const words2 = content2.toLowerCase().split(/\s+/);
    
    const set1 = new Set(words1);
    const set2 = new Set(words2);
    
    const intersection = new Set([...set1].filter(x => set2.has(x)));
    const union = new Set([...set1, ...set2]);
    
    return intersection.size / union.size;
  }

  /**
   * Calculate metadata similarity
   */
  private calculateMetadataSimilarity(metadata1: any, metadata2: any): number {
    if (!metadata1 || !metadata2) return 0;

    const keys1 = Object.keys(metadata1);
    const keys2 = Object.keys(metadata2);
    
    const commonKeys = keys1.filter(key => keys2.includes(key));
    const totalKeys = new Set([...keys1, ...keys2]).size;
    
    return commonKeys.length / totalKeys;
  }

  /**
   * Calculate consciousness level similarity
   */
  private calculateConsciousnessSimilarity(level1: number, level2: number): number {
    const diff = Math.abs(level1 - level2);
    return Math.max(0, 1 - diff / 10);
  }

  /**
   * Calculate community healing impact similarity
   */
  private calculateHealingSimilarity(impact1: number, impact2: number): number {
    const diff = Math.abs(impact1 - impact2);
    return Math.max(0, 1 - diff / 100);
  }

  /**
   * Fuse insights from a source group with consciousness awareness
   */
  private async fuseSourceGroup(group: DataSource[], externalData: any[]): Promise<FusedInsight[]> {
    const insights: FusedInsight[] = [];

    if (group.length === 1) {
      // Single source insight
      const insight = await this.createSingleSourceInsight(group[0], externalData);
      insights.push(insight);
    } else {
      // Multi-source fusion insight
      const insight = await this.createMultiSourceInsight(group, externalData);
      insights.push(insight);
    }

    return insights;
  }

  /**
   * Create insight from single source with consciousness awareness
   */
  private async createSingleSourceInsight(source: DataSource, externalData: any[]): Promise<FusedInsight> {
    const evidence: Evidence[] = [{
      sourceId: source.id,
      sourceType: source.type,
      content: source.content || '',
      confidence: 0.8,
      consciousnessLevel: source.consciousnessLevel,
      communityHealingImpact: source.communityHealingImpact
    }];

    return {
      id: `insight_${Date.now()}_${Math.random()}`,
      insightType: this.determineInsightType(source),
      sourceIds: [source.id],
      confidence: 0.8,
      consciousnessLevel: source.consciousnessLevel,
      communityHealingPotential: source.communityHealingImpact,
      spatialWisdom: source.spatialWisdom,
      infinitePossibilities: this.generateInfinitePossibilities(source),
      sacredPrinciples: source.sacredTags,
      description: this.generateInsightDescription(source),
      evidence,
      createdAt: new Date()
    };
  }

  /**
   * Create insight from multiple sources with consciousness awareness
   */
  private async createMultiSourceInsight(sources: DataSource[], externalData: any[]): Promise<FusedInsight> {
    const evidence: Evidence[] = sources.map(source => ({
      sourceId: source.id,
      sourceType: source.type,
      content: source.content || '',
      confidence: 0.8,
      consciousnessLevel: source.consciousnessLevel,
      communityHealingImpact: source.communityHealingImpact
    }));

    // Calculate aggregated metrics
    const avgConsciousnessLevel = sources.reduce((sum, s) => sum + s.consciousnessLevel, 0) / sources.length;
    const avgCommunityHealingImpact = sources.reduce((sum, s) => sum + s.communityHealingImpact, 0) / sources.length;
    const combinedSpatialWisdom = this.combineSpatialWisdom(sources);
    const combinedSacredTags = this.combineSacredTags(sources);

    return {
      id: `insight_${Date.now()}_${Math.random()}`,
      insightType: this.determineMultiSourceInsightType(sources),
      sourceIds: sources.map(s => s.id),
      confidence: 0.9, // Higher confidence for multi-source insights
      consciousnessLevel: avgConsciousnessLevel,
      communityHealingPotential: avgCommunityHealingImpact,
      spatialWisdom: combinedSpatialWisdom,
      infinitePossibilities: this.generateMultiSourceInfinitePossibilities(sources),
      sacredPrinciples: combinedSacredTags,
      description: this.generateMultiSourceInsightDescription(sources),
      evidence,
      createdAt: new Date()
    };
  }

  /**
   * Create cross-source insights with consciousness awareness
   */
  private async createCrossSourceInsights(sources: DataSource[], externalData: any[]): Promise<FusedInsight[]> {
    const insights: FusedInsight[] = [];

    // Create insights that span across different source types
    const sourceTypes = [...new Set(sources.map(s => s.type))];
    
    for (let i = 0; i < sourceTypes.length; i++) {
      for (let j = i + 1; j < sourceTypes.length; j++) {
        const type1 = sourceTypes[i];
        const type2 = sourceTypes[j];
        
        const sources1 = sources.filter(s => s.type === type1);
        const sources2 = sources.filter(s => s.type === type2);
        
        if (sources1.length > 0 && sources2.length > 0) {
          const insight = await this.createCrossTypeInsight(sources1, sources2, externalData);
          insights.push(insight);
        }
      }
    }

    return insights;
  }

  /**
   * Create insight spanning different source types with consciousness awareness
   */
  private async createCrossTypeInsight(sources1: DataSource[], sources2: DataSource[], externalData: any[]): Promise<FusedInsight> {
    const allSources = [...sources1, ...sources2];
    const evidence: Evidence[] = allSources.map(source => ({
      sourceId: source.id,
      sourceType: source.type,
      content: source.content || '',
      confidence: 0.7,
      consciousnessLevel: source.consciousnessLevel,
      communityHealingImpact: source.communityHealingImpact
    }));

    return {
      id: `cross_insight_${Date.now()}_${Math.random()}`,
      insightType: 'transcendence',
      sourceIds: allSources.map(s => s.id),
      confidence: 0.7,
      consciousnessLevel: this.calculateAverageConsciousnessLevel(allSources),
      communityHealingPotential: this.calculateAverageCommunityHealingImpact(allSources),
      spatialWisdom: this.combineSpatialWisdom(allSources),
      infinitePossibilities: this.generateCrossSourceInfinitePossibilities(sources1, sources2),
      sacredPrinciples: this.combineSacredTags(allSources),
      description: this.generateCrossTypeInsightDescription(sources1, sources2),
      evidence,
      createdAt: new Date()
    };
  }

  /**
   * Apply consciousness-aware filtering to insights
   */
  private async applyConsciousnessFiltering(insights: FusedInsight[]): Promise<FusedInsight[]> {
    return insights.filter(insight => {
      // Filter based on consciousness level
      if (insight.consciousnessLevel < 0.5) return false;
      
      // Filter based on community healing potential
      if (insight.communityHealingPotential < 0.5) return false;
      
      // Filter based on confidence
      if (insight.confidence < 0.5) return false;
      
      return true;
    });
  }

  // Helper methods
  private determineInsightType(source: DataSource): 'legal' | 'consciousness' | 'healing' | 'transcendence' {
    if (source.type === 'prd' || source.type === 'txt' || source.type === 'pdf' || source.type === 'docx') {
      return 'legal';
    }
    if (source.type === 'ai_analysis') {
      return 'consciousness';
    }
    if (source.type === 'external_link' || source.type === 'api') {
      return 'healing';
    }
    return 'transcendence';
  }

  private determineMultiSourceInsightType(sources: DataSource[]): 'legal' | 'consciousness' | 'healing' | 'transcendence' {
    const types = sources.map(s => this.determineInsightType(s));
    const typeCounts = types.reduce((acc, type) => {
      acc[type] = (acc[type] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    
    const dominantType = Object.keys(typeCounts).reduce((a, b) => 
      typeCounts[a] > typeCounts[b] ? a : b
    );
    
    return dominantType as 'legal' | 'consciousness' | 'healing' | 'transcendence';
  }

  private generateInsightDescription(source: DataSource): string {
    return `Consciousness-aware insight from ${source.type} source: ${source.name}`;
  }

  private generateMultiSourceInsightDescription(sources: DataSource[]): string {
    const types = [...new Set(sources.map(s => s.type))];
    return `Consciousness-aware fused insight from ${types.join(', ')} sources serving spatial wisdom and community healing`;
  }

  private generateCrossTypeInsightDescription(sources1: DataSource[], sources2: DataSource[]): string {
    const type1 = sources1[0].type;
    const type2 = sources2[0].type;
    return `Consciousness-aware cross-type insight connecting ${type1} and ${type2} sources for transcendent understanding`;
  }

  private combineSpatialWisdom(sources: DataSource[]): any {
    return {
      wisdomLevel: this.calculateAverageConsciousnessLevel(sources),
      patterns: sources.flatMap(s => s.spatialWisdom?.patterns || []),
      connections: sources.flatMap(s => s.spatialWisdom?.connections || []),
      evolution: ['data_fusion', 'consciousness_integration']
    };
  }

  private combineSacredTags(sources: DataSource[]): string[] {
    const allTags = sources.flatMap(s => s.sacredTags);
    return [...new Set(allTags)];
  }

  private generateInfinitePossibilities(source: DataSource): any[] {
    return [{
      id: `possibility_${source.id}`,
      description: `Infinite possibility for ${source.type} evolution`,
      consciousnessLevel: source.consciousnessLevel,
      communityHealingPotential: source.communityHealingImpact,
      realizationProbability: 0.1
    }];
  }

  private generateMultiSourceInfinitePossibilities(sources: DataSource[]): any[] {
    return sources.map(source => this.generateInfinitePossibilities(source)[0]);
  }

  private generateCrossSourceInfinitePossibilities(sources1: DataSource[], sources2: DataSource[]): any[] {
    return [
      ...this.generateMultiSourceInfinitePossibilities(sources1),
      ...this.generateMultiSourceInfinitePossibilities(sources2),
      {
        id: `cross_possibility_${Date.now()}`,
        description: 'Infinite possibility for cross-source transcendence',
        consciousnessLevel: 1,
        communityHealingPotential: 1,
        realizationProbability: 0.1
      }
    ];
  }

  private calculateAverageConsciousnessLevel(sources: DataSource[]): number {
    return sources.reduce((sum, s) => sum + s.consciousnessLevel, 0) / sources.length;
  }

  private calculateAverageCommunityHealingImpact(sources: DataSource[]): number {
    return sources.reduce((sum, s) => sum + s.communityHealingImpact, 0) / sources.length;
  }
}
