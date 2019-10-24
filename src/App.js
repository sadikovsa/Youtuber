import React, { Component } from 'react';
import Wrapper from './hoc/Wrapper/Wrapper';
import Youtuber from './containers/Youtuber/Youtuber';
import VideoItem from './components/Videos/VideoItem/VideoItem';
import VideoModal from "./components/VideoModal/VideoModal";

class App extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            currentValue: '',
            activeLang: 'langRu',
            videoId: 0,
            videoTitle: '',
            videoModalShow: false,
            videos: [
                {
                    id: 'B7rZxLzSAOM',
                    title: 'Как я стал фрилансером веб-разработчиком',
                    chanel: 'Glo Academy — HTML, CSS и JS'
                },
                {
                    id: 'NF6DV-S9DEE',
                    title: 'Способы перебора массивов в JavaScript | Часть 2 | Уроки JavaScript',
                    chanel: 'Glo Academy — HTML, CSS и JS'
                },
                {
                    id: 'NtcgznHOBlc',
                    title: 'Способы перебора массивов в JavaScript | Часть 1 | Уроки JavaScript',
                    chanel: 'Glo Academy — HTML, CSS и JS'
                },
                {
                    id: 'c5--bmtCCVo',
                    title: 'Открытый урок с курса JS 9.0 - Слайдер карусель',
                    chanel: 'Glo Academy — HTML, CSS и JS'
                },
                {
                    id: 'amrIqeOXQW0',
                    title: 'S-фичи #4 | Круглый прогрессбар на JavaScript | Circle progress bar',
                    chanel: 'Glo Academy — HTML, CSS и JS'
                },
                {
                    id: 'VpM4kAwuJTY',
                    title: 'JavaScript фичи #3 | Прогресс бар при прокрутке страницы | JS',
                    chanel: 'Glo Academy — HTML, CSS и JS'
                },
                {
                    id: '__Kavgr47F8',
                    title: 'JavaScript фичи #2 Parallax на чистом JS | Параллакс эффект',
                    chanel: 'Glo Academy — HTML, CSS и JS'
                },
                {
                    id: 'DqfgJDtDIcg',
                    title: 'JavaScript фичи #1 | 3D карточки с наведением | JS фичи',
                    chanel: 'Glo Academy — HTML, CSS и JS'
                },
            ],
        }
    }

    searchInputHandler = ( event ) => {
        const newValue = event.target.value;
        this.setState( {
            currentValue: newValue
        } );
    };

    keyboardClickHandler = ( event ) => {
        const target = event.target;
        if ( target.tagName.toLowerCase() === 'button' ) {
            const contentButton = target.textContent.trim();
            let currentValue = this.state.currentValue;
            if ( contentButton === '⬅' ) {
                currentValue = currentValue.slice( 0, -1 );
            } else if ( !contentButton ) {
                currentValue += ' ';
            } else if ( contentButton === 'en' ) {
                this.setState( { activeLang: 'langEn' } )
            } else if ( contentButton === 'ru' ) {
                this.setState( { activeLang: 'langRu' } )
            } else {
                currentValue += contentButton;
            }
            this.setState( {
                currentValue: currentValue
            } );
        }
    };
    videoClickHandler = ( id, title ) => {
        this.setState( {
            videoId: id,
            videoTitle: title,
            videoModalShow: true
        } )
    };

    modalClickHandler = () => {
        this.setState( {
            videoModalShow: false
        } );
    };

    render() {
        const videoList = this.state.videos.map( ( video, index ) => {
            return (
                <VideoItem
                    key={index}
                    videoClicked={() => this.videoClickHandler( video.id, video.title )}
                    videoTitle={video.title}
                    videoChannel={video.chanel}
                    videoPreview={`http://i.ytimg.com/vi/${video.id}/sddefault.jpg`}
                />
            )
        } );
        return (
            <div>
                <Wrapper
                    searchChange={this.searchInputHandler}
                    value={this.state.currentValue}
                    keyboardClicked={( event ) => this.keyboardClickHandler( event )}
                    activeLang={this.state.activeLang}
                >
                    <Youtuber>
                        {videoList}
                    </Youtuber>
                    <VideoModal
                        modalClose={this.modalClickHandler}
                        modalShow={this.state.videoModalShow}
                        videoId={this.state.videoId}
                        videoTitle={this.state.videoTitle}
                    />
                </Wrapper>
            </div>
        );
    }
}

export default App;
