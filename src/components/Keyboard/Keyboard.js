import React from 'react';

import './Keyboard.scss';

const langRu = [ 'ё', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '-', '=', '⬅',
    'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ',
    'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э',
    'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.',
    'en', ' '
];
const langEn = [ '`', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '-', '=', '⬅',
    'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']',
    'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '"',
    'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/',
    'ru', ' '
];

const keyboard = ( props ) => {
    let activeLang = props.activeLang === 'langEn' ? langEn : langRu;
    const keyboard = activeLang.map( ( button, index ) => {
        return (
            <button
                key={index}
                onClick={props.keyboardClicked}
            >
                {button}
            </button>
        )
    } );
    const classes = [ 'keyboard', props.keyboardShow ? 'show' : '' ];

    return (
        <div className={classes.join( ' ' )}>
            <div className="keyboard-top">
                <span>{props.activeLang === 'langRu' ? 'Русская клавиатура' : 'English keyboard'}</span>
                <button className="keyboard-close" onClick={props.keyboardHide}>X</button>
            </div>
            <div className="keyboard-wrapper" tabIndex="-1">
                {keyboard}
            </div>
        </div>
    )
};

export default keyboard;