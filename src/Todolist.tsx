import React, {ChangeEvent, useState} from 'react';
import {FilterValuesType} from './App';
import AppButton from "./components/AppButton";

type TaskType = {
   id: string
   title: string
   isDone: boolean
}

type PropsType = {
   title: string
   tasks: Array<TaskType>
   removeTask: (taskId: string) => void
   changeFilter: (value: FilterValuesType) => void
   addTask: (title: string) => void
}

export function Todolist(props: PropsType) {
   const [newTitle, setNewTitle] = useState('')

   const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      setNewTitle(event.currentTarget.value)
   }

   const onAddClickHandler = () => {
      props.addTask(newTitle)
      setNewTitle('')
   }

   const onKeyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
         onAddClickHandler()
      }
   }

   const removeTaskHandler = (tID: string) => {
      props.removeTask(tID)
   }

   const addChangeFilter = (value: FilterValuesType) => {
      props.changeFilter(value)
   }

   return <div>
      <h3>{props.title}</h3>
      <div>
         <input value={newTitle} onChange={onChangeHandler} onKeyDown={onKeyDownHandler}/>
         <AppButton title={'+'} callback={onAddClickHandler}/>
         {/*<button onClick={onAddClickHandler}>+</button>*/}
      </div>
      <ul>
         {
            props.tasks.map(t => {
                  return (
                     <li key={t.id}>
                        <input type="checkbox" checked={t.isDone}/>
                        <span>{t.title}</span>
                        <AppButton title={'x'} callback={() => removeTaskHandler(t.id)}/>
                        {/*<button onClick={() => removeTaskHandler(t.id)}>x</button>*/}
                     </li>
                  )
               }
            )
         }
      </ul>
      <div>
         <AppButton title={"All"} callback={() => addChangeFilter("all")}/>
         <AppButton title={"Active"} callback={() => addChangeFilter("active")}/>
         <AppButton title={"Completed"} callback={() => addChangeFilter("completed")}/>
         {/*<button onClick={() => addChangeFilter("all")}>All</button>*/}
         {/*<button onClick={() => addChangeFilter("active")}>Active</button>*/}
         {/*<button onClick={() => addChangeFilter("completed")}>Completed</button>*/}
      </div>
   </div>
}
