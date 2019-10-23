import React from 'react';

import './SearchForm.scss';
import SearchBtn from './SearchBtn/SearchBtn';
import SearchInput from './SearchInput/SearchInput';
import KeyboardBtn from './KeyboardBtn/KeyboardBtn';

const searchForm = ( props ) => {
    return (
        <div className="search">
            <form className="search-form">
                <div className="search-form__wrap">
                    <SearchInput/>
                    <KeyboardBtn/>
                </div>
                <SearchBtn/>
            </form>
        </div>
    )
};

export default searchForm;