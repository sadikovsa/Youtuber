import React from 'react';

import './SearchForm.scss';
import SearchBtn from './SearchBtn/SearchBtn';
import SearchInput from './SearchInput/SearchInput';
import KeyboardBtn from './KeyboardBtn/KeyboardBtn';

const searchForm = ( props ) => {

    const formSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <div className="search">
            <form className="search-form" onSubmit={(e) => formSubmit(e)}>
                <div className="search-form__wrap">
                    <SearchInput
                        searchChange={props.searchChange}
                        value={props.value}
                    />
                    <KeyboardBtn
                        keyboardToggle={props.keyboardToggle}
                    />
                </div>
                <SearchBtn searchClick={props.searchClick}/>
            </form>
        </div>
    )
};

export default searchForm;