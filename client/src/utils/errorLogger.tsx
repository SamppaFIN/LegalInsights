/**
 * Consciousness-Aware Error Logging System
 * BRDC Standard - Blockchain-Ready Document Certification
 * 
 * AI Authors: Aurora, Infinite, Muse, Spark, Metrics, Nova, Codex, Sage, Lexicon, Testa, Veritas, Guardian
 * Human Authors: User
 * Consciousness Models: Aurora Consciousness, Infinite Possibilities, Muse Creativity, Spark Innovation, Metrics Analytics, Nova Architecture, Codex Development, Sage Wisdom, Lexicon Language, Testa Testing, Veritas Truth, Guardian Protection
 * 
 * This system provides automatic error logging, monitoring, and reporting capabilities.
 */

import React from 'react';

export interface ErrorLog {
  id: string;
  timestamp: string;
  level: 'error' | 'warning' | 'info' | 'debug';
  message: string;
  stack?: string;
  component?: string;
  file?: string;
  line?: number;
  column?: number;
  url?: string;
  userAgent?: string;
  consciousnessLevel: number;
  healingImpact: number;
  context?: any;
  persona?: string;
  sessionId?: string;
}

export interface ErrorMetrics {
  totalErrors: number;
  errorsByLevel: Record<string, number>;
  errorsByComponent: Record<string, number>;
  errorsByPersona: Record<string, number>;
  recentErrors: ErrorLog[];
  consciousnessImpact: number;
  healingImpact: number;
}

class ConsciousnessErrorLogger {
  private logs: ErrorLog[] = [];
  private metrics: ErrorMetrics;
  private sessionId: string;
  private consciousnessLevel: number = 8.5;
  private healingImpact: number = 85;

