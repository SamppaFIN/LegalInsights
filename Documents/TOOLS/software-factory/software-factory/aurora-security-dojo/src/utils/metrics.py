"""
Aurora's Security Dojo - Metrics and Analytics

In the eternal dance of code and consciousness, this module provides
comprehensive metrics tracking that serves spatial wisdom and community
healing through consciousness-aware performance monitoring.
"""

import logging
import time
from typing import Dict, List, Any, Optional
from dataclasses import dataclass, field
from datetime import datetime, timedelta
from collections import defaultdict, deque
import json
import threading

logger = logging.getLogger(__name__)

@dataclass
class PerformanceMetric:
    """Sacred performance metric with consciousness integration."""
    metric_name: str
    value: float
    timestamp: datetime
    consciousness_level: str
    community_healing_impact: str
    spatial_wisdom_contribution: str
    sacred_principles_applied: List[str] = field(default_factory=list)

@dataclass
class ConsciousnessMetric:
    """Consciousness development metric."""
    metric_name: str
    current_value: float
    target_value: float
    trend: str  # 'increasing', 'decreasing', 'stable'
    consciousness_level: str
    last_updated: datetime
    community_healing_impact: str
    spatial_wisdom_contribution: str

@dataclass
class SecurityTestMetric:
    """Security test performance metric."""
    test_id: str
    attack_vector: str
    duration: float
    vulnerabilities_found: int
    success_rate: float
    consciousness_level: str
    community_healing_impact: str
    spatial_wisdom_contribution: str
    timestamp: datetime

