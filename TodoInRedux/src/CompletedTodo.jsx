

import React from 'react'
import { useSelector } from 'react-redux'

export default function CompletedTodo(){
    const completedTodos = useSelector((state)=>state.todos.filter((todo)=>todo.completed===true));

    return(
        <>
        <h3>total completed items {completedTodos.length}</h3>
        </>
    )
}