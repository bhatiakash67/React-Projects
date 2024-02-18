import React from 'react'
import "./Footer.css"
import { Logo } from "../../assets/"
import {Link} from 'react-router-dom'

function Footer() {
    return (
        <footer className='white'>
            <div className='footer-wrapper'>
                <div className="content-container">
                    <div className='footer1'>
                        <div className="links">
                            <Link to = "/">
                                <img src={Logo} />
                                </Link>
                            <div className="text">
                                Our vision is to provide convenience <br /> and help increase your sales business.
                            </div>
                        </div>
                        <div className='site-links'>
                            <h3>About</h3>
                            <ul className='list-items' id='list1'>
                                <a href="#"><li>How it works</li></a>
                                <a href="#"><li>Featured</li></a>
                                <a href="#"><li>Partnership</li></a>
                                <a href="#"><li>Busineess Relation</li></a>
                            </ul>
                        </div>

                        <div className='site-links' >
                            <h3>Community</h3>
                            <ul className='list-items' id='list2'>
                                <a href="#"><li>Events</li></a>
                                <a href="#"><li>Blog</li></a>
                                <a href="#"><li>Podcast</li></a>
                                <a href="#"><li>Invite a friend</li></a>
                            </ul>
                        </div>

                        <div className="site-links">
                            <h3>Socials</h3>
                            <ul className='list-items' id='list3'>
                                <a href="#"><li>Discord</li></a>
                                <a href="#"><li>Instagram</li></a>
                                <a href="#"><li>Twitter</li></a>
                                <a href="#"><li>Facebook</li></a>
                            </ul>
                        </div>
                    </div>

                    <div className='underline'></div>

                    <div className='footer2'>
                        <div className='copyright'>
                            ©2022 MORENT. All rights reserved
                        </div>

                        <div className='terms'>
                            <a href="#"><li>Privacy & Policy</li></a>
                            <a href="#"><li className='conditions-and-terms'>Terms & Condition</li></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer 