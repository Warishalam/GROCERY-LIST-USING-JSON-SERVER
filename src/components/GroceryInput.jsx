import React, {useState} from 'react'

function GroceryInput({addItem}) {
    const [inputItem,setInputItem]=useState("");
  return (
    <>
    <input type="text" placeholder='Enter Item Name' onChange={(e)=>setInputItem(e.target.value)} value={inputItem}/>
    <button onClick={()=> addItem(inputItem)}>Add Item</button>
      
    </>
  )
}

export default GroceryInput;
