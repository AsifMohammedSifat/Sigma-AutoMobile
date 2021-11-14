import React, { useEffect } from "react";
import { useState } from "react";
import TableRow from "../../Dashboard/TableRow/TableRow";
import ManageCarRow from "./ManageCarRow/ManageCarRow";

const ManageCar = () => {
  const [orderData, setOrderData] = useState([]);
  const [loading, setLoading] = useState(true);
  const deleteOrder = (id) => {
    const newOrderData = orderData.filter((dt) => dt._id !== id);
    setOrderData(newOrderData);
  };
  useEffect(() => {
    document.title = "Admin Panel |Manage All Orders";
    window.scrollTo(0, 0);
    fetch("http://localhost:5000/carhub")
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
          <h1 className="booking-header brand-name text-dark">Admin Manage cars Panel</h1>
          <hr />
          <div className="table-responsive">
            <table className="table my-5">
              <thead>
                <tr>
                  <th scope="col">Brand Id</th>
                  <th scope="col">Brand Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Image</th>
                  <th scope="col">Description</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {orderData.map((order) => (
                  <ManageCarRow
                    key={order._id}
                    data={order}
                    edit={true}
                    deleteOrder={deleteOrder}
                  ></ManageCarRow>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default ManageCar;