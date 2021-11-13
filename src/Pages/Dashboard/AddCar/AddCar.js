import React from 'react';
import './AddCar.css';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddCar = () => {
    const { register, handleSubmit,reset } = useForm();
  const onSubmit = data =>{
      
   
      axios.post('http://localhost:5000/addcar',data)
    .then(res=>{
        console.log(res);
        if(res.data.insertedId){
            alert('Inserted Successfully');
            reset();
        }
    })

  }
    return (
        <div className="add-service my-5">
            <div className="row d-sm-flex container mx-auto">
                        <div className="col col-12 col-lg-7 order-sm-2 text-center choose-us-text"> 
                            <div className="card details-card card-style h-100">
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <input {...register("brandName", { required: true, maxLength: 20 })} placeholder="Name"  className="rounded-3 border-0 border-outline-warning p-2"/>
                                <textarea {...register("description",{required:true})} placeholder="Description..." className="rounded-3 border-0 border-outline-warning p-2"/>
                                <input type="number" {...register("price",{required:true})}  placeholder="Price" className="rounded-3 border-0 border-outline-warning p-2"/>
                               
                                <input {...register("img",{required:true})} placeholder="Image" className="rounded-3 border-0 border-outline-warning p-2"/>
                                <input className="bg-warning border-0 fw-bold p-2 rounded-3 text-dark" type="submit" value="Book Now" />
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

export default AddCar;