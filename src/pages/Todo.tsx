import React from 'react'
import DashboardContent from 'components/Layout/DashboadLayout'
import 'assets/scss/color.scss'
import 'assets/scss/Todo/Todo.scss'
import TodoInput from 'components/Todo/TodoInput'
import TodoList from 'components/Todo/TodoList'
import TodoModal from 'components/Todo/TodoModal'
import TodoTitle from 'components/Todo/TodoTitle'

function Todo(): JSX.Element {
  return (
    <DashboardContent>
      <div className="TodoTemplate">
        <div className="TodoTemplate-Contents">
          <TodoTitle />
          <TodoList />
          <TodoInput />
        </div>
      </div>
    </DashboardContent>
  )
}

export default Todo
