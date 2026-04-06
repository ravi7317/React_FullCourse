import React from 'react'
import Product from './component/Product'

// const App = () => {
//   const name = "suman";
//   const num =20;
//   const person = {
//     name: 'Ravi',
//     gamil: 'ravikurmi8313@gmail.com'
//   }
//   return (
//     <div>
//       <h1>How are you</h1>
//       <h1>{2+5}</h1>
//       <h1>{5*10}</h1>
//       <h1>Name = {name }</h1>
//       <h2>{num}</h2>
//       <h3> Name = {person.name}</h3>
//       <h3>Gmail = {person.gamil}</h3>


//     </div>
    
//   )
// }
const App = () =>{
  const obj = {
    ram:'4gb',
    rom:'128gb',
    chip:'intel i-9'
  }
  return (
    <>
    <Product name="iphone-16" price={70000} color="blue" data ={obj}/>
    <Product name="iphone-17" price={80000} color="blue" data = {obj}/>
  </>
  )
}

export default App;