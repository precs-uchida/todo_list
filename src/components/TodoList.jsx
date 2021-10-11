import React from 'react';
import TodoItem from './TodoItem'

const TodoList = (props) => {
    const {todos, removeClick} = props;
    
    return(
        <ul className="list-group list-group-flush">
            {todos.map((todo, index) => (
                <TodoItem 
                    key={index} 
                    todo={todo} 
                    removeClick={() => removeClick(index)}
                />
            ))}
        </ul>
    );
}

export default TodoList;