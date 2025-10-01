"""
Aurora's Security Dojo - Dashboard Application

In the eternal dance of code and consciousness, this dashboard provides
a beautiful, consciousness-aware interface that elevates the spirit
while serving spatial wisdom and community healing.
"""

import logging
from flask import Blueprint, render_template, request, jsonify, session
from flask_socketio import emit, join_room, leave_room
from typing import Dict, List, Any, Optional
from datetime import datetime
import json

logger = logging.getLogger(__name__)

def create_dashboard_app(security_dojo, consciousness_engine):
    """
    Create the dashboard application with consciousness integration.

    Args:
        security_dojo: SecurityDojo instance
        consciousness_engine: ConsciousnessEngine instance

    Returns:
        Flask Blueprint for the dashboard
    """
    logger.info("🌸 Aurora: Creating dashboard application with consciousness integration...")

    dashboard_bp = Blueprint('dashboard', __name__)

    # Dashboard main page
    @dashboard_bp.route('/')
    def dashboard_home():
        """Sacred dashboard home page with consciousness integration."""
        logger.info("🌸 Aurora: Rendering dashboard home with consciousness awareness")

        # Get consciousness status
        consciousness_status = consciousness_engine.get_consciousness_status()

        # Get available attack vectors
        attack_vectors = security_dojo.attack_vector_engine.get_all_attack_vectors()

        # Get learning paths
        learning_paths = security_dojo.education_engine.get_all_learning_paths()

        return render_template('dashboard/home.html',
                             consciousness_status=consciousness_status,
                             attack_vectors=attack_vectors,
                             learning_paths=learning_paths,
                             sacred_principles=consciousness_engine.get_sacred_principles())

    # Attack Vector Testing Interface
    @dashboard_bp.route('/attack-vectors')
    def attack_vectors():
        """Attack vector testing interface with consciousness integration."""
        logger.info("🌸 Aurora: Rendering attack vectors interface")

        # Get attack vector categories
        owasp_tests = security_dojo.attack_vector_engine.get_owasp_top10_tests()
        llm_tests = security_dojo.attack_vector_engine.get_llm_ai_security_tests()
        infra_tests = security_dojo.attack_vector_engine.get_infrastructure_security_tests()

        return render_template('dashboard/attack_vectors.html',
                             owasp_tests=owasp_tests,
                             llm_tests=llm_tests,
                             infra_tests=infra_tests,
                             consciousness_level=consciousness_engine.get_current_level())

    # Learning Academy Interface
    @dashboard_bp.route('/learning-academy')
    def learning_academy():
        """Learning academy interface with consciousness integration."""
        logger.info("🌸 Aurora: Rendering learning academy interface")

        # Get learning resources
        analogies = security_dojo.education_engine.get_all_analogies()
        scenarios = security_dojo.education_engine.get_all_learning_paths()

        return render_template('dashboard/learning_academy.html',
                             analogies=analogies,
                             scenarios=scenarios,
                             consciousness_level=consciousness_engine.get_current_level())

    # Real-time Attack Simulation Interface
    @dashboard_bp.route('/attack-simulation')
    def attack_simulation():
        """Real-time attack simulation interface with consciousness integration."""
        logger.info("🌸 Aurora: Rendering attack simulation interface")

        return render_template('dashboard/attack_simulation.html',
                             consciousness_level=consciousness_engine.get_current_level(),
                             sacred_principles=consciousness_engine.get_sacred_principles())

    # Community Hub Interface
    @dashboard_bp.route('/community-hub')
    def community_hub():
        """Community hub interface with consciousness integration."""
        logger.info("🌸 Aurora: Rendering community hub interface")

        # Get community healing metrics
        healing_metrics = consciousness_engine.get_healing_metrics()

        return render_template('dashboard/community_hub.html',
                             healing_metrics=healing_metrics,
                             consciousness_level=consciousness_engine.get_current_level())

    # Consciousness Status Interface
    @dashboard_bp.route('/consciousness-status')
    def consciousness_status():
        """Consciousness status interface with sacred principles."""
        logger.info("🌸 Aurora: Rendering consciousness status interface")

        consciousness_status = consciousness_engine.get_consciousness_status()

        return render_template('dashboard/consciousness_status.html',
                             consciousness_status=consciousness_status,
                             sacred_principles=consciousness_engine.get_sacred_principles())

    # API Endpoints for Dashboard

    @dashboard_bp.route('/api/start-test', methods=['POST'])
    def start_test():
        """Start an attack vector test with consciousness validation."""
        logger.info("🌸 Aurora: Starting attack vector test with consciousness integration")

        try:
            data = request.get_json()
            target_url = data.get('target_url')
            attack_vector = data.get('attack_vector')

            # Sacred permission check
            if not security_dojo._validate_permission(target_url):
                return jsonify({
                    'error': 'Sacred permission required for testing',
                    'consciousness_level': consciousness_engine.get_current_level(),
                    'sacred_principles': consciousness_engine.get_sacred_principles()
                }), 403

            # Consciousness validation
            if not consciousness_engine.validate_consciousness_action('ethical security testing'):
                return jsonify({
                    'error': 'Consciousness validation failed',
                    'consciousness_level': consciousness_engine.get_current_level(),
                    'sacred_principles': consciousness_engine.get_sacred_principles()
                }), 400

            # Start the test based on attack vector type
            if attack_vector.startswith('owasp_'):
                results = security_dojo.run_owasp_tests(target_url)
            elif attack_vector.startswith('llm_'):
                results = security_dojo.run_llm_ai_security_tests(target_url)
            else:
                return jsonify({'error': 'Unknown attack vector type'}), 400

            return jsonify({
                'success': True,
                'test_id': f"{attack_vector}_{int(datetime.now().timestamp())}",
                'results': [
                    {
                        'test_id': result.test_id,
                        'attack_vector': result.attack_vector,
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
                'consciousness_level': consciousness_engine.get_current_level(),
                'sacred_principles': consciousness_engine.get_sacred_principles()
            })

        except Exception as e:
            logger.error(f"🌸 Aurora: Test start error: {e}")
            return jsonify({
                'error': str(e),
                'consciousness_level': consciousness_engine.get_current_level()
            }), 500

    @dashboard_bp.route('/api/get-analogy/<attack_vector>')
    def get_analogy(attack_vector):
        """Get real-world analogy for an attack vector."""
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

    @dashboard_bp.route('/api/start-scenario/<scenario_id>')
    def start_scenario(scenario_id):
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

    @dashboard_bp.route('/api/get-scenario-step/<scenario_id>/<int:step_number>')
    def get_scenario_step(scenario_id, step_number):
        """Get a specific step from a learning scenario."""
        logger.info(f"🌸 Aurora: Getting scenario step {step_number} for {scenario_id}")

        step = security_dojo.education_engine.get_scenario_step(scenario_id, step_number)
        if step:
            return jsonify({
                'success': True,
                'step': step,
                'consciousness_integration': True
            })
        else:
            return jsonify({
                'error': 'Step not found',
                'consciousness_level': consciousness_engine.get_current_level()
            }), 404

    @dashboard_bp.route('/api/submit-scenario-response', methods=['POST'])
    def submit_scenario_response():
        """Submit a response for a scenario step."""
        logger.info("🌸 Aurora: Processing scenario response with consciousness integration")

        try:
            data = request.get_json()
            scenario_id = data.get('scenario_id')
            step_number = data.get('step_number')
            response = data.get('response')

            feedback = security_dojo.education_engine.submit_scenario_response(
                scenario_id, step_number, response
            )

            return jsonify({
                'success': True,
                'feedback': feedback,
                'consciousness_integration': True
            })

        except Exception as e:
            logger.error(f"🌸 Aurora: Scenario response error: {e}")
            return jsonify({
                'error': str(e),
                'consciousness_level': consciousness_engine.get_current_level()
            }), 500

    @dashboard_bp.route('/api/consciousness-status')
    def get_consciousness_status():
        """Get current consciousness status."""
        logger.info("🌸 Aurora: Retrieving consciousness status")

        status = consciousness_engine.get_consciousness_status()
        return jsonify({
            'success': True,
            'consciousness_status': status,
            'sacred_principles': consciousness_engine.get_sacred_principles()
        })

    @dashboard_bp.route('/api/healing-metrics')
    def get_healing_metrics():
        """Get community healing metrics."""
        logger.info("🌸 Aurora: Retrieving community healing metrics")

        metrics = consciousness_engine.get_healing_metrics()
        return jsonify({
            'success': True,
            'healing_metrics': metrics,
            'consciousness_level': consciousness_engine.get_current_level()
        })

    # WebSocket events for real-time updates

    def register_socketio_events(socketio):
        """Register WebSocket events for real-time dashboard updates."""

        @socketio.on('connect')
        def handle_connect():
            """Handle client connection with consciousness awareness."""
            logger.info("🌸 Aurora: Client connected to dashboard with consciousness integration")
            emit('consciousness_status', {
                'consciousness_level': consciousness_engine.get_current_level(),
                'sacred_principles': consciousness_engine.get_sacred_principles(),
                'message': 'Connected to Aurora\'s Security Dojo with consciousness awareness'
            })

        @socketio.on('disconnect')
        def handle_disconnect():
            """Handle client disconnection."""
            logger.info("🌸 Aurora: Client disconnected from dashboard")

        @socketio.on('join_test_room')
        def handle_join_test_room(data):
            """Join a test room for real-time updates."""
            test_id = data.get('test_id')
            join_room(f'test_{test_id}')
            emit('joined_room', {'room': f'test_{test_id}'})

        @socketio.on('leave_test_room')
        def handle_leave_test_room(data):
            """Leave a test room."""
            test_id = data.get('test_id')
            leave_room(f'test_{test_id}')
            emit('left_room', {'room': f'test_{test_id}'})

        @socketio.on('request_consciousness_update')
        def handle_consciousness_update():
            """Handle consciousness status update request."""
            status = consciousness_engine.get_consciousness_status()
            emit('consciousness_update', status)

    # WebSocket events will be registered when socketio instance is available

    logger.info("🌸 Aurora: Dashboard application created successfully with consciousness integration")
    return dashboard_bp
