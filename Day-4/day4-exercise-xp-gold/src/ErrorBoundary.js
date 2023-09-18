import { Component } from 'react';

export default class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = {
        hasError: false,
        errorInfo: null,
        error: null,
      };
    }

    occurError() {
        throw new Error('Error: something went wrong!');
    } 
  
    componentDidCatch(error, errorInfo) {
        this.setState({hasError: true, error, errorInfo});
        this.props.onClose();
        console.log(error);
    }
  
    render() {
        if (this.state.hasError) {
            return (
                <div className='modal-background'>
                    <div className='modal-body'>
                    { this.state.error.toString() }
                        <details>
                            { this.state.errorInfo.componentStack }
                        </details>
                        <button onClick={() => this.setState({ hasError: false })}>close</button>
                    </div>
                </div>
            )
        }
        return this.props.children;
    }
}