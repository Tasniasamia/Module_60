import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Authproviderdata } from '../Layout/Authprovider';
import './Header.css'
const Header = () => {
    const recivedata=useContext(Authproviderdata);
    const{userdata,logout}=recivedata;
    return (
        <div>
        <div className="navbar bg-neutral text-neutral-content">
  <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  <div className='navsection'>
    <Link to="/">Home</Link>
    <Link to="/Resister">Resister</Link>
    <Link to="/Order">Order</Link>

    <div className='ms-10'>
        {
            userdata?  <div>
            <span onClick={logout}className="me-4">Log Out</span>
             <span>{userdata.email}</span></div>:<div > <Link to="/Login">Login</Link>

                </div>
        }
      

    </div>
    
</div>
</div>

   
        </div>
    );
};

export default Header;