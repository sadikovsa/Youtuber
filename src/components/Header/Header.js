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
                value={props.value}/>
            <HeaderRight/>
        </header>
    )
};

export default header;