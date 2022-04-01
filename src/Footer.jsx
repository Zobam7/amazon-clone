import React from 'react'
import { Link } from 'react-router-dom'
import "./footer.css"
import LanguageIcon from '@mui/icons-material/Language';

function Footer() {
  return (
    <div className='footer'>
        <a href="#top">
            <div className="footer__top">
                <p>Back to top</p> 
            </div>
        </a>

        <div className="footer__details">
            <div className="footer__info">
                <h4>Get to Know Us</h4>
                <p>Career</p>
                <p>Blog</p>
                <p>About Amazon</p>
                <p>Investor Relations</p>
                <p>Amazon Devices</p>
                <p>Amazon Science</p>
            </div>
            <div className="footer__info">
                <h4>Make Money with Us</h4>
                <p>Sell products on Amazon</p>
                <p>Sell on Amazon Business</p>
                <p>Sell apps on Amazon</p>
                <p>Become an Affilate</p>
                <p>Advertise Your Products</p>
                <p>Self-Publish with Us</p>
                <p>Host an Amazon Hub</p>
                <p>See More Make Money with Us</p>
            </div>
            <div className="footer__info">
                <h4>Amazon Payment Products</h4>
                <p>Amazon Business Card</p>
                <p>Shop with Points</p>
                <p>Reload Your Balance</p>
                <p>Investor Relations</p>
                <p>Amazon Currency Converter</p>
            </div>
            <div className="footer__info">
                <h4>Let Us Help You</h4>
                <p>Amazon and COVID-19</p>
                <p>Your Account</p>
                <p>Your Orders</p>
                <p>Shipping Rates & Policies</p>
                <p>Returns & Replacements</p>
                <p>Manage Your Content and Devices</p>
                <p>Amazon Assistant</p>
                <p>Help</p>
            </div>
        </div>
        <div className='footer__divider'/>
        <div className="footer__logo">
            <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" className='footer__pic'/>
            <div className='footer__logo__items'><LanguageIcon fontSize='small' style={{marginRight: "10px"}}/> English</div>
            <div className='footer__logo__items'><span style={{paddingRight: "7.8px", color: "white"}}>$</span>  USD - U.S. Dollars</div>
            <div className='footer__logo__items'><img src="naija.png" alt="" className='footer__flag'/>Nigeria</div>

        </div>
    </div>
  )
}

export default Footer