import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from 'react-router-dom';

const Header = () => {
    const [ btnName, setBtnName ] = useState('Login');

    useEffect(() => { console.log('Header use Effect called.')}, []);
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <li className="login" onClick={() => { btnName === 'Login' ? setBtnName('Logout') : setBtnName('Login')}}>{btnName}</li>
                </ul>
            </div>           
        </div>
    )
}
export default Header;