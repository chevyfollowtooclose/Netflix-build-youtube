import React, {useState, useEffect } from 'react'
import '../CSS/Nav.css'

// import { Link } from "react-router-dom";


function Nav(){

    const netflixlogo = new URL("../Images/NetflixLogo.png",import.meta.url)
    const netflixavatar = new URL("../Images/NetflixAvatar.png",import.meta.url)
    
    const [show, handleShow]=useState(false);
    const transitionNavBar =() =>{
        if (window.scrollY > 100){
            handleShow(true);
        } else {
            handleShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll",transitionNavBar);
        },[]);

    return  <>
            <div className ={`nav ${show && "nav_black"}`}>
                <div className="nav_content">
                    <img 
                    className='nav_logo'
                        src ={netflixlogo} 
                        alt=""
                        />
                    <img 
                    className='nav_avatar'
                        src ={netflixavatar} 
                        alt=""
                        />

                        {/* <ul>

                        </ul> */}
                </div>
            </div>
            </> 
    
}

export default Nav;

                    {/* <li>
                    <Link to="/">Home</Link>              
                    </li>
                    <li>
                    <Link to="/About">About</Link>              
                    </li>
                    <li>
                    <Link to="/Gallery">Gallery</Link>              
                    </li>
                    <li>
                    <Link to="/Counter">Counter</Link>              
                    </li>
                    <li>
                    <Link to="/Composition">Composition</Link>              
                    </li> */}