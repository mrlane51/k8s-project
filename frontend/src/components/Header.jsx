import { FaUser } from 'react-icons/fa'
import { SiThemoviedatabase, SiHomeassistant } from "react-icons/si"
import { Link } from 'react-router-dom'

import React from 'react'

function Header () {
    return (
        <header className='header'>
            <div className= 'logo'>
            <Link to='/'>HomePage</Link>
                <SiHomeassistant size={25} /> 
            </div>
            <ul>
                <li>
                    <Link to ='/login'>
                        <FaUser size={22} /> Login
                    </Link>
                </li>
                <li>
                    <Link to ='/database'>
                        <SiThemoviedatabase size={25} /> Database
                    </Link>
                </li>
            </ul>
        </header>
    )
}

export default Header