
# Revise Concepts

# useEffect

#### Without []
-   Whenever component renders it will be executed.
-   Whenever component re-renders it will be executed.
    - when state change happens
    - when props changes

#### with []
-   Once executed when the component mounted first time.

#### with dependancy provided [dependancy]
-    when component mounted .
-   executed every time when dependancy value [state] ***{must}*** changes.

#### with cleanup function

-   with some dependancy [state]. mount phase and when state changes then both re render and clean up works.
-    without dependancy run only once and cleanup run only when unmounting phase.

#### Higher Order Component : 
-   A component which takes another component as parameter.




## React.StrictMode: What and Why

-   React.StrictMode is a tool in React that helps you find and fix potential problems in your app during development.
Benefits:

-    It highlights potential issues and helps you write better React code.
-   It's like a safety net that warns you about outdated practices and possible bugs.
    Example:

    Suppose you're building a website with React:

    You want to make sure your code is clean and efficient.

    By wrapping your main app code in <React.StrictMode>, like this:


-   React.StrictMode will:

    - Warn you about using deprecated or unsafe features.
    - Highlight potential side effects that could cause problems.
    - Help you spot issues with how your components render.
    - For instance, if you accidentally change some data while your component is rendering, it'll warn you to avoid unexpected behavior.

    It encourages you to use modern practices and update your code for a smoother user experience.


# State Management Tools : 
-   useState
-   useReducer
-   useRef


### useState

-    we have mainly 3 ways we can use it.
-   Syntax : 
-   const [state,setstate] = useState(initialstate)
-   const value = useState(initialstate)
    - const state = value[0]
    - const setstate = value[1]

-   We can pass initial state in many ways..
    - primitive value
    - Non primitive value
    - function as well..*** { We have to return some value if we are passing a function as initial state. but calling the function is optional as even if we pass the reference only then still react will execute it and replace the return value as initial value there.}**


## useReducer

-   We can pass anything in ***{dispatch}*** function. it's just convention that we follow object way, but we can send anything in it.
-   reducer take two parameter: first one is data value and second one is whatever that is being sent by dispatcher.
-   final value of data depend upon what we are returning from reducer.





## useRef

-   It's a data management hook. It doesn't triggers re-render effect on UI. it's mainly used to store data for useablity.