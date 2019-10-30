import React from 'react';

import './LoginModal.scss';

const loginModal = ( props ) => {

    const classes = [ 'auth', props.loginModalShow ? 'show' : '' ];
    return (
        <div className={classes.join( ' ' )} >
            <div className="auth_wrap">
                <button id="authorize" onClick={props.loginModalClick}>ВОЙТИ</button>
            </div>
        </div>
    )
};

export default loginModal;