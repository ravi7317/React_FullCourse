import React from 'react'
import Product from './component/Product'
import Item from './component/Item'

const App = () => {
  const obj = {
    ram: '4gb',
    rom: '128gb',
    chip: 'intel i-9'
  }

  return (
    <div className="container">
      <Product name="iphone-16" price={70000} color="blue" data={obj} />
      <Product name="iphone-17" price={80000} color="blue" data={{}} />
      <Item />
    </div>
  )
}

export default App;