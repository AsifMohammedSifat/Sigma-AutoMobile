import React, { useEffect, useState } from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';

const CarHub = () => {
    const [cars,setCars]=useState([{name:"",description:"",img:"",raitng:""}]);

    useEffect(()=>{
        fetch('https://floating-tor-66173.herokuapp.com/review')
        .then(res=>res.json())
        .then(data=>setCars(data));
    },[])
    return (
        <div className="my-5 py-5">
            <h2 className="brand-name text-dark text-center">What Our Client Says?|Review</h2>
            <div className= "row row-cols-1 row-cols-md-3 g-4 container m-auto my-5" >
                    {
                       
                        
                        cars.map(car => <ReviewCard 
                        key={car._id}                      
                        car={car}
                        ></ReviewCard>)
                    }
            </div> 

        </div>
    );
};

export default CarHub;