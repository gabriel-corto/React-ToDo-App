
import { ClipboardText, PlusCircle } from 'phosphor-react'
import'./header.css'
import { ChangeEvent, FormEvent, useState } from 'react'

interface Props {
  onAddTask: (taskTitle: string) => void 
}
export function Header({ onAddTask }: Props) {

  const [taskTitle, setTaskTitle] = useState<string>("")

  function handleSubmit(event: FormEvent) {
    event.preventDefault()

    if(taskTitle.length === 0) {
      alert("⚠⚠ATENÇÃO! Preencha O Campo Vázio.")
    } else {
      onAddTask(taskTitle)
      setTaskTitle("")
    }

  }
  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTaskTitle(event.target.value)
  }
  return(
    <header className="header">
      <h1>ToDo <span>App</span> <ClipboardText weight='bold' /></h1>

      <form action="" className='new-task-form' onSubmit={handleSubmit}>
        <input 
          type="text"
          onChange={onChangeTitle}
          value={taskTitle}
          placeholder='Adcione uma nova tarefa' />

        <button>
          <span>Criar</span>
          <PlusCircle size={20} weight="bold"/>
        </button>
      </form>
    </header>
  )
}