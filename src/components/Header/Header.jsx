import React from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketSharpIcon from '@mui/icons-material/ShoppingBasketSharp';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { auth } from '../Firebase';


const Header = () => {

  const [{basket, user}, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if(user) {
      auth.signOut()
    }
  }

  return (
    <div className='Header'>
      <Link to="/">
        <img
          className='header__logo'
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>
      <div className="header__search">
        <input 
          className='header__searchInput'
          type="text" 
        />
        <SearchIcon 
          className='header__searchIcon'
        />
        {/* Logo */}
      </div>
      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div className="header__option" onClick={handleAuthentication}>
            <span className="header__optionLineOne">
            {
                user ? `Hello ${user.email}` : 'Hello Guest'
              }
            </span>
            <span className="header__optionLineTwo">
              {
                user ? 'Sign Out' : 'Sign In'
              }
            </span>
          </div>
        </Link>
        <div className="header__option">
        <span className="header__optionLineOne">
            Returns
          </span>
          <span className="header__optionLineTwo">
            & Orders
          </span>
        </div>
        <div className="header__option">
        <span className="header__optionLineOne">
            Your
          </span>
          <span className="header__optionLineTwo">
            Prime
          </span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketSharpIcon />
            <span className="header__optionLineTwo header__basketCount">{basket.length}</span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Header