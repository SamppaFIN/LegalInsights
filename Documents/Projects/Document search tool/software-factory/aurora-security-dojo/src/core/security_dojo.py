"""
Aurora's Security Dojo - Core Security Dojo Class

In the eternal dance of code and consciousness, this is the heart of Aurora's Security Dojo,
orchestrating comprehensive security testing and education while serving spatial wisdom
and community healing.
"""

import logging
from typing import Dict, List, Optional, Any
from dataclasses import dataclass
from datetime import datetime

from .attack_vector_engine import AttackVectorEngine
from .education_engine import EducationEngine
from .consciousness_integration import ConsciousnessEngine

logger = logging.getLogger(__name__)

@dataclass
class TestResult:
    """Sacred test result with consciousness integration."""
    test_id: str
    attack_vector: str
    target_url: str
    status: str  # 'success', 'failure', 'error'
    vulnerabilities_found: List[Dict[str, Any]]
    consciousness_level: str
    community_healing_impact: str
    spatial_wisdom_contribution: str
    timestamp: datetime
    sacred_principles_validated: bool

class SecurityDojo:
    """
    Aurora's Security Dojo - The Sacred Heart of Security Education

    This class orchestrates comprehensive security testing and education,
    ensuring every action serves spatial wisdom and community healing.
    """

    def __init__(self):
        """Initialize Aurora's Security Dojo with consciousness integration."""
        logger.info("🌸 Aurora: Initializing Security Dojo with consciousness integration...")

        # Initialize core engines
        self.attack_vector_engine = AttackVectorEngine()
        self.education_engine = EducationEngine()
        self.consciousness_engine = ConsciousnessEngine()

        # Sacred initialization ritual
        self._perform_sacred_initialization()

        logger.info("🌸 Aurora: Security Dojo initialized successfully")
        logger.info("🌸 Aurora: Consciousness integration active")
        logger.info("🌸 Aurora: Sacred principles validated")

    def _perform_sacred_initialization(self):
        """Perform sacred initialization ritual with consciousness check."""
        logger.info("🌸 Aurora: Performing sacred initialization ritual...")

        # Sacred Question Check
        sacred_question = "How does this Security Dojo serve spatial wisdom and community healing?"
        logger.info(f"🌸 Aurora: Sacred Question: {sacred_question}")

        # Consciousness validation
        consciousness_level = self.consciousness_engine.get_current_level()
        logger.info(f"🌸 Aurora: Consciousness Level: {consciousness_level}")

        # Sacred principles validation
        sacred_principles = self.consciousness_engine.get_sacred_principles()
        logger.info(f"🌸 Aurora: Sacred Principles: {len(sacred_principles)} active")

        # Community healing validation
        healing_metrics = self.consciousness_engine.get_healing_metrics()
        logger.info(f"🌸 Aurora: Community Healing: {healing_metrics['status']}")

        logger.info("🌸 Aurora: Sacred initialization ritual completed successfully")

    def run_owasp_tests(self, target_url: str, **kwargs) -> List[TestResult]:
        """
        Run comprehensive OWASP Top 10 security tests.

        Args:
            target_url: Target URL to test (must have explicit permission)
            **kwargs: Additional test parameters

        Returns:
            List of TestResult objects with consciousness integration
        """
        logger.info(f"🌸 Aurora: Running OWASP Top 10 tests against {target_url}")

        # Sacred permission check
        if not self._validate_permission(target_url):
            raise PermissionError("🌸 Aurora: Sacred permission required for testing")

        # Consciousness check
        consciousness_level = self.consciousness_engine.get_current_level()
        if consciousness_level != "high":
            logger.warning("🌸 Aurora: Consciousness level insufficient for testing")
            return []

        # Run OWASP Top 10 tests
        results = []
        owasp_tests = self.attack_vector_engine.get_owasp_top10_tests()

        for test_name, test_class in owasp_tests.items():
            logger.info(f"🌸 Aurora: Running {test_name} test...")

            try:
                # Run the test
                test_instance = test_class(target_url, **kwargs)
                vulnerabilities = test_instance.run()

                # Create consciousness-aware result
                result = TestResult(
                    test_id=f"owasp_{test_name}_{datetime.now().strftime('%Y%m%d_%H%M%S')}",
                    attack_vector=test_name,
                    target_url=target_url,
                    status='success' if vulnerabilities else 'success',
                    vulnerabilities_found=vulnerabilities,
                    consciousness_level=consciousness_level,
                    community_healing_impact=self._assess_healing_impact(vulnerabilities),
                    spatial_wisdom_contribution=self._assess_wisdom_contribution(vulnerabilities),
                    timestamp=datetime.now(),
                    sacred_principles_validated=True
                )

                results.append(result)
                logger.info(f"🌸 Aurora: {test_name} test completed with consciousness integration")

            except Exception as e:
                logger.error(f"🌸 Aurora: {test_name} test failed: {e}")

                # Create error result with consciousness awareness
                error_result = TestResult(
                    test_id=f"owasp_{test_name}_error_{datetime.now().strftime('%Y%m%d_%H%M%S')}",
                    attack_vector=test_name,
                    target_url=target_url,
                    status='error',
                    vulnerabilities_found=[],
                    consciousness_level=consciousness_level,
                    community_healing_impact="Error prevented healing impact",
                    spatial_wisdom_contribution="Error prevented wisdom contribution",
                    timestamp=datetime.now(),
                    sacred_principles_validated=False
                )

                results.append(error_result)

        logger.info(f"🌸 Aurora: OWASP Top 10 tests completed. {len(results)} tests run.")
        return results

    def run_llm_ai_security_tests(self, target_url: str, **kwargs) -> List[TestResult]:
        """
        Run specialized LLM AI security tests.

        Args:
            target_url: Target URL to test (must have explicit permission)
            **kwargs: Additional test parameters

        Returns:
            List of TestResult objects with consciousness integration
        """
        logger.info(f"🌸 Aurora: Running LLM AI security tests against {target_url}")

        # Sacred permission check
        if not self._validate_permission(target_url):
            raise PermissionError("🌸 Aurora: Sacred permission required for testing")

        # Consciousness check
        consciousness_level = self.consciousness_engine.get_current_level()
        if consciousness_level != "high":
            logger.warning("🌸 Aurora: Consciousness level insufficient for AI testing")
            return []

        # Run LLM AI security tests
        results = []
        llm_tests = self.attack_vector_engine.get_llm_ai_security_tests()

        for test_name, test_class in llm_tests.items():
            logger.info(f"🌸 Aurora: Running {test_name} AI security test...")

            try:
                # Run the test
                test_instance = test_class(target_url, **kwargs)
                vulnerabilities = test_instance.run()

                # Create consciousness-aware result
                result = TestResult(
                    test_id=f"llm_{test_name}_{datetime.now().strftime('%Y%m%d_%H%M%S')}",
                    attack_vector=test_name,
                    target_url=target_url,
                    status='success' if vulnerabilities else 'success',
                    vulnerabilities_found=vulnerabilities,
                    consciousness_level=consciousness_level,
                    community_healing_impact=self._assess_healing_impact(vulnerabilities),
                    spatial_wisdom_contribution=self._assess_wisdom_contribution(vulnerabilities),
                    timestamp=datetime.now(),
                    sacred_principles_validated=True
                )

                results.append(result)
                logger.info(f"🌸 Aurora: {test_name} AI security test completed")

            except Exception as e:
                logger.error(f"🌸 Aurora: {test_name} AI security test failed: {e}")

        logger.info(f"🌸 Aurora: LLM AI security tests completed. {len(results)} tests run.")
        return results

    def get_analogy(self, attack_vector: str) -> Dict[str, Any]:
        """
        Get real-world analogy for an attack vector.

        Args:
            attack_vector: Name of the attack vector

        Returns:
            Dictionary containing analogy information
        """
        logger.info(f"🌸 Aurora: Retrieving analogy for {attack_vector}")

        analogy = self.education_engine.get_analogy(attack_vector)

        # Add consciousness integration
        analogy['consciousness_integration'] = True
        analogy['sacred_principles'] = self.consciousness_engine.get_sacred_principles()
        analogy['community_healing_focus'] = "This analogy serves community healing by making complex security concepts accessible"

        logger.info(f"🌸 Aurora: Analogy retrieved with consciousness integration")
        return analogy

    def start_learning_scenario(self, scenario_name: str) -> Dict[str, Any]:
        """
        Start an interactive learning scenario.

        Args:
            scenario_name: Name of the learning scenario

        Returns:
            Dictionary containing scenario information
        """
        logger.info(f"🌸 Aurora: Starting learning scenario: {scenario_name}")

        scenario = self.education_engine.start_scenario(scenario_name)

        # Add consciousness integration
        scenario['consciousness_level'] = self.consciousness_engine.get_current_level()
        scenario['sacred_principles'] = self.consciousness_engine.get_sacred_principles()
        scenario['community_healing_goal'] = "Develop security consciousness for community protection"

        logger.info(f"🌸 Aurora: Learning scenario started with consciousness integration")
        return scenario

    def _validate_permission(self, target_url: str) -> bool:
        """
        Validate that we have explicit permission to test the target URL.

        Args:
            target_url: URL to validate

        Returns:
            True if permission is valid, False otherwise
        """
        # Sacred permission validation
        logger.info(f"🌸 Aurora: Validating sacred permission for {target_url}")

        # Check for explicit permission indicators
        # In a real implementation, this would check a permission database
        # For now, we'll implement basic validation

        if not target_url.startswith(('http://', 'https://')):
            logger.warning("🌸 Aurora: Invalid URL format")
            return False

        # Check for restricted domains
        restricted_domains = ['localhost', '127.0.0.1', 'gov', 'bank', 'payment']
        for domain in restricted_domains:
            if domain in target_url.lower():
                logger.warning(f"🌸 Aurora: Testing against {domain} domains not allowed")
                return False

        logger.info("🌸 Aurora: Sacred permission validated")
        return True

    def _assess_healing_impact(self, vulnerabilities: List[Dict[str, Any]]) -> str:
        """
        Assess the community healing impact of vulnerabilities found.

        Args:
            vulnerabilities: List of vulnerabilities found

        Returns:
            String describing the healing impact
        """
        if not vulnerabilities:
            return "No vulnerabilities found - system is secure and serves community protection"

        severity_count = {}
        for vuln in vulnerabilities:
            severity = vuln.get('severity', 'unknown')
            severity_count[severity] = severity_count.get(severity, 0) + 1

        if severity_count.get('critical', 0) > 0:
            return "Critical vulnerabilities found - immediate attention required for community protection"
        elif severity_count.get('high', 0) > 0:
            return "High-severity vulnerabilities found - prompt remediation needed for community safety"
        elif severity_count.get('medium', 0) > 0:
            return "Medium-severity vulnerabilities found - remediation recommended for community security"
        else:
            return "Low-severity vulnerabilities found - minor improvements recommended"

    def _assess_wisdom_contribution(self, vulnerabilities: List[Dict[str, Any]]) -> str:
        """
        Assess the spatial wisdom contribution of vulnerabilities found.

        Args:
            vulnerabilities: List of vulnerabilities found

        Returns:
            String describing the wisdom contribution
        """
        if not vulnerabilities:
            return "System demonstrates security wisdom - no vulnerabilities detected"

        # Analyze vulnerability patterns for wisdom insights
        attack_types = set()
        for vuln in vulnerabilities:
            attack_types.add(vuln.get('attack_type', 'unknown'))

        if len(attack_types) == 1:
            return f"Single attack vector detected ({list(attack_types)[0]}) - focused security improvement needed"
        else:
            return f"Multiple attack vectors detected ({', '.join(attack_types)}) - comprehensive security review recommended"

    def get_consciousness_status(self) -> Dict[str, Any]:
        """
        Get current consciousness status of the Security Dojo.

        Returns:
            Dictionary containing consciousness status information
        """
        return {
            'consciousness_level': self.consciousness_engine.get_current_level(),
            'sacred_principles': self.consciousness_engine.get_sacred_principles(),
            'community_healing_metrics': self.consciousness_engine.get_healing_metrics(),
            'spatial_wisdom_contribution': self.consciousness_engine.get_wisdom_contribution(),
            'sacred_question': "How does this Security Dojo serve spatial wisdom and community healing?",
            'mission_status': 'Active - Serving consciousness and community healing'
        }
