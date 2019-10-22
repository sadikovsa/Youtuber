import React, { Component } from 'react';
import Auxiliary from '../Auxiliary';
import Header from '../../components/Header/Header';

class Wrapper extends Component {
    render() {
        return (
            <Auxiliary>
                <Header/>
                <main>
                    {this.props.children}
                </main>
            </Auxiliary>
        );
    }
}

export default Wrapper;