import { Button } from "bootstrap";
import { useState } from "react";
import ButtonBar from "./buttonBar";
import Header from "./header";
import Input from "./Input";
import ListItem from "./listItem";
import ToDoInput from "./toDoInput";

function ToDoMain() {
  const [items, setItems] = useState([]);
  const [view, setView] = useState("all");
  const [inputValue, setInputValue] = useState("");
  const [count, setCount] = useState(items.length);
  const [done, setDone] = useState([]);

  // whatever is inputed into here is getting saved into inputValue
  function updateInput(event) {
    setInputValue(event.target.value);
    console.log(inputValue);
  }
  // when click add button adding to the input to array of items and updating count
  function handleClick(event) {
    let array = [...items, inputValue];
    setItems(array);
    setCount(array.length);
  }
  
  function filterView(){
  } 
// going to filter out the items that have been clicked on X
  function deleteItem(item){
    // console.log('deleteItem')
    // copy of array
    let newArray = [...items];
    newArray.splice(item,1)
    setItems(newArray);
  }

  return (
    <div>
      {/* header - To Do List */}
      <Header />
      <input type="text" placeholder="Tasks" onChange={updateInput} />
      <button onClick={handleClick}>Add Task</button>
      <ul>
        {items.map((item) => (
          <li key={item}>
            <input type="checkbox"/>
            {item}
            <button onClick={deleteItem}> X </button>
          </li>
            
        ))}
      </ul>
      {count}
      {/* all/active/completed */}
      {/* <ButtonBar setView={setView}/> */}
      <button onClick={() => setView("all")}> All</button>
      {/* when clicked on will on show items that haven't been completed*/}
      <button onClick={() => setView("active")}> Active</button>
      {/* button needs to be connect to listItem... when ListItem button clicked will only generate complete tasks */}
      <button onClick={() => setView("completed")}>Completed</button>
    </div>
  );
}


export default ToDoMain;
