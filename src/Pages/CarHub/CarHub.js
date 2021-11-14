import React, { useEffect, useState } from 'react';
import Navigation from '../Shared/Navigation/Navigation';
import SingleCardOfCar from '../SingleCardOfCar/SingleCardOfCar';

const CarHub = () => {
    const [cars,setCars]=useState([{name:"",price:"",description:"",img:""}]);
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
        fetch('http://localhost:5000/carhub')
        .then(res=>res.json())
        .then(data=>{
            setCars(data)
            setLoading(false)
        
        });
    },[])
    return (
        <div>
            <Navigation></Navigation>
            {loading?(
               <div className="spinner pt-5 mt-5 d-flex align-items-center justify-content-center">
               <button className="btn btn-primary" type="button" disabled>
                 <span
                   className="spinner-border spinner-border-sm"
                   role="status"
                   aria-hidden="true"
                 ></span>
                 <span className="ms-2">Loading...</span>
               </button>
             </div>
            ):( <> 
            <h2 className="brand-name text-dark text-center mt-5 pt-5">Our Best Collection</h2>
            <div className= "row row-cols-1 row-cols-md-2 g-4 container m-auto my-5" >
                    {
                       
                        
                        cars.map(car => <SingleCardOfCar 
                        key={car._id}                      
                        car={car}
                        ></SingleCardOfCar>)
                    }
            </div> 
            </>)
}

        </div>
    );
};

export default CarHub;