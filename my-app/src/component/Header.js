import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCartShopping} from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <div className='header'>
      <div className='header_left'>
        <Link to='/' style={{color: 'white'}}>myBookStore</Link>
      <input type='text' placeholder='Search for books by name' />
      <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: 'blue', marginLeft:'-7rem', fontSize:'20px'} } />
      </div>
      <div className='header_right'>
          <div className='header_items'><Link>Login</Link></div>
          <div className='header_items' ><Link>Become a Seller</Link></div>
          <div className='header_items'><Link>About us</Link></div>
          <div className='header_items'><FontAwesomeIcon
                icon={faCartShopping}
                style={{ color: "white", marginRight: "5px" }}
              /><Link to='/cart'>Cart</Link></div>
      </div>

    </div>
  )
}

export default Header