import React from 'react';

const green = "rgb(19, 204, 19)";
const red   = "rgb(240, 10, 10)";

export default class Box extends React.Component {

    constructor(props) {
        super(props);
        this.state = {visibility: "hidden"};
        this.toggleAnswer = this.toggleAnswer.bind(this);
    }

    toggleAnswer() {
        const makeVisible = this.state.visibility == "visible" ? "hidden" : "visible";
        this.setState({visibility: makeVisible});
    }

    render() {
        return (
        <div>
            <p>What is one plus one?</p>
            <button onClick={this.toggleAnswer}>Show and Hide Answer</button>
            <p style={{visibility: this.state.visibility}}>Two</p>
        </div>
        );
    }
    
}