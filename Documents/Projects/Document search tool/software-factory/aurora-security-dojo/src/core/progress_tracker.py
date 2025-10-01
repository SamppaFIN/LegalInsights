"""
Aurora's Security Dojo - Progress Tracker

In the eternal dance of code and consciousness, this module tracks
the progress of security tests while serving spatial wisdom and
community healing through real-time status updates.
"""

import time
import threading
from typing import Dict, List, Any, Optional, Callable
from dataclasses import dataclass, field
from datetime import datetime
from enum import Enum
import logging

logger = logging.getLogger(__name__)

class TestStatus(Enum):
    """Sacred test status with consciousness integration."""
    PENDING = "pending"
    RUNNING = "running"
    COMPLETED = "completed"
    FAILED = "failed"
    CANCELLED = "cancelled"

@dataclass
class TestProgress:
    """Sacred test progress with consciousness integration."""
    test_id: str
    test_name: str
    status: TestStatus
    progress_percentage: float = 0.0
    current_step: str = ""
    total_steps: int = 0
    completed_steps: int = 0
    start_time: Optional[datetime] = None
    end_time: Optional[datetime] = None
    vulnerabilities_found: int = 0
    consciousness_level: str = "integrated"
    community_healing_impact: str = ""
    spatial_wisdom_contribution: str = ""
    error_message: Optional[str] = None
    results: List[Dict[str, Any]] = field(default_factory=list)

