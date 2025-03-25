
import React, { useState } from 'react'
import {useSelector, useDispatch } from 'react-redux';
import { addTodo } from './todoSlice';



export default function Form(){
const [value, setValue] = useState('');
const dispatch =  useDispatch();
const todos = useSelector((state)=>state.todos)
console.log(todos);

function handleSubmit(event){
    event.preventDefault();

    if(!value.trim()) return
    dispatch(addTodo({
        title:value,
    }))
    setValue('');

}

    return(
        <form className='todo' onSubmit={handleSubmit}>
            <h1 >My ToDo List</h1>
            <span className='input-form'>
            <input
            type='text'
            value = {value}
            placeholder='add to do'
            onChange={(e)=>setValue(e.target.value)}
            />
            <button type='submit'>submit</button>

            </span>
          
        </form>
    )
}