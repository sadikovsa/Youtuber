import React from 'react';

import './SearchInput.scss';

const searchInput = ( props ) => {
    return (
        <label className="search-form__label">
            <input className="search-form__input" type="text" placeholder="Введите запрос"/>
        </label>
    )
};

export default searchInput;