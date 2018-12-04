import React, { Component } from 'react';
import { connect } from 'react-redux';

import CardList from '../components/CardList';
import Header from '../components/Header';
import ErrorBoundry from '../components/ErrorBoundry';
import SearchBox from './SearchBox';
import './App.css';
import { setSearchField } from "../actions";

import Scroll from '../components/Scroll';


const API = 'https://jsonplaceholder.typicode.com/users';
class App extends Component {
    state = {
        data: []
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
    
    render () {
        const { data } = this.state;
        const { filter } = this.props;

        return data.length === 0 ? <h1 className="tc">Loading...</h1> : (
            <div className="tc">
                <Header />
                <SearchBox search={this.props.searchRobots} />
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={this.filterRobots(data, filter)} />
                    </ErrorBoundry>
                </Scroll>
            </div>
        )
    }
};

const mapStateToProps = state => {
    return {
        filter: state.filter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        searchRobots: e => dispatch(setSearchField(e.target.value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);