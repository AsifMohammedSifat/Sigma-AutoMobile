import React from 'react';
import { Link,useRouteMatch,Switch,BrowserRouter as Router,Route} from 'react-router-dom';
import './Dashboard.css';
import ManageAllOrders from '../Dashboard/ManageAllOrders/ManageAllOrders';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import ManageCar from './ManageCar/ManageCar';
import MyOrders from './Client/MyOrders/MyOrders';
import GiveReview from './Client/GiveReview/GiveReview';
import Payment from './Client/Payment/Payment';
import AddCar from './AddCar/AddCar';
import useAuth from '../../hooks/useAuth';

const Dashboard = () => {
    let {path,url}=useRouteMatch();
    const {admin,user,logout}=useAuth();
    return (
        <div>
              <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                    <div className="container-fluid ">
                        {/* brand name  */}
                        <Link to="/home" className="brand-name me-5">Sigma AutoMobile</Link>
                        <Link to="/home"  className="btn bg-warning text-dark fw-bold" type="button">Home</Link>

                        {/* toogler button for small screen  */}
                        <button className="navbar-expand navbar-toogler border-0 rounded-3" type="button">  
                        {user?.email && <Link  to="" className="fs-6 fw-bold nav-item-text bg-danger p-2 rounded-3" onClick={logout}>LogOut </Link>
                                     }
                        </button>
                      


                       </div>

                      



<div className="offcanvas offcanvas-start " data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel"><i className="fas fa-th-list"></i> Dashboard</h5>
    <hr />

    {/* close button */}
    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">

      {/* normal user  */}
    {!admin &&  <ul className="dashboard-ul">                     
          <li>   <Link to={`${url}/payment`}  className="btn bg-warning text-dark fw-bold" type="button">Payment</Link>
          </li>

          <li>  
                        <Link to={`${url}/myorders`} className="btn bg-warning text-dark fw-bold" type="button">My Order</Link>
            </li>

            <li>
                        <Link to={`${url}/review`}  className="btn bg-warning text-dark fw-bold" type="button">Review</Link>
            </li>

            <li>
                
            <Link  to=""  className="btn bg-warning text-dark fw-bold" type="button" onClick={logout}>LogOut </Link>
            </li>
            <hr />
                       
                       
  </ul>}


                        {/* ==============admin=============== */}

                        
      {admin && <ul className="dashboard-ul">                     
          <li>                
          <Link to={`${url}/manageallorders`}  className="btn bg-warning text-dark fw-bold" type="button">Manage All Orders</Link>
          </li>

          <li>  
              
          <Link to={`${url}/makeadmin`} className="btn bg-warning text-dark fw-bold" type="button">Make Admin</Link>
                        
            </li>

            <li>
                
            <Link to={`${url}/addcar`}  className="btn bg-warning text-dark fw-bold" type="button">Add Car</Link>                      
            </li>

            <li>                
            <Link to={`${url}/managecar`}  className="btn bg-warning text-dark fw-bold" type="button">Manage All Car Product</Link>
            </li>

            <li>                <Link  to=""  className="btn bg-warning text-dark fw-bold" type="button" onClick={logout}>LogOut </Link>
            </li>
            
                       
                       
  </ul>}
  </div>
</div>
     </nav>

     
          <h1 className="mt-5 pt-5"></h1>

          {/* default dashboard button  */}
               {/* toogler button for small screen  */}
              <div className="mx-auto text-center ">
              <button className="ms-auto p-5 w-50 text-center navbar-expand navbar-toogler border-0 rounded-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions" aria-expanded="true" aria-label="Toggle navigation"> 
               <Link className="p-2 fs-6 fw-bold w-50 container btn mx-auto bg-warning text-dark" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                            Dashboard
                        </Link>
                        </button>
              </div>

          <Switch>
            {/* client route  */}
                  <Route path={`${path}/payment`}>
                      <Payment></Payment>
                  </Route>
                  <Route path={`${path}/myorders`}>
                      <MyOrders></MyOrders>
                  </Route>
                  <Route path={`${path}/review`}>
                      <GiveReview></GiveReview>
                  </Route>

                  {/* admin route  */}
                  <Route path={`${path}/manageallorders`}>
                      <ManageAllOrders></ManageAllOrders>
                  </Route>
                  <Route path={`${path}/makeadmin`}>
                      <MakeAdmin></MakeAdmin>
                  </Route>
                  <Route path={`${path}/addcar`}>
                      <AddCar></AddCar>
                  </Route>
                  <Route path={`${path}/managecar`}>
                      <ManageCar></ManageCar>
                  </Route>
           
          </Switch>
    
            
   
        </div>
    );
};

export default Dashboard;