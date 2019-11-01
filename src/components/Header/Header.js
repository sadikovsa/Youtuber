import React from 'react';
import './Header.scss';
import HeaderLeft from './HeaderLeft/HeaderLeft';
import SearchForm from './SearchForm/SearchForm';
import HeaderRight from './HeaderRight/HeaderRight';

const header = ( props ) => {
    return (
        <header className="header">
            <HeaderLeft
                burgerClick={props.burgerClick}
                burgerToggle={props.burgerToggle}
            />
            <SearchForm
                keyboardToggle={props.keyboardToggle}
                searchChange={props.searchChange}
                searchClick={props.searchClick}
                value={props.value}
            />
            <HeaderRight
                loginBtnClick={props.loginBtnClick}
                loginBtnText={props.loginBtnText}
                userName={props.userName}
                userImg={props.userImg}
            />
        </header>
    )
};

export default header;