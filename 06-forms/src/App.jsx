import React, { useRef } from "react";

function App() {
  const alertPlease= (x) => alert(x)
  const passRef = useRef()

  function handleSubmit(event) {
    event.preventDefault();
    // console.log(event.target);     will print html elements form
    // console.dir(event.target);     will print form as objects
    alertPlease(event.target.elements.username.value)
    alertPlease(passRef.current.value)
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">
            <input id="username" type="text"></input>
          </label>
          <label>
            <input ref={passRef} type="text"></input>
          </label>
          <button type="submit">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default App;
