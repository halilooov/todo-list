import { TodoList } from './components/TodoList'
import { TodoForm } from './components/TodoForm'

import styles from './App.module.less'

export function App() {
  return (
    <div className={styles.root}>
      <h1>Todo List</h1>
      <TodoForm />
      <TodoList />
    </div>
  )
}
