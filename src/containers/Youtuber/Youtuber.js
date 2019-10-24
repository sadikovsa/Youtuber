import React, { Component } from 'react';

import Videos from '../../components/Videos/Videos';

class Youtuber extends Component {
    constructor( props ) {
        super( props );
        this.state = {}
    }

    shouldComponentUpdate( nextProps, nextState ) {
        return nextProps.children !== this.props.children;
        console.log( 'youtuber' )
    };

    render() {
        return (
            <div className="container">
                <Videos>
                    {this.props.children}
                </Videos>
                <button id="next_result">Далее</button>
            </div>
        );
    }
}

export default Youtuber;