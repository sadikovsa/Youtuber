import React from 'react';

import './SearchInput.scss';

const searchInput = ( props ) => {
    return (
        <label className="search-form__label">
            <input className="search-form__input" type="text" placeholder="Введите запрос" value={props.value}
                   onChange={props.searchChange}/>
        </label>
    )
};

export default searchInput;