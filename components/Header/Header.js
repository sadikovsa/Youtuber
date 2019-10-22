import React from 'react';
import './Header.scss';
import HeaderLeft from './HeaderLeft/HeaderLeft';
import SearchForm from './SearchForm/SearchForm';
import HeaderRight from './HeaderRight/HeaderRight';

const header = ( props ) => {
    return (
        <header className="header">
            <HeaderLeft/>
            <SearchForm/>
            <HeaderRight/>
        </header>
    )
};

export default header;