import React from 'react';

const menuItem = ( props ) => {
   const classes = props.menuItemActive ? 'active' : '';
    return (
        <li className={classes} id={props.menuItemId}>
            {props.children}
        </li>
    )
};

export default menuItem;