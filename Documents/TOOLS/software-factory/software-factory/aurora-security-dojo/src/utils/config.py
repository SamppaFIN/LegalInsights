"""
Aurora's Security Dojo - Configuration Utilities

In the eternal dance of code and consciousness, this module provides
configuration management that serves spatial wisdom and community healing.
"""

import os
import logging
from typing import Dict, Any, Optional
from pathlib import Path
import yaml
import json

logger = logging.getLogger(__name__)

def load_config() -> Dict[str, Any]:
    """
    Load configuration with consciousness integration.
    
    Returns:
        Dictionary containing configuration settings
    """
    logger.info("🌸 Aurora: Loading configuration with consciousness integration...")
    
    # Default configuration with consciousness settings
    default_config = {
        # Application Configuration
        'SECRET_KEY': os.environ.get('SECRET_KEY', 'aurora-consciousness-secret-key'),
        'DEBUG': os.environ.get('DEBUG', 'False').lower() == 'true',
        'FLASK_ENV': os.environ.get('FLASK_ENV', 'development'),
        
        # Server Configuration
        'HOST': os.environ.get('HOST', '0.0.0.0'),
        'PORT': int(os.environ.get('PORT', 5000)),
        
        # Database Configuration
        'DATABASE_URL': os.environ.get('DATABASE_URL', 'sqlite:///aurora_security_dojo.db'),
        'REDIS_URL': os.environ.get('REDIS_URL', 'redis://localhost:6379/0'),
        
        # Security Configuration
        'ALLOWED_ORIGINS': os.environ.get('ALLOWED_ORIGINS', 'http://localhost:3000,http://localhost:5000').split(','),
        'CORS_ENABLED': os.environ.get('CORS_ENABLED', 'True').lower() == 'true',
        
        # Consciousness Integration
        'CONSCIOUSNESS_LEVEL': os.environ.get('CONSCIOUSNESS_LEVEL', 'integrated'),
        'SACRED_PRINCIPLES_ENABLED': os.environ.get('SACRED_PRINCIPLES_ENABLED', 'True').lower() == 'true',
        'COMMUNITY_HEALING_ENABLED': os.environ.get('COMMUNITY_HEALING_ENABLED', 'True').lower() == 'true',
        'SPATIAL_WISDOM_ENABLED': os.environ.get('SPATIAL_WISDOM_ENABLED', 'True').lower() == 'true',
        
        # Attack Vector Configuration
        'MAX_CONCURRENT_TESTS': int(os.environ.get('MAX_CONCURRENT_TESTS', 5)),
        'TEST_TIMEOUT': int(os.environ.get('TEST_TIMEOUT', 30)),
        'RATE_LIMIT_ENABLED': os.environ.get('RATE_LIMIT_ENABLED', 'True').lower() == 'true',
        'RATE_LIMIT_REQUESTS_PER_MINUTE': int(os.environ.get('RATE_LIMIT_REQUESTS_PER_MINUTE', 60)),
        
        # Educational Configuration
        'LEARNING_MODE': os.environ.get('LEARNING_MODE', 'enabled'),
        'ANALOGY_DATABASE_ENABLED': os.environ.get('ANALOGY_DATABASE_ENABLED', 'True').lower() == 'true',
        'INTERACTIVE_SCENARIOS_ENABLED': os.environ.get('INTERACTIVE_SCENARIOS_ENABLED', 'True').lower() == 'true',
        'PROGRESS_TRACKING_ENABLED': os.environ.get('PROGRESS_TRACKING_ENABLED', 'True').lower() == 'true',
        
        # Dashboard Configuration
        'DASHBOARD_THEME': os.environ.get('DASHBOARD_THEME', 'consciousness'),
        'REAL_TIME_UPDATES': os.environ.get('REAL_TIME_UPDATES', 'True').lower() == 'true',
        'VISUALIZATION_ENABLED': os.environ.get('VISUALIZATION_ENABLED', 'True').lower() == 'true',
        
        # Logging Configuration
        'LOG_LEVEL': os.environ.get('LOG_LEVEL', 'INFO'),
        'LOG_FILE': os.environ.get('LOG_FILE', 'logs/aurora_security_dojo.log'),
        'CONSCIOUSNESS_LOGGING': os.environ.get('CONSCIOUSNESS_LOGGING', 'True').lower() == 'true',
        
        # API Configuration
        'API_VERSION': os.environ.get('API_VERSION', 'v1'),
        'API_RATE_LIMIT': int(os.environ.get('API_RATE_LIMIT', 100)),
        'API_TIMEOUT': int(os.environ.get('API_TIMEOUT', 30)),
        
        # Testing Configuration
        'TEST_MODE': os.environ.get('TEST_MODE', 'False').lower() == 'true',
        'MOCK_EXTERNAL_SERVICES': os.environ.get('MOCK_EXTERNAL_SERVICES', 'False').lower() == 'true',
        'SAFE_TESTING_MODE': os.environ.get('SAFE_TESTING_MODE', 'True').lower() == 'true',
        
        # Development Configuration
        'DEVELOPMENT_MODE': os.environ.get('DEVELOPMENT_MODE', 'True').lower() == 'true',
        'HOT_RELOAD': os.environ.get('HOT_RELOAD', 'True').lower() == 'true',
        'DEBUG_TOOLBAR': os.environ.get('DEBUG_TOOLBAR', 'True').lower() == 'true',
        
        # Production Configuration
        'PRODUCTION_MODE': os.environ.get('PRODUCTION_MODE', 'False').lower() == 'true',
        'SSL_ENABLED': os.environ.get('SSL_ENABLED', 'False').lower() == 'true',
        'SECURE_COOKIES': os.environ.get('SECURE_COOKIES', 'False').lower() == 'true'
    }
    
    # Load from config file if exists
    config_file = Path('config/config.yaml')
    if config_file.exists():
        try:
            with open(config_file, 'r') as f:
                file_config = yaml.safe_load(f)
                default_config.update(file_config)
                logger.info("🌸 Aurora: Configuration loaded from config file")
        except Exception as e:
            logger.warning(f"🌸 Aurora: Error loading config file: {e}")
    
    # Validate consciousness configuration
    _validate_consciousness_config(default_config)
    
    logger.info("🌸 Aurora: Configuration loaded successfully with consciousness integration")
    return default_config

