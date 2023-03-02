function ButtonBar({setView}) {
  return (
   
<>
<button onClick={()=> setView('all') }> All</button>

{/* when clicked on will on show items that haven't been completed*/}
<button onClick={()=> setView('active') }> Active</button>

{/* button needs to be connect to listItem... when ListItem button clicked will only generate complete tasks */}
  <button onClick={()=> setView('completed') }>Completed</button>
  </>
  );
}

export default ButtonBar;


// Buttons (All/Active/Completed)
// need to create 3 buttons
  // -all/active/completed 
  // -all -shows...  EVERYTHING on the to do list active and completed
    // -active -shows... items that need to be completed
    // -complete -shows... items that have been completed already

// <Button text=”All”>
// OnClick Event to update some state somewhere
// Count / Items Left
// Getting a count of the items in the state that are still left to do
// Check All (Should Have)
// Clear Completed button (deletes all to-done)
// Button to complete all (should have)
// Changes all to-dones to to-dos / completed to active
