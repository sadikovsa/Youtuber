import React from 'react';

import './Videos.scss';

const videos = ( props ) => {
    return (
        <div className="row" id="yt-wrapper">
            {props.children}
        </div>
    )
};
export default videos;