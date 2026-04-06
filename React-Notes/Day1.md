# 1. Why React
## 1.  High Demand for jobs:
- Number job opportunity for react Develpoer.
## 2. Backend by Facebook:-
- Reliable and well supported.
## 3. Component-Based:-
- Build reusable parts for easy.
## 4. Virtual Dom:-
- Fast update and randrig.
## 5. JSX:-
- Html code like javaScript.
## 6. Clear Syntex:-
- Simple & understandable code.
## 7. React Native:-
- build mobile app with React
## 8. Server-Side Randering:-
- Improve Speed & SEO
## 9. Flexiable & Scalable:-
- suitable for all project size.


# 2. What is React.JS
 -  React.js is a popular javaScript library framework used for building user interfaces, especially for simgle - page application

 -  It Allow developers to create reuable comonents, manage the state of application efficiently.
 -  React has Strong Echosystem provides many tools & community support.
 -  React is Develpoed & maintain by Facebook.
  -  react also offer mobile app development through react native

# 3. Installation Step:-
- Install Node.js & npm (node package Manager)
- Create A folder **(My _React_App)**
- Navigate to folder **{cd My_React_App}** & Open terminal
- Run Command:- **npm create vite@latest**
- Type "." & enter 
- Choose a framework:- **React**
- Select a vaient:- **JavaScript**
- npm install or npm i
- Then Run **npm run dev**
- Open any browser & run :- ***http://localhost:5173***

# 4. JSX;-
- Jsx stand for JavaScript XML{***Extensible Markup Language***}. It is a syntax extension for JavaScript that allow you to write **HTML**-like code directly within JavaScript

## 1. HTML-Like Syntax:-
```jsx
const element = <h1>Hello, JSX!</h1>;
```
## 2. Embedding Expression:- 
 - It allow embedding javaScript Expression within curly bracket **{}**. This enable dynamic content rendering & logic eithin jsx.
 ```jsx
 const name = 'Suman';
 const element = <h1> Hello, {name} !</h1>
 ```
 ## 3. Babel Compilation
 - JSX is not directly understand by browser so it need to be tanspiled into regular javaScript using babel which convert JSX into **React.createElement()** calls.
 ```jsx
 const element = <h1>Hello, Suman!</h1>;
 ```
 - Transpiled by BAbel into:-
 - **JavaScript:-**
 ```js
 const element = React.createElement('h1',null,'Hello,Suman!');
 ```
 ## 4. Fragment
 - A react fragment is a built-in component taht allow you to group multiple child element without adding an extra node to the DOM this is essential because React component mus return single root element

 # Compnent Creation & Call:-
 ### 1. Component:-
 - In React.js Component are the building block that allow  you to split the UI into independent & resuable pices.
 **OR**
 - A component in React is a JavaSript Function or class that optionally accept props & return a React element that describe how a section at the UI should appear

 ### 2. Type of Components:- 
 ```jsx
 imprt React from 'react';
 const Creating = ()={
    return <h1>Hello, Suman! </h1>;
    }```

  - Export default Greeting
  - Class Component (Or older style)
  ```jsx
  import React{component} from 'react';
  class Greeting extends component{
    render(){return <h1> Hello, Suman}</h1>
  }
  Export default Greeting;
  ```

