import React from 'react';

export const ShowOrHideButton = (props) => {

    return (
        
        <button onClick={props.onClick}>{props.buttonLabel}</button>
          
    );

}