import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
      <div className='header_left'>Logo</div>
      <div className='header_right'>

          <div  className='header_items'><Link>Home</Link></div>
          <div className='header_items'><Link>Home</Link></div>
          <div className='header_items'><Link>Home</Link></div>
          <div className='header_items'><Link>Home</Link></div>
      </div>

    </div>
  )
}

export default Header