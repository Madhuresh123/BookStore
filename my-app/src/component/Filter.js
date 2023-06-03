import React from 'react'
import Checkbox from './Checkbox'
import PriceFilter from './PriceFilter'

export default function Filter() {
  return (
    <div className='filter-section' >
        <h2 style={{padding: '1rem'}}>Filters</h2>
        
        <Checkbox title='Category' op1='General' op2='Frictional' op3='Novel' op4='Self-improvment' />

        <Checkbox title='Customer Ratings' op1='4★ &amp; above' op2='3★ &amp; above' op3='2★ &amp; above' op4='1★ &amp; above' />

        <PriceFilter/>

    </div>
  )
}
