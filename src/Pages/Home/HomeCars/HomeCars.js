import SingleCardOfCar from '../../SingleCardOfCar/SingleCardOfCar';

const HomeCars = (props) => {
    const {cars}=props;
    return(
        <div>
   
            <h2 className="brand-name text-dark text-center mt-5">FEATURED CAR</h2>
            <div className= "row row-cols-1 row-cols-md-2 g-4 container m-auto" >
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

export default HomeCars;