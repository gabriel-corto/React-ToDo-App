
import { ClipboardText } from 'phosphor-react'
import { ITasks } from '../../App'
import { Task } from '../Task'
import './tasks.css'

interface Props {
  tasks: ITasks[]
  onDelete: (taskId: string) => void
  onCompleted: (taskId: string) => void
}

export function Tasks({ tasks, onDelete, onCompleted}: Props) {
  const TasksQuantity = tasks.length
  const completedTasks = tasks.filter((tasks) => tasks.isCompleted).length

  return(
    <section className='tasks'>
      <header className="task-header">
        <div>
          <p>Tarefas criadas </p>
          <span>{TasksQuantity}</span>
        </div>

        <div>
          <p className="textGreen">Concluídas </p>
          <span>{completedTasks}</span>  de {TasksQuantity}
        </div>
      </header>

      <div className='list'>
        {tasks.map((task) => {
          return (
            <Task key={task.id} task={task} onDelete={onDelete} onCompleted={onCompleted}/>
          )
        })}
      </div>

      {tasks.length <= 0 && (
        <section className='empty'>
          <ClipboardText size={50} weight='bold'/>
          <div>
            <p>Sem Tarefas Registradas ! 🐱‍👤😎😎 </p>
            <i>Crie e organize suas tarefas</i>
          </div>
        </section>
      )}
    </section>
  )
}