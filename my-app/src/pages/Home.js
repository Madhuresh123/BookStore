import React from 'react'
import Header from '../component/Header'
import Filter from '../component/Filter'
import CardSection from '../component/CardSection'

export default function Home() {
  return (
    <div>
        <Header/>
        <div className='home-body'>
        <Filter/>
        <CardSection/> 
        </div>     
    </div>
  )
}
