import React from 'react';
import logo from '../../assets/images/more/logo1.png'
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {

    const {user, userLogout} = useAuth()

    const handleLogout = () => {
        userLogout()
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(object);
        })
    }

    return (
        <div className=' bg-gray-200 relative'>
            <div className='flex justify-center items-center '>
            <img width="5%" src={logo} alt="" />
            <h2 className='text-5xl'>Espresso Emporium</h2>
            </div>
            <div className=" flex justify-end">
    {
      user ? <>
      <span className='mx-5 '>{user.email}</span> 
      <a onClick={handleLogout} className="btn btn-sm capitalize hover:bg-orange-600 hover:text-white">Sing Out</a>
      </>
      : <NavLink to="/login" className="btn btn-sm">Login</NavLink>  
    }  
  </div>
            <hr />
        </div>
    );
};

export default Header;