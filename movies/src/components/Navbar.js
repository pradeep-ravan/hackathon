import React from 'react'
import './Navbar.css';
import {Link} from 'react-router-dom';
function Navbar() {
    return (
        <nav className='nav-styles'>
            <h1>
                <Link to='/' >
                 LOGO
               </Link>
            </h1>
            <ul className='list'>
                <Link to='/'>
                <li>Movies</li>
                </Link>
                {/* <Link to='/logout'>
                <li>Logout</li>
                </Link> */}
                
            </ul>
        </nav>
    )
}

export default Navbar