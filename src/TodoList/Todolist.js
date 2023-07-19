import './Todolist.css'
import { useState ,useEffect} from 'react';

function Todolist({Items,dispatch}){
    const HandleUp=(index)=>{
        if (index===0) {
            console.log(index,Items.length);
          }
          else{
            dispatch({type:'Up',payload:index});
        } 
  }
  const HandleDown=(index)=>{
    if ((index===0 && Items.length===1) || index===Items.length-1) {
        console.log(index,Items.length);
      }
      else{
        dispatch({type:'Down',payload:index});
      } 
  }

  
  const HandleDelete=(index)=>{ 
    dispatch({type:'DEL',payload:index});
  }
  const [selectedCount,setSelectedCount]=useState(0);
  const [selectedIndex, setselectedIndex] = useState([]);
  const [count,setCount]=useState(0);
    useEffect(() => {
      setCount(Items.length);
    }, [count,Items]);

  const HandleSelect=(index)=>{
    let updatedSelectedIndex=[...selectedIndex];
    if (updatedSelectedIndex.includes(index)) {
      updatedSelectedIndex=updatedSelectedIndex.filter((item)=>item!==index);
      setSelectedCount(selectedCount-1);
    
    } else {
      updatedSelectedIndex.push(index);
      setSelectedCount(selectedCount+1);  setCount(count-1);
    }
    setselectedIndex(updatedSelectedIndex);
  }
  const notSelectedCount = Items.length - selectedCount;
return (
     <>
     <div id="NumberDiv">Completed Items: {selectedCount}/{notSelectedCount}</div>
    <div>
    {Items.map((Items,index)=>(
        <div className="InsertData">
        <div id="TodoData" key={index} onClick={()=>HandleSelect(index)} className={selectedIndex.includes(index)?'selected':'Unselected'}>{Items}</div>
            <spam>
                <button className="TodoButton" id="upButton" onClick={()=>HandleUp(index)}>Up</button>
                <button className="TodoButton" id="downButton" onClick={()=>HandleDown(index)}>Down</button>
                <button className="TodoButton" id="deleteButton"onClick={()=>HandleDelete(index)}>Delete</button>
            </spam>
        </div> 
        ))}
        </div>
        </>
    );
  }
  export default Todolist;
    