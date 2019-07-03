import React from 'react';


const SearchBox = ({ searchfield, searchChange }) =>{
    return (
        <div>
            <h1 className="title">RobotFriends</h1>
            <div className="searchbox">
                <input onChange={searchChange} type="search" placeholder="Search Robot"/>
            </div>
        </div>
    )
}


export default SearchBox;