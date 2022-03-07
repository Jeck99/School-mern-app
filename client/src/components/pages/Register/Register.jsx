import "./Register.css";
import { useState } from "react";
import { registerNewUser } from "../../../services/user.service";

function Register() {
  const [newUser, setNewUser] = useState({});

  const onFieldChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newUser);
    if (newUser.password !== newUser.confirmPassword) {
      alert("Password and Confirm Password do not match");
      return;
    }
    registerNewUser(newUser).then((res) => {
        alert(res.message);
    });
  };
  return (
    <div className="register">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label>
          lastName:
          <input onChange={onFieldChange} name="lastName" type="text" />
        </label>
        <label>
          firstName:
          <input onChange={onFieldChange} name="firstName" type="text" />
        </label>
        <label>
          email:
          <input onChange={onFieldChange} name="email" type="email" />
        </label>
        <label>
          Password:
          <input onChange={onFieldChange} name="password" type="password" />
        </label>
        <label>
          Confirm Password:
          <input
            onChange={onFieldChange}
            name="confirmPassword"
            type="password"
          />
        </label>
        <button>Register</button>
      </form>
    </div>
  );
}

export default Register;
