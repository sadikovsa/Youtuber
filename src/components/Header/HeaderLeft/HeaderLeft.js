import React from 'react';

import './HeaderLeft.scss';
import YouTubeLogo from '../YouTubeLogo/YouTubeLogo';
import Burger from '../Burger/Burger';

const headerLeft = ( props ) => {
    return (
        <div className="header-left">
            <Burger
                burgerClick={props.burgerClick}
                burgerToggle={props.burgerToggle}
            />
            <YouTubeLogo/>
        </div>
    )
};

export default headerLeft;