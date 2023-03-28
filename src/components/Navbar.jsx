    import React from 'react';
    import {Link} from "react-router-dom";
    import "./Navbar.css";
    const Navbar = () => {
      return (
        <nav className='navbar'>
            <h3 className='AirBus'><Link to='/'>Airbus</Link></h3>
            <ul className='nav-links'>
                <Link to="/login" className='login'>
                    <li>LOGIN</li>
                </Link>
               
            </ul>
        </nav>
      );
    }
    
    export default Navbar;
    
