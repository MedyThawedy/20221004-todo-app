import './App.css';
import Todos from './components/todos/Todos';
import { useState } from 'react';
//import uuid v4
import { v4 as uuid } from 'uuid';

function App() {

  // State hook - `useState`
  const [newItem, setNewItem] = useState("");
  // An array to store all the items
  const [items, setItems] = useState([]);
  const unique_id = uuid();
  const item_id = unique_id.slice(0, 8)

  // Helper function
  const addItem = () => {
    if (!newItem) {
      alert("Enter an item!");
      return;
    }
    const item = {
      id: item_id,
      value: newItem
    };
    console.log(item_id);
    console.log(newItem);

    setItems(oldList => [...oldList, item]);
    console.log(items);

  }

  function deleteItem(id) {
    console.log('id = ', id);
    // Check the old array if any element has this id and put it away and save all value except items with that id
    const newArray = items.filter(item => item.id !== id);
    setItems(newArray);
  }
  function changeBgColor(id) {
    console.log(id);
    document.getElementById(id).style.backgroundColor = "Green";
  }

  return (
    <div className='clsTodo'>
      {/** 1. Header */}
      <h1>Todo List App</h1>
      {/** 2. Input (input element and a button)*/}
      <div>
        <input id="idInput" type="text" placeholder='Add an item!'
          value={newItem}
          onChange={e => setNewItem(e.target.value)} />
        <button onClick={addItem}>Add new task</button>
      </div>
      {/* * 3. List of items ul list with li inside */}
      <div>
        <ul>
          {
            items.map((todoitem) => {
              return (
                <div>
                  <li key={todoitem.id}>
                    <input id={"id" + todoitem.id} type="text" value={todoitem.value} disabled></input>
                    <button onClick={() => deleteItem(todoitem.id)}>❌</button>
                    <button onClick={() => changeBgColor("id" + todoitem.id)}>✅</button>
                  </li>
                </div>
              )
            })
          }

        </ul></div>
    </div>
  );
}

export default App;