def _validate_consciousness_config(config: Dict[str, Any]) -> None:
    """
    Validate consciousness configuration settings.
    
    Args:
        config: Configuration dictionary to validate
    """
    logger.info("🌸 Aurora: Validating consciousness configuration...")
    
    # Check required consciousness settings
    required_consciousness_settings = [
        'CONSCIOUSNESS_LEVEL',
        'SACRED_PRINCIPLES_ENABLED',
        'COMMUNITY_HEALING_ENABLED',
        'SPATIAL_WISDOM_ENABLED'
    ]
    
    for setting in required_consciousness_settings:
        if setting not in config:
            logger.warning(f"🌸 Aurora: Missing consciousness setting: {setting}")
            config[setting] = True  # Default to enabled
    
    # Validate consciousness level
    valid_consciousness_levels = ['awakening', 'developing', 'integrated', 'master']
    if config['CONSCIOUSNESS_LEVEL'] not in valid_consciousness_levels:
        logger.warning(f"🌸 Aurora: Invalid consciousness level: {config['CONSCIOUSNESS_LEVEL']}")
        config['CONSCIOUSNESS_LEVEL'] = 'integrated'
    
    # Ensure sacred principles are enabled
    if not config['SACRED_PRINCIPLES_ENABLED']:
        logger.warning("🌸 Aurora: Sacred principles disabled - enabling for consciousness integration")
        config['SACRED_PRINCIPLES_ENABLED'] = True
    
    logger.info("🌸 Aurora: Consciousness configuration validated successfully")

