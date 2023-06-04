import React from 'react'
import Header from '../component/Header'
import Filter from '../component/Filter'
import CardSection from '../component/CardSection'

export default function Home(props) {

  


  return (
    <div>
        <Header/>
        <div className='home-body'>
        <Filter/>
        <CardSection category={props.category} rating={props.rating} /> 
        </div>     
    </div>
  )
}
