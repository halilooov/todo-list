import { observer } from 'mobx-react-lite'

import { Text } from '@/ui'
import TodoStore, { Todo } from '../TodoStore'

import styles from './TodoItem.module.less'

export interface TodoItemProps {
  todo: Todo
}

export default observer(({ todo }: TodoItemProps) => (
  <li className={styles.todoItem}>
    <input
      type="checkbox"
      onChange={() => TodoStore.toggle(todo)}
      checked={todo.completed}
    />
    <Text>{todo.task}</Text>
  </li>
))
