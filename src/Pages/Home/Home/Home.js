import React,{useEffect,useState} from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import HomeCars from '../HomeCars/HomeCars';
import Footer from '../../Footer/Footer';
import ReviewContainer from '../../Dashboard/Client/ReviewContainer/ReviewContainer';
import AboutUs from '../../AboutUs/AboutUs';

const Home = () => {
    const [cars,setCars]=useState([{name:"",price:"",description:"",img:""}]);

    const [loading,setLoading]=useState(true);

    // fetching home cars 

    useEffect(()=>{
        fetch('https://floating-tor-66173.herokuapp.com/carhub')
        .then(res=>res.json())
        .then(data=>{
            setCars(data.slice(0,6))
            setLoading(false)
        
        })

        

    },[])
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            {loading?(
               <div className="spinner mt-5 d-flex align-items-center justify-content-center">
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
                        
                        <HomeCars cars={cars}></HomeCars>
                        <ReviewContainer></ReviewContainer>
                        
                        </>)
            }
            <AboutUs></AboutUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;