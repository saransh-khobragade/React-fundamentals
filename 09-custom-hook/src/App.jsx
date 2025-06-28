import React, { useState } from "react";

const useSyncLocalStorageWithState = (key, defaultValue = "") => {
  const [name, setName] = useState(
    () => window.localStorage.getItem(key) || defaultValue //saved call on re-rendering on change events, useState will lazy load this when needed measn first render
  );
  React.useEffect(() => {
    window.localStorage.setItem(key, name);
  }, [name,key]); //whenever name change then call and will ignore re-renders, can help with parent re-renders

  return [name,setName]
};

function App() {
  const [state, setState] = useSyncLocalStorageWithState("name");

  function handleChane(event) {
    //causing re-render on every key down
    setState(event.target.value);
  }
  return (
    <>
      <form>
        <div>
          <label>Username</label>
          <input type="text" value={state} onChange={handleChane}></input>
        </div>
      </form>
    </>
  );
}

export default App;
