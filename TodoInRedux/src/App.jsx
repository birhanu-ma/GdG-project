import React from 'react';
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import store from './Redux/store';
import Form from './Redux/addTodoForm'
import TodoList from './Redux/TodoList';
import './index.css'
import CompletedTodo from './CompletedTodo'

const root = ReactDOM.createRoot(document.getElementById('root'));

function App(){
  return(
    <div className='container'>
      <Form/>
      <TodoList/>
      <CompletedTodo/>
    </div>
  
  )
}

root.render(
  <>
  <Provider store = {store}>
    <App/>
  </Provider>  
  </>

)

