import React from 'react'
import Rating from './Rating'

function Card(props) {
  return (
    <div className='card1'>
        <img src={props.img} alt='' />
        <div className='card-content'>
          
          <div >
          <h2 >{props.name}</h2>
            <Rating rating={props.rating} />
          </div>

            <div>
            <p >{props.price}</p>
            <p>{props.category}</p>
            </div>

        </div>
    </div>
  )
}

export default Card