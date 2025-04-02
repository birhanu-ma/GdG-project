import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import menu_icon from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search.png'
import notification_icon from '../../assets/notification.png'
import more_icon from '../../assets/more.png'
import profile_icon from '../../assets/bire.jpg'
import upload_icon from '../../assets/upload.png'
const Navbar = ({setSidebar}) => {
  return (
    <nav className = 'flex-div'>
        <div className='nav-left flex-div'>
            <img className='menu-icon' onClick={()=>setSidebar(prev=>prev===false ? true:false)} src={menu_icon} alt="menu icon image" />

            <Link to = '/'> <img className='logo' src={logo} alt="logo icon" /></Link>
           
        </div>
        <div className='middle-nav flex-div'>
            <div className="search-box flex-div">
                <input type="text" placeholder='search'/>
                <img src={search_icon} alt="search icon" />
            </div>   
        </div>
        <div className="right-nav flex-div">
            <img src={upload_icon} alt="upload icon" />
            <img src={more_icon} alt="more icon" />
            <img src={notification_icon} alt="notification icon" />
            <img src={profile_icon} className='user-icon' alt="profile icon" />

        </div>

    </nav>
  )
}

export default Navbar