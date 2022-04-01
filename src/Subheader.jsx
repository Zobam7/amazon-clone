import React from 'react'
import "./subheader.css"
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

function Subheader() {
  return (
    <div className='subheader'>
        <ul className="subheader__ul">
            <li className="subheader__list"><div className="subheader__all"><MenuOutlinedIcon style={{marginRight: "2px"}}/> All</div> </li>
            <li className="subheader__list">Today's Deals</li>
            <li className="subheader__list">Buy Again</li>
            <li className="subheader__list">Cusomer Service</li>
            <li className="subheader__list">Browsing Hisory</li>
            <li className="subheader__list">Gift Cards</li>
            <li className="subheader__list">Registry</li>
            <li className="subheader__list">Sell</li>
        </ul>
    </div>
  )
}

export default Subheader