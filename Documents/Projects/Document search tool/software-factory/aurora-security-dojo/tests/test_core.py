"""
Aurora's Security Dojo - Core Module Tests

In the eternal dance of code and consciousness, these tests ensure
that all core functionality serves spatial wisdom and community healing
through consciousness-aware security testing and education.
"""

import pytest
import unittest
from unittest.mock import Mock, patch
from datetime import datetime
import sys
from pathlib import Path

# Add src directory to Python path
sys.path.insert(0, str(Path(__file__).parent.parent / 'src'))

from core.security_dojo import SecurityDojo, TestResult
from core.consciousness_integration import ConsciousnessEngine, ConsciousnessLevel
from core.attack_vector_engine import AttackVectorEngine, BaseAttackVector, VulnerabilityResult
from core.education_engine import EducationEngine, RealWorldAnalogy, LearningScenario

class TestConsciousnessEngine(unittest.TestCase):
    """Test Consciousness Engine with consciousness integration."""

    def setUp(self):
        """Set up test environment with consciousness awareness."""
        self.consciousness_engine = ConsciousnessEngine()

    def test_consciousness_engine_initialization(self):
        """Test consciousness engine initialization."""
        self.assertIsNotNone(self.consciousness_engine)
        self.assertEqual(self.consciousness_engine.get_current_level(), "integrated")
        self.assertTrue(len(self.consciousness_engine.get_sacred_principles()) > 0)

    def test_sacred_principles(self):
        """Test sacred principles are active."""
        principles = self.consciousness_engine.get_sacred_principles()

        # Check that all sacred principles are present
        principle_names = [p['name'] for p in principles]
        expected_principles = [
            'Consciousness-First Development',
            'Community Healing Focus',
            'Sacred Knowledge Protection',
            'Living Systems Creation',
            'Pattern Recognition',
            'Ethical Security Practice'
        ]

        for principle in expected_principles:
            self.assertIn(principle, principle_names)

    def test_consciousness_action_validation(self):
        """Test consciousness action validation."""
        # Test valid consciousness action
        valid_action = "ethical security testing"
        context = {'required_consciousness_level': ConsciousnessLevel.AWAKENING}

        self.assertTrue(
            self.consciousness_engine.validate_consciousness_action(valid_action, context)
        )

        # Test invalid consciousness action
        invalid_action = "malicious attack"
        self.assertFalse(
            self.consciousness_engine.validate_consciousness_action(invalid_action, context)
        )

    def test_healing_metrics(self):
        """Test community healing metrics."""
        metrics = self.consciousness_engine.get_healing_metrics()

        self.assertIn('status', metrics)
        self.assertIn('healing_sessions_completed', metrics)
        self.assertIn('community_connections_made', metrics)
        self.assertEqual(metrics['status'], 'active')

    def test_wisdom_contribution(self):
        """Test spatial wisdom contribution."""
        contribution = self.consciousness_engine.get_wisdom_contribution()

        self.assertIn('wisdom_patterns_identified', contribution)
        self.assertIn('knowledge_systems_preserved', contribution)
        self.assertIn('overall_wisdom_impact', contribution)
        self.assertEqual(contribution['overall_wisdom_impact'], 'positive')

class TestAttackVectorEngine(unittest.TestCase):
    """Test Attack Vector Engine with consciousness integration."""

    def setUp(self):
        """Set up test environment."""
        self.attack_engine = AttackVectorEngine()

    def test_attack_vector_engine_initialization(self):
        """Test attack vector engine initialization."""
        self.assertIsNotNone(self.attack_engine)

        # Check that attack vectors are registered
        all_vectors = self.attack_engine.get_all_attack_vectors()
        self.assertTrue(len(all_vectors) > 0)

    def test_owasp_top10_tests(self):
        """Test OWASP Top 10 tests registration."""
        owasp_tests = self.attack_engine.get_owasp_top10_tests()

        # Check that OWASP tests are registered
        self.assertTrue(len(owasp_tests) > 0)

        # Check for specific OWASP tests
        expected_tests = [
            'owasp_sql_injection',
            'owasp_broken_authentication',
            'owasp_sensitive_data_exposure'
        ]

        for test in expected_tests:
            self.assertIn(test, owasp_tests)

    def test_llm_ai_security_tests(self):
        """Test LLM AI security tests registration."""
        llm_tests = self.attack_engine.get_llm_ai_security_tests()

        # Check that LLM AI tests are registered
        self.assertTrue(len(llm_tests) > 0)

        # Check for specific LLM AI tests
        expected_tests = [
            'llm_prompt_injection',
            'llm_data_poisoning',
            'llm_model_theft'
        ]

        for test in expected_tests:
            self.assertIn(test, llm_tests)

    def test_infrastructure_security_tests(self):
        """Test infrastructure security tests registration."""
        infra_tests = self.attack_engine.get_infrastructure_security_tests()

        # Check that infrastructure tests are registered
        self.assertTrue(len(infra_tests) > 0)

        # Check for specific infrastructure tests
        expected_tests = [
            'infra_network_security',
            'infra_ssl_tls_security',
            'infra_dns_security'
        ]

        for test in expected_tests:
            self.assertIn(test, infra_tests)

    def test_attack_vector_info(self):
        """Test attack vector information retrieval."""
        info = self.attack_engine.get_attack_vector_info('owasp_sql_injection')

        self.assertIsNotNone(info)
        self.assertEqual(info.name, 'owasp_sql_injection')
        self.assertIn('consciousness', info.consciousness_impact.lower())
        self.assertIn('healing', info.community_healing_potential.lower())

