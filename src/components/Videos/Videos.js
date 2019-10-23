import React from 'react';

import './Videos.scss';

const videos = (props) => {
    return (
        <div className="container">
            <div className="row" id="yt-wrapper">
                {props.children}
            </div>
            <button id="next_result">Далее</button>
        </div>
    )
};
    export default videos;