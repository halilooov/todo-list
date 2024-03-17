import { observer } from 'mobx-react-lite'

import { Virtualization } from '@/components/Virtualization'

import TodoStore, { Todo } from '../TodoStore'

import { TodoItem } from '../TodoItem'

const Row = ({ row }: { row: Todo }) => <TodoItem todo={row} />

export const TodoList = observer(function TodoList() {
  return (
    <Virtualization<Todo>
      rowsCount={TodoStore.todos.length}
      boxHeight={500}
      rowHeight={50}
      data={TodoStore.todos}
      Row={Row}
    />
  )
})
