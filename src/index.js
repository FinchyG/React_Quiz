import React from 'react';
import ReactDOM from 'react-dom';
import './Quiz.css';
import TitleHeader from './TitleHeader';
import QuestionAnswerPair from './QuestionAnswerPair';

class Page extends React.Component {
    render() {
        return (
            <div>
              <TitleHeader />
              <div className="Wide-Div">
                <h4>Questions</h4>
                <div className="Narrow-Div">
                <QuestionAnswerPair
                    question = "1: What is the capital city of Spain?"
                    answer   = "Madrid"
                />
                <QuestionAnswerPair
                    question = "2: What country’s national football team plays its home games at Hampden Park?"
                    answer   = "Scotland"
                />
                <QuestionAnswerPair
                    question = "3: Who was the first president of the United States of America?"
                    answer   = "George Washington"
                />
                <QuestionAnswerPair
                    question = "4: What actress played the character Rachel Green in the U.S. sitcom Friends?"
                    answer   = "Jennifer Aniston"
                />
                <QuestionAnswerPair
                    question = "5: What is the sole chemical element that makes up diamonds?"
                    answer   = "Carbon"
                />
                <QuestionAnswerPair
                    question = "6: What is the largest living species of mammal in the world?"
                    answer   = "Blue whale"
                />
                <QuestionAnswerPair
                    question = "7: Who wrote the novel Dracula?"
                    answer   = "Bram Stoker"
                />
                <QuestionAnswerPair
                    question = "8: What naturalist found inspiration for his theory of evolution on the Galapagos Islands?"
                    answer   = "Charles Darwin"
                />
                <QuestionAnswerPair
                    question = "9: Which former member of Wham had a hit with the song Careless Whisper?"
                    answer   = "George Michael"
                />
                <QuestionAnswerPair
                    question = "10: In a rainbow what colour appears between yellow and blue?"
                    answer   = "Green"
                />
                </div>
              </div>
            </div>
                );
    }
}

ReactDOM.render(<Page />, document.getElementById('root'));