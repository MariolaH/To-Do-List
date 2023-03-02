function ListItem({items}) {
    return (
     
  <ul>
    {items.map(item => <li key={item}>{item}</li>)}

    {/* button if complete=true then add to complete list... take off active list */}
    <button>{/*checkbox*/}</button>
    {/* <toDoInput /> */}
  </ul>
    );
  }
  
  export default ListItem;


  
  /* list that will render with all the items */
//   when items are inputed into toDoInput the items will render in a <ul>
// need to be able to check if item was completed - true= disable item = add to complete items
