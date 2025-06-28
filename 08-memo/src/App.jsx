import React from "react";

const Child1 = () => {
  console.log("👶 Child1 Rendered");
  return <button>child1</button>;
};

// Child is memoized, it will only re-render if props change
const Child2 = React.memo(({onClick}) => {
  console.log("👶 Child2 Rendered");
  return <button onClick={onClick}>child2</button>;
});

export default function App() {

  const handleClick = () => {
    console.log("Button clicked");
  };

  console.log("🏠 Parent Rendered");

  return (
    <div>
      <Child1 />
      <Child2 onClick={handleClick} />
    </div>
  );
}
