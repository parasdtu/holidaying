import React from 'react';
import './card.styles.css';

export const Card = (props) => (
    <div className='card-container'>
    <img alt="restaurant" src={`https://robohash.org/${props.restaurant.id%100}?set=set4`} />
        <h2> {props.restaurant.company.name} </h2>
        <p> Rating </p>
        {   
            ((props.restaurant.id*69)%5)%2===0 ? <div><span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            </div> 
            : 
            <div>
            {props.restaurant.id%3===0 ? <div> <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star "></span>
            <span class="fa fa-star "></span></div> : <div><span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star "></span>
            <span class="fa fa-star "></span>
            <span class="fa fa-star "></span> </div>}
            
            </div>
            
        }
        <p> {props.restaurant.company.catchPhrase} taste! </p>
    </div>
);
 