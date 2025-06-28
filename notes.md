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

React strict mode
    invokes certain functions (like render and effects) twice to help you detect bugs
    this effect useEffect, useMemo, useCallback, Component render functions

