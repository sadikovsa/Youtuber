import React from 'react';

import './Keyboard.scss';

const keyboard = ( props ) => {
    const classes = ['keyboard', props.keyboardShow ? 'show' : ''];
    return (
        <div className={classes.join(' ')}>
            <div className="keyboard-top">
                <span>{props.activeLang === 'langRu' ? 'Русская клавиатура' : 'English keyboard'}</span>
                <button className="keyboard-close" onClick={props.keyboardHide}>X</button>
            </div>
            <div className="keyboard-wrapper" tabIndex="-1">
                {props.children}
            </div>
        </div>
    )
};

export default keyboard;