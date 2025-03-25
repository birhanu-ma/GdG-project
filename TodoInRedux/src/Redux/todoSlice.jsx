
import {createSlice} from '@reduxjs/toolkit';
const todoSlice = createSlice({
    name:'todos',
    initialState:[
        {id:1,title:'todo1', completed:false},
        {id:2, title:'todo2', completed:false},
        {id:3, title:'todo3', completed:true},
        ],
    reducers:{
        addTodo:(state, action)=>{
           const newTodo = {
                id:Date.now(),
                title:action.payload.title,
                completed:false
            };
            state.push(newTodo);   
        },
        toggleCompleted:(state, action)=>{
            return state.map((todo)=>(
                todo.id===action.payload.id?
                {...todo, completed:action.payload.completed}: todo
            ))
        },
        deleteTodo:(state, action)=>{
            return state.filter((todo)=> todo.id!==action.payload.id )

        },
    

    },
   
});

export const {deleteTodo,toggleCompleted, addTodo} = todoSlice.actions;
export default todoSlice.reducer;