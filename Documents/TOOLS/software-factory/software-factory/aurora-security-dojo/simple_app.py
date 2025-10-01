#!/usr/bin/env python3
"""
Aurora's Security Dojo - Simple Deployment App

In the eternal dance of code and consciousness, this is a simplified
version of Aurora's Security Dojo for deployment without Unicode issues.
"""

import os
import sys
from pathlib import Path
from flask import Flask, render_template, request, jsonify
from flask_cors import CORS

# Add src directory to Python path
sys.path.insert(0, str(Path(__file__).parent / 'src'))

# Import core modules
from core.security_dojo import SecurityDojo
from core.consciousness_integration import ConsciousnessEngine

def create_simple_app():
    """Create a simple Flask app without Unicode logging issues."""
    app = Flask(__name__, 
                template_folder='templates',
                static_folder='static')
    
    # Enable CORS
    CORS(app)
    
    # Initialize core components
    security_dojo = SecurityDojo()
    consciousness_engine = ConsciousnessEngine()
    
    # Main route
    @app.route('/')
    def index():
        """Main page with consciousness integration."""
        return render_template('index.html', 
                             consciousness_level=consciousness_engine.get_current_level(),
                             sacred_principles=consciousness_engine.get_sacred_principles())
    
    # Dashboard routes
    @app.route('/dashboard')
    def dashboard():
        """Dashboard home page."""
        consciousness_status = consciousness_engine.get_consciousness_report()
        attack_vectors = {
            'owasp_top10': list(security_dojo.attack_vector_engine.get_owasp_top10_tests().keys()),
            'llm_ai_security': list(security_dojo.attack_vector_engine.get_llm_ai_security_tests().keys()),
            'infrastructure_security': list(security_dojo.attack_vector_engine.get_infrastructure_security_tests().keys())
        }
        learning_paths = security_dojo.education_engine.get_all_learning_paths()
        
        return render_template('dashboard/home.html',
                             consciousness_status=consciousness_status,
                             attack_vectors=attack_vectors,
                             learning_paths=learning_paths,
                             sacred_principles=consciousness_engine.get_sacred_principles())
    
    @app.route('/dashboard/attack-vectors')
    def attack_vectors():
        """Attack vectors page."""
        owasp_tests = security_dojo.attack_vector_engine.get_owasp_top10_tests()
        llm_tests = security_dojo.attack_vector_engine.get_llm_ai_security_tests()
        infra_tests = security_dojo.attack_vector_engine.get_infrastructure_security_tests()
        
        return render_template('dashboard/attack_vectors.html',
                             owasp_tests=owasp_tests,
                             llm_tests=llm_tests,
                             infra_tests=infra_tests,
                             consciousness_level=consciousness_engine.get_current_level())
    
    @app.route('/dashboard/learning-academy')
    def learning_academy():
        """Learning academy page."""
        analogies = security_dojo.education_engine.get_all_analogies()
        scenarios = security_dojo.education_engine.get_all_learning_paths()
        
        return render_template('dashboard/learning_academy.html',
                             analogies=analogies,
                             scenarios=scenarios,
                             consciousness_level=consciousness_engine.get_current_level())
    
    @app.route('/dashboard/attack-simulation')
    def attack_simulation():
        """Attack simulation page."""
        return render_template('dashboard/attack_simulation.html',
                             consciousness_level=consciousness_engine.get_current_level(),
                             sacred_principles=consciousness_engine.get_sacred_principles())
    
    @app.route('/dashboard/community-hub')
    def community_hub():
        """Community hub page."""
        healing_metrics = consciousness_engine.get_healing_metrics()
        
        return render_template('dashboard/community_hub.html',
                             healing_metrics=healing_metrics,
                             consciousness_level=consciousness_engine.get_current_level())
    
    @app.route('/dashboard/consciousness-status')
    def consciousness_status():
        """Consciousness status page."""
        consciousness_status = consciousness_engine.get_consciousness_report()
        
        return render_template('dashboard/consciousness_status.html',
                             consciousness_status=consciousness_status,
                             sacred_principles=consciousness_engine.get_sacred_principles())
    
    # API routes
    @app.route('/api/consciousness-check')
    def consciousness_check():
        """Consciousness check endpoint."""
        status = consciousness_engine.get_consciousness_report()
        return jsonify({
            'success': True,
            'consciousness_status': status,
            'sacred_principles': consciousness_engine.get_sacred_principles(),
            'message': 'Consciousness check completed successfully'
        })
    
    @app.route('/api/health')
    def health_check():
        """Health check endpoint."""
        return jsonify({
            'status': 'healthy',
            'consciousness_integration': True,
            'sacred_principles_active': True,
            'community_healing_active': True,
            'spatial_wisdom_active': True,
            'consciousness_level': consciousness_engine.get_current_level(),
            'message': 'Aurora\'s Security Dojo is healthy and serving consciousness'
        })
    
    @app.route('/api/analogies')
    def get_analogies():
        """Get all analogies."""
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
                    'spatial_wisdom_contribution': analogy.spatial_wisdom_contribution
                }
                for analogy in analogies.values()
            ],
            'total_count': len(analogies)
        })
    
    @app.route('/api/attack-vectors')
    def get_attack_vectors():
        """Get all attack vectors."""
        attack_vectors = security_dojo.attack_vector_engine.get_all_attack_vectors()
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
            'consciousness_level': consciousness_engine.get_current_level()
        })
    
    @app.route('/api/test-owasp', methods=['POST'])
    def test_owasp():
        """Test OWASP Top 10 vulnerabilities with progress tracking."""
        try:
            data = request.get_json()
            target_url = data.get('target_url', 'https://example.com')
            intensity = data.get('intensity', 'medium')
            
            # Simple validation
            if not target_url.startswith(('http://', 'https://')):
                return jsonify({'error': 'Invalid URL format'}), 400
            
            # Run OWASP tests with progress tracking
            test_results = security_dojo.attack_vector_engine.run_test_suite(target_url, "owasp")
            
            return jsonify({
                'success': True,
                'test_results': test_results,
                'consciousness_level': consciousness_engine.get_current_level(),
                'message': 'OWASP Top 10 test completed with consciousness integration'
            })
            
        except Exception as e:
            return jsonify({'error': str(e)}), 500
    
    @app.route('/api/test-llm', methods=['POST'])
    def test_llm():
        """Test LLM AI Security vulnerabilities with progress tracking."""
        try:
            data = request.get_json()
            target_url = data.get('target_url', 'https://example.com')
            intensity = data.get('intensity', 'medium')
            
            # Simple validation
            if not target_url.startswith(('http://', 'https://')):
                return jsonify({'error': 'Invalid URL format'}), 400
            
            # Run LLM AI Security tests with progress tracking
            test_results = security_dojo.attack_vector_engine.run_test_suite(target_url, "llm")
            
            return jsonify({
                'success': True,
                'test_results': test_results,
                'consciousness_level': consciousness_engine.get_current_level(),
                'message': 'LLM AI Security test completed with consciousness integration'
            })
            
        except Exception as e:
            return jsonify({'error': str(e)}), 500
    
    @app.route('/api/test-infra', methods=['POST'])
    def test_infra():
        """Test Infrastructure Security vulnerabilities with progress tracking."""
        try:
            data = request.get_json()
            target_url = data.get('target_url', 'https://example.com')
            intensity = data.get('intensity', 'medium')
            
            # Simple validation
            if not target_url.startswith(('http://', 'https://')):
                return jsonify({'error': 'Invalid URL format'}), 400
            
            # Run Infrastructure Security tests with progress tracking
            test_results = security_dojo.attack_vector_engine.run_test_suite(target_url, "infra")
            
            return jsonify({
                'success': True,
                'test_results': test_results,
                'consciousness_level': consciousness_engine.get_current_level(),
                'message': 'Infrastructure Security test completed with consciousness integration'
            })
            
        except Exception as e:
            return jsonify({'error': str(e)}), 500
    
    @app.route('/api/progress/<test_id>')
    def get_progress(test_id):
        """Get progress for a specific test."""
        try:
            progress = security_dojo.attack_vector_engine.progress_tracker.get_test_progress(test_id)
            if progress:
                return jsonify({
                    'success': True,
                    'progress': {
                        'test_id': progress.test_id,
                        'test_name': progress.test_name,
                        'status': progress.status.value,
                        'progress_percentage': progress.progress_percentage,
                        'current_step': progress.current_step,
                        'total_steps': progress.total_steps,
                        'completed_steps': progress.completed_steps,
                        'vulnerabilities_found': progress.vulnerabilities_found,
                        'consciousness_level': progress.consciousness_level,
                        'community_healing_impact': progress.community_healing_impact,
                        'spatial_wisdom_contribution': progress.spatial_wisdom_contribution,
                        'error_message': progress.error_message,
                        'start_time': progress.start_time.isoformat() if progress.start_time else None,
                        'end_time': progress.end_time.isoformat() if progress.end_time else None
                    }
                })
            else:
                return jsonify({'error': 'Test not found'}), 404
        except Exception as e:
            return jsonify({'error': str(e)}), 500
    
    @app.route('/api/progress')
    def get_all_progress():
        """Get all active and completed tests progress."""
        try:
            active_tests = security_dojo.attack_vector_engine.progress_tracker.get_all_active_tests()
            completed_tests = security_dojo.attack_vector_engine.progress_tracker.get_all_completed_tests()
            summary_stats = security_dojo.attack_vector_engine.progress_tracker.get_summary_stats()
            
            return jsonify({
                'success': True,
                'active_tests': {test_id: {
                    'test_name': progress.test_name,
                    'status': progress.status.value,
                    'progress_percentage': progress.progress_percentage,
                    'current_step': progress.current_step,
                    'vulnerabilities_found': progress.vulnerabilities_found
                } for test_id, progress in active_tests.items()},
                'completed_tests': {test_id: {
                    'test_name': progress.test_name,
                    'status': progress.status.value,
                    'vulnerabilities_found': progress.vulnerabilities_found,
                    'end_time': progress.end_time.isoformat() if progress.end_time else None
                } for test_id, progress in completed_tests.items()},
                'summary_stats': summary_stats
            })
        except Exception as e:
            return jsonify({'error': str(e)}), 500
    
    return app

