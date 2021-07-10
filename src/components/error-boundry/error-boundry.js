import React, {Component} from "react";
import ErrorIndicator from "../error-indicator";

export default class ErrorBoundry extends Component{

    constructor(props) {
        super(props);

        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, errorInfo) {

    }

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator />;
        }

        return this.props.children;
    }
}
