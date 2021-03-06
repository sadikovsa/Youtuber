import React from 'react';

import './KeyboardBtn.scss';
import icon from '../../../../assets/images/tia.png';

const keyboardBtn = ( props ) => {
    return (
        <span
            className="search-form__keyboard"
            onClick={props.keyboardToggle}
        >
            <img src={icon} alt="клавиатура"/>
        </span>
    )
};

export default keyboardBtn;