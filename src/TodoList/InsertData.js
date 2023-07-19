import './InsertData.css'
import {useState} from 'react'
const  InsertData=({dispatch,getCount})=>{
    const [newInput,setInput]=useState("");
    const [inputVal,setInputval]=useState('')


    const changeHandle=(e)=>{
        setInputval(e.target.value);
        setInput(e.target.value);
    }
    const clickHandle=(e)=>{
        e.preventDefault();
        if(inputVal==='')
            console.log("empty");
        else{
            dispatch({type:'ADD', payload:newInput});
            setInputval('');
        } 
    }
    return(
        <div>
            <div className="Header" >Todo List</div>
            <form>
                <input type="text" className="TodoItem" onChange={changeHandle} value={inputVal}></input>
                <button className="TodoItem" id="TodoItemButton" onClick={clickHandle} >Add Item</button>
            </form>
        </div>
    );
}
export default InsertData;