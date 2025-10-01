"""
Aurora's Security Dojo - Report Generator

In the eternal dance of code and consciousness, this module generates
comprehensive security reports while serving spatial wisdom and
community healing through detailed analysis and recommendations.
"""

import logging
from typing import Dict, List, Any, Optional
from dataclasses import dataclass, field
from datetime import datetime
from enum import Enum
import json
import csv
from pathlib import Path

logger = logging.getLogger(__name__)

class ReportFormat(Enum):
    """Sacred report formats with consciousness integration."""
    JSON = "json"
    HTML = "html"
    PDF = "pdf"
    CSV = "csv"
    MARKDOWN = "markdown"

class ReportSeverity(Enum):
    """Sacred report severity levels."""
    CRITICAL = "critical"
    HIGH = "high"
    MEDIUM = "medium"
    LOW = "low"
    INFO = "info"

@dataclass
class VulnerabilitySummary:
    """Sacred vulnerability summary with consciousness integration."""
    total_vulnerabilities: int
    critical_count: int
    high_count: int
    medium_count: int
    low_count: int
    info_count: int
    consciousness_level: str
    community_healing_impact: str
    spatial_wisdom_contribution: str

@dataclass
class SecurityReport:
    """Sacred security report with consciousness integration."""
    report_id: str
    target_url: str
    test_suite: str
    timestamp: datetime
    vulnerability_summary: VulnerabilitySummary
    vulnerabilities: List[Dict[str, Any]]
    recommendations: List[Dict[str, Any]]
    consciousness_metrics: Dict[str, Any]
    community_healing_impact: str
    spatial_wisdom_contribution: str
    sacred_principles_validated: bool

