import React, { PureComponent } from 'react';
import YouTube from 'react-youtube';

import './VideoModal.scss';

class VideoModal extends PureComponent {
    render() {
        const opts = {
            height: '100%',
            width: '100%',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 1
            }
        };
        let classes = [ 'youTuberModal', this.props.modalShow ? 'show' : '' ];
        const videoId = this.props.videoId ? this.props.videoId : '';
        return (
            <div className={classes.join( ' ' )} onClick={this.props.modalClose}>
                <div className="youtuberClose">&#215;</div>
                <YouTube
                    videoId={videoId}
                    containerClassName='youtuberContainer'
                    opts={opts}
                />
            </div>
        )
    }


};

export default VideoModal;