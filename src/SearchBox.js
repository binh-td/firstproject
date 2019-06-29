import React from 'react';
import './SearchBox.css'

const SearchBox = ({ searchfield, searchChange }) =>{
    return (
        <div>
            <h1 className="title">RobotFriends</h1>
            <div className="searchbox">
                <input onChange={searchChange} type="search" placeholder="search robot"/>
            </div>
        </div>
    )
}


export default SearchBox;