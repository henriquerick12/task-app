import { useState, type FormEvent } from 'react'
import {
  createTask,
  normalizeTitle,
  sortTasksByNewest,
  validateTaskTitle,
  type TaskValidationError,
} from './domain/task'
import { loadTasks, saveTasks } from './storage/tasks'
import './task-app.css'

const validationMessages: Record<TaskValidationError, string> = {
  required: 'Digite um título para continuar.',
  'too-long': 'O título deve ter no máximo 100 caracteres.',
  duplicate: 'Já existe uma tarefa com esse título.',
}

const dateFormatter = new Intl.DateTimeFormat('pt-BR', {
  day: '2-digit',
  month: 'short',
  hour: '2-digit',
  minute: '2-digit',
})

function App() {
  const [tasks, setTasks] = useState(() => sortTasksByNewest(loadTasks()))
  const [title, setTitle] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const normalizedTitle = normalizeTitle(title)
    const validationError = validateTaskTitle(normalizedTitle, tasks)
    if (validationError) {
      setError(validationMessages[validationError])
      return
    }

    const nextTasks = sortTasksByNewest([createTask(normalizedTitle), ...tasks])
    try {
      saveTasks(nextTasks)
      setTasks(nextTasks)
      setTitle('')
      setError('')
    } catch {
      setError('Não foi possível salvar. Verifique o armazenamento do navegador.')
    }
  }

  return (
    <main className="page-shell">
      <header className="topbar">
        <a className="brand" href="/" aria-label="Tarefa, início">
          <span className="brand-mark" aria-hidden="true">t.</span>
          <span>tarefa</span>
        </a>
        <span className="local-note"><span aria-hidden="true" /> Seus dados ficam neste dispositivo</span>
      </header>

      <section className="workspace" aria-labelledby="page-title">
        <div className="intro">
          <p className="eyebrow">SEU ESPAÇO DE TRABALHO <span> / </span> HOJE</p>
          <h1 id="page-title">Uma coisa de<br /><em>cada vez.</em></h1>
          <p className="intro-copy">Tire as ideias da cabeça e coloque o dia em movimento.</p>
          <div className="today-mark"><span>01</span><span>FOCO NO QUE IMPORTA</span></div>
        </div>

        <div className="task-panel">
          <form className="task-form" onSubmit={handleSubmit} noValidate>
            <label htmlFor="task-title">ADICIONAR À LISTA</label>
            <div className="input-row">
              <input
                id="task-title"
                name="title"
                type="text"
                value={title}
                onChange={(event) => {
                  setTitle(event.target.value)
                  if (error) setError('')
                }}
                placeholder="O que você precisa fazer?"
                aria-describedby={error ? 'form-feedback' : 'character-count'}
                aria-invalid={Boolean(error)}
              />
              <button className="font-semibold" type="submit"><span aria-hidden="true">+</span> Adicionar</button>
            </div>
            <div className="form-meta">
              <p id="form-feedback" className={error ? 'feedback error' : 'feedback'} role="status">
                {error}
              </p>
              <span id="character-count">{title.length}/100</span>
            </div>
          </form>

          <div className="list-heading">
            <h2>Lista de tarefas</h2>
            <span className="task-count">{String(tasks.length).padStart(2, '0')}</span>
          </div>

          {tasks.length === 0 ? (
            <div className="empty-state">
              <span className="empty-symbol" aria-hidden="true">↳</span>
              <p>Nenhuma tarefa cadastrada.</p>
              <span>Comece adicionando uma tarefa acima.</span>
            </div>
          ) : (
            <ul className="task-list" aria-label="Tarefas cadastradas">
              {tasks.map((task, index) => (
                <li className="task-item" key={task.id}>
                  <span className="task-index">{String(index + 1).padStart(2, '0')}</span>
                  <span className="task-title">{task.title}</span>
                  <time dateTime={task.createdAt}>{dateFormatter.format(new Date(task.createdAt))}</time>
                </li>
              ))}
            </ul>
          )}
          <p className="list-footnote">ORDENADAS DA MAIS RECENTE PARA A MAIS ANTIGA</p>
        </div>
      </section>
      <footer className="page-footer"><span>MENOS RUÍDO, MAIS FEITO.</span><span>FEITO PARA O SEU DIA <span aria-hidden="true">↗</span></span></footer>
    </main>
  )
}

export default App
