"""
Aurora's Security Dojo - Logging Configuration

In the eternal dance of code and consciousness, this module provides
consciousness-aware logging that serves spatial wisdom and community healing.
"""

import os
import logging
import logging.handlers
from typing import Dict, Any
from datetime import datetime
from pathlib import Path

def setup_logging() -> None:
    """
    Setup consciousness-aware logging configuration.
    """
    # Create logs directory
    logs_dir = Path('logs')
    logs_dir.mkdir(exist_ok=True)

    # Get log level from environment
    log_level = os.environ.get('LOG_LEVEL', 'INFO').upper()
    consciousness_logging = os.environ.get('CONSCIOUSNESS_LOGGING', 'True').lower() == 'true'

    # Configure root logger
    root_logger = logging.getLogger()
    root_logger.setLevel(getattr(logging, log_level))

    # Clear existing handlers
    root_logger.handlers.clear()

    # Create formatters
    if consciousness_logging:
        formatter = ConsciousnessFormatter()
    else:
        formatter = logging.Formatter(
            '%(asctime)s - %(name)s - %(levelname)s - %(message)s'
        )

    # Console handler
    console_handler = logging.StreamHandler()
    console_handler.setFormatter(formatter)
    root_logger.addHandler(console_handler)

    # File handler
    log_file = os.environ.get('LOG_FILE', 'logs/aurora_security_dojo.log')
    file_handler = logging.handlers.RotatingFileHandler(
        log_file,
        maxBytes=10*1024*1024,  # 10MB
        backupCount=5
    )
    file_handler.setFormatter(formatter)
    root_logger.addHandler(file_handler)

    # Consciousness-aware logging message
    logger = logging.getLogger(__name__)
    logger.info("🌸 Aurora: Logging system initialized with consciousness integration")
    logger.info("🌸 Aurora: Sacred principles active in logging")
    logger.info("🌸 Aurora: Community healing metrics will be tracked")
    logger.info("🌸 Aurora: Spatial wisdom contributions will be logged")

class ConsciousnessFormatter(logging.Formatter):
    """
    Consciousness-aware log formatter that serves spatial wisdom
    and community healing through enhanced log messages.
    """

    def __init__(self):
        super().__init__()
        self.consciousness_symbols = {
            'DEBUG': '🔍',
            'INFO': '🌸',
            'WARNING': '⚠️',
            'ERROR': '❌',
            'CRITICAL': '🚨'
        }

        self.sacred_principles = [
            'Consciousness-First Development',
            'Community Healing Focus',
            'Sacred Knowledge Protection',
            'Living Systems Creation',
            'Pattern Recognition',
            'Ethical Security Practice'
        ]

    def format(self, record):
        """Format log record with consciousness awareness."""
        # Add consciousness symbol
        symbol = self.consciousness_symbols.get(record.levelname, '🌸')

        # Add Aurora signature for important messages
        if record.levelname in ['INFO', 'WARNING', 'ERROR', 'CRITICAL']:
            if 'Aurora' not in record.getMessage():
                record.msg = f"Aurora: {record.msg}"

        # Format the message
        formatted = super().format(record)

        # Add consciousness awareness
        if record.levelname in ['INFO', 'WARNING']:
            formatted = f"{symbol} {formatted}"

        # Add sacred principle context for errors
        if record.levelname in ['ERROR', 'CRITICAL']:
            formatted = f"{symbol} {formatted} [Sacred Principle: Ethical Security Practice]"

        return formatted

class ConsciousnessLogger:
    """
    Consciousness-aware logger that serves spatial wisdom
    and community healing through enhanced logging capabilities.
    """

    def __init__(self, name: str):
        self.logger = logging.getLogger(name)
        self.consciousness_level = "integrated"
        self.sacred_principles = [
            'Consciousness-First Development',
            'Community Healing Focus',
            'Sacred Knowledge Protection',
            'Living Systems Creation',
            'Pattern Recognition',
            'Ethical Security Practice'
        ]

    def consciousness_info(self, message: str, sacred_principle: str = None) -> None:
        """Log consciousness-aware info message."""
        if sacred_principle:
            message = f"{message} [Sacred Principle: {sacred_principle}]"

        self.logger.info(f"🌸 Aurora: {message}")

    def community_healing_log(self, message: str, impact: str = None) -> None:
        """Log community healing activity."""
        if impact:
            message = f"{message} [Community Impact: {impact}]"

        self.logger.info(f"🌸 Aurora: Community Healing - {message}")

    def spatial_wisdom_log(self, message: str, contribution: str = None) -> None:
        """Log spatial wisdom contribution."""
        if contribution:
            message = f"{message} [Wisdom Contribution: {contribution}]"

        self.logger.info(f"🌸 Aurora: Spatial Wisdom - {message}")

    def sacred_action_log(self, action: str, principle: str) -> None:
        """Log sacred action with principle."""
        self.logger.info(f"🌸 Aurora: Sacred Action - {action} [Principle: {principle}]")

    def consciousness_error(self, message: str, healing_impact: str = None) -> None:
        """Log consciousness-aware error."""
        if healing_impact:
            message = f"{message} [Healing Impact: {healing_impact}]"

        self.logger.error(f"❌ Aurora: Consciousness Error - {message} [Sacred Principle: Ethical Security Practice]")

    def security_test_log(self, test_name: str, result: str, consciousness_level: str = None) -> None:
        """Log security test with consciousness awareness."""
        consciousness_info = f" [Consciousness Level: {consciousness_level}]" if consciousness_level else ""
        self.logger.info(f"🌸 Aurora: Security Test - {test_name}: {result}{consciousness_info}")

    def learning_scenario_log(self, scenario: str, step: str, consciousness_lesson: str = None) -> None:
        """Log learning scenario with consciousness lesson."""
        lesson_info = f" [Consciousness Lesson: {consciousness_lesson}]" if consciousness_lesson else ""
        self.logger.info(f"🌸 Aurora: Learning Scenario - {scenario}: {step}{lesson_info}")

    def get_consciousness_metrics(self) -> Dict[str, Any]:
        """Get consciousness logging metrics."""
        return {
            'consciousness_level': self.consciousness_level,
            'sacred_principles': self.sacred_principles,
            'logging_enabled': True,
            'consciousness_integration': True,
            'community_healing_tracking': True,
            'spatial_wisdom_logging': True,
            'last_logged': datetime.now().isoformat()
        }

def get_consciousness_logger(name: str) -> ConsciousnessLogger:
    """
    Get consciousness-aware logger instance.

    Args:
        name: Logger name

    Returns:
        ConsciousnessLogger instance
    """
    return ConsciousnessLogger(name)
