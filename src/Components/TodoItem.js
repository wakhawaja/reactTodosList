import React from 'react';

export const TodoItem = ({ todo, onDelete }) => {
    return (
        <div className="todo-item ">
            <div className="todo-content">
                <div className="title-container">
                    <h4>{todo.title}</h4>
                    <hr className="title-line" />
                </div>
                <p>{todo.desc}</p>
            </div>
            <button className="delete-button" onClick={()=>{onDelete(todo);}}>Delete</button>
        </div>
    );
};
