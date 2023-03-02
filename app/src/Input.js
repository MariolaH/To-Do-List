function Input(/*setInputValue*/) {
    return (
        // function handleInputChange(event){
        //     setInputValue(event.target.value);
        //   }
        
        //   function handleClick(event){
          // use the inputValue from state to add a item to the listItem folder
        //   setItems([ ...item, inputValue]); 
        //   }

 <>    
<input type="text" placeholder="Tasks"/>      
  <button>Add Task</button>
  </>
  /* <>
  <input type="text" placeholder="Tasks" onChange={handleInputChange}/>
  <button onClick={handleClick}> ADD  TASK</button>
  </> */
    );
}

  export default Input;
