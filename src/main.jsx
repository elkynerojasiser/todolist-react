import React from 'react'
import ReactDOM from 'react-dom/client'
import { TodoListApp } from './components/TodoListApp'
import { CounterApp } from './components/CounterApp'
import "./index.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <CounterApp/>
    <TodoListApp/>
  </>
)
