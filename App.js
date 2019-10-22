import React, { Component } from 'react';
import Wrapper from './hoc/Wrapper/Wrapper';
import Youtuber from './containers/Youtuber/Youtuber';

class App extends Component {
    render() {
        return (
            <div>
                <Wrapper>
                    <Youtuber/>
                </Wrapper>
            </div>
        );
    }
}

export default App;
