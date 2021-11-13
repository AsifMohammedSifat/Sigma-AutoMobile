import React, { useEffect, useState } from 'react';
import Navigation from '../Shared/Navigation/Navigation';
import SingleCardOfCar from '../SingleCardOfCar/SingleCardOfCar';

const CarHub = () => {
    const [cars,setCars]=useState([{name:"",price:"",description:"",img:""}]);

    useEffect(()=>{
        fetch('http://localhost:5000/carhub')
        .then(res=>res.json())
        .then(data=>setCars(data));
    },[])
    return (
        <div>
            <Navigation></Navigation>
            <h2 className="brand-name text-dark text-center mt-5 pt-5">Our Best Collection</h2>
            <div className= "row row-cols-1 row-cols-md-2 g-4 container m-auto my-5" >
                    {
                       
                        
                        cars.map(car => <SingleCardOfCar 
                        key={car._id}                      
                        car={car}
                        ></SingleCardOfCar>)
                    }
            </div> 

        </div>
    );
};

export default CarHub;