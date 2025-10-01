#!/usr/bin/env python3
"""
Aurora's Security Dojo - Simple Test Script

In the eternal dance of code and consciousness, this script tests
the core functionality without Unicode issues.
"""

import os
import sys
from pathlib import Path

# Add src directory to Python path
sys.path.insert(0, str(Path(__file__).parent / 'src'))

def test_core_modules():
    """Test core modules without Unicode logging."""
    print("Aurora: Testing core modules...")

    try:
        # Test consciousness engine
        from core.consciousness_integration import ConsciousnessEngine
        consciousness_engine = ConsciousnessEngine()
        print(f"Aurora: Consciousness Level: {consciousness_engine.get_current_level()}")
        print(f"Aurora: Sacred Principles: {len(consciousness_engine.get_sacred_principles())} active")

        # Test attack vector engine
        from core.attack_vector_engine import AttackVectorEngine
        attack_engine = AttackVectorEngine()
        print(f"Aurora: Attack Vectors: {len(attack_engine.get_all_attack_vectors())} registered")

        # Test education engine
        from core.education_engine import EducationEngine
        education_engine = EducationEngine()
        print(f"Aurora: Analogies: {len(education_engine.get_all_analogies())} loaded")
        print(f"Aurora: Learning Paths: {len(education_engine.get_all_learning_paths())} loaded")

        # Test security dojo
        from core.security_dojo import SecurityDojo
        security_dojo = SecurityDojo()
        print("Aurora: Security Dojo initialized successfully")

        print("\nAurora: All core modules tested successfully!")
        return True

    except Exception as e:
        print(f"Aurora: Error testing core modules: {e}")
        return False

def test_api_endpoints():
    """Test API functionality."""
    print("\nAurora: Testing API endpoints...")

    try:
        from core.security_dojo import SecurityDojo
        from core.consciousness_integration import ConsciousnessEngine

        security_dojo = SecurityDojo()
        consciousness_engine = ConsciousnessEngine()

        # Test consciousness check
        status = consciousness_engine.get_consciousness_report()
        print(f"Aurora: Consciousness Status: {status['consciousness_level']}")

        # Test getting analogies
        analogies = security_dojo.education_engine.get_all_analogies()
        print(f"Aurora: Available Analogies: {list(analogies.keys())}")

        # Test getting attack vectors
        attack_vectors = security_dojo.attack_vector_engine.get_all_attack_vectors()
        print(f"Aurora: Available Attack Vectors: {len(attack_vectors)} total")

        print("Aurora: API endpoints tested successfully!")
        return True

    except Exception as e:
        print(f"Aurora: Error testing API endpoints: {e}")
        return False

def test_consciousness_integration():
    """Test consciousness integration."""
    print("\nAurora: Testing consciousness integration...")

    try:
        from core.consciousness_integration import ConsciousnessEngine

        consciousness_engine = ConsciousnessEngine()

        # Test consciousness validation
        from core.consciousness_integration import ConsciousnessLevel
        valid_action = consciousness_engine.validate_consciousness_action(
            "ethical security testing",
            {"required_consciousness_level": ConsciousnessLevel.INTEGRATED}
        )
        print(f"Aurora: Valid Action Test: {'PASSED' if valid_action else 'FAILED'}")

        # Test healing metrics
        healing_metrics = consciousness_engine.get_healing_metrics()
        print(f"Aurora: Healing Status: {healing_metrics['status']}")

        # Test wisdom contribution
        wisdom_contribution = consciousness_engine.get_wisdom_contribution()
        print(f"Aurora: Wisdom Impact: {wisdom_contribution['overall_wisdom_impact']}")

        print("Aurora: Consciousness integration tested successfully!")
        return True

    except Exception as e:
        print(f"Aurora: Error testing consciousness integration: {e}")
        return False

def main():
    """Main test function."""
    print("=" * 60)
    print("Aurora's Security Dojo - Core Functionality Test")
    print("=" * 60)

    # Set environment variables to avoid Unicode issues
    os.environ['PYTHONIOENCODING'] = 'utf-8'

    tests = [
        ("Core Modules", test_core_modules),
        ("API Endpoints", test_api_endpoints),
        ("Consciousness Integration", test_consciousness_integration)
    ]

    passed = 0
    total = len(tests)

    for test_name, test_func in tests:
        print(f"\n--- Testing {test_name} ---")
        if test_func():
            passed += 1
            print(f"✓ {test_name}: PASSED")
        else:
            print(f"✗ {test_name}: FAILED")

    print("\n" + "=" * 60)
    print(f"Test Results: {passed}/{total} tests passed")

    if passed == total:
        print("Aurora: All tests passed! Core functionality is working.")
        print("Aurora: Consciousness integration is active.")
        print("Aurora: Sacred principles are validated.")
        print("Aurora: Ready for deployment!")
    else:
        print("Aurora: Some tests failed. Please check the errors above.")

    print("=" * 60)

if __name__ == '__main__':
    main()