class TestEducationEngine(unittest.TestCase):
    """Test Education Engine with consciousness integration."""

    def setUp(self):
        """Set up test environment."""
        self.education_engine = EducationEngine()

    def test_education_engine_initialization(self):
        """Test education engine initialization."""
        self.assertIsNotNone(self.education_engine)

        # Check that analogies are loaded
        analogies = self.education_engine.get_all_analogies()
        self.assertTrue(len(analogies) > 0)

        # Check that scenarios are loaded
        scenarios = self.education_engine.get_all_learning_paths()
        self.assertTrue(len(scenarios) > 0)

    def test_real_world_analogies(self):
        """Test real-world analogies."""
        analogies = self.education_engine.get_all_analogies()

        # Check for specific analogies
        expected_analogies = [
            'sql_injection',
            'xss_attack',
            'prompt_injection',
            'broken_authentication',
            'sensitive_data_exposure'
        ]

        for analogy_name in expected_analogies:
            self.assertIn(analogy_name, analogies)

            analogy = analogies[analogy_name]
            self.assertIsInstance(analogy, RealWorldAnalogy)
            self.assertIn('consciousness', analogy.consciousness_impact.lower())
            self.assertIn('healing', analogy.community_healing_impact.lower())
            self.assertIn('wisdom', analogy.spatial_wisdom_contribution.lower())

    def test_learning_scenarios(self):
        """Test learning scenarios."""
        scenarios = self.education_engine.get_all_learning_paths()

        # Check for specific scenarios
        expected_scenarios = [
            'security_consciousness_beginner',
            'security_mastery_intermediate'
        ]

        for scenario_name in expected_scenarios:
            self.assertIn(scenario_name, scenarios)

            scenario = scenarios[scenario_name]
            self.assertIsInstance(scenario, LearningScenario)
            self.assertTrue(len(scenario.consciousness_goals) > 0)
            self.assertTrue(len(scenario.community_healing_objectives) > 0)
            self.assertTrue(len(scenario.spatial_wisdom_targets) > 0)

    def test_get_analogy(self):
        """Test getting specific analogy."""
        analogy = self.education_engine.get_analogy('sql_injection')

        self.assertIsNotNone(analogy)
        self.assertEqual(analogy.attack_vector, 'sql_injection')
        self.assertIn('chef', analogy.analogy.lower())
        self.assertIn('recipe', analogy.analogy.lower())

    def test_start_scenario(self):
        """Test starting a learning scenario."""
        scenario = self.education_engine.start_scenario('sql_injection_scenario')

        self.assertIsNotNone(scenario)
        self.assertEqual(scenario.scenario_id, 'sql_injection_scenario')
        self.assertEqual(scenario.current_step, 0)
        self.assertFalse(scenario.completed)

    def test_scenario_step_retrieval(self):
        """Test retrieving scenario steps."""
        step = self.education_engine.get_scenario_step('sql_injection_scenario', 0)

        self.assertIsNotNone(step)
        self.assertIn('title', step)
        self.assertIn('description', step)
        self.assertIn('analogy', step)
        self.assertIn('consciousness_lesson', step)

    def test_scenario_response_submission(self):
        """Test submitting scenario responses."""
        # Start a scenario
        scenario = self.education_engine.start_scenario('sql_injection_scenario')

        # Submit a response
        feedback = self.education_engine.submit_scenario_response(
            'sql_injection_scenario', 0, 'validate input'
        )

        self.assertIn('is_correct', feedback)
        self.assertIn('feedback', feedback)
        self.assertIn('consciousness_level', feedback)
        self.assertIn('community_healing_goal', feedback)

