import React, { Component } from 'react';
import { robots } from '../components/robots';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';

class App extends Component{
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount(){
        this.setState({robots: robots})
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value})
    }
    

    render(){
        const filteredRobots =  this.state.robots.filter(robot=>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase()) 
        }) 
        return (
            <div>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>
            </div>
        )
    }
}

export default App;