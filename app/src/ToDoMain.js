import { Button } from "bootstrap";
import { useState } from "react";
import ButtonBar from "./buttonBar";
import Header from "./header";
import ListItem from "./listItem";
import ToDoInput from "./toDoInput";

function ToDoMain() {
  const [items, setItems] = useState([])
  console.log(items);
  const [view, setView] = useState('all')
  // console.log("View", view);
  return (
    <div>
      {/* header - To Do List */}
      {/* <Header /> */}

      {/* toDoList - input bar with button */}
      <ToDoInput setItems={setItems} />

      {/* list that will render with all the items */}
      {/* <ListItem items={items} /> */}

      {/* all/active/completed */}
      <ButtonBar setView={setView}/>


    </div>
  );
}

export default ToDoMain;

// Header

// toDoList - input bar with button

// ListItem - items that 

// ButtonBar -- all/active/completed
