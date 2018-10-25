import React, { Component } from 'react';

import CardList from '../components/CardList';
import SearchBox from './SearchBox';
import './App.css';
import Scroll from '../components/Scroll';


const API = 'https://jsonplaceholder.typicode.com/users';
class App extends Component {
    state = {
        data: [],
        filter: ''
    };

    componentDidMount() {
        fetch(API)
            .then(res => {
                if (res.status === 200) return res.json(); 
                throw res.status
            })
            .then(data => this.setState(() => ({ data })))
            .catch(console.log)
    }

    filterRobots = (robots, filter) => {
        return robots.filter(({ name }) => name.toLowerCase().includes(filter))
    };

    searchRobots = (e) => {
        const search = e.target.value.toLowerCase();
        this.setState(() => ({
            filter: search
        }));
    };
    
    render () {
        const {data, filter} = this.state;

        return data.length === 0 ? <h1 className="tc">Loading...</h1> : (
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox search={this.searchRobots} />
                <Scroll>
                    <CardList robots={this.filterRobots(data, filter)} />
                </Scroll>
            </div>
        )
    }
};

export default App;