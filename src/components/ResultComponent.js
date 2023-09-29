import React, { Component } from 'react';

class ResultComponent extends Component {
    render() {
        let { result } = this.props;
        return (
            <div className="result">
                <p className="result-text">{result}</p>
            </div>
        );
    }
}

export default ResultComponent;
