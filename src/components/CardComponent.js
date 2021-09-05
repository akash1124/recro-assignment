import React from 'react';
import '../styles/CardComponent.css';

function CardComponent(props) {
    return (
        <div key={props.id} className="card">
            <div key={props.id} className="card-container">
                <h4><b>{props.title}</b></h4>
                <p>{props.body}</p>
            </div>
        </div>
    )
}

export default CardComponent;