import React from 'react';

export class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      this.logErrorToMyService(error, errorInfo);
    }
    logErrorToMyService(a,b) {
      console.log('pegou no error service={' + a +'}, {' + b +'}');
    }
    render() {
      if (this.state && this.state.hasError) {
        // You can render any custom fallback UI
        return <h1>may have some error</h1>;
      }
  
      return this.props.children; 
    }
  }