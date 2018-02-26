import React from 'react';

const green = "rgb(19, 204, 19)";
const red   = "rgb(240, 10, 10)";

export default class Box extends React.Component {

    constructor(props) {
        super(props);
        this.state = {color: green};
        this.changeColor = this.changeColor.bind(this);
    }

    changeColor() {
        const newColor = this.state.color == green ? red : green;
        this.setState({color: newColor});
        }
    
    render() {
        return <div style={{background: this.state.color}} onClick={this.changeColor}></div>;
    }
    
}