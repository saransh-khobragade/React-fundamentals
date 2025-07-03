Create react app
    npm create vite@latest my-app -- --template react

useRef
    does not cause re-render on change vs useState cause re-render on change
    it can also be used to get values of input

const variable cannot be accessed inside another const var but it can be accessed inside another function

console.log() = will print html
console.dir() - will print html as object

Lazy intializatoin
    useState trigger only when app component render first (use function inside useState)

React lifecycle events
app render start
useState
app render end
useEffect(()=>{})
useEffect(()=>{},[])
useEffect(()=>{},[abc])

useEffect
    it runs after dom elements are ready and renders
    if we return function to useEffect its a clean up functions
    clean up run when unmount / re-render

useCallback
    it prevent function to re-create everytime component re-render

React.memo 
    it prevent function to re-create everytime component re-render if props are not changing, if props change it will re-render.
    if prop is a function,it will re-render because function will re-render because of component re-render,but we can use prevent that using usecallback for prop function.

React strict mode
    invokes certain functions (like render and effects) twice to help you detect bugs
    this effect useEffect, useMemo, useCallback, Component render functions

React.Children.map() ?
React.cloneElement() ? Can be used to add props dyamically
    it can be better use only direct children needs props but useContext would be better otherwise

useContext()

