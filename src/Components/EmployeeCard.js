import userEvent from "@testing-library/user-event";
import React from "react";
import "./EmployeeCard.css";

function EmployeeCard({ data }) {
  console.log(data);
  return (
    <div className="card">
      <h1>{data.name}</h1>
      <p className="title">
        {data.gender}, {data.age}
      </p>
      <p>
        {data.phoneNo}, {data.email}
      </p>
    </div>
  );
}
export default EmployeeCard;
