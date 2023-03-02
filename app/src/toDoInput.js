import { useState } from "react";

function ToDoInput({setItems}) {
  const [inputValue, setInputValue] = useState('');

  function handleInputChange(event){
    console.log(handleInputChange);
    setInputValue(event.target.value);
  }

  function handleClick(event){
  // use the inputValue from state to add a item to the listItem folder
  setItems([ ...item, inputValue]); 
  }

<>
  <input type="text" placeholder="Tasks" onChange={handleInputChange}/>
  <button onClick={handleClick}> ADD  TASK</button>
  </>
  
  }
  
  export default ToDoInput;

//   button 
//   input line
// will output items
// input to do item in input line
// click button
// send info to listItem <ul> <li><li/>