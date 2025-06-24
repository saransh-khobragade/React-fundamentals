import React, { useState } from "react";

function App() {
  const [name, setName] = useState(
    () => window.localStorage.getItem("name") || ""   //saved call on re-rendering on change events, useState will lazy load this when needed measn first render
  );

  React.useEffect(() => {
    window.localStorage.setItem("name", name);
  },[name]);    //whenever name change then call and will ignore re-renders, can help with parent re-renders

  function handleChane(event) {
    //causing re-render on every key down
    setName(event.target.value);
  }
  return (
    <>
      <form>
        <div>
          <label>Username</label>
          <input type="text" value={name} onChange={handleChane}></input>
        </div>
      </form>
    </>
  );
}

export default App;
