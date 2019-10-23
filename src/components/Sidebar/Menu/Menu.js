import React from 'react';

const menu = ( props ) => {
    return (
        <ul>
            {props.children}
        </ul>
    )
};

export default menu;