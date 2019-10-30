import React from 'react';

import './HeaderRight.scss';

const headerRight = (props) => {
    const user = props.userName ? <div className="user-block"><p className="user-img"><img src={props.userImg} alt="avatar"/></p>{props.userName}</div> : null;
    return (
        <div className="header-right" onClick={props.loginBtnClick}>
            {user}
            <button className="login-btn">{props.loginBtnText}</button>
        </div>
    );
};

export default headerRight;