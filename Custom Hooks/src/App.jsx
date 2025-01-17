import { useEffect, useState } from 'react'
import axios from 'axios'

import './App.css'

function useTodos(n){
  const [todos,setTodos] = useState([]);
  const [loading,setLoading] = useState(true);

  useEffect( ()=>{
    const value=setInterval(()=>{
      axios.get("https://sum-server.100xdevs.com/todos")
    .then(res =>
      {
        setTodos(res.data.todos)
        setLoading(false)
      }
    )

    },n*1000)
    axios.get("https://sum-server.100xdevs.com/todos")
    .then(res =>
      {
        setTodos(res.data.todos)
        setLoading(false)
      }
    )

    return ()=>{
      clearInterval(value)
    }
    
  },[n])

  return {todos,loading}
}

function App() {
  const {todos,loading} = useTodos(5);
  if(loading){
    return <div>Loading... </div>
  }

  return (
    <div>
      {todos.map(todo => <Todo todo={todo}/>)}
    </div>
  )

}
function Todo({todo}){
  return <>
  <div>
    <p>{todo.title}</p>
    <br></br>
    <p>{todo.description}</p>
  </div>
  </>
}

export default App
