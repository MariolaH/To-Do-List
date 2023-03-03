import { useState } from "react";
import Header from "./header";
import "./style.css";

function ToDoMain() {
  // adds task items to array
  const [items, setItems] = useState([]);
  // setView initally set to all when page is first rendered
  const [view, setView] = useState("all");
  const [inputValue, setInputValue] = useState("");
  // counts how many items have been added
  const [count, setCount] = useState(items.length);

  // task that is inputed updates my setInputValue string
  function updateInput(event) {
    setInputValue(event.target.value);
    console.log(inputValue);
  }
  // when the add task button is clicked going to add to the array (setItems) of items and update count
  function handleClick(event) {
    let array = [
      ...items,
      { text: inputValue, status: "active", id: Date.now() },
    ];
    setItems(array);
    setCount(array.length);
  }
  // filter through tasks and display tasks that are either all, active or completed
  let displayView = items;
  if (view === "active") {
    displayView = items.filter((items) => items.status === "active");
  } else if (view === "completed") {
    displayView = items.filter((items) => items.status === "completed");
  } else if (view === "all") {
    displayView = items;
  }
  console.log(view);

  // going to filter out the items that have been clicked on X
  function deleteItem(item) {
    // console.log('deleteItem')
    // copy of array
    let newArray = [...items];
    newArray.splice(item, 1);
    setItems(newArray);
  }
  // when checkbox is clicked items that are either complete or active appear
  function changeStatus(event, selectedId) {
    console.log(event.target.checked);
    // making a new array based on items array
    let newItems = items.map((item) => {
      // loop through each item to see if its been selected)
      if (item.id === selectedId) {
        return {
          ...item,
          // condition ? expression to execute if the condition is truthy : expression to execute if the condition is falsy
          // if has been checked... mark completed else active
          status: event.target.checked ? "completed" : "active",
        };
      } else {
        return item;
      }
    });
    // reset items array to new array
    setItems(newItems);
  }

  return (
    <div className="frame">
      <div class="container py-5 h-100">
        <div
          class="row d-flex justify-content-center align-items-center py-5"
          style={{ backgroundColor: "#8FBC8F" }}
        >
          <div class="col-sm-4">
            {/* header - To Do List */}
            <Header />
            <input
              style={{ marginRight: 10, borderRadius: 5, borderStyle: "solid" }}
              type="text"
              placeholder="Tasks"
              onChange={updateInput}
            />
            <button
              style={{ borderRadius: 10 }}
              className="custom-cursor"
              onClick={handleClick}
            >
              {" "}
              Add Task{" "}
            </button>
          </div>
          <div
            class="row d-flex justify-content-center align-items-center py-5"
            style={{ backgroundColor: "#8FBC8F" }}
          >
            <div class="col-lg-3">
              <ul>
                {displayView.map((item) => (
                  <li key={item.id}>
                    <input
                      className="align-bottom"
                      type="checkbox"
                      style={{ transform: "scale(2)" }}
                      checked={item.status === "completed"}
                      onChange={(e) => changeStatus(e, item.id)}
                    />{" "}
                    &nbsp;
                    {item.text} &nbsp;&nbsp;&nbsp;&nbsp;
                    <button
                      style={{ borderRadius: 10 }}
                      className="custom-cursor"
                      onClick={deleteItem}
                    >
                      {" "}
                      Delete Item{" "}
                    </button>{" "}
                    &nbsp;{" "}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-sm-4">
              {count}&nbsp;&nbsp;&nbsp;
              {/* all/active/completed */}
              <button
                className="custom-cursor"
                style={{ borderRadius: 10 }}
                onClick={() => setView("all")}
              >
                {" "}
                All Tasks{" "}
              </button>{" "}
              &nbsp;
              {/* when clicked on will on show items that are active*/}
              <button
                className="custom-cursor"
                style={{ borderRadius: 10 }}
                onClick={() => setView("active")}
              >
                {" "}
                Active Tasks{" "}
              </button>{" "}
              &nbsp;
              {/* shows items that have only been completed */}
              <button
                className="custom-cursor"
                style={{ borderRadius: 10 }}
                onClick={() => setView("completed")}
              >
                {" "}
                Completed Tasks
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToDoMain;
