import React from 'react'
import "./NavBar.css"
import { Setting, Like2, Notif2, Profile, Search, Filter, Logo, ProfileSelf } from "../../assets/"
import {Link} from 'react-router-dom'


function NavBar() {

  const handleKeyClick = (e) => {
    if (e.key === "Enter") {
      console.log("Performing search for: ", e.target.value)
    }
  }
  return (
    <nav className="navbar">
      <Link className='logo' to = "/"><img src={Logo} alt="" />
      </Link>
      <div className="search-bar">
        <input type="text" placeholder="Search something here" onKeyPress={handleKeyClick} className='headerinput' />
      </div>
      <div className="right-content">
        <div className="circular-link">
          <img src={Like2} alt="Link" />
        </div>
        <div className="circular-link">
          <img src={Notif2} alt="Link" />
        </div>
        <div className="circular-link">
          <img src={Setting} alt="Link 2" />
        </div>
        <div className="circular-link">
          <img src={ProfileSelf} alt="Link" id='selfimage' />
        </div>
      </div>
    </nav>
  )
}
export default NavBar