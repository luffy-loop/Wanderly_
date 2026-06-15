import { Component } from "react";
import Button from "./Button.jsx";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught:", error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div
          className="min-h-[300px] flex items-center justify-center p-8"
          role="alert"
          aria-live="assertive"
        >
          <div className="text-center max-w-md space-y-4">
            <div className="text-5xl" aria-hidden="true">⚠️</div>
            <h2 className="text-xl font-display font-bold text-slate-900">
              Something went wrong
            </h2>
            <p className="text-slate-500">
              {this.state.error?.message || "An unexpected error occurred."}
            </p>
            <Button onClick={this.handleReset} variant="primary">
              Try Again
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
