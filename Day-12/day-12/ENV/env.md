# Enviourment variables in React
## In general we have three types of enviourment in any project work.The base URL keeps changing as per enviourment in which our application is but the endpoint remains same.

- Development enviourment

    - It's a phse where we are initially building our project. where it's running in our local system and URL be like : localhost:3000/Endpoint 

- Test enviourment

    - When it comes to testing phase then we have different base url to test application , like http://123.123.12.12:3000/Endpoint

- Production enviourment

    - When it comes to production env where it's ready to use then bse url could be like : https://example.com/Endpoint

##### That's why we have to maintain the base url which is frequently changes as per enviourment changes so we can store it in .env file and we can access it anywhere without manually updating in each page in our application where we are using it.

##### We have to follow certain naming convention to use env variables : 

##### We can access env variable using this command : 
-   process.env

    - If we Want to know about our current enviourment details then we can use this command : 
    
        - process.env.NODE_ENV

-   REACT_APP_ 

    - every env variable should start with this prefix.