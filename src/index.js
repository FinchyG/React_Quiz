import React from 'react';
import ReactDOM from 'react-dom';
import './Quiz.css';
import { TitleHeader } from './TitleHeader';
import QuestionComponent from './QuestionComponent';

class Quiz extends React.Component {
    render() {
        return (

            <div>
            
              <TitleHeader />
            
              <div className="Wide-Div">
            
                <h4>Questions</h4>
            
                <div className="Narrow-Div">
            
                  <QuestionComponent
                      question = "1: What is the capital city of Spain?"
                      answer   = "Madrid" />

                  <QuestionComponent
                      question = "2: What country’s national football team plays its home games at Hampden Park?"
                      answer   = "Scotland" />
                  
                  <QuestionComponent
                      question = "3: Who was the first president of the United States of America?"
                      answer   = "George Washington" />

                  <QuestionComponent
                      question = "4: What actress played the character Rachel Green in the U.S. sitcom Friends?"
                      answer   = "Jennifer Aniston" />

                  <QuestionComponent
                      question = "5: What is the sole chemical element that makes up diamonds?"
                      answer   = "Carbon" />
                
                  <QuestionComponent
                      question = "6: What is the largest living species of mammal in the world?"
                      answer   = "Blue whale" />

                  <QuestionComponent
                      question = "7: Who wrote the novel Dracula?"
                      answer   = "Bram Stoker" />

                  <QuestionComponent
                      question = "8: What naturalist found inspiration for his theory of evolution on the Galapagos Islands?"
                      answer   = "Charles Darwin" />

                  <QuestionComponent
                      question = "9: Which former member of Wham had a hit with the song Careless Whisper?"
                      answer   = "George Michael" />

                  <QuestionComponent
                      question = "10: In a rainbow what colour appears between yellow and blue?"
                      answer   = "Green" />

                </div>

              </div>

            </div>
        );
    }
}

ReactDOM.render(<Quiz />, document.getElementById('root'));