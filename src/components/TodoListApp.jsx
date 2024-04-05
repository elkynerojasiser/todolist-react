import { useState, useEffect } from "react";
import { AddTaskApp } from "./AddTaskApp";
export const TodoListApp = () => {
  /*const tasks = [
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
  ]*/

  const [tasksList, setTaskList] = useState([]);
  const [userId, setUserId] = useState(1);
  const AddTaskToList = (description) => {
    let newTask = {
      id: tasksList.length + 1,
      title: description,
      completed: false,
    };
    setTaskList([...tasksList, newTask]);
  };

  const onChangeStatus = (event, task) => {
    let actualTasks = [...tasksList];
    actualTasks.forEach((element, index) => {
      if (task.id == element.id) {
        actualTasks[index].completed = !actualTasks[index].completed;
      }
    })
    setTaskList([...actualTasks])
  }

  const fetchTasks = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos?userId=${userId}`
      );
      const data = await response.json();
      console.log(data);
      setTaskList([...data]);
    } catch (error) {
      console.log(error);
    }
  };
  const onChangeUser = () => {
    setUserId(userId + 1)
  }
  useEffect(() => {
    fetchTasks()
  }, [
    userId
  ]);
  return (
    <>
      <div className="container d-flex justify-content-center flex-column">
        <div className="row m-3">
          <div className="col d-flex justify-content-center">
            <h1 className="text-primary">Listado de Tareas</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <p className="mr-3">USERID: {userId}</p>
            <button onClick={onChangeUser} className="btn btn-success">Cambiar usuario</button>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-sm-6">
            <ol>
              {tasksList.map((task) => (
                <li className="m-2" key={task.id}>
                  {task.title}{" "}
                  <span
                    onClick={(event) => {
                      onChangeStatus(event, task);
                    }}
                  >
                    {" "}
                    {task.completed ? `✅` : `⛔`}{" "}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
        <AddTaskApp addTaskToList={AddTaskToList} />
      </div>
    </>
  );
};
