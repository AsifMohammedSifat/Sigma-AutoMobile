import React, { useEffect } from "react";
import { useState } from "react";
import TableRow from "../../Dashboard/TableRow/TableRow";

const ManageAllOrders = () => {
  const [orderData, setOrderData] = useState([]);
  const [loading, setLoading] = useState(true);
  const deleteOrder = (id) => {
    const newOrderData = orderData.filter((dt) => dt._id !== id);
    setOrderData(newOrderData);
  };
  useEffect(() => {
    document.title = "Admin Panel | All Orders";
    window.scrollTo(0, 0);
    fetch("https://floating-tor-66173.herokuapp.com/allOrders")
      .then((res) => res.json())
      .then((data) => {
        setOrderData(data);
        setLoading(false);
      });
  }, []);
  return (
    <div className="my-bookings-container container pb-5 mb-5">
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
          <h1 className="booking-header brand-name text-dark">Admin Manage Orders Panel</h1>
          <hr />
          <div className="table-responsive">
            <table className="table my-5">
              <thead>
                <tr>
                  <th scope="col">Order ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col">BrandName</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                  <th scope="col">Cancel</th>
                </tr>
              </thead>
              <tbody>
                {orderData.map((order) => (
                  <TableRow
                    key={order._id}
                    data={order}
                    edit={true}
                    deleteOrder={deleteOrder}
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

export default ManageAllOrders;