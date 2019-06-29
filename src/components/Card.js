import React from 'react';
import './Card.css'

const Card = ({ id, name, email }) => {
    return (
        <div className="card">
            <img className="card-img" alt="robot" src={`https://robohash.org/${id}/?size=200x200`}/>
            <div>
                <h1>{name}</h1>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;