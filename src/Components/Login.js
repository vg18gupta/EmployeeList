import React, { useState } from "react";
import "./Login.css";

// const LoginData = {
//   username: "hruday@gmail.com",
//   password: "hruday123",
// };
function Login({ LoginData }) {
  const [currentName, setCurrentName] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const handleNameChange = (e) => {
    setCurrentName(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setCurrentPassword(e.target.value);
  };
  const handleSubmitClick = () => {
    if (
      LoginData["username"] === currentName &&
      LoginData["password"] === currentPassword
    ) {
      console.log("yaa");
      window.location.href = "/EmployeeList";
    }
  };
  return (
    <div className="main">
      <p className="sign" align="center">
        Login in
      </p>
      <form className="form1">
        <input
          className="un "
          type="text"
          align="center"
          placeholder="Username"
          onChange={handleNameChange}
        />
        <input
          className="pass"
          type="password"
          align="center"
          placeholder="Password"
          onChange={handlePasswordChange}
        />
        <a class="submit" align="center" onClick={handleSubmitClick}>
          Login in
        </a>
      </form>
    </div>
  );
}
export default Login;
