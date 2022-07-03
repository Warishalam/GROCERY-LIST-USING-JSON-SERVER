import React from 'react'

function GroceryList({item}) {
  return (
    <div>
        {
            item.map(({id,item})=>(
                 <h1 kye={id}>{item}</h1>
            ))
        }
      
    </div>
  )
}

export default GroceryList
