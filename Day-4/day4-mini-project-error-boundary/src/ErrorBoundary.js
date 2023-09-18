import { Component } from "react";

export default class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = {
        hasError: false,
        error: null,
        errorInfo: null,
      };
    }

    // static getDerivedStateFromError(error) {
    //      return { hasError: true };
    // }
  
    componentDidCatch(error, errorInfo) {
      this.setState({
        hasError: true,
        error: error,
        errorInfo: errorInfo,
      });
  
      console.error(error);
    }
  
    render() {
      if (this.state.hasError) {
        return (
            <div className="card my-5">
                <div className="card-header">
                    <p>An error has occured in this component. 
                        <span style={{cursor: 'pointer', color: 'rgb(0, 110, 255)'}}> Reload this page</span></p>
                </div>
                <div className="card-body">
                    <details>
                        <summary>
                            Click for error details
                        </summary>
                        {this.state.error && this.state.error.toString()}
                        <br />
                        {this.state.errorInfo.componentStack}
                    </details>
                </div>
            </div>
        );
      }
      return this.props.children;
    }
  }