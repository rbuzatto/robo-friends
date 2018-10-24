import React, { Component } from 'react';

import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';

class App extends Component {
    state = {
        data: robots
    };

    searchRobots = (e) => {
        const search = e.target.value.toLowerCase();
        this.setState(() => ({
            data: robots.filter(({ name }) => name.toLowerCase().includes(search))
        }));
    };
    
    render () {
        return (
            <div className="tc">
                <h1>RoboFriends</h1>
                <SearchBox search={this.searchRobots} />
                <CardList robots={this.state.data} />
            </div>
        )
    }
};

export default App;