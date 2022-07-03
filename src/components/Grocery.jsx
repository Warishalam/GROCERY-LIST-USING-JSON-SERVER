
import React ,{useState,useEffect} from 'react'
import GroceryInput from './GroceryInput';
import GroceryList from './GroceryList';

function Grocery() {
    const [item,setItem]=useState([]);
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(false);

    const getItem = () => {
        setLoading(true);
        fetch(`http://localhost:8080/grocery`).then((res)=>{
            res.json();
        }).then((res)=>{
            setItem(res);
        }).catch((err)=>{
            setError(true);
            setItem([]);
        }).finally(()=>{
            setLoading(false);
        });
    }

    useEffect(()=>{
        getItem();
    });
   


    const addItem = (item)=>{
        const payload={
            item
        }
        fetch(`http://localhost:8080/grocery`,{
            method: "POST",
            body : JSON.stringify(payload),
            headers : {
                "content-type" : "application/json"
            }
        }).then((res)=>{
            res.json();
        }).then((res)=>{
            setError(false);
            return getItem;
        }).catch((res)=>{
            setError(true);
            
        }).finally(()=>{
            setLoading(false);
        });
    }
  return (
      loading?<h1>Loading...</h1>:error? <h1>Error...</h1>:
    <div>
        <GroceryInput addItem={addItem}/>
        <GroceryList item={item}/>
      
    </div>
  )
}

export default Grocery
