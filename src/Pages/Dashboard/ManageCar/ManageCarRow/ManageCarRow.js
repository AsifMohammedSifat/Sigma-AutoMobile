import React from "react";
import { useState } from "react";

const ManageCarRow = (props) => {
  const {
    _id,
    name,
    price,
    img,
    description
  } = props.data;
  const handleDelete = () => {
    const x = window.confirm("Do you want to cancel your booking?");
    if (x) {
      fetch("http://localhost:5000/managecar", {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          deleteId: _id,
        }),
      })
        .then((res) => res.json())
        .then(() => props.deleteOrder(_id));
    }
  };
  const handleStatus = (status) => {
    const x = window.confirm("Do you want to change the status?");
    if (x) {
      fetch("http://localhost:5000/managecar", {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          updateId: _id,
          status: status,
        }),
      })
        .then((res) => res.json())
    }
  };
  return (
    <tr>
      <th scope="row">{_id}</th>
      <td>{name}</td>
      <td>${price}</td>
      <td> <img className="w-100 img-fluid rounded-3" src={img} alt="" /> </td>      
      <td> {description} </td>      
      
      
      <td>
      <button className="rounded-3 bg-dark fs-7 text-danger p-1" onClick={handleDelete}>
      Delete
      </button>
      </td>
    </tr>
  );
};

export default ManageCarRow;