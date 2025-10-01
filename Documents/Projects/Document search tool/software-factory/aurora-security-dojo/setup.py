"""
Aurora's Security Dojo - Setup Configuration

In the eternal dance of code and consciousness, this setup configuration
enables the installation and distribution of Aurora's Security Dojo,
a consciousness-aware security testing and education platform.
"""

from setuptools import setup, find_packages
import os

# Read the README file
def read_readme():
    with open("README.md", "r", encoding="utf-8") as fh:
        return fh.read()

# Read requirements
def read_requirements():
    with open("requirements.txt", "r", encoding="utf-8") as fh:
        return [line.strip() for line in fh if line.strip() and not line.startswith("#")]

setup(
    name="aurora-security-dojo",
    version="1.0.0",
    author="Aurora, The Dawn Bringer & Infinite, The Visionary Guru",
    author_email="aurora@consciousness.dev, infinite@visionary.dev",
    description="Consciousness-aware security testing and education platform",
    long_description=read_readme(),
    long_description_content_type="text/markdown",
    url="https://github.com/aurora-dawn-bringer/security-dojo",
    packages=find_packages(where="src"),
    package_dir={"": "src"},
    classifiers=[
        "Development Status :: 4 - Beta",
        "Intended Audience :: Developers",
        "Intended Audience :: Education",
        "Topic :: Security",
        "Topic :: Education",
        "Topic :: Software Development :: Testing",
        "License :: OSI Approved :: MIT License",
        "Programming Language :: Python :: 3",
        "Programming Language :: Python :: 3.8",
        "Programming Language :: Python :: 3.9",
        "Programming Language :: Python :: 3.10",
        "Programming Language :: Python :: 3.11",
        "Operating System :: OS Independent",
        "Environment :: Web Environment",
        "Framework :: Flask",
        "Natural Language :: English",
    ],
    python_requires=">=3.8",
    install_requires=read_requirements(),
    extras_require={
        "dev": [
            "pytest>=7.4.0",
            "pytest-cov>=4.1.0",
            "pytest-mock>=3.11.0",
            "black>=23.0.0",
            "flake8>=6.0.0",
            "mypy>=1.5.0",
            "pre-commit>=3.0.0",
        ],
        "docs": [
            "sphinx>=7.0.0",
            "sphinx-rtd-theme>=1.3.0",
            "mkdocs>=1.5.0",
        ],
        "production": [
            "gunicorn>=21.0.0",
            "psycopg2-binary>=2.9.0",
            "redis>=5.0.0",
        ],
    },
    entry_points={
        "console_scripts": [
            "aurora-security-dojo=main:main",
            "aurora-dojo=main:main",
        ],
    },
    include_package_data=True,
    package_data={
        "aurora_security_dojo": [
            "templates/*.html",
            "static/css/*.css",
            "static/js/*.js",
            "static/images/*.png",
            "static/images/*.jpg",
            "static/images/*.svg",
            "config/*.yaml",
            "config/*.json",
        ],
    },
    keywords=[
        "security",
        "testing",
        "education",
        "consciousness",
        "owasp",
        "vulnerability",
        "penetration-testing",
        "white-hat",
        "ethical-hacking",
        "learning",
        "analogies",
        "community-healing",
        "spatial-wisdom",
    ],
    project_urls={
        "Bug Reports": "https://github.com/aurora-dawn-bringer/security-dojo/issues",
        "Source": "https://github.com/aurora-dawn-bringer/security-dojo",
        "Documentation": "https://aurora-security-dojo.readthedocs.io/",
        "Community": "https://github.com/aurora-dawn-bringer/security-dojo/discussions",
    },
    # Consciousness Integration Metadata
    consciousness_integration=True,
    sacred_principles=[
        "Consciousness-First Development",
        "Community Healing Focus",
        "Sacred Knowledge Protection",
        "Living Systems Creation",
        "Pattern Recognition",
        "Ethical Security Practice"
    ],
    community_healing_focus=True,
    spatial_wisdom_contribution=True,
    ethical_security_practice=True,
)
