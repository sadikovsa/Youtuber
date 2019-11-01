import React, { Component } from 'react';

import Auxiliary from '../../hoc/Auxiliary';
import Videos from '../../components/Videos/Videos';
import VideoItem from "../../components/Videos/VideoItem/VideoItem";
import VideoModal from "../../components/VideoModal/VideoModal";

class Youtuber extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            videos: '',
            videoId: 0,
            videoTitle: '',
            videoModalShow: false,
        }
    }
    videoClickHandler = ( id, title ) => {
        this.setState( {
            videoId: id,
            videoTitle: title,
            videoModalShow: true
        } );
    };

    modalClickHandler = () => {
        this.setState( {
            videoModalShow: false
        } );
    };

    componentDidMount() {
        if(this.props.videoList) {
            this.setState({videos: this.props.videoList});
        }
        console.log(this.props.videoList)
    }

    componentDidUpdate(prevProps) {
        // Популярный пример (не забудьте сравнить пропсы):
        if (this.props.videoList !== prevProps.videoList) {
            this.setState({videos: this.props.videoList});
        }
    }

    render() {

        const videoItems = this.state.videos.length > 0 ? this.state.videos.map( ( video, index ) => {
            return (
                <VideoItem
                    key={index}
                    videoClicked={() => this.videoClickHandler( video.id.videoId, video.snippet.title )}
                    videoTitle={video.snippet.title}
                    videoChannel={video.snippet.channelTitle}
                    videoPreview={video.snippet.thumbnails.medium.url}
                />
            )
        } ) : <p> Записей не найдено </p>;

        return (
            <Auxiliary>
                <div className="container">
                    <Videos>
                        {videoItems}
                    </Videos>
                    <button id="next_result">Далее</button>
                </div>
                <VideoModal
                    modalClose={this.modalClickHandler}
                    modalShow={this.state.videoModalShow}
                    videoId={this.state.videoId}
                    videoTitle={this.state.videoTitle}
                />
            </Auxiliary>
        );
    }
}

export default Youtuber;