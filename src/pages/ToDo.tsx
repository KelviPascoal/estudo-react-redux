import React from "react"
import { Checkbox } from "../components/Checkbox"
import { useAppDispatch, useAppSelector } from "../store"
import { ToDo, addToDo, toggleToDo } from "../store/slices/toDoSlice"
import { generateId } from "../utils/generateId"

export function TodoPage() {
  const dispatch = useAppDispatch()
  const toDoList = useAppSelector(store => store.toDo.toDo)
  const [newToDoDescription, setNewToDoDescription] = React.useState('')

  const createNewToDo = () => {
    const newId = generateId()

    const newToDo: ToDo = {
      id: newId,
      description: newToDoDescription,
      isDone: false
    }

    dispatch(addToDo(newToDo))
    setNewToDoDescription('')
  }


  return (
    <>
      <h3>Adicionar tarefa:</h3>
      <input type="text" value={newToDoDescription} onChange={(event) => setNewToDoDescription(event.target.value)} />
      <button onClick={() => createNewToDo()}>adicionar</button>

      <h3>Para fazer:</h3>

      <ul>
        {toDoList.map((toDo, index) => (
          <li key={`${toDo.id}-${index}`}>
            <Checkbox label={toDo.description} checked={toDo.isDone} onChange={(e) => dispatch(toggleToDo({ id: toDo.id }))} />
          </li>
        ))}
      </ul>
    </>
  )
}