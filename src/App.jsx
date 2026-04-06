import React from 'react'

const App = () => {
  const name = "suman";
  const num =20;
  const person = {
    name: 'Ravi',
    gamil: 'ravikurmi8313@gmail.com'
  }
  return (
    <div>
      <h1>How are you</h1>
      <h1>{2+5}</h1>
      <h1>{5*10}</h1>
      <h1>Name = {name }</h1>
      <h2>{num}</h2>
      <h3> Name = {person.name}</h3>
      <h3>Gmail = {person.gamil}</h3>


    </div>
    
  )
}

export default App