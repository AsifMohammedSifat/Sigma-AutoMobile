import React, { useEffect, useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import "./MyOrders.css";
import TableRow from '../../TableRow/TableRow';


const MyOrders= () => {
  const { user } = useAuth();
  const [orderData, setOrderData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    document.title = "My Orders";
    window.scrollTo(0, 0);
    fetch(`http://localhost:5000/allOrder/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setOrderData(data);
        setLoading(false);
      });
  }, []);
  const deleteOrder = (id) => {
    const newOrderData = orderData.filter((dt) => dt._id !== id);
    setOrderData(newOrderData);
  };
  return (
    <div className="my-bookings-container container">
      {loading ? (
        <div className="spinner d-flex align-items-center justify-content-center">
          <button className="btn btn-primary" type="button" disabled>
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
            <span className="ms-2">Loading...</span>
          </button>
        </div>
      ) : (
        <>
          <h1 className="booking-header brand-name text-dark">My Order</h1>
          <hr />
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Order ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Brnd Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {orderData.map((order) => (
                  <TableRow
                    key={order._id}
                    data={order}
                    deleteOrder={deleteOrder}
                    edit={false}
                  ></TableRow>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};


export default MyOrders;
