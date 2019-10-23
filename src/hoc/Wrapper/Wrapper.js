import React, { Component } from 'react';

import './Wrapper.scss';
import Auxiliary from '../Auxiliary';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import Videos from '../../components/Videos/Videos';
import VideoItem from '../../components/Videos/VideoItem/VideoItem';
import Keyboard from '../../components/Keyboard/Keyboard';

const langRu = ['ё', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '-', '=', '⬅',
    'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ',
    'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э',
    'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.',
    'en', ' '
];
const langEn = ['`', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '-', '=', '⬅',
    'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']',
    'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '"',
    'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/',
    'ru', ' '
];

class Wrapper extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            activeLang: 'langRu',
            keyboardShow: false,
            currentValue: '',
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
            sidebarToggle: false,
        }
    }

    burgerClickHandler = () => {
        this.setState({
            sidebarToggle: !this.state.sidebarToggle
        });
    };

    keyboardShow = () => {
        this.setState({
            keyboardShow: !this.state.keyboardShow
        });
    };
    keyboardHide = () => {
        this.setState({
            keyboardShow: false
        });
    };

    keyboardClickHandler = (event) => {
        const target = event.target;
        if (target.tagName.toLowerCase() === 'button') {
            const contentButton = target.textContent.trim();
            let currentValue = this.state.currentValue;
            if (contentButton === '⬅') {
                currentValue = currentValue.slice(0, -1);
            } else if (!contentButton) {
                currentValue += ' ';
            } else if (contentButton === 'en') {

            } else {
                currentValue += contentButton;
            }
            this.setState({
                currentValue: currentValue
            });
            console.log(currentValue)
        }
    };
    searchInputHandler = (event) => {
        const newValue = event.target.value;
        this.setState({
            currentValue: newValue
        });
        console.log(newValue)
    };

    render() {
        let activeLang = this.state.activeLang === 'langEn' ? langEn : langRu;
        const keyboard = activeLang.map((button, index) => {
           return (
               <button
               key={index}
               onClick={(event) => this.keyboardClickHandler(event)}
               >
                   {button}
               </button>
           )
        });
        const videoList = this.state.videos.map( ( video, index ) => {
            return (
                    <VideoItem
                        key={index}
                        videoId={video.id}
                        videoTitle={video.title}
                        videoChannel={video.chanel}
                        videoPreview={`http://i.ytimg.com/vi/${video.id}/sddefault.jpg`}
                    />
            )
        } );

        return (
            <Auxiliary>
                <Header
                    burgerClick={this.burgerClickHandler}
                    burgerToggle={this.state.sidebarToggle}
                    keyboardToggle={this.keyboardShow}
                    searchChange={(event) => this.searchInputHandler(event)}
                    value={this.state.currentValue}
                />
                <main>
                    <Sidebar sidebarToggle={this.state.sidebarToggle}/>
                    <Videos>
                    {videoList}
                    </Videos>
                    <Keyboard
                        keyboardShow={this.state.keyboardShow}
                        keyboardHide={this.keyboardHide}
                        activeLang={this.state.activeLang}
                    >
                        {keyboard}
                    </Keyboard>
                </main>
            </Auxiliary>
        );
    }
}

export default Wrapper;