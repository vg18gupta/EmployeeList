import React, { useEffect } from "react";
import { connect } from "react-redux";
import EmployeeCard from "../Components/EmployeeCard";
import "./EmployeePage.css";
import { getCoinInfo } from "../Actions/action";
//import EmployeeDetails from "../Constants/EmployeeDetails";

function EmployeePage(props) {
  let data = props.data.EmployeeDetails.user;
  useEffect(() => {
    props.getCoinInfo();
  }, []);
  //console.log(data);
  return (
    <>
      <div className="headerTitle">
        <div className="headerContent">
          <span>Employee Details</span>
        </div>
      </div>
      <div className="container">
        <div className="contentContainer">
          <div className="content">
            {data.map((element, index) => {
              return (
                <div className="cardContainer">
                  <EmployeeCard data={element} key={index} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    data: state.w_data,
  };
};
const mapActionsToProps = {
  getCoinInfo: getCoinInfo,
};

export default connect(mapStateToProps, mapActionsToProps)(EmployeePage);
