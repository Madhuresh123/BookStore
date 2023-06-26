import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCartShopping} from '@fortawesome/free-solid-svg-icons';
import NoteContext from "../context/NoteContext";


function Header() {

  const context = useContext(NoteContext);
  const { cartList, setUserInfo, userInfo} = context;

  const PORT = 'http://localhost:5000/'

  useEffect(() => {
    fetch(`${PORT}api/auth/profile`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${userInfo}`,
      },
    })
      .then((response) => {
        if (response.status === 401) {
          throw new Error('Unauthorized');
        }
        return response.json();
      })
      .then((userInfo) => {
        setUserInfo(userInfo);
      })
      .catch((error) => {
        console.log(error);
        // Handle unauthorized or other errors
      });
  }, [setUserInfo,userInfo]);

  function logout(){
      fetch(`${PORT}api/auth/logout`, {
          method: 'POST'
      }).then(() => {
          setUserInfo(null)   
      })
      
  }

  const username = userInfo?.name

  return (
    <div className='header'>
      {console.log(userInfo )}
      <div className='header_left'>
        <Link to='/landingpage' style={{color: 'white'}}>myBookStore</Link>
      <input type='text' placeholder='Search for books by name' />
      <FontAwesomeIcon className='search_icon' icon={faMagnifyingGlass} style={{color: 'blue', marginLeft:'-7rem', fontSize:'20px'} } />
      </div>
      <div className='header_right'>
        {!username && (<div className='header_items'><Link to="/login">Login</Link></div>)}
        {username && (<div className='header_items'><Link to="/"  onClick={logout}>Logout</Link></div>)}
          
          <div className='header_items' ><Link>Become a Seller</Link></div>
            <div className='header_items'><Link>About us</Link></div>
          <span className='itemCount'>{cartList.length}</span>
          <div className='header_items'>
          <FontAwesomeIcon
                icon={faCartShopping}
                style={{ color: "white", marginRight: "5px" }}
              /><Link to='/cart'>Cart</Link></div>
      </div>

    </div>
  )
}

export default Header