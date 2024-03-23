import { useState } from "react"
import { AddTaskApp } from "./AddTaskApp"
export const TodoListApp = () => {
  const tasks = [
    {
      id:1,
      description: "Tarea de ejemplo 1",
      status: false
    },
    {
      id:2,
      description: "Tarea de ejemplo 2",
      status: false
    },
    {
      id:3,
      description: "Tarea de ejemplo 3",
      status: true
    },
    {
      id:4,
      description: "Tarea de ejemplo 4",
      status: false
    },
    {
      id:5,
      description: "Tarea de ejemplo 5",
      status: false
    },
  ]

  const [tasksList, setTaskList] = useState(tasks)

  const AddTaskToList = (description) => {
    let newTask = {
      id: tasksList.length + 1,
      description: description,
      status: false
    }
    setTaskList([...tasksList,newTask])
  }

  const onChangeStatus = (event,task) => {
    let actualTasks = [...tasksList]
    actualTasks.forEach((element,index) => {
      if(task.id == element.id){
        actualTasks[index].status =  !actualTasks[index].status
      }
    });
    setTaskList([...actualTasks])
  }
  return (
    <>
      <div className="container d-flex justify-content-center flex-column">
        <div className="row m-3">
          <div className="col d-flex justify-content-center">
            <h1 className="text-primary">
              Listado de Tareas
            </h1>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-sm-6">
            <ol>
              { tasksList.map(task => <li className="m-2" key={task.id}>{task.description} <span onClick={(event) =>{onChangeStatus(event,task)}}> { task.status ? `✅` : `⛔` } </span></li>) }
            </ol>
          </div>
        </div>
        <AddTaskApp addTaskToList={AddTaskToList}/>
        
      </div>
    </>
  )
}
