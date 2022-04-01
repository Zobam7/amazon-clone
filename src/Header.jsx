import React from "react";
import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { useStateValue } from "./Stateprovider";
import { auth } from "./firebase"
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuth = () => {
    if(user){
      auth.signOut()
    }
  }
  return (
    <div className="header">
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
          className="header__logo"
        />
      </Link>
      <div className="header__location">
        <LocationOnOutlinedIcon />
      <div className="header__option">
          <span className="header__optionlineon">Deliver to</span>
          <span className="header__optionlinetwo">Nigeria</span>
        </div>
      </div>

      <div className="header__search">
        <input type="text" className="header__searchinput" />
        <SearchIcon className="header__searchicon" fontSize="large" />
      </div>

      <div className="header__nav">
      <div className="header__option header__flag">
          <span className="header__optionlineon"><img src="naija.png" className="header__option__img" alt="" /></span>
          <span className="header__optionlinetwo"><ArrowDropDownOutlinedIcon /></span>
        </div>
        <Link to={!user && "/login"}>
          <div onClick={handleAuth} className="header__option">
            <span className="header__optionlineon">Hello, {user ? user.email : "Guest"}</span>
            <span className="header__optionlinetwo">{user ? "Sign Out" : "Sign In"}</span>
          </div>
        </Link>

        <Link to="/orders">
        <div className="header__option">
          <span className="header__optionlineon">Returns</span>
          <span className="header__optionlinetwo">& Orders</span>
        </div>
        </Link>

        {/* <div className="header__option">
          <span className="header__optionlineon">Your</span>
          <span className="header__optionlinetwo">Prime</span>
        </div> */}

        <Link to="/checkout">
          <div className="header__optionbasket">
            <span className="header__optionlineon header__basketcount">
              Cart
            </span>
            <span className="header__optionlinetwo header__basketcount">
            {basket?.length}
            </span>
            {/* <ShoppingCartOutlinedIcon /> */}
            
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
