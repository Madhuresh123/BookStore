import React from 'react'
import '../style/paymentPopus.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const PaymentPopus = (props) => {

  return (
    <div className='popoup'>
        <Link to='/cart'><FontAwesomeIcon className='close' icon={faXmark}  /></Link>
        <img src='OR.PNG' alt=''/>
        <p>Total amount to be paid = ₹{props.amount}</p>
    </div>
  )
}

export default PaymentPopus