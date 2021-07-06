import React, { useEffect } from "react";
import { connect } from "react-redux";
import Login from "../Components/Login";
import { getAuthInfo } from "../Actions/action";

function LandingPage(props) {
  let data = props?.data?.LoginData;
  useEffect(() => {
    props.getAuthInfo();
  }, []);
  return (
    <>
      <Login LoginData={data} />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.w_data,
  };
};
const mapActionsToProps = {
  getAuthInfo: getAuthInfo,
};

export default connect(mapStateToProps, mapActionsToProps)(LandingPage);
