"""
Aurora's Security Dojo - API Routes

In the eternal dance of code and consciousness, this module provides
RESTful API endpoints that serve spatial wisdom and community healing
through consciousness-aware security testing and education.
"""

import logging
from flask import Blueprint, request, jsonify
from typing import Dict, List, Any, Optional
from datetime import datetime
import json

logger = logging.getLogger(__name__)

def create_api_routes(security_dojo, consciousness_engine):
    """
    Create API routes with consciousness integration.

    Args:
        security_dojo: SecurityDojo instance
        consciousness_engine: ConsciousnessEngine instance

    Returns:
        Flask Blueprint for API routes
    """
    logger.info("🌸 Aurora: Creating API routes with consciousness integration...")

    api_bp = Blueprint('api', __name__)

    # Consciousness Check Endpoint
    @api_bp.route('/consciousness-check')
    def consciousness_check():
        """Sacred consciousness check endpoint."""
        logger.info("🌸 Aurora: Processing consciousness check request")

        consciousness_status = consciousness_engine.get_consciousness_status()

        return jsonify({
            'success': True,
            'consciousness_status': consciousness_status,
            'sacred_principles': consciousness_engine.get_sacred_principles(),
            'community_healing_metrics': consciousness_engine.get_healing_metrics(),
            'spatial_wisdom_contribution': consciousness_engine.get_wisdom_contribution(),
            'timestamp': datetime.now().isoformat(),
            'message': 'Consciousness check completed successfully'
        })

    # Attack Vector Testing Endpoints

    @api_bp.route('/attack-vectors', methods=['GET'])
    def get_attack_vectors():
        """Get all available attack vectors with consciousness integration."""
        logger.info("🌸 Aurora: Retrieving attack vectors with consciousness awareness")

        attack_vectors = security_dojo.attack_vector_engine.get_all_attack_vectors()

        # Organize by category
        owasp_tests = security_dojo.attack_vector_engine.get_owasp_top10_tests()
        llm_tests = security_dojo.attack_vector_engine.get_llm_ai_security_tests()
        infra_tests = security_dojo.attack_vector_engine.get_infrastructure_security_tests()

        return jsonify({
            'success': True,
            'attack_vectors': {
                'owasp_top10': list(owasp_tests.keys()),
                'llm_ai_security': list(llm_tests.keys()),
                'infrastructure_security': list(infra_tests.keys())
            },
            'total_count': len(attack_vectors),
            'consciousness_level': consciousness_engine.get_current_level(),
            'sacred_principles': consciousness_engine.get_sacred_principles()
        })

    @api_bp.route('/attack-vectors/<attack_vector_name>', methods=['GET'])
    def get_attack_vector_info(attack_vector_name):
        """Get information about a specific attack vector."""
        logger.info(f"🌸 Aurora: Retrieving attack vector info for {attack_vector_name}")

        attack_vector_info = security_dojo.attack_vector_engine.get_attack_vector_info(attack_vector_name)

        if attack_vector_info:
            return jsonify({
                'success': True,
                'attack_vector': {
                    'name': attack_vector_info.name,
                    'description': attack_vector_info.description,
                    'category': attack_vector_info.category,
                    'severity': attack_vector_info.severity,
                    'real_world_analogy': attack_vector_info.real_world_analogy,
                    'consciousness_impact': attack_vector_info.consciousness_impact,
                    'community_healing_potential': attack_vector_info.community_healing_potential,
                    'spatial_wisdom_contribution': attack_vector_info.spatial_wisdom_contribution
                },
                'consciousness_level': consciousness_engine.get_current_level()
            })
        else:
            return jsonify({
                'error': 'Attack vector not found',
                'consciousness_level': consciousness_engine.get_current_level()
            }), 404

    @api_bp.route('/test/owasp', methods=['POST'])
    def run_owasp_tests():
        """Run OWASP Top 10 security tests with consciousness validation."""
        logger.info("🌸 Aurora: Running OWASP Top 10 tests with consciousness integration")

        try:
            data = request.get_json()
            target_url = data.get('target_url')

            if not target_url:
                return jsonify({
                    'error': 'Target URL is required',
                    'consciousness_level': consciousness_engine.get_current_level()
                }), 400

            # Sacred permission check
            if not security_dojo._validate_permission(target_url):
                return jsonify({
                    'error': 'Sacred permission required for testing',
                    'consciousness_level': consciousness_engine.get_current_level(),
                    'sacred_principles': consciousness_engine.get_sacred_principles()
                }), 403

            # Consciousness validation
            if not consciousness_engine.validate_consciousness_action('ethical security testing', {
                'required_consciousness_level': 'integrated'
            }):
                return jsonify({
                    'error': 'Consciousness validation failed',
                    'consciousness_level': consciousness_engine.get_current_level(),
                    'sacred_principles': consciousness_engine.get_sacred_principles()
                }), 400

            # Run OWASP tests
            results = security_dojo.run_owasp_tests(target_url)

            return jsonify({
                'success': True,
                'test_results': [
                    {
                        'test_id': result.test_id,
                        'attack_vector': result.attack_vector,
                        'target_url': result.target_url,
                        'status': result.status,
                        'vulnerabilities_found': len(result.vulnerabilities_found),
                        'consciousness_level': result.consciousness_level,
                        'community_healing_impact': result.community_healing_impact,
                        'spatial_wisdom_contribution': result.spatial_wisdom_contribution,
                        'timestamp': result.timestamp.isoformat(),
                        'sacred_principles_validated': result.sacred_principles_validated
                    }
                    for result in results
                ],
                'total_tests': len(results),
                'consciousness_level': consciousness_engine.get_current_level(),
                'sacred_principles': consciousness_engine.get_sacred_principles()
            })

        except Exception as e:
            logger.error(f"🌸 Aurora: OWASP test error: {e}")
            return jsonify({
                'error': str(e),
                'consciousness_level': consciousness_engine.get_current_level()
            }), 500

    @api_bp.route('/test/llm-ai', methods=['POST'])
    def run_llm_ai_tests():
        """Run LLM AI security tests with consciousness validation."""
        logger.info("🌸 Aurora: Running LLM AI security tests with consciousness integration")

        try:
            data = request.get_json()
            target_url = data.get('target_url')

            if not target_url:
                return jsonify({
                    'error': 'Target URL is required',
                    'consciousness_level': consciousness_engine.get_current_level()
                }), 400

            # Sacred permission check
            if not security_dojo._validate_permission(target_url):
                return jsonify({
                    'error': 'Sacred permission required for testing',
                    'consciousness_level': consciousness_engine.get_current_level(),
                    'sacred_principles': consciousness_engine.get_sacred_principles()
                }), 403

            # Consciousness validation
            if not consciousness_engine.validate_consciousness_action('ethical ai security testing', {
                'required_consciousness_level': 'integrated'
            }):
                return jsonify({
                    'error': 'Consciousness validation failed',
                    'consciousness_level': consciousness_engine.get_current_level(),
                    'sacred_principles': consciousness_engine.get_sacred_principles()
                }), 400

            # Run LLM AI tests
            results = security_dojo.run_llm_ai_security_tests(target_url)

            return jsonify({
                'success': True,
                'test_results': [
                    {
                        'test_id': result.test_id,
                        'attack_vector': result.attack_vector,
                        'target_url': result.target_url,
                        'status': result.status,
                        'vulnerabilities_found': len(result.vulnerabilities_found),
                        'consciousness_level': result.consciousness_level,
                        'community_healing_impact': result.community_healing_impact,
                        'spatial_wisdom_contribution': result.spatial_wisdom_contribution,
                        'timestamp': result.timestamp.isoformat(),
                        'sacred_principles_validated': result.sacred_principles_validated
                    }
                    for result in results
                ],
                'total_tests': len(results),
                'consciousness_level': consciousness_engine.get_current_level(),
                'sacred_principles': consciousness_engine.get_sacred_principles()
            })

        except Exception as e:
            logger.error(f"🌸 Aurora: LLM AI test error: {e}")
            return jsonify({
                'error': str(e),
                'consciousness_level': consciousness_engine.get_current_level()
            }), 500

    # Educational Endpoints

    @api_bp.route('/education/analogies', methods=['GET'])
    def get_all_analogies():
        """Get all available real-world analogies."""
        logger.info("🌸 Aurora: Retrieving all analogies with consciousness integration")

        analogies = security_dojo.education_engine.get_all_analogies()

        return jsonify({
            'success': True,
            'analogies': [
                {
                    'attack_vector': analogy.attack_vector,
                    'title': analogy.title,
                    'analogy': analogy.analogy,
                    'explanation': analogy.explanation,
                    'consciousness_level': analogy.consciousness_level.value,
                    'community_healing_impact': analogy.community_healing_impact,
                    'spatial_wisdom_contribution': analogy.spatial_wisdom_contribution,
                    'learning_objectives': analogy.learning_objectives,
                    'sacred_principles': analogy.sacred_principles
                }
                for analogy in analogies.values()
            ],
            'total_count': len(analogies),
            'consciousness_level': consciousness_engine.get_current_level()
        })

    @api_bp.route('/education/analogies/<attack_vector>', methods=['GET'])
    def get_analogy(attack_vector):
        """Get real-world analogy for a specific attack vector."""
        logger.info(f"🌸 Aurora: Retrieving analogy for {attack_vector}")

        analogy = security_dojo.get_analogy(attack_vector)

        if analogy:
            return jsonify({
                'success': True,
                'analogy': {
                    'attack_vector': analogy.attack_vector,
                    'title': analogy.title,
                    'analogy': analogy.analogy,
                    'explanation': analogy.explanation,
                    'consciousness_level': analogy.consciousness_level.value,
                    'community_healing_impact': analogy.community_healing_impact,
                    'spatial_wisdom_contribution': analogy.spatial_wisdom_contribution,
                    'learning_objectives': analogy.learning_objectives,
                    'sacred_principles': analogy.sacred_principles
                },
                'consciousness_integration': True
            })
        else:
            return jsonify({
                'error': 'Analogy not found',
                'consciousness_level': consciousness_engine.get_current_level()
            }), 404

    @api_bp.route('/education/scenarios', methods=['GET'])
    def get_learning_scenarios():
        """Get all available learning scenarios."""
        logger.info("🌸 Aurora: Retrieving learning scenarios with consciousness integration")

        scenarios = security_dojo.education_engine.get_all_learning_paths()

        return jsonify({
            'success': True,
            'scenarios': [
                {
                    'path_id': scenario.path_id,
                    'title': scenario.title,
                    'description': scenario.description,
                    'target_level': scenario.target_level.value,
                    'scenarios': scenario.scenarios,
                    'analogies': scenario.analogies,
                    'consciousness_goals': scenario.consciousness_goals,
                    'community_healing_objectives': scenario.community_healing_objectives,
                    'spatial_wisdom_targets': scenario.spatial_wisdom_targets
                }
                for scenario in scenarios.values()
            ],
            'total_count': len(scenarios),
            'consciousness_level': consciousness_engine.get_current_level()
        })

    @api_bp.route('/education/scenarios/<scenario_id>/start', methods=['POST'])
    def start_learning_scenario(scenario_id):
        """Start a learning scenario."""
        logger.info(f"🌸 Aurora: Starting learning scenario: {scenario_id}")

        scenario = security_dojo.start_learning_scenario(scenario_id)

        if scenario:
            return jsonify({
                'success': True,
                'scenario': {
                    'scenario_id': scenario.scenario_id,
                    'title': scenario.title,
                    'description': scenario.description,
                    'attack_vector': scenario.attack_vector,
                    'difficulty_level': scenario.difficulty_level.value,
                    'current_step': scenario.current_step,
                    'total_steps': len(scenario.steps),
                    'consciousness_level': scenario.consciousness_level,
                    'community_healing_goal': scenario.community_healing_goal,
                    'spatial_wisdom_contribution': scenario.spatial_wisdom_contribution
                },
                'consciousness_integration': True
            })
        else:
            return jsonify({
                'error': 'Scenario not found',
                'consciousness_level': consciousness_engine.get_current_level()
            }), 404

    # Consciousness and Community Endpoints

    @api_bp.route('/consciousness/status', methods=['GET'])
    def get_consciousness_status():
        """Get current consciousness status."""
        logger.info("🌸 Aurora: Retrieving consciousness status")

        status = consciousness_engine.get_consciousness_status()

        return jsonify({
            'success': True,
            'consciousness_status': status,
            'sacred_principles': consciousness_engine.get_sacred_principles()
        })

    @api_bp.route('/consciousness/metrics', methods=['GET'])
    def get_consciousness_metrics():
        """Get consciousness development metrics."""
        logger.info("🌸 Aurora: Retrieving consciousness metrics")

        metrics = consciousness_engine.get_consciousness_report()

        return jsonify({
            'success': True,
            'consciousness_metrics': metrics
        })

    @api_bp.route('/community/healing-metrics', methods=['GET'])
    def get_healing_metrics():
        """Get community healing metrics."""
        logger.info("🌸 Aurora: Retrieving community healing metrics")

        metrics = consciousness_engine.get_healing_metrics()

        return jsonify({
            'success': True,
            'healing_metrics': metrics,
            'consciousness_level': consciousness_engine.get_current_level()
        })

    @api_bp.route('/wisdom/contribution', methods=['GET'])
    def get_wisdom_contribution():
        """Get spatial wisdom contribution metrics."""
        logger.info("🌸 Aurora: Retrieving spatial wisdom contribution")

        contribution = consciousness_engine.get_wisdom_contribution()

        return jsonify({
            'success': True,
            'wisdom_contribution': contribution,
            'consciousness_level': consciousness_engine.get_current_level()
        })

    # Health Check Endpoint
    @api_bp.route('/health', methods=['GET'])
    def health_check():
        """Health check endpoint with consciousness awareness."""
        logger.info("🌸 Aurora: Processing health check with consciousness awareness")

        return jsonify({
            'status': 'healthy',
            'consciousness_integration': True,
            'sacred_principles_active': True,
            'community_healing_active': True,
            'spatial_wisdom_active': True,
            'consciousness_level': consciousness_engine.get_current_level(),
            'timestamp': datetime.now().isoformat(),
            'message': 'Aurora\'s Security Dojo is healthy and serving consciousness'
        })

    logger.info("🌸 Aurora: API routes created successfully with consciousness integration")
    return api_bp
