/* eslint-disable no-param-reassign */

import { makeAutoObservable } from 'mobx'

export interface Todo {
  id: number
  task: string
  completed: boolean
}

class TodoStore {
  todos: Todo[] = Array.from({ length: 100000 }, (_, index) => ({
    id: index,
    task: `Task number #${index}`,
    completed: Boolean(Math.round(Math.random())),
  }))

  constructor() {
    makeAutoObservable(this)
  }

  get completedTodosCount() {
    return this.todos.filter((todo) => todo.completed).length
  }

  addTodo(task: string) {
    this.todos.push({
      id: this.todos.length + 1,
      task,
      completed: false,
    })
  }

  toggle(todo: Todo) {
    todo.completed = !todo.completed
  }
}

export default new TodoStore()
