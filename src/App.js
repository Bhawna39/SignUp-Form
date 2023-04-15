import React, { useState } from "react";
import "./App.css";

function Form() {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

    

  function handleEmailChange(event) {
    setEmail(event.target.value);
    if (!event.target.validity.valid) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
    if (event.target.value.length < 8) {
      setPasswordError("Password should be at least 8 characters");
    } else {
      setPasswordError("");
    }
  }

  function handleConfirmPasswordChange(event) {
    setConfirmPassword(event.target.value);
    if (event.target.value !== password) {
      setConfirmPasswordError("Passwords do not match");
    } else {
      setConfirmPasswordError("");
    }
  }
 const handleSubmit = (event) => {
  event.preventDefault();
  if (!fullname || !email || !password || !confirmPassword) {
    setErrorMessage("Error: All the fields are mandatory");
  } else if (password !== confirmPassword) {
    setErrorMessage("Passwords do not match");
  } else {
    setSuccessMessage("Successfully Signed Up!");
   
  }
};

return (
  <div className="container">
  <h1 className="heading">Signup</h1>
  <form className="form" onSubmit={handleSubmit}>

    <div>
      <input type="text"value={fullname} placeholder="Full Name" onChange={(event) => setFullName(event.target.value)}
      />
    </div>
    <div>
      <input type="email" value={email} placeholder="Email" onChange={(event) => setEmail(event.target.value)}/>
    </div>
    <div>
      <input type="password" value={password} placeholder="Password" onChange={(event) => setPassword(event.target.value)}/>
    </div>
    <div>
      <input type="password" value={confirmPassword} placeholder="Confirm Password" onChange={(event) => setConfirmPassword(event.target.value)}/>
    </div>
    {errorMessage && <div className="error"> {errorMessage}</div>}
    {successMessage && <div className="success">{successMessage}</div>}
    <button id="button" type="submit">Signup</button>
  </form>
  </div>
);
}

export default Form;