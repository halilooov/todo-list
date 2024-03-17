import { observer } from 'mobx-react-lite'
import styled from 'styled-components'

import TodoStore, { Todo } from '../TodoStore'

import styles from './TodoItem.module.less'

export interface TodoItemProps {
  todo: Todo
}

const Text = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: #020202;
`

export const TodoItem = observer(function ({ todo }: TodoItemProps) {
  return (
    <li className={styles.todoItem}>
      <input
        type="checkbox"
        onChange={() => TodoStore.toggle(todo)}
        checked={todo.completed}
      />
      <Text>🥳 {todo.task}</Text>
    </li>
  )
})
