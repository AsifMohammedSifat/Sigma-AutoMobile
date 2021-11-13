import React from 'react';
import './SingleCardOfCar.css';
import {Link} from 'react-router-dom';

const SingleCardOfCar = (props) => {
    // const {_id,price,days,nights,name,description,img}=props.car;
    const {_id,name,img,description,price}=props.car;
    
   
    return (
       <div>
           
            {/* data pass by card  */}
            <div className="card details-card card-style h-100">
                {/* card img  */}
                <img src={img} className="card-img-top w-100 rounded-3 mx-auto" alt="..."/>
                <div className="card-body">
                    {/* name  */}
                    <h6 className="card-title"><span className="card-value">{name}</span></h6>   
                    {/* price */}
                    <h6 className="card-title">Price:<span className="card-value">{price}$</span></h6> 
                    <p className="card-title fw-bold">Description:<span className="fw-normal" >{description}</span></p>   
                
                </div>

                {/* details button of card  */}
                <div className="card-footer">
                    <Link to={`/cardetails/${_id}`} >
                        <button className="btn btn-warning text-white fw-bold">  Buy Now
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleCardOfCar;