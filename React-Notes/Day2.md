# Props:-
- Props is a prototype of component which can be passsed from one component to another or other component
- It is way to transfer data from one component to another component 

**NOTES:-**
1. We can only pass props from parent component to child component.
2. To recive props(Data) from child component to parent we have to create funtion in parent & pass as a props in child.
 ## **Parent Component**:-
  - Parent Component is a Component where the another component rander
 ## **Child Component**:-
  - let say we have "Person.jsx" & Person.jsx is rander inside "App.jsx" then person.jsx is known as child component

**Note:** With the help of props, we can pass:

1. **Variables** → number, decimal, string, character  
2. **Objects** → key-value pairs  
3. **Functions** → event handlers or logic  
4. **Arrays / Strings** → any type of data  
5. **State** → dynamic data from parent component  
  
# Code Implementation
## App,jsx:- {**Parent Component**}
```jsx
import React from "React";
import Person form "./Person";
const App = ()=>{
    return(
        <>
        <Person name = "Suman" age= {24} salary={10000}/>
        <Person name= "Superman" age = {100} Salary={500}/>
        <Person name = "spiderman" age= {10} Salary= {100}/>
        </>
    )
}
export default App
``` 
/* These are the props {Property}

## Person.jsx:-{**Child Component**}
```jsx
import React from "react"; 
  const Person = (props)=>{
    return(
        <>
        <h1> My Name = {props.name}</h1>
        <h2> My age = {props.age} </h2>
        <h3> My Salary = {props.salary}</h3>
        </>
    )
}
export default Person;
```

# output
 |My Name = Suman | My Name = Superman | My Name = spiderman
 :---  :---: ---:
 |My Age = 24|My Age = 100 | My Age = 10
 :--- :---: ---:
 |My Salary = 10000 | My Salary = 500 | My Salary = 100
 :--- :---: ---: