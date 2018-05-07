import React from 'react';

export const Answer = (props) => {

    if (props.show) {
      return <p>{props.answer}</p>
    }

    return <p style={{visibility: "hidden"}}>{props.answer}</p>;

}