import React from 'react';
import './GiveReview.css';
import { useForm } from "react-hook-form";
import axios from 'axios';

const GiveReview = () => {
    const { register, handleSubmit,reset } = useForm();
  const onSubmit = data =>{
      
   
      axios.post('https://floating-tor-66173.herokuapp.com/review',data)
    .then(res=>{
        // console.log(res);
        if(res.data.insertedId){
            alert('Rated Successfully');
            reset();
        }
    })

  }
    return (
        <div className="add-service mb-5">
            <h1 className="brand-name text-center  my-1 text-dark ">Give Review</h1>
            <hr className="w-50 mx-auto"/>
            <div className="row d-sm-flex container mx-auto">
                        <div className="col col-12 col-lg-7 order-sm-2 text-center choose-us-text"> 
                            <div className="card details-card card-style h-100">
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Your Name"  className="rounded-3 border-0 border-outline-warning p-2"/>
                                <textarea {...register("description",{required:true})} placeholder="Comment Here..." className="rounded-3 border-0 border-outline-warning p-2"/>
                                <input type="number" {...register("rating",{required:true})}  placeholder="Rate Us out of 5" max="5.0" min="0.0" className="rounded-3 border-0 border-outline-warning p-2"/>
                               
                                <input {...register("img",{required:true})} placeholder="Your Image Url" className="rounded-3 border-0 border-outline-warning p-2"/>
                                <input className="bg-warning border-0 fw-bold p-2 rounded-3 text-dark" type="submit" value="RATE NOW" />
                                </form>
                            </div>
                              
                       </div>
                                <div className="col order-sm-1 col-12 col-lg-5 text-center choose-us-text"> 
                                <img className="w-100 img-fluid rounded-3 h-100" src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/hero_banner/2021/10_27/01_aventador_ultimae.jpg" alt="" />
                                </div>
                            
                        </div>
            
            
        </div>
    );
};

export default GiveReview;