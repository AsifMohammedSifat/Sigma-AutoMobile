import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import useAuth from '../../../hooks/useAuth';
const Navigation = () => {

    const {user,logout}=useAuth();
    console.log(user);
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                    <div className="container-fluid ">
                        {/* brand name  */}
                        <Link to="/home" className="brand-name me-5">Sigma AutoMobile</Link>

                        {/* toogler button for small screen  */}
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>


                        <div className="collapse navbar-collapse mx-auto" id="navbarNavDropdown">
                                <ul className="navbar-nav nav-menus">
                                    {/* home  */}
                                    <li className="nav-item mx-auto">
                                    <Link to="/home" className="nav-item-text mx-auto fs-5" aria-current="page" > Home</Link>
                                    </li> 
                                    
                                     {/* CarHub  */}
                                    <li className="nav-item mx-auto">
                                    <Link to="/carhub" className="nav-item-text mx-auto fs-5" aria-current="page" >CarHub</Link>
                                    </li>
                                     {/* dashboard */}
                                    <li className="nav-item mx-auto">
                                    <Link to="/dashboard" className="nav-item-text mx-auto fs-5" aria-current="page" >Dashboard</Link>
                                    </li>

                                 
                                </ul>
                                
                                <ul className="navbar-nav ms-auto">

                                    {/* dynamics name of user                                     */}
                                    <li className="nav-item my-3 mx-auto">
                                         {!user.email? '':
                                            <div style={{fontSize:'10px'}} className="mx-auto me-2"> <button className="rounded-3  bg-warning border-0 p-2 text-dark fw-bold">
                                        {/* <img  className="" src={user.photoURL} alt="" /> */}
                                        <small>Name:{user.displayName}</small>
                                        </button>
                                        </div> }
                                    </li>

                                    {/* dynamics logout or login button */}
                                    <li className="nav-item my-3 mx-auto">
                                      {!user.email ? <Link  className="fs-6  fw-bold nav-item-text p-2 rounded-3 bg-warning " to="/login">Login</Link>
                                        :<Link  to="" className="fs-6 fw-bold nav-item-text bg-danger p-2 rounded-3" onClick={logout}>LogOut </Link>
                                     }
                                    </li>
                               </ul>
                        </div>
                    </div>
     </nav>
            
        </div>
    );
};

export default Navigation;