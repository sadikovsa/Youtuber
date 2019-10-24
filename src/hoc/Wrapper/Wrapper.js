import React, { Component } from 'react';

import './Wrapper.scss';
import Auxiliary from '../Auxiliary';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import Keyboard from '../../components/Keyboard/Keyboard';

class Wrapper extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            keyboardShow: false,
            sidebarToggle: false,
        }
    }

    burgerClickHandler = () => {
        this.setState( {
            sidebarToggle: !this.state.sidebarToggle
        } );
    };

    keyboardShow = () => {
        this.setState( {
            keyboardShow: !this.state.keyboardShow
        } );
    };

    keyboardHide = () => {
        this.setState( {
            keyboardShow: false
        } );
    };

    render() {
        return (
            <Auxiliary>
                <Header
                    burgerClick={this.burgerClickHandler}
                    burgerToggle={this.state.sidebarToggle}
                    keyboardToggle={this.keyboardShow}
                    searchChange={this.props.searchChange}
                    value={this.props.value}
                />
                <main>
                    <Sidebar sidebarToggle={this.state.sidebarToggle}/>
                    {this.props.children}
                </main>
                <Keyboard
                    keyboardShow={this.state.keyboardShow}
                    keyboardHide={this.keyboardHide}
                    keyboardClicked={this.props.keyboardClicked}
                    activeLang={this.props.activeLang}
                >
                </Keyboard>

            </Auxiliary>
        );
    }
}

export default Wrapper;