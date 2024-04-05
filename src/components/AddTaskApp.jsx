import React from 'react'
import { useState, useEffect, useRef } from 'react';
export const AddTaskApp = ({addTaskToList}) => {

  const [description, setDescription] = useState('');
  const focusRef = useRef()
  const onButtonClick = (event) => {
    
  } 
  const onInputChange = (event) => {
    setDescription(event.target.value)
  }
  const onSubmitForm = (event) => {
    event.preventDefault()
    addTaskToList(description)
    setDescription('')
  }
  useEffect(() => {
    focusRef.current.focus()
  },[])
  return (
    <>
      <form onSubmit={onSubmitForm}>
        <div className="row">
          <div className="col-sm-8">
            <input ref={focusRef} className="form-control" type="text" placeholder="Agrega una tarea" onChange={onInputChange} value={description} />
          </div>
          <div className="col-sm-2">
            <button className="btn btn-primary" type="submit">Agregar</button>
          </div>
        </div>
      </form>
    </>
  )
}
