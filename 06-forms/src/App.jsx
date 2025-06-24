import React, { useRef, useState } from "react";

function App() {
  const alertPlease = (x) => alert(x);
  const passRef = useRef();
  const [userName,setUserName] = useState('')
  const [error, setError] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    // console.log(event.target);     will print html elements form
    // console.dir(event.target);     will print form as objects
    alertPlease(event.target.elements.username.value);
    alertPlease(passRef.current.value);
  }
  function handleUserName(event) {
    const { value } = event.target;
    let RegEx = /^[a-z0-9]+$/i; 
    const isAlphanumeric = RegEx.test(value);
    setError(isAlphanumeric ? null : "Only alphanumric is allowed");
    setUserName(value.toLowerCase())
  }
  function handlePassword(event) {
    const { value } = event.target;
    let RegEx = /^[a-z0-9]+$/i; 
    const isAlphanumeric = RegEx.test(value);
    setError(isAlphanumeric ? null : "Only alphanumric is allowed");
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" onChange={handleUserName} value={userName}></input>
        </div>
        <div>
          <label>Password</label>
          <input ref={passRef} type="text" onChange={handlePassword}></input>
        </div>
        <div style={{ color: "red" }}>{error}</div>
        <button type="submit" disabled={Boolean(error)}>
          Submit
        </button>
      </form>
    </>
  );
}

export default App;
