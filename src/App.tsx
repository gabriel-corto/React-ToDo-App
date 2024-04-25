import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";

const LOCAL_STORAGE_KEY = "tasksSaved"

export interface ITasks {
  id: string 
  title: string
  isCompleted: boolean
}

export default function App() {
  
  const [tasks, setTasks] = useState<ITasks[]>([])

  function storageTasks(newTasks: ITasks[]) {
    setTasks(newTasks)
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks))
  }

  function loadSavedTasks() {
    const tasksSaved = localStorage.getItem(LOCAL_STORAGE_KEY)

    if(tasksSaved) {
      setTasks(JSON.parse(tasksSaved))
    }
  }

  useEffect(() => {
    loadSavedTasks()
  }, [])
  
  function addTaks(taskTitle: string) {
    storageTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false
      }
    ])
  }

  function toggleTaskCompletedById(taskId: string){
    const newTasks = tasks.map((task) => {
      if(task.id === taskId){
        return{
          ...task,
          isCompleted: !task.isCompleted
        }
      } else {
        return task;
      }
    })
    storageTasks(newTasks)
  }

  function deleteTask(taskId: string) {
    const tasksNotDeleted = tasks.filter((taskToDelete) => taskToDelete.id !== taskId)
    
    if(confirm("💌 Deseja excluir esta tarefa ?")) {
      storageTasks(tasksNotDeleted)
    } else {
      return
    }
  }
  return (
    <>
      <Header onAddTask={addTaks}/>
      <Tasks tasks={tasks} onDelete={deleteTask} onCompleted={toggleTaskCompletedById}/>
    </>
  )
}