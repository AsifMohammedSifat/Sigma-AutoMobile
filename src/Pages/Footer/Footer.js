import React from 'react';
import Navigation from '../Shared/Navigation/Navigation';


const Footer = () => {

    return (
        <>
        <Navigation></Navigation>
        <div className="bg-dark mt-5 pt-5">
            <h3 className="text-center text-white ">Follow Us</h3>
          
            <div className="mx-auto fs-2 text-center text-white">
            <i className="fab fa-facebook"></i> <i className="fab fa-twitter"></i>
            <i className="fab fa-youtube"></i>  
            <i className="fab fa-instagram"></i>
                      </div>

            <div className="bg-dark text-white text-center">
                <p className="text-white bg-dark fs-6 m-0">
                    Registered Office: Sigm AutoMobile Group Limited, The New Mill, New Mill Lane, Witney, Bangladesh, OX29 9 SX
                </p>
                <hr />
                <small >
                     ©2021 Sigma Auto Mobile | Registered in Bangladesh: 3190720|All right reserved by  ©SigmaAutoMobile
                </small> <br />
                <span className="brand-name text-center text-white">
                    Sigma AutoMobile <br />
                </span>
                <small >
                     ©2021 ©SigmaAutoMobile All right reserved.  
                </small>
            </div>
            
                    
        </div>
        </>
    );
};

export default Footer;