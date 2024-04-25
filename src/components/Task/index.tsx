
import { CheckCircle, Trash } from 'phosphor-react'
import './task.css'
import { ITasks } from '../../App'

interface Props {
  task: ITasks
  onDelete: (taskId: string) => void
  onCompleted: (taskId: string) => void
}

export function Task({ task, onDelete, onCompleted }: Props) {

  return(
    <div className='task'> 
      <button className='task-container' onClick={() => onCompleted(task.id)}>
        {task.isCompleted ? <CheckCircle /> : <div />}
      </button>
      <p className={task.isCompleted ? "taskCompleted" : ""}>
        {task.title}
      </p>
      <button className='deleteButton' onClick={() => onDelete(task.id)}>
        <Trash size={20} />
      </button>
    </div>
  )
}