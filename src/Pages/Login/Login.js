import React, { useEffect,useState } from 'react';
import useAuth from '../../hooks/useAuth';
import './Login.css';
import Navigation from '../Shared/Navigation/Navigation';
import { useHistory, useLocation } from 'react-router';



const Login = () => {


    const {
        user,
        login,
        error,
        handleGoogleSignIN,
        handleEmailChange,
        handlePasswordChange,
        handleRegistration,
        handleNameChange,
        handleToggleChange,
        toggleLogIn,
        isLoading,
        logOut
    }=useAuth();


    // redirect
    const location=useLocation();
    const history=useHistory();
   
     // Redirects to home or previous location 
  const redirectUrl = location.state?.from?.pathname || "/home";
  useEffect(() => {
    if (user?.email) {
      history.push(redirectUrl);
    }
  }, [user]);
   return (
    
    <div>

      {isLoading ? (
        <div className="spinner mt-5 pt-5 d-flex align-items-center justify-content-center">
          <button className="btn btn-primary " type="button" disabled>
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
            <span className="ms-2">Loading...</span>
          </button>
        </div>
      ) :(
        
        <div className="bg-image fixed-top">
          <Navigation></Navigation>

        {/* log in or register header  */}
      <h1 className="text-warning  pt-5  mt-5 fw-bold text-center  rounded-3">Please {login? 'Login':'Register'}</h1>
      <hr className="w-50 text-warning  mx-auto"/>

      {/* login or register form  */}
      <form className="w-50 text-center mx-auto" onSubmit={handleRegistration}>
           {
           login? '':<div className="mb-3">

              <label htmlFor="inputname" className="form-label  text-warning fs-5 fw-bold">Username</label>
              <input onBlur={handleNameChange} type="text" className="form-control" name="displayName" required/>
            </div>}


            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label   text-warning fs-5 fw-bold">Email address</label>
              <input onBlur={handleEmailChange} type="email" className="form-control" required/>
              <div  className="form-text  text-warning fs-7 fw-bold">We'll never share your email with anyone else.</div>
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label text-warning fs-5 fw-bold">Password</label>
              <input onBlur={handlePasswordChange} type="password" className="form-control" id="exampleInputPassword1" required/>
            </div>

            <div>
              {/* checker button  */}
              <input onChange={toggleLogIn} onClick={handleToggleChange}  className="form-check-input text-warning fs-5 fw-bold" type="checkbox" name="" id="check" />
              <label  className="form-check-label mx-1 text-warning" htmlFor="check">Already Register?</label>
            </div>
            <button type="submit" onMouseMove={handleToggleChange} className="btn btn-dark text-warning fw-bold">{login? 'Login':'Register'}</button>

            {/* error message  */}
            <div className="text-danger fw-bold fs-6 my-3">{error}</div>
            
      </form>

      {/* google sign in and sign up button  */}
      <form className="mx-auto text-center" onSubmit={handleGoogleSignIN}>
            <button type="submit" className="bg-dark mx-auto mt-2 w-50 p-2 rounded-3 fs-6 me-2 border-0 text-warning fw-bold"> Register &  Login in with Google</button>
    </form>
  </div>
      )}
    
    </div>
  
  );

};

export default Login;