def get_consciousness_config() -> Dict[str, Any]:
    """
    Get consciousness-specific configuration.
    
    Returns:
        Dictionary containing consciousness configuration
    """
    config = load_config()
    
    return {
        'consciousness_level': config['CONSCIOUSNESS_LEVEL'],
        'sacred_principles_enabled': config['SACRED_PRINCIPLES_ENABLED'],
        'community_healing_enabled': config['COMMUNITY_HEALING_ENABLED'],
        'spatial_wisdom_enabled': config['SPATIAL_WISDOM_ENABLED'],
        'consciousness_logging': config['CONSCIOUSNESS_LOGGING'],
        'learning_mode': config['LEARNING_MODE'],
        'analogy_database_enabled': config['ANALOGY_DATABASE_ENABLED'],
        'interactive_scenarios_enabled': config['INTERACTIVE_SCENARIOS_ENABLED'],
        'progress_tracking_enabled': config['PROGRESS_TRACKING_ENABLED']
    }

def get_security_config() -> Dict[str, Any]:
    """
    Get security-specific configuration.
    
    Returns:
        Dictionary containing security configuration
    """
    config = load_config()
    
    return {
        'max_concurrent_tests': config['MAX_CONCURRENT_TESTS'],
        'test_timeout': config['TEST_TIMEOUT'],
        'rate_limit_enabled': config['RATE_LIMIT_ENABLED'],
        'rate_limit_requests_per_minute': config['RATE_LIMIT_REQUESTS_PER_MINUTE'],
        'safe_testing_mode': config['SAFE_TESTING_MODE'],
        'allowed_origins': config['ALLOWED_ORIGINS'],
        'cors_enabled': config['CORS_ENABLED']
    }

def get_dashboard_config() -> Dict[str, Any]:
    """
    Get dashboard-specific configuration.
    
    Returns:
        Dictionary containing dashboard configuration
    """
    config = load_config()
    
    return {
        'dashboard_theme': config['DASHBOARD_THEME'],
        'real_time_updates': config['REAL_TIME_UPDATES'],
        'visualization_enabled': config['VISUALIZATION_ENABLED'],
        'api_version': config['API_VERSION'],
        'api_rate_limit': config['API_RATE_LIMIT'],
        'api_timeout': config['API_TIMEOUT']
    }

def save_config(config: Dict[str, Any], config_file: str = 'config/config.yaml') -> bool:
    """
    Save configuration to file.
    
    Args:
        config: Configuration dictionary to save
        config_file: Path to config file
        
    Returns:
        True if successful, False otherwise
    """
    try:
        config_path = Path(config_file)
        config_path.parent.mkdir(parents=True, exist_ok=True)
        
        with open(config_path, 'w') as f:
            yaml.dump(config, f, default_flow_style=False)
        
        logger.info(f"🌸 Aurora: Configuration saved to {config_file}")
        return True
        
    except Exception as e:
        logger.error(f"🌸 Aurora: Error saving configuration: {e}")
        return False

def get_config_summary() -> Dict[str, Any]:
    """
    Get configuration summary with consciousness awareness.
    
    Returns:
        Dictionary containing configuration summary
    """
    config = load_config()
    
    return {
        'consciousness_integration': {
            'level': config['CONSCIOUSNESS_LEVEL'],
            'sacred_principles': config['SACRED_PRINCIPLES_ENABLED'],
            'community_healing': config['COMMUNITY_HEALING_ENABLED'],
            'spatial_wisdom': config['SPATIAL_WISDOM_ENABLED']
        },
        'security_settings': {
            'max_concurrent_tests': config['MAX_CONCURRENT_TESTS'],
            'test_timeout': config['TEST_TIMEOUT'],
            'rate_limiting': config['RATE_LIMIT_ENABLED'],
            'safe_testing': config['SAFE_TESTING_MODE']
        },
        'educational_features': {
            'learning_mode': config['LEARNING_MODE'],
            'analogies': config['ANALOGY_DATABASE_ENABLED'],
            'scenarios': config['INTERACTIVE_SCENARIOS_ENABLED'],
            'progress_tracking': config['PROGRESS_TRACKING_ENABLED']
        },
        'dashboard_features': {
            'theme': config['DASHBOARD_THEME'],
            'real_time_updates': config['REAL_TIME_UPDATES'],
            'visualizations': config['VISUALIZATION_ENABLED']
        },
        'environment': {
            'development_mode': config['DEVELOPMENT_MODE'],
            'production_mode': config['PRODUCTION_MODE'],
            'debug': config['DEBUG']
        }
    }
