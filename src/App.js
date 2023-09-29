import React, { Component } from 'react';
import './App.css';
import ResultComponent from './components/ResultComponent';
import KeyPadComponent from "./components/KeypadComponent";

class App extends Component {
    constructor(){
        super();

        this.state = {
            result: "",
        }
    }

    onClick = button => {
        if (button === "=") {
            this.calculate();
        } else if (button === "C") {
            this.reset();
        } else if (button === "CE") {
            this.backspace();
        } else {
            // Update the result based on the clicked button
            this.setState({
                result: this.state.result + button,
            });
        }
    };

    calculate = () => {
        var checkResult = '';
        if (this.state.result.includes('--')){
            checkResult = this.state.result.replace('--', '+');
        } else {
            checkResult = this.state.result;
        }

        try {
            this.setState({
                result: (eval(checkResult) || "") + "",
            });
        } catch (e) {
            this.setState({
                result: "error",
            });
        }
    };

    reset = () => {
        this.setState({
            result: "",
        });
    };

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1),
        });
    };

    // Function to handle the "DIZON" button click
    handleSurnameButtonClick = () => {
        // Update the result to "John Doe" when the button is clicked
        this.setState({
            result: "John Enrick Dizon",
        });
    };

    render() {
        return (
            <div>
                <div className="calculator-body">
                    <h1>John Enrick N. Dizon - IT3A</h1>
                    <ResultComponent result={this.state.result}/>
                    <KeyPadComponent onClick={this.onClick}/>
                </div>
                <button className="surnamebutton" onClick={this.handleSurnameButtonClick}>DIZON</button>
            </div>
        );
    }
}

export default App;
