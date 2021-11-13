import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div>
             {/* why travel with sigma  */}
             <section>
                            
                    {/* about us banner         */}
                <div className="aboutus-banner">
                    <h1 className="brand-name text-center p-5 ">Travel by The SigmaAutoMobile...</h1>
                    
                </div>

                <div className="my-5">
                        <div className="row d-sm-flex container mx-auto">
                        <div className="col col-12 col-lg-7 order-sm-2 text-center choose-us-text"> 
                                <h3 className="brand-name text-dark ">About Us</h3>
                                <hr />
                                Automobili Lamborghini S.p.A. is an Italian brand and manufacturer of luxury sports cars and SUVs based in Sant'Agata Bolognese. The company is owned by the Volkswagen Group through its subsidiary Audi. Ferruccio Lamborghini, an Italian manufacturing magnate, founded Automobili Ferruccio Lamborghini S.p.A. in 1963 to compete with Ferrari. 
                                </div>
                                <div className="col order-sm-1 col-12 col-lg-5 text-center choose-us-text"> 
                                <img className="w-100 img-fluid rounded-3" src="https://www.bing.com/th/id/OGC.92e7791bad56b6e55baa93733e07ef07?pid=1.7&rurl=https%3a%2f%2fgiffiles.alphacoders.com%2f993%2f99378.gif&ehk=4oQL2r5ABv%2fx35aTmxV778w5tXaP6iBSFh5740CR6F4%3d" alt="" />
                                </div>
                            
                        </div>
                </div>


          </section>                              
        </div>
    );
};

export default AboutUs;