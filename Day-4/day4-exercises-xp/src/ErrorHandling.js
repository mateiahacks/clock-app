import { Component } from "react";

export class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = {
        hasError: false,
        error: null,
        errorInfo: null,
      };
    }
  
    componentDidCatch(error, errorInfo) {
      console.log(errorInfo);
      this.setState({
        hasError: true,
        error: error,
        errorInfo: errorInfo,
      });
    }

    render() {

        if (this.state.hasError) {
            return (
                <>
                <h2>Something went wrong.</h2>
                <details style={{ whiteSpace: 'pre-wrap' }}>
                    {this.state.error && this.state.error.toString()}
                    <br />
                    {this.state.errorInfo.componentStack}
                </details>
                </>
            )
        }
        return this.props.children;
    }
}