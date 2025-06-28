import React from "react";

// Child is memoized, it will only re-render if props change
const Child = React.memo(({ onClick }) => {
  console.log("👶 Child Rendered");
  return <button onClick={onClick}>Click Me</button>;
});

export default function App() {
  const [count, setCount] = React.useState(0);

  // Function recreated on every render
  const handleClick = React.useCallback(() => {
    console.log("Button clicked");
  }, []);

  console.log("🏠 Parent Rendered");

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount((c) => c + 1)}>Increment Count</button>
      <Child onClick={handleClick} />
    </div>
  );
}
