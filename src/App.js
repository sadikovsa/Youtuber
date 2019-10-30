import React, { Component } from 'react';
import { gapi, loadAuth2 } from 'gapi-script'

import Auxiliary from './hoc/Auxiliary';
import Wrapper from './hoc/Wrapper/Wrapper';
import Youtuber from './containers/Youtuber/Youtuber';

const API_KEY = 'AIzaSyCOmHYm_KXnDbRFBIfl3AfGblApt081sno';
const CLIENT_ID = '639598738962-rr5lr6rq7tcv2k2trcvt4ngem2p35d19.apps.googleusercontent.com';

class App extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            currentValue: '',
            activeLang: 'langRu',
            loginModalShow: false,
            user: null,
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
    loginBtnClickHandler = () => {
        if ( this.state.user ) {
            this.signOut();
        } else {
            this.setState( {
                loginModalShow: true
            } );
        }

    };

    async loginModalClickHandler() {
        const auth2 = await loadAuth2( CLIENT_ID, '' );
        auth2.signIn( {
            scope: "https://www.googleapis.com/auth/youtube.readonly"
        } )
            .then( () => {
                const currentUser = auth2.currentUser.get();
                const name = currentUser.getBasicProfile().getName();
                const profileImg = currentUser.getBasicProfile().getImageUrl();
                this.setState( {
                    user: {
                        name: name,
                        profileImg: profileImg
                    },
                    loginModalShow: false
                } );
                console.log( "Sign-in successful");
            } )
            .catch( ( err ) => {
                console.error( "Error signing in", err );
            } );
    };


    signOut = () => {
        const auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then( () => {
            this.setState( { user: null } );
            console.log( 'User signed out.' );
        } );
    };


    render() {
        let loginBtnText = '';
        if ( this.state.user ) {
            loginBtnText = 'Выйти';
        } else {
            loginBtnText = 'Войти';
        }
        return (
            <Auxiliary>
                <Wrapper
                    searchChange={this.searchInputHandler}
                    value={this.state.currentValue}
                    keyboardClicked={( event ) => this.keyboardClickHandler( event )}
                    activeLang={this.state.activeLang}
                    loginBtnClick={this.loginBtnClickHandler}
                    loginModalShow={this.state.loginModalShow}
                    loginModalClick={() => this.loginModalClickHandler()}
                    loginBtnText={loginBtnText}
                    userName={this.state.user ? this.state.user.name : null}
                    userImg={this.state.user ? this.state.user.profileImg : null}
                >
                    <Youtuber videoList={this.state.videos}/>
                </Wrapper>
            </Auxiliary>
        );
    }
}

export default App;
