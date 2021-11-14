import React, { useState } from 'react';
import '../AddCar/AddCar.css';

const MakeAdmin = () => {
    
    const [email, setEmail] = useState('');
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('http://localhost:5000/user/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    // console.log(data);
                    
                    alert('Inserted Successfully');
                }
                else{
                    alert('Already Added');
                }
            })

        e.preventDefault()
    

  }

    return (
        <div className="add-service my-5">
            <h1 className="brand-name text-center my-1 text-dark ">Make Admin</h1>
            <hr className="w-50 mx-auto"/>
            <div className="row d-sm-flex container g-2 mx-auto">
                        <div className="col col-12 col-lg-7 order-sm-2 text-center choose-us-text"> 
                            <div className="card details-card card-style h-100">
                            <form onSubmit={handleAdminSubmit}>

                                <input type="email" onBlur={handleOnBlur}  placeholder="Enter Admin Email"  className="rounded-3 align-items-center border-0 border-outline-warning p-2"/>
                                
                                <input  className="bg-warning border-0 fw-bold p-2 rounded-3 text-dark" type="submit" value="Make Admin" />
                                </form>
                            </div>
                              
                       </div>
                                <div className="col order-sm-1 col-12 col-lg-5 text-center choose-us-text"> 
                                <img className="w-100 img-fluid rounded-3 h-100" src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/hero_banner/2021/10_27/03_sian_fkp_37.jpg" alt="" />
                                </div>
                            
                        </div>
            
            
        </div>
    );
};

export default MakeAdmin;