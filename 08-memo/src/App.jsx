import React from 'react';

// 🚸 Child component
const Child1 = ({ name }) => {
  console.log("👶 Child Rendered");
  return <h2>Child1: {name}</h2>;
};
// 🚸 Child component
const Child2 = React.memo(({ name }) => {
  console.log("👶 Memo Child Rendered");
  return <h2>Child2: {name}</h2>;
});


// 🏠 Parent component
export default function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <Child1 name="Saransh" />
      <Child2 name="Saransh" />
    </div>
  );
}
