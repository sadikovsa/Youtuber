import React, { PureComponent } from 'react';

import './VideoModal.scss';

class VideoModal extends PureComponent {

    render() {
        let classes = [ 'youTuberModal', this.props.modalShow ? 'show' : '' ];
        return (
            <div className={classes.join( ' ' )} onClick={this.props.modalClose}>
                <div id="youtuberClose">&#215;</div>
                <div id="youtuberContainer">
                    <iframe
                        src={"https://youtube.com/embed/" + this.props.videoId}
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={this.props.videoTitle}
                    />
                </div>
            </div>
        )
    }


};

export default VideoModal;