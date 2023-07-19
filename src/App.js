import './App.css';
import {useReducer,} from 'react'
import InsertData from './TodoList/InsertData';
import Todolist from './TodoList/Todolist';
const reducer=(state,action)=>{
  switch(action.type){
    case 'ADD':
      return [...state,action.payload];
    case 'Down':
      const i=action.payload;
      const currItem=state[i];
      const nextState = [...state];
      nextState[i]=nextState[i+1];
      nextState[i+1]=currItem;
      return nextState;
    case 'Up':
      const upI=action.payload;
      const upCurrItem=state[upI];
      const upNextState = [...state];
      upNextState[upI]=upNextState[upI-1];
      upNextState[upI-1]=upCurrItem;
      return upNextState;
    case 'DEL':
      const newItems = state.filter((_, i) => i !== action.payload);
      return newItems;
    default:
      return state;
  }
};
function App(){
  const [items,dispatch]=useReducer(reducer,[]);

  return (
    <div className="App">
     <InsertData dispatch={dispatch}></InsertData>
     <Todolist Items={items} dispatch={dispatch}></Todolist>
    </div>
  );
}
export default App;
