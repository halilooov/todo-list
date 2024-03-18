import { observer } from 'mobx-react-lite'

import { Virtualization } from '@/components/Virtualization'

import TodoStore, { Todo } from '../TodoStore'

import { TodoItem } from '../TodoItem'

function Row({ row }: { row: Todo }) {
  return <TodoItem todo={row} />
}

export default observer(() => (
  <Virtualization<Todo>
    rowsCount={TodoStore.todos.length}
    boxHeight={500}
    rowHeight={50}
    data={TodoStore.todos}
    Row={Row}
  />
))
