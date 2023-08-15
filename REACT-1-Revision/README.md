
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