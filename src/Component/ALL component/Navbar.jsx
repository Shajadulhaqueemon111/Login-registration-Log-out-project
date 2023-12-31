import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const Navbar = () => {

    const {user,logOut}=useContext(AuthContext)

    const handelLogOut=()=>{
        logOut()

        .then((result=>{
            console.log("no data",result)
        }))
        .catch(error=>{
            console.log(error)
        })
    }

    const navlink=<>
    
                     <li><NavLink to='/'>Home</NavLink></li>
                   <li><NavLink to='/login'>Login</NavLink></li>
                   <li><NavLink to='/register'>Register</NavLink></li>
                   <li><NavLink to='/order'>Order</NavLink></li>
    
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                           {navlink}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Moha-Milon</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                      {navlink}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user? <>
                        <span>{user.email}</span>
                        <a onClick={handelLogOut} className="btn sm">Sign-out</a>
                        
                        </>
                        :<Link to='/login'>
                        <button className='btn btn-sm'>Login</button>
                        
                        </Link>
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default Navbar;