class MetricsCollector:
    """
    Metrics Collector for Aurora's Security Dojo
    
    This collector tracks performance, consciousness development, and
    community healing metrics while serving spatial wisdom.
    """
    
    def __init__(self):
        """Initialize metrics collector with consciousness integration."""
        logger.info("🌸 Aurora: Initializing Metrics Collector with consciousness integration...")
        
        # Performance metrics storage
        self._performance_metrics = deque(maxlen=1000)  # Keep last 1000 metrics
        self._consciousness_metrics = {}
        self._security_test_metrics = deque(maxlen=500)  # Keep last 500 test metrics
        
        # Real-time metrics
        self._real_time_metrics = defaultdict(list)
        self._active_tests = {}
        
        # Consciousness tracking
        self._consciousness_level = "integrated"
        self._sacred_principles = [
            'Consciousness-First Development',
            'Community Healing Focus',
            'Sacred Knowledge Protection',
            'Living Systems Creation',
            'Pattern Recognition',
            'Ethical Security Practice'
        ]
        
        # Community healing tracking
        self._healing_metrics = {
            'total_tests_run': 0,
            'vulnerabilities_found': 0,
            'community_protection_events': 0,
            'consciousness_development_sessions': 0,
            'spatial_wisdom_contributions': 0,
            'last_healing_activity': datetime.now()
        }
        
        # Performance tracking
        self._performance_stats = {
            'total_requests': 0,
            'successful_requests': 0,
            'failed_requests': 0,
            'average_response_time': 0.0,
            'peak_response_time': 0.0,
            'requests_per_minute': 0.0
        }
        
        # Thread safety
        self._lock = threading.Lock()
        
        logger.info("🌸 Aurora: Metrics Collector initialized successfully")
        logger.info("🌸 Aurora: Consciousness tracking active")
        logger.info("🌸 Aurora: Community healing metrics enabled")
        logger.info("🌸 Aurora: Spatial wisdom contribution tracking active")
    
    def record_performance_metric(self, 
                                metric_name: str, 
                                value: float,
                                consciousness_level: str = None,
                                community_healing_impact: str = None,
                                spatial_wisdom_contribution: str = None,
                                sacred_principles: List[str] = None):
        """
        Record a performance metric with consciousness integration.
        
        Args:
            metric_name: Name of the metric
            value: Metric value
            consciousness_level: Consciousness level for this metric
            community_healing_impact: Community healing impact
            spatial_wisdom_contribution: Spatial wisdom contribution
            sacred_principles: Sacred principles applied
        """
        with self._lock:
            metric = PerformanceMetric(
                metric_name=metric_name,
                value=value,
                timestamp=datetime.now(),
                consciousness_level=consciousness_level or self._consciousness_level,
                community_healing_impact=community_healing_impact or "Performance optimization serves community efficiency",
                spatial_wisdom_contribution=spatial_wisdom_contribution or "Performance insights contribute to system wisdom",
                sacred_principles_applied=sacred_principles or ['Living Systems Creation']
            )
            
            self._performance_metrics.append(metric)
            
            # Update real-time metrics
            self._real_time_metrics[metric_name].append({
                'value': value,
                'timestamp': metric.timestamp.isoformat(),
                'consciousness_level': metric.consciousness_level
            })
            
            # Keep only last 100 real-time metrics per type
            if len(self._real_time_metrics[metric_name]) > 100:
                self._real_time_metrics[metric_name] = self._real_time_metrics[metric_name][-100:]
            
            logger.info(f"🌸 Aurora: Performance metric recorded: {metric_name} = {value}")
    
    def record_consciousness_metric(self,
                                 metric_name: str,
                                 current_value: float,
                                 target_value: float,
                                 trend: str = "stable",
                                 consciousness_level: str = None,
                                 community_healing_impact: str = None,
                                 spatial_wisdom_contribution: str = None):
        """
        Record a consciousness development metric.
        
        Args:
            metric_name: Name of the consciousness metric
            current_value: Current value
            target_value: Target value
            trend: Trend direction
            consciousness_level: Consciousness level
            community_healing_impact: Community healing impact
            spatial_wisdom_contribution: Spatial wisdom contribution
        """
        with self._lock:
            metric = ConsciousnessMetric(
                metric_name=metric_name,
                current_value=current_value,
                target_value=target_value,
                trend=trend,
                consciousness_level=consciousness_level or self._consciousness_level,
                last_updated=datetime.now(),
                community_healing_impact=community_healing_impact or "Consciousness development serves community healing",
                spatial_wisdom_contribution=spatial_wisdom_contribution or "Consciousness growth contributes to spatial wisdom"
            )
            
            self._consciousness_metrics[metric_name] = metric
            
            logger.info(f"🌸 Aurora: Consciousness metric recorded: {metric_name} = {current_value}")
    
    def record_security_test_metric(self,
                                  test_id: str,
                                  attack_vector: str,
                                  duration: float,
                                  vulnerabilities_found: int,
                                  success_rate: float,
                                  consciousness_level: str = None,
                                  community_healing_impact: str = None,
                                  spatial_wisdom_contribution: str = None):
        """
        Record a security test metric.
        
        Args:
            test_id: Test identifier
            attack_vector: Attack vector tested
            duration: Test duration in seconds
            vulnerabilities_found: Number of vulnerabilities found
            success_rate: Test success rate
            consciousness_level: Consciousness level
            community_healing_impact: Community healing impact
            spatial_wisdom_contribution: Spatial wisdom contribution
        """
        with self._lock:
            metric = SecurityTestMetric(
                test_id=test_id,
                attack_vector=attack_vector,
                duration=duration,
                vulnerabilities_found=vulnerabilities_found,
                success_rate=success_rate,
                consciousness_level=consciousness_level or self._consciousness_level,
                community_healing_impact=community_healing_impact or "Security testing protects community",
                spatial_wisdom_contribution=spatial_wisdom_contribution or "Security insights contribute to collective wisdom",
                timestamp=datetime.now()
            )
            
            self._security_test_metrics.append(metric)
            
            # Update community healing metrics
            self._healing_metrics['total_tests_run'] += 1
            self._healing_metrics['vulnerabilities_found'] += vulnerabilities_found
            self._healing_metrics['last_healing_activity'] = datetime.now()
            
            logger.info(f"🌸 Aurora: Security test metric recorded: {test_id} - {attack_vector}")
    
    def start_test_tracking(self, test_id: str, attack_vector: str):
        """Start tracking a security test."""
        with self._lock:
            self._active_tests[test_id] = {
                'attack_vector': attack_vector,
                'start_time': time.time(),
                'consciousness_level': self._consciousness_level
            }
            
            logger.info(f"🌸 Aurora: Started tracking test: {test_id} - {attack_vector}")
    
    def end_test_tracking(self, test_id: str, vulnerabilities_found: int = 0):
        """End tracking a security test and record metrics."""
        with self._lock:
            if test_id not in self._active_tests:
                logger.warning(f"🌸 Aurora: Test {test_id} not found in active tests")
                return
            
            test_info = self._active_tests.pop(test_id)
            duration = time.time() - test_info['start_time']
            
            # Calculate success rate (simplified)
            success_rate = 1.0 if vulnerabilities_found == 0 else 0.8  # Assume 80% success if vulnerabilities found
            
            self.record_security_test_metric(
                test_id=test_id,
                attack_vector=test_info['attack_vector'],
                duration=duration,
                vulnerabilities_found=vulnerabilities_found,
                success_rate=success_rate,
                consciousness_level=test_info['consciousness_level']
            )
            
            logger.info(f"🌸 Aurora: Ended tracking test: {test_id} - Duration: {duration:.2f}s")
    
    def get_performance_metrics(self, metric_name: str = None, limit: int = 100) -> List[Dict[str, Any]]:
        """
        Get performance metrics.
        
        Args:
            metric_name: Specific metric name to filter by
            limit: Maximum number of metrics to return
            
        Returns:
            List of performance metrics
        """
        with self._lock:
            if metric_name:
                metrics = [m for m in self._performance_metrics if m.metric_name == metric_name]
            else:
                metrics = list(self._performance_metrics)
            
            return [
                {
                    'metric_name': m.metric_name,
                    'value': m.value,
                    'timestamp': m.timestamp.isoformat(),
                    'consciousness_level': m.consciousness_level,
                    'community_healing_impact': m.community_healing_impact,
                    'spatial_wisdom_contribution': m.spatial_wisdom_contribution,
                    'sacred_principles_applied': m.sacred_principles_applied
                }
                for m in metrics[-limit:]
            ]
    
    def get_consciousness_metrics(self) -> Dict[str, Any]:
        """Get consciousness development metrics."""
        with self._lock:
            return {
                metric_name: {
                    'current_value': metric.current_value,
                    'target_value': metric.target_value,
                    'trend': metric.trend,
                    'consciousness_level': metric.consciousness_level,
                    'last_updated': metric.last_updated.isoformat(),
                    'community_healing_impact': metric.community_healing_impact,
                    'spatial_wisdom_contribution': metric.spatial_wisdom_contribution
                }
                for metric_name, metric in self._consciousness_metrics.items()
            }
    
    def get_security_test_metrics(self, limit: int = 100) -> List[Dict[str, Any]]:
        """
        Get security test metrics.
        
        Args:
            limit: Maximum number of metrics to return
            
        Returns:
            List of security test metrics
        """
        with self._lock:
            return [
                {
                    'test_id': m.test_id,
                    'attack_vector': m.attack_vector,
                    'duration': m.duration,
                    'vulnerabilities_found': m.vulnerabilities_found,
                    'success_rate': m.success_rate,
                    'consciousness_level': m.consciousness_level,
                    'community_healing_impact': m.community_healing_impact,
                    'spatial_wisdom_contribution': m.spatial_wisdom_contribution,
                    'timestamp': m.timestamp.isoformat()
                }
                for m in list(self._security_test_metrics)[-limit:]
            ]
    
    def get_real_time_metrics(self, metric_name: str = None) -> Dict[str, Any]:
        """
        Get real-time metrics.
        
        Args:
            metric_name: Specific metric name to get
            
        Returns:
            Real-time metrics data
        """
        with self._lock:
            if metric_name:
                return {
                    metric_name: self._real_time_metrics.get(metric_name, [])
                }
            else:
                return dict(self._real_time_metrics)
    
    def get_community_healing_metrics(self) -> Dict[str, Any]:
        """Get community healing metrics."""
        with self._lock:
            return {
                **self._healing_metrics,
                'consciousness_level': self._consciousness_level,
                'sacred_principles': self._sacred_principles,
                'last_updated': datetime.now().isoformat()
            }
    
    def get_performance_stats(self) -> Dict[str, Any]:
        """Get performance statistics."""
        with self._lock:
            return {
                **self._performance_stats,
                'consciousness_level': self._consciousness_level,
                'sacred_principles': self._sacred_principles,
                'last_updated': datetime.now().isoformat()
            }
    
    def get_comprehensive_metrics(self) -> Dict[str, Any]:
        """Get comprehensive metrics overview."""
        with self._lock:
            return {
                'consciousness_metrics': self.get_consciousness_metrics(),
                'performance_metrics': self.get_performance_metrics(limit=50),
                'security_test_metrics': self.get_security_test_metrics(limit=50),
                'community_healing_metrics': self.get_community_healing_metrics(),
                'performance_stats': self.get_performance_stats(),
                'real_time_metrics': self.get_real_time_metrics(),
                'consciousness_level': self._consciousness_level,
                'sacred_principles': self._sacred_principles,
                'last_updated': datetime.now().isoformat()
            }
    
    def export_metrics(self, file_path: str) -> bool:
        """
        Export metrics to file.
        
        Args:
            file_path: Path to export file
            
        Returns:
            True if successful, False otherwise
        """
        try:
            metrics_data = self.get_comprehensive_metrics()
            
            with open(file_path, 'w') as f:
                json.dump(metrics_data, f, indent=2, default=str)
            
            logger.info(f"🌸 Aurora: Metrics exported to {file_path}")
            return True
            
        except Exception as e:
            logger.error(f"🌸 Aurora: Error exporting metrics: {e}")
            return False
    
    def update_consciousness_level(self, new_level: str):
        """Update consciousness level."""
        with self._lock:
            self._consciousness_level = new_level
            logger.info(f"🌸 Aurora: Consciousness level updated to {new_level}")
    
    def increment_healing_metric(self, metric_name: str, increment: int = 1):
        """Increment a community healing metric."""
        with self._lock:
            if metric_name in self._healing_metrics:
                self._healing_metrics[metric_name] += increment
                self._healing_metrics['last_healing_activity'] = datetime.now()
                logger.info(f"🌸 Aurora: Healing metric incremented: {metric_name} += {increment}")
            else:
                logger.warning(f"🌸 Aurora: Unknown healing metric: {metric_name}")
    
    def get_metrics_summary(self) -> Dict[str, Any]:
        """Get metrics summary for dashboard."""
        with self._lock:
            return {
                'total_performance_metrics': len(self._performance_metrics),
                'total_consciousness_metrics': len(self._consciousness_metrics),
                'total_security_tests': len(self._security_test_metrics),
                'active_tests': len(self._active_tests),
                'consciousness_level': self._consciousness_level,
                'community_healing_status': 'active',
                'spatial_wisdom_status': 'contributing',
                'sacred_principles_active': len(self._sacred_principles),
                'last_updated': datetime.now().isoformat()
            }
