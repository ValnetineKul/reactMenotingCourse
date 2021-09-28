import { Component } from 'react';

class ErrorBoundary extends Component {
  // @ts-ignore
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
// @ts-ignore
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
// @ts-ignore
  componentDidCatch(error, errorInfo) {
    // @ts-ignore
    logErrorToMyService(error, errorInfo);
  }

  render() {
    // @ts-ignore
    if (this.state.hasError) {
      return <h1>Что-то пошло не так.</h1>;
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;