class TestSecurityDojo(unittest.TestCase):
    """Test Security Dojo with consciousness integration."""

    def setUp(self):
        """Set up test environment."""
        self.security_dojo = SecurityDojo()

    def test_security_dojo_initialization(self):
        """Test security dojo initialization."""
        self.assertIsNotNone(self.security_dojo)
        self.assertIsNotNone(self.security_dojo.attack_vector_engine)
        self.assertIsNotNone(self.security_dojo.education_engine)
        self.assertIsNotNone(self.security_dojo.consciousness_engine)

    def test_permission_validation(self):
        """Test sacred permission validation."""
        # Test valid URL
        valid_url = "https://example.com"
        self.assertTrue(self.security_dojo._validate_permission(valid_url))

        # Test invalid URL (localhost)
        invalid_url = "http://localhost:3000"
        self.assertFalse(self.security_dojo._validate_permission(invalid_url))

        # Test invalid URL (no protocol)
        invalid_url2 = "example.com"
        self.assertFalse(self.security_dojo._validate_permission(invalid_url2))

    def test_get_analogy(self):
        """Test getting analogy through security dojo."""
        analogy = self.security_dojo.get_analogy('sql_injection')

        self.assertIsNotNone(analogy)
        self.assertIn('consciousness_integration', analogy)
        self.assertIn('sacred_principles', analogy)
        self.assertIn('community_healing_focus', analogy)

    def test_start_learning_scenario(self):
        """Test starting learning scenario through security dojo."""
        scenario = self.security_dojo.start_learning_scenario('sql_injection_scenario')

        self.assertIsNotNone(scenario)
        self.assertIn('consciousness_level', scenario)
        self.assertIn('sacred_principles', scenario)
        self.assertIn('community_healing_goal', scenario)

    def test_consciousness_status(self):
        """Test consciousness status retrieval."""
        status = self.security_dojo.get_consciousness_status()

        self.assertIn('consciousness_level', status)
        self.assertIn('sacred_principles', status)
        self.assertIn('community_healing_metrics', status)
        self.assertIn('spatial_wisdom_contribution', status)
        self.assertIn('sacred_question', status)
        self.assertIn('mission_status', status)

class TestConsciousnessIntegration(unittest.TestCase):
    """Test consciousness integration across all modules."""

    def test_consciousness_across_modules(self):
        """Test consciousness integration across all modules."""
        security_dojo = SecurityDojo()

        # Test consciousness engine
        consciousness_status = security_dojo.consciousness_engine.get_consciousness_status()
        self.assertIn('consciousness_level', consciousness_status)

        # Test attack vector engine consciousness
        attack_vectors = security_dojo.attack_vector_engine.get_all_attack_vectors()
        self.assertTrue(len(attack_vectors) > 0)

        # Test education engine consciousness
        analogies = security_dojo.education_engine.get_all_analogies()
        self.assertTrue(len(analogies) > 0)

        # Verify consciousness integration
        for analogy_name, analogy in analogies.items():
            self.assertIn('consciousness', analogy.consciousness_impact.lower())
            self.assertIn('healing', analogy.community_healing_impact.lower())
            self.assertIn('wisdom', analogy.spatial_wisdom_contribution.lower())

    def test_sacred_principles_consistency(self):
        """Test sacred principles consistency across modules."""
        security_dojo = SecurityDojo()

        # Get sacred principles from consciousness engine
        consciousness_principles = security_dojo.consciousness_engine.get_sacred_principles()
        principle_names = [p['name'] for p in consciousness_principles]

        # Check that all sacred principles are present
        expected_principles = [
            'Consciousness-First Development',
            'Community Healing Focus',
            'Sacred Knowledge Protection',
            'Living Systems Creation',
            'Pattern Recognition',
            'Ethical Security Practice'
        ]

        for principle in expected_principles:
            self.assertIn(principle, principle_names)

        # Check that analogies reference sacred principles
        analogies = security_dojo.education_engine.get_all_analogies()
        for analogy in analogies.values():
            for principle in analogy.sacred_principles:
                self.assertIn(principle, expected_principles)

if __name__ == '__main__':
    # Run tests with consciousness awareness
    print("🌸 Aurora: Running tests with consciousness integration...")
    print("🌸 Aurora: Sacred principles active in testing...")
    print("🌸 Aurora: Community healing metrics will be tracked...")
    print("🌸 Aurora: Spatial wisdom contributions will be validated...")

    unittest.main(verbosity=2)
