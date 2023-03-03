import { useState } from "react";
import Header from "./header";
import "./style.css";

function ToDoMain() {
  const [items, setItems] = useState([]);
  const [view, setView] = useState("all");
  const [inputValue, setInputValue] = useState("");
  const [count, setCount] = useState(items.length);

  // whatever is inputed into here is getting saved into inputValue
  function updateInput(event) {
    setInputValue(event.target.value);
    console.log(inputValue);
  }
  // when click add button adding to the input to array of items and updating count
  function handleClick(event) {
    let array = [
      ...items,
      { text: inputValue, status: "active", id: Date.now() },
    ];
    setItems(array);
    setCount(array.length);
  }
  // filter through views
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
  function changeStatus(event, selectedId) {
    console.log(event.target.checked);
    let newItems = items.map((item) => {
      // loop through items(.map) if current items id = selected id completed else leave it alone
      if (item.id === selectedId) {
        return {
          ...item,
          status: event.target.checked ? "completed" : "active",
        };
      } else {
        return item;
      }
    });
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
            <button style={{ borderRadius: 10 }} onClick={handleClick}>
              Add Task
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
                      type="checkbox"
                      style={{
                        transform: "scale(2)",
                      }}
                      checked={item.status === "completed"}
                      onChange={(e) => changeStatus(e, item.id)}
                    />{" "}
                    &nbsp;
                    {item.text} &nbsp;&nbsp;&nbsp;&nbsp;
                    <button style={{ borderRadius: 10 }} onClick={deleteItem}>
                      {" "}
                      X{" "}
                    </button>{" "}
                    &nbsp;
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-sm-4">
              {count}&nbsp;&nbsp;&nbsp;
              {/* all/active/completed */}
              {/* <ButtonBar setView={setView}/> */}
              <button
                style={{ borderRadius: 10 }}
                onClick={() => setView("all")}
              >
                {" "}
                All
              </button>{" "}
              &nbsp;
              {/* when clicked on will on show items that haven't been completed*/}
              <button
                style={{ borderRadius: 10 }}
                onClick={() => setView("active")}
              >
                {" "}
                Active
              </button>{" "}
              &nbsp;
              {/* button needs to be connect to listItem... when ListItem button clicked will only generate complete tasks */}
              <button
                style={{ borderRadius: 10 }}
                onClick={() => setView("completed")}
              >
                Completed
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToDoMain;
