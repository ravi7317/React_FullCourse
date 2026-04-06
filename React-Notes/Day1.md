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