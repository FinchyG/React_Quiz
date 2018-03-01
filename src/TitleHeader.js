import React from 'react';
import './Quiz.css';

export default class TitleHeader extends React.Component {
    render() {
        return (
        <div className="Wide-Div">
          <h1>General Knowledge</h1>
          <img className="Slider" src={require('./QuestionMark.png')} alt="sliding questionmark" />
        </div>
        );
    }
}