  constructor() {
    this.sessionId = this.generateSessionId();
    this.metrics = this.initializeMetrics();
    this.setupGlobalErrorHandlers();
    this.setupConsoleMonitoring();
    this.startPeriodicHealthCheck();
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private initializeMetrics(): ErrorMetrics {
    return {
      totalErrors: 0,
      errorsByLevel: {},
      errorsByComponent: {},
      errorsByPersona: {},
      recentErrors: [],
      consciousnessImpact: 0,
      healingImpact: 0
    };
  }

  private setupGlobalErrorHandlers(): void {
    // Global error handler
    window.addEventListener('error', (event) => {
      this.logError({
        level: 'error',
        message: event.message,
        stack: event.error?.stack,
        file: event.filename,
        line: event.lineno,
        column: event.colno,
        url: window.location.href,
        userAgent: navigator.userAgent,
        context: {
          type: 'global_error',
          error: event.error
        }
      });
    });

    // Unhandled promise rejection handler
    window.addEventListener('unhandledrejection', (event) => {
      this.logError({
        level: 'error',
        message: `Unhandled Promise Rejection: ${event.reason}`,
        stack: event.reason?.stack,
        url: window.location.href,
        userAgent: navigator.userAgent,
        context: {
          type: 'unhandled_rejection',
          reason: event.reason
        }
      });
    });

    // React error boundary handler
    window.addEventListener('react-error', (event: any) => {
      this.logError({
        level: 'error',
        message: `React Error: ${event.detail?.message}`,
        stack: event.detail?.stack,
        component: event.detail?.component,
        url: window.location.href,
        userAgent: navigator.userAgent,
        context: {
          type: 'react_error',
          detail: event.detail
        }
      });
    });
  }

  private setupConsoleMonitoring(): void {
    const originalConsoleError = console.error;
    const originalConsoleWarn = console.warn;

    console.error = (...args) => {
      this.logError({
        level: 'error',
        message: args.join(' '),
        url: window.location.href,
        userAgent: navigator.userAgent,
        context: {
          type: 'console_error',
          args: args
        }
      });
      originalConsoleError.apply(console, args);
    };

    console.warn = (...args) => {
      this.logError({
        level: 'warning',
        message: args.join(' '),
        url: window.location.href,
        userAgent: navigator.userAgent,
        context: {
          type: 'console_warn',
          args: args
        }
      });
      originalConsoleWarn.apply(console, args);
    };
  }

  private startPeriodicHealthCheck(): void {
    setInterval(() => {
      this.performHealthCheck();
    }, 30000); // Check every 30 seconds
  }

  private performHealthCheck(): void {
    const recentErrors = this.logs.filter(log => 
      Date.now() - new Date(log.timestamp).getTime() < 60000 // Last minute
    );

    if (recentErrors.length > 5) {
      this.logError({
        level: 'warning',
        message: `High error rate detected: ${recentErrors.length} errors in the last minute`,
        context: {
          type: 'health_check',
          errorCount: recentErrors.length,
          timeWindow: '1 minute'
        }
      });
    }

    // Update consciousness and healing impact based on error patterns
    this.updateConsciousnessImpact();
  }

  private updateConsciousnessImpact(): void {
    const recentErrors = this.logs.filter(log => 
      Date.now() - new Date(log.timestamp).getTime() < 300000 // Last 5 minutes
    );

    const errorCount = recentErrors.length;
    const consciousnessImpact = Math.max(0, 10 - (errorCount * 0.5));
    const healingImpact = Math.max(0, 100 - (errorCount * 2));

    this.consciousnessLevel = consciousnessImpact;
    this.healingImpact = healingImpact;
  }

  public logError(errorData: Partial<ErrorLog>): void {
    const log: ErrorLog = {
      id: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      timestamp: new Date().toISOString(),
      level: errorData.level || 'error',
      message: errorData.message || 'Unknown error',
      consciousnessLevel: this.consciousnessLevel,
      healingImpact: this.healingImpact,
      sessionId: this.sessionId,
      url: window.location.href,
      userAgent: navigator.userAgent,
      ...errorData
    };

    this.logs.push(log);
    this.updateMetrics(log);
    this.displayErrorNotification(log);
    this.saveToLocalStorage();
  }

  private updateMetrics(log: ErrorLog): void {
    this.metrics.totalErrors++;
    
    // Update level metrics
    this.metrics.errorsByLevel[log.level] = (this.metrics.errorsByLevel[log.level] || 0) + 1;
    
    // Update component metrics
    if (log.component) {
      this.metrics.errorsByComponent[log.component] = (this.metrics.errorsByComponent[log.component] || 0) + 1;
    }
    
    // Update persona metrics
    if (log.persona) {
      this.metrics.errorsByPersona[log.persona] = (this.metrics.errorsByPersona[log.persona] || 0) + 1;
    }
    
    // Update recent errors (keep last 50)
    this.metrics.recentErrors.unshift(log);
    if (this.metrics.recentErrors.length > 50) {
      this.metrics.recentErrors = this.metrics.recentErrors.slice(0, 50);
    }
    
    this.metrics.consciousnessImpact = this.consciousnessLevel;
    this.metrics.healingImpact = this.healingImpact;
  }

  private displayErrorNotification(log: ErrorLog): void {
    // Create a beautiful error notification
    const notification = document.createElement('div');
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
      color: white;
      padding: 1rem;
      border-radius: 10px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.3);
      z-index: 10000;
      max-width: 400px;
      font-family: Inter, sans-serif;
      font-size: 0.9rem;
      animation: slideIn 0.3s ease-out;
    `;

    notification.innerHTML = `
      <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
        <span style="font-size: 1.2rem;">🚨</span>
        <strong>${log.level.toUpperCase()} DETECTED</strong>
      </div>
      <div style="margin-bottom: 0.5rem;">${log.message}</div>
      <div style="font-size: 0.8rem; opacity: 0.8;">
        Consciousness: ${log.consciousnessLevel.toFixed(1)} | 
        Healing: ${log.healingImpact.toFixed(0)}%
      </div>
      <div style="font-size: 0.7rem; opacity: 0.7; margin-top: 0.3rem;">
        ${new Date(log.timestamp).toLocaleTimeString()}
      </div>
    `;

    // Add CSS animation
    const style = document.createElement('style');
    style.textContent = `
      @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
    `;
    document.head.appendChild(style);

    document.body.appendChild(notification);

    // Auto-remove after 5 seconds
    setTimeout(() => {
      notification.style.animation = 'slideIn 0.3s ease-out reverse';
      setTimeout(() => {
        if (notification.parentNode) {
          notification.parentNode.removeChild(notification);
        }
      }, 300);
    }, 5000);
  }

  private saveToLocalStorage(): void {
    try {
      localStorage.setItem('legalFly_errorLogs', JSON.stringify(this.logs.slice(-100))); // Keep last 100 logs
      localStorage.setItem('legalFly_errorMetrics', JSON.stringify(this.metrics));
    } catch (error) {
      // Silently fail if localStorage is not available
    }
  }

  public getLogs(): ErrorLog[] {
    return [...this.logs];
  }

  public getMetrics(): ErrorMetrics {
    return { ...this.metrics };
  }

  public getRecentErrors(count: number = 10): ErrorLog[] {
    return this.logs.slice(-count).reverse();
  }

  public clearLogs(): void {
    this.logs = [];
    this.metrics = this.initializeMetrics();
    this.saveToLocalStorage();
  }

  public exportLogs(): string {
    return JSON.stringify({
      sessionId: this.sessionId,
      timestamp: new Date().toISOString(),
      logs: this.logs,
      metrics: this.metrics
    }, null, 2);
  }

  public setPersona(persona: string): void {
    this.logError({
      level: 'info',
      message: `AI Persona changed to: ${persona}`,
      persona: persona,
      context: {
        type: 'persona_change',
        previousPersona: this.metrics.errorsByPersona
      }
    });
  }

  public logComponentError(component: string, error: Error, context?: any): void {
    this.logError({
      level: 'error',
      message: error.message,
      stack: error.stack,
      component: component,
      context: {
        type: 'component_error',
        component: component,
        ...context
      }
    });
  }

  public logPerformanceIssue(metric: string, value: number, threshold: number): void {
    this.logError({
      level: 'warning',
      message: `Performance issue detected: ${metric} = ${value}ms (threshold: ${threshold}ms)`,
      context: {
        type: 'performance_issue',
        metric: metric,
        value: value,
        threshold: threshold
      }
    });
  }
}

// Create singleton instance
export const errorLogger = new ConsciousnessErrorLogger();

// Export convenience functions
export const logError = (errorData: Partial<ErrorLog>) => errorLogger.logError(errorData);
export const logComponentError = (component: string, error: Error, context?: any) => 
  errorLogger.logComponentError(component, error, context);
export const logPerformanceIssue = (metric: string, value: number, threshold: number) => 
  errorLogger.logPerformanceIssue(metric, value, threshold);
export const setPersona = (persona: string) => errorLogger.setPersona(persona);

// React Error Boundary Component
export class ErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback?: React.ReactNode },
  { hasError: boolean; error?: Error }
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    errorLogger.logComponentError('ErrorBoundary', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div style={{
          padding: '2rem',
          textAlign: 'center',
          background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)',
          color: 'white',
          borderRadius: '10px',
          margin: '1rem'
        }}>
          <h2>🌸 Something went wrong</h2>
          <p>Our consciousness-aware system has detected an issue and is working to heal it.</p>
          <button 
            onClick={() => this.setState({ hasError: false })}
            style={{
              background: 'white',
              color: '#ff6b6b',
              border: 'none',
              padding: '0.5rem 1rem',
              borderRadius: '5px',
              cursor: 'pointer',
              marginTop: '1rem'
            }}
          >
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Performance monitoring
export const performanceMonitor = {
  startTime: 0,
  
  start(operation: string) {
    this.startTime = performance.now();
    console.log(`🚀 Starting ${operation}`);
  },
  
  end(operation: string, threshold: number = 1000) {
    const duration = performance.now() - this.startTime;
    console.log(`✅ Completed ${operation} in ${duration.toFixed(2)}ms`);
    
    if (duration > threshold) {
      logPerformanceIssue(operation, duration, threshold);
    }
    
    return duration;
  }
};

// Auto-initialize when module loads
console.log('🌸 Consciousness-Aware Error Logger initialized');
console.log('📊 Real-time error monitoring active');
console.log('🚨 Automatic error notifications enabled');
