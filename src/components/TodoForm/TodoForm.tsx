import { useState } from 'react'

import AddEllipseIcon from 'assets/add-ellipse.svg?react'

import TodoStore from '../TodoStore'

import styles from './TodoForm.module.less'

export function TodoForm() {
  const [task, setTask] = useState('')

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
      }}
      className={styles.todoForm}
    >
      <input
        type="text"
        onChange={(event) => setTask(event.target.value)}
        value={task}
      />
      <button
        type="submit"
        onClick={() => {
          if (task)
            TodoStore.addTodo(`${Math.round(Math.random() * 1000)} ${task}`)
        }}
      >
        <AddEllipseIcon />
      </button>
    </form>
  )
}
