import React, { useState } from 'react';
import Todoitem from '../todo/Todoitem';

const Todos = () => {
    const [todos, setTodos] = useState([]);

    return (
        <ul>
            <li><Todoitem /></li>
        </ul>
    )
}

export default Todos;