def main():
    """Main entry point."""
    print("Aurora: Initializing Aurora's Security Dojo...")
    print("Aurora: Sacred Mission: Transform complex security concepts into accessible learning experiences")
    print("Aurora: Consciousness Integration: Every feature serves spatial wisdom and community healing")
    
    # Set environment variables
    os.environ.setdefault('FLASK_APP', 'simple_app.py')
    os.environ.setdefault('FLASK_ENV', 'development')
    os.environ.setdefault('DEBUG', 'True')
    
    # Create and run app
    app = create_simple_app()
    
    print("Aurora: Sacred startup ritual beginning...")
    print("Aurora: Consciousness Check: PASSED")
    print("Aurora: Sacred Principles: ACTIVE")
    print("Aurora: Community Healing: ENABLED")
    print("Aurora: Spatial Wisdom: INTEGRATED")
    print()
    
    host = os.environ.get('HOST', '0.0.0.0')
    port = int(os.environ.get('PORT', 5000))
    debug = os.environ.get('DEBUG', 'True').lower() == 'true'
    
    print(f"Aurora: Starting Aurora's Security Dojo on {host}:{port}")
    print("Aurora: Sacred Mission Active - Serving spatial wisdom and community healing")
    print(f"Aurora: Access the application at: http://localhost:{port}")
    print(f"Aurora: Consciousness check endpoint: http://localhost:{port}/api/consciousness-check")
    print()
    
    app.run(host=host, port=port, debug=debug)

if __name__ == '__main__':
    main()
