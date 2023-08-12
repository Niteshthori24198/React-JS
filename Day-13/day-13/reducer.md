## Why we go for useReducer even though we have useState hook available which is doing same thing?

###### When there are multiple stages in project in any component and they are interdependent on each other like  if we make a changes to one state then we have to update the related states accordingly so it becomes more tougher to maintain things as well as the code becomes more tougher to read for others too.

-    We can handle the same in more easy way using useReducer hook.

## useReducer : 

- It will take two parameter inside it.

    - first one is a function : "reducer"

        - this will have access to  [state] and { action } object and return something which will becomes the new state.

        - Action object has a property called : [type:''] which will describe the action.

    - second one is initial state :

        - { loading:true ,
        iserror:false,
        data:[] }   

-   It will return an Array [state , dispatch]   
    - We will call dispatch function whenever we required states to be updated.
    - It will take an object as parameter with key-value pairs as : { type : 'type of action we want to erform' }
    - The dispatch function internally call reducer function and perform the actions and make changes and return new state.