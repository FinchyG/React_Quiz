import React from 'react';

export default class QuestionAnswerPair extends React.Component {

    constructor(props) {
        super(props);
        this.state = {visibility: "hidden"};
        this.toggleAnswer = this.toggleAnswer.bind(this);
    }

    toggleAnswer() {
        const makeVisible = this.state.visibility === "visible" ? "hidden" : "visible";
        this.setState({visibility: makeVisible});
    }

    render() {
        return (
        <div>
            <p>{this.props.question}</p>
            <button onClick={this.toggleAnswer}>Show and Hide Answer</button>
            <p style={{visibility: this.state.visibility}}>{this.props.answer}</p>
        </div>
        );
    }
    
}