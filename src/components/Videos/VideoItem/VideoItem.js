import React from 'react';

import './VideoItem.scss';

const videoItem = ( props ) => {
    return (
        <div className="yt" onClick={props.videoClicked}>
            <div className="yt-thumbnail">
                <img src={props.videoPreview} alt="thumbnail" className="yt-thumbnail__img"/>
            </div>
            <div className="yt-title">{props.videoTitle}</div>
            <div className="yt-channel">{props.videoChannel}</div>
        </div>
    )
};

export default videoItem;