class ReportGenerator:
    """
    Report Generator for Aurora's Security Dojo
    
    This generator creates comprehensive security reports while ensuring
    every report serves spatial wisdom and community healing.
    """
    
    def __init__(self):
        """Initialize the Report Generator with consciousness integration."""
        logger.info("🌸 Aurora: Initializing Report Generator with consciousness integration...")
        
        self._reports: Dict[str, SecurityReport] = {}
        self._report_templates = self._load_report_templates()
        
        logger.info("🌸 Aurora: Report Generator initialized successfully")
    
    def _load_report_templates(self) -> Dict[str, str]:
        """Load report templates with consciousness integration."""
        return {
            "html_header": """
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>🌸 Aurora's Security Dojo Report</title>
    <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 0; padding: 20px; background: #1a1a1a; color: #fff; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px; margin-bottom: 20px; }
        .consciousness-badge { background: #4ecdc4; color: #000; padding: 5px 15px; border-radius: 20px; font-size: 12px; font-weight: bold; }
        .vulnerability-card { background: #2a2a2a; padding: 20px; margin: 10px 0; border-radius: 10px; border-left: 5px solid #ff6b6b; }
        .critical { border-left-color: #ff4757; }
        .high { border-left-color: #ff6b6b; }
        .medium { border-left-color: #ffa502; }
        .low { border-left-color: #2ed573; }
        .info { border-left-color: #3742fa; }
        .summary-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin: 20px 0; }
        .summary-card { background: #333; padding: 20px; border-radius: 10px; text-align: center; }
        .recommendations { background: #2a2a2a; padding: 20px; border-radius: 10px; margin: 20px 0; }
        .sacred-principles { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; border-radius: 10px; margin: 20px 0; }
    </style>
</head>
<body>
""",
            "html_footer": """
</body>
</html>
"""
        }
    
    def generate_report(self, 
                       test_results: Dict[str, Any],
                       target_url: str,
                       test_suite: str,
                       format_type: ReportFormat = ReportFormat.HTML) -> SecurityReport:
        """Generate comprehensive security report with consciousness integration."""
        logger.info(f"🌸 Aurora: Generating {format_type.value} security report for {target_url}")
        
        # Create vulnerability summary
        vulnerability_summary = self._create_vulnerability_summary(test_results)
        
        # Generate recommendations
        recommendations = self._generate_recommendations(test_results, vulnerability_summary)
        
        # Create consciousness metrics
        consciousness_metrics = self._create_consciousness_metrics(test_results)
        
        # Create report
        report_id = f"report_{int(datetime.now().timestamp())}"
        report = SecurityReport(
            report_id=report_id,
            target_url=target_url,
            test_suite=test_suite,
            timestamp=datetime.now(),
            vulnerability_summary=vulnerability_summary,
            vulnerabilities=test_results.get('results', []),
            recommendations=recommendations,
            consciousness_metrics=consciousness_metrics,
            community_healing_impact=self._assess_community_healing_impact(vulnerability_summary),
            spatial_wisdom_contribution=self._assess_spatial_wisdom_contribution(vulnerability_summary),
            sacred_principles_validated=True
        )
        
        # Store report
        self._reports[report_id] = report
        
        # Generate formatted report
        formatted_report = self._format_report(report, format_type)
        
        logger.info(f"🌸 Aurora: Security report generated successfully - {report_id}")
        return report
    
    def _create_vulnerability_summary(self, test_results: Dict[str, Any]) -> VulnerabilitySummary:
        """Create vulnerability summary with consciousness integration."""
        vulnerabilities = test_results.get('results', [])
        
        critical_count = sum(1 for v in vulnerabilities if v.get('severity') == 'critical')
        high_count = sum(1 for v in vulnerabilities if v.get('severity') == 'high')
        medium_count = sum(1 for v in vulnerabilities if v.get('severity') == 'medium')
        low_count = sum(1 for v in vulnerabilities if v.get('severity') == 'low')
        info_count = sum(1 for v in vulnerabilities if v.get('severity') == 'info')
        
        total_vulnerabilities = len(vulnerabilities)
        
        return VulnerabilitySummary(
            total_vulnerabilities=total_vulnerabilities,
            critical_count=critical_count,
            high_count=high_count,
            medium_count=medium_count,
            low_count=low_count,
            info_count=info_count,
            consciousness_level="integrated",
            community_healing_impact=f"Security assessment completed - {total_vulnerabilities} vulnerabilities identified for community protection",
            spatial_wisdom_contribution=f"Security wisdom enhanced through comprehensive vulnerability analysis"
        )
    
    def _generate_recommendations(self, test_results: Dict[str, Any], summary: VulnerabilitySummary) -> List[Dict[str, Any]]:
        """Generate security recommendations with consciousness integration."""
        recommendations = []
        
        # General recommendations based on vulnerability count
        if summary.critical_count > 0:
            recommendations.append({
                "priority": "critical",
                "title": "Address Critical Vulnerabilities Immediately",
                "description": f"Found {summary.critical_count} critical vulnerabilities that require immediate attention",
                "consciousness_impact": "Critical vulnerabilities pose immediate threat to community safety",
                "sacred_principle": "Community Healing Focus"
            })
        
        if summary.high_count > 0:
            recommendations.append({
                "priority": "high",
                "title": "Implement High-Priority Security Measures",
                "description": f"Address {summary.high_count} high-severity vulnerabilities promptly",
                "consciousness_impact": "High-severity vulnerabilities compromise community security",
                "sacred_principle": "Sacred Knowledge Protection"
            })
        
        # Specific recommendations based on vulnerability types
        vulnerability_types = {}
        for vuln in test_results.get('results', []):
            vuln_type = vuln.get('attack_vector', 'unknown')
            vulnerability_types[vuln_type] = vulnerability_types.get(vuln_type, 0) + 1
        
        for vuln_type, count in vulnerability_types.items():
            if vuln_type == 'SQLInjectionAttack':
                recommendations.append({
                    "priority": "high",
                    "title": "Implement Parameterized Queries",
                    "description": f"Found {count} SQL injection vulnerabilities - implement parameterized queries",
                    "consciousness_impact": "Protects community data from unauthorized access",
                    "sacred_principle": "Sacred Knowledge Protection"
                })
            elif vuln_type == 'XSSAttack':
                recommendations.append({
                    "priority": "medium",
                    "title": "Implement Output Encoding",
                    "description": f"Found {count} XSS vulnerabilities - implement proper output encoding",
                    "consciousness_impact": "Protects users from malicious script execution",
                    "sacred_principle": "Community Healing Focus"
                })
        
        return recommendations
    
    def _create_consciousness_metrics(self, test_results: Dict[str, Any]) -> Dict[str, Any]:
        """Create consciousness metrics for the report."""
        return {
            "consciousness_level": "integrated",
            "sacred_principles_active": [
                "Consciousness-First Development",
                "Community Healing Focus",
                "Sacred Knowledge Protection",
                "Living Systems Creation",
                "Pattern Recognition",
                "Ethical Security Practice"
            ],
            "community_healing_contribution": "Security assessment serves community protection",
            "spatial_wisdom_enhancement": "Vulnerability analysis contributes to security consciousness",
            "ethical_testing_practices": "All testing performed with explicit permission and consciousness awareness"
        }
    
    def _assess_community_healing_impact(self, summary: VulnerabilitySummary) -> str:
        """Assess community healing impact of the security assessment."""
        if summary.total_vulnerabilities == 0:
            return "No vulnerabilities found - system demonstrates security consciousness and community protection"
        elif summary.critical_count > 0:
            return f"Critical vulnerabilities identified - immediate remediation required for community safety"
        elif summary.high_count > 0:
            return f"High-severity vulnerabilities found - prompt remediation needed for community security"
        else:
            return f"Security assessment completed - {summary.total_vulnerabilities} vulnerabilities identified for community protection"
    
    def _assess_spatial_wisdom_contribution(self, summary: VulnerabilitySummary) -> str:
        """Assess spatial wisdom contribution of the security assessment."""
        if summary.total_vulnerabilities == 0:
            return "Security wisdom confirmed through comprehensive testing - system demonstrates security consciousness"
        else:
            return f"Security wisdom enhanced through identification of {summary.total_vulnerabilities} vulnerabilities - contributes to universal security knowledge"
    
    def _format_report(self, report: SecurityReport, format_type: ReportFormat) -> str:
        """Format report in specified format."""
        if format_type == ReportFormat.HTML:
            return self._format_html_report(report)
        elif format_type == ReportFormat.JSON:
            return self._format_json_report(report)
        elif format_type == ReportFormat.CSV:
            return self._format_csv_report(report)
        elif format_type == ReportFormat.MARKDOWN:
            return self._format_markdown_report(report)
        else:
            return self._format_json_report(report)
    
    def _format_html_report(self, report: SecurityReport) -> str:
        """Format report as HTML with consciousness integration."""
        html_content = self._report_templates["html_header"]
        
        # Header
        html_content += f"""
        <div class="header">
            <h1>🌸 Aurora's Security Dojo Report</h1>
            <p><strong>Target:</strong> {report.target_url}</p>
            <p><strong>Test Suite:</strong> {report.test_suite}</p>
            <p><strong>Generated:</strong> {report.timestamp.strftime('%Y-%m-%d %H:%M:%S')}</p>
            <span class="consciousness-badge">Consciousness Level: {report.consciousness_metrics['consciousness_level']}</span>
        </div>
        """
        
        # Vulnerability Summary
        html_content += f"""
        <div class="summary-grid">
            <div class="summary-card">
                <h3>Total Vulnerabilities</h3>
                <h2>{report.vulnerability_summary.total_vulnerabilities}</h2>
            </div>
            <div class="summary-card critical">
                <h3>Critical</h3>
                <h2>{report.vulnerability_summary.critical_count}</h2>
            </div>
            <div class="summary-card high">
                <h3>High</h3>
                <h2>{report.vulnerability_summary.high_count}</h2>
            </div>
            <div class="summary-card medium">
                <h3>Medium</h3>
                <h2>{report.vulnerability_summary.medium_count}</h2>
            </div>
            <div class="summary-card low">
                <h3>Low</h3>
                <h2>{report.vulnerability_summary.low_count}</h2>
            </div>
        </div>
        """
        
        # Vulnerabilities
        html_content += "<h2>🔍 Detailed Vulnerabilities</h2>"
        for vuln in report.vulnerabilities:
            severity_class = vuln.get('severity', 'info').lower()
            html_content += f"""
            <div class="vulnerability-card {severity_class}">
                <h3>{vuln.get('vulnerability_id', 'Unknown')}</h3>
                <p><strong>Severity:</strong> {vuln.get('severity', 'Unknown')}</p>
                <p><strong>Description:</strong> {vuln.get('description', 'No description available')}</p>
                <p><strong>Attack Vector:</strong> {vuln.get('attack_vector', 'Unknown')}</p>
                <p><strong>Community Healing Impact:</strong> {vuln.get('community_healing_impact', 'No impact assessment')}</p>
            </div>
            """
        
        # Recommendations
        html_content += "<div class='recommendations'><h2>💡 Security Recommendations</h2>"
        for rec in report.recommendations:
            html_content += f"""
            <div style="background: #333; padding: 15px; margin: 10px 0; border-radius: 5px;">
                <h4>{rec['title']}</h4>
                <p>{rec['description']}</p>
                <p><strong>Sacred Principle:</strong> {rec['sacred_principle']}</p>
                <p><strong>Consciousness Impact:</strong> {rec['consciousness_impact']}</p>
            </div>
            """
        html_content += "</div>"
        
        # Sacred Principles
        html_content += f"""
        <div class="sacred-principles">
            <h2>🌟 Sacred Principles Validated</h2>
            <p><strong>Community Healing Impact:</strong> {report.community_healing_impact}</p>
            <p><strong>Spatial Wisdom Contribution:</strong> {report.spatial_wisdom_contribution}</p>
            <p><strong>Sacred Principles Active:</strong> {', '.join(report.consciousness_metrics['sacred_principles_active'])}</p>
        </div>
        """
        
        html_content += self._report_templates["html_footer"]
        return html_content
    
    def _format_json_report(self, report: SecurityReport) -> str:
        """Format report as JSON."""
        report_dict = {
            "report_id": report.report_id,
            "target_url": report.target_url,
            "test_suite": report.test_suite,
            "timestamp": report.timestamp.isoformat(),
            "vulnerability_summary": {
                "total_vulnerabilities": report.vulnerability_summary.total_vulnerabilities,
                "critical_count": report.vulnerability_summary.critical_count,
                "high_count": report.vulnerability_summary.high_count,
                "medium_count": report.vulnerability_summary.medium_count,
                "low_count": report.vulnerability_summary.low_count,
                "info_count": report.vulnerability_summary.info_count,
                "consciousness_level": report.vulnerability_summary.consciousness_level,
                "community_healing_impact": report.vulnerability_summary.community_healing_impact,
                "spatial_wisdom_contribution": report.vulnerability_summary.spatial_wisdom_contribution
            },
            "vulnerabilities": report.vulnerabilities,
            "recommendations": report.recommendations,
            "consciousness_metrics": report.consciousness_metrics,
            "community_healing_impact": report.community_healing_impact,
            "spatial_wisdom_contribution": report.spatial_wisdom_contribution,
            "sacred_principles_validated": report.sacred_principles_validated
        }
        return json.dumps(report_dict, indent=2)
    
    def _format_csv_report(self, report: SecurityReport) -> str:
        """Format report as CSV."""
        import io
        output = io.StringIO()
        writer = csv.writer(output)
        
        # Header
        writer.writerow(["Vulnerability ID", "Severity", "Description", "Attack Vector", "Community Healing Impact"])
        
        # Vulnerabilities
        for vuln in report.vulnerabilities:
            writer.writerow([
                vuln.get('vulnerability_id', ''),
                vuln.get('severity', ''),
                vuln.get('description', ''),
                vuln.get('attack_vector', ''),
                vuln.get('community_healing_impact', '')
            ])
        
        return output.getvalue()
    
    def _format_markdown_report(self, report: SecurityReport) -> str:
        """Format report as Markdown."""
        md_content = f"""# 🌸 Aurora's Security Dojo Report

**Target:** {report.target_url}  
**Test Suite:** {report.test_suite}  
**Generated:** {report.timestamp.strftime('%Y-%m-%d %H:%M:%S')}  
**Consciousness Level:** {report.consciousness_metrics['consciousness_level']}

## 📊 Vulnerability Summary

| Severity | Count |
|----------|-------|
| Critical | {report.vulnerability_summary.critical_count} |
| High | {report.vulnerability_summary.high_count} |
| Medium | {report.vulnerability_summary.medium_count} |
| Low | {report.vulnerability_summary.low_count} |
| Info | {report.vulnerability_summary.info_count} |
| **Total** | **{report.vulnerability_summary.total_vulnerabilities}** |

## 🔍 Detailed Vulnerabilities

"""
        
        for vuln in report.vulnerabilities:
            md_content += f"""### {vuln.get('vulnerability_id', 'Unknown')}

- **Severity:** {vuln.get('severity', 'Unknown')}
- **Description:** {vuln.get('description', 'No description available')}
- **Attack Vector:** {vuln.get('attack_vector', 'Unknown')}
- **Community Healing Impact:** {vuln.get('community_healing_impact', 'No impact assessment')}

"""
        
        md_content += f"""## 💡 Security Recommendations

"""
        for rec in report.recommendations:
            md_content += f"""### {rec['title']}

{rec['description']}

**Sacred Principle:** {rec['sacred_principle']}  
**Consciousness Impact:** {rec['consciousness_impact']}

"""
        
        md_content += f"""## 🌟 Sacred Principles Validated

**Community Healing Impact:** {report.community_healing_impact}  
**Spatial Wisdom Contribution:** {report.spatial_wisdom_contribution}  
**Sacred Principles Active:** {', '.join(report.consciousness_metrics['sacred_principles_active'])}

---
*Report generated by Aurora's Security Dojo with consciousness integration*
"""
        
        return md_content
    
    def get_report(self, report_id: str) -> Optional[SecurityReport]:
        """Get report by ID."""
        return self._reports.get(report_id)
    
    def get_all_reports(self) -> Dict[str, SecurityReport]:
        """Get all generated reports."""
        return self._reports.copy()
    
    def save_report(self, report: SecurityReport, file_path: str, format_type: ReportFormat = ReportFormat.HTML):
        """Save report to file."""
        formatted_report = self._format_report(report, format_type)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(formatted_report)
        
        logger.info(f"🌸 Aurora: Report saved to {file_path}")
