import React from 'react';
import './ReviewCard.css';

const ReviewCard = (props) => {
    // const {_id,price,days,nights,name,description,img}=props.car;
    const {_id,name,img,description,rating}=props.car;
    
   
    return (
       <div>
           
            {/* data pass by card  */}
            <div className="card details-card card-style h-100">
                {/* card img  */}
                <img src={img} className="card-img-top img-fluid rounded-3 mx-auto" alt="..."/>
                <div className="card-body">
                    {/* name  */}
                    <h6 className="card-title"><span className="card-value fs-6">{name}</span></h6>   
                    {/* price */}
                    <h6 className="card-title">Rating:<span className="card-value">{rating} <i class="fas fa-star"></i>Star</span></h6> 
                    <p className="card-title fw-bold">Comment:<span className="fw-normal fs-6" >{description}</span></p>   
                
                </div>

              
            </div>
        </div>
    );
};

export default ReviewCard;