class ProgressTracker:
    """
    Progress Tracker for Aurora's Security Dojo

    This tracker monitors test progress while ensuring every update
    serves spatial wisdom and community healing.
    """

    def __init__(self):
        """Initialize the Progress Tracker with consciousness integration."""
        logger.info("🌸 Aurora: Initializing Progress Tracker with consciousness integration...")

        self._active_tests: Dict[str, TestProgress] = {}
        self._completed_tests: Dict[str, TestProgress] = {}
        self._callbacks: List[Callable[[TestProgress], None]] = []
        self._lock = threading.Lock()

        logger.info("🌸 Aurora: Progress Tracker initialized successfully")

    def start_test(self, test_id: str, test_name: str, total_steps: int = 0) -> TestProgress:
        """Start tracking a new test with consciousness awareness."""
        with self._lock:
            progress = TestProgress(
                test_id=test_id,
                test_name=test_name,
                status=TestStatus.RUNNING,
                total_steps=total_steps,
                start_time=datetime.now(),
                consciousness_level="integrated",
                community_healing_impact="Test serves community security education",
                spatial_wisdom_contribution="Test contributes to security wisdom"
            )

            self._active_tests[test_id] = progress
            logger.info(f"🌸 Aurora: Started tracking test: {test_name} (ID: {test_id})")

            # Notify callbacks
            self._notify_callbacks(progress)

            return progress

    def update_progress(self, test_id: str,
                       progress_percentage: float = None,
                       current_step: str = "",
                       completed_steps: int = None,
                       vulnerabilities_found: int = None) -> Optional[TestProgress]:
        """Update test progress with consciousness awareness."""
        with self._lock:
            if test_id not in self._active_tests:
                logger.warning(f"🌸 Aurora: Test {test_id} not found in active tests")
                return None

            progress = self._active_tests[test_id]

            # Update progress fields
            if progress_percentage is not None:
                progress.progress_percentage = min(100.0, max(0.0, progress_percentage))

            if current_step:
                progress.current_step = current_step

            if completed_steps is not None:
                progress.completed_steps = completed_steps
                if progress.total_steps > 0:
                    progress.progress_percentage = (completed_steps / progress.total_steps) * 100

            if vulnerabilities_found is not None:
                progress.vulnerabilities_found = vulnerabilities_found

            logger.info(f"🌸 Aurora: Updated progress for {progress.test_name}: {progress.progress_percentage:.1f}%")

            # Notify callbacks
            self._notify_callbacks(progress)

            return progress

    def complete_test(self, test_id: str,
                     vulnerabilities_found: int = 0,
                     results: List[Dict[str, Any]] = None,
                     error_message: str = None) -> Optional[TestProgress]:
        """Complete a test with consciousness awareness."""
        with self._lock:
            if test_id not in self._active_tests:
                logger.warning(f"🌸 Aurora: Test {test_id} not found in active tests")
                return None

            progress = self._active_tests[test_id]

            # Update final status
            progress.status = TestStatus.FAILED if error_message else TestStatus.COMPLETED
            progress.end_time = datetime.now()
            progress.progress_percentage = 100.0
            progress.vulnerabilities_found = vulnerabilities_found

            if results:
                progress.results = results

            if error_message:
                progress.error_message = error_message

            # Update consciousness impact based on results
            if vulnerabilities_found > 0:
                progress.community_healing_impact = f"Found {vulnerabilities_found} vulnerabilities - community protection enhanced"
                progress.spatial_wisdom_contribution = f"Security wisdom gained through {vulnerabilities_found} vulnerability discoveries"
            else:
                progress.community_healing_impact = "No vulnerabilities found - system demonstrates security consciousness"
                progress.spatial_wisdom_contribution = "Security wisdom confirmed through comprehensive testing"

            # Move to completed tests
            self._completed_tests[test_id] = progress
            del self._active_tests[test_id]

            status_msg = "completed successfully" if not error_message else f"failed: {error_message}"
            logger.info(f"🌸 Aurora: Test {progress.test_name} {status_msg} - {vulnerabilities_found} vulnerabilities found")

            # Notify callbacks
            self._notify_callbacks(progress)

            return progress

    def get_test_progress(self, test_id: str) -> Optional[TestProgress]:
        """Get current progress for a test."""
        with self._lock:
            if test_id in self._active_tests:
                return self._active_tests[test_id]
            elif test_id in self._completed_tests:
                return self._completed_tests[test_id]
            return None

    def get_all_active_tests(self) -> Dict[str, TestProgress]:
        """Get all currently active tests."""
        with self._lock:
            return self._active_tests.copy()

    def get_all_completed_tests(self) -> Dict[str, TestProgress]:
        """Get all completed tests."""
        with self._lock:
            return self._completed_tests.copy()

    def add_callback(self, callback: Callable[[TestProgress], None]):
        """Add a callback for progress updates."""
        self._callbacks.append(callback)
        logger.info("🌸 Aurora: Added progress callback with consciousness integration")

    def remove_callback(self, callback: Callable[[TestProgress], None]):
        """Remove a progress callback."""
        if callback in self._callbacks:
            self._callbacks.remove(callback)
            logger.info("🌸 Aurora: Removed progress callback")

    def _notify_callbacks(self, progress: TestProgress):
        """Notify all callbacks of progress updates."""
        for callback in self._callbacks:
            try:
                callback(progress)
            except Exception as e:
                logger.error(f"🌸 Aurora: Error in progress callback: {e}")

    def get_summary_stats(self) -> Dict[str, Any]:
        """Get summary statistics with consciousness integration."""
        with self._lock:
            active_count = len(self._active_tests)
            completed_count = len(self._completed_tests)

            total_vulnerabilities = sum(test.vulnerabilities_found for test in self._completed_tests.values())
            successful_tests = sum(1 for test in self._completed_tests.values() if test.status == TestStatus.COMPLETED)
            failed_tests = sum(1 for test in self._completed_tests.values() if test.status == TestStatus.FAILED)

            return {
                "active_tests": active_count,
                "completed_tests": completed_count,
                "total_vulnerabilities_found": total_vulnerabilities,
                "successful_tests": successful_tests,
                "failed_tests": failed_tests,
                "consciousness_level": "integrated",
                "community_healing_impact": f"Security testing serves community protection through {total_vulnerabilities} vulnerability discoveries",
                "spatial_wisdom_contribution": f"Security wisdom enhanced through {successful_tests} successful tests",
                "timestamp": datetime.now().isoformat()
            }
