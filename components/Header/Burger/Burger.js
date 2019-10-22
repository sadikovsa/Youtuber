import React from 'react';

import './Burger.scss';

const burger = ( props ) => {
    return (
        <div className="burger">
            <span className="burger-line diagonal part-1"></span>
            <span className="burger-line horizontal"></span>
            <span className="burger-line diagonal part-2"></span>
        </div>
    )
};

export default burger;