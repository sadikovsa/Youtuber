import React, { Component } from 'react';

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
            videos: [],
        }
    }

    signIn = () => {
        window.gapi.auth2.getAuthInstance()
            .signIn( {
                scope: "https://www.googleapis.com/auth/youtube.readonly"
            } )
            .then( () => {
                const currentUser = window.gapi.auth2.getAuthInstance().currentUser.get();
                const name = currentUser.getBasicProfile().getName();
                const profileImg = currentUser.getBasicProfile().getImageUrl();
                this.setState( {
                    user: {
                        name: name,
                        profileImg: profileImg
                    },
                    loginModalShow: false
                } );
            } )
            .then( () => {
                this.youtubeRequest( {
                    method: 'search',
                    part: 'snippet',
                    order: 'rating',
                    regionCode: 'RU',
                    maxResults: 12
                } );
            } )
            .catch( ( err ) => {
                console.error( err );
            } );
    };
    youtubeRequest = options => {
        window.gapi.client.youtube[ options.method ]
            .list( options )
            .then( response => {
                this.setState( { videos: response.result.items } );
                console.log( response.result.items )
            } )
            .catch( err => console.error( 'Во время запроса произошла ошибка: ' + err ) );
    };

    signOut = () => {
        const auth2 = window.gapi.auth2.getAuthInstance();
        auth2.signOut().then( () => {
            this.setState( { user: null } );
            console.log( 'User signed out.' );
        } );
    };

    searchInputHandler = ( event ) => {
        const newValue = event.target.value;
        this.setState( {
            currentValue: newValue
        } );
    };

    searchBtnClickHandler = () => {
        console.log( 'clicked' );
        this.youtubeRequest( {
            method: 'search',
            part: 'snippet',
            order: 'date',
            maxResults: 12,
            regionCode: 'RU',
            q: this.state.currentValue
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

    componentDidMount() {
        const script = document.createElement( "script" );
        script.src = "https://apis.google.com/js/api.js";

        script.onload = () => {
            window.gapi.load( 'client:auth2', () => {
                window.gapi.client.setApiKey( API_KEY );
                window.gapi.client.load( "https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest" )
                    .then( () => {
                        console.log( "GAPI client loaded for API" );
                    } )
                    .then( () => {
                        this.youtubeRequest( {
                            method: 'search',
                            part: 'snippet',
                            order: 'date',
                            maxResults: 12,
                            regionCode: 'RU'
                        } );
                    } )
                window.gapi.auth2.init( {
                    client_id: CLIENT_ID
                } )
            } );
        };


        document.body.appendChild( script );


    }


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
                    searchClick={this.searchBtnClickHandler}
                    value={this.state.currentValue}
                    keyboardClicked={( event ) => this.keyboardClickHandler( event )}
                    activeLang={this.state.activeLang}
                    loginBtnClick={this.loginBtnClickHandler}
                    loginModalShow={this.state.loginModalShow}
                    loginModalClick={() => this.signIn()}
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
