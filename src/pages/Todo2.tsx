import React from 'react'
import DashboardContent from 'components/Layout/DashboadLayout'
import TodoList2 from 'components/Todo2/TodoList2'
import TodoInput2 from 'components/Todo2/TodoInput2'
import 'assets/scss/Todo/Todo2.scss'

export default function Todo2(): JSX.Element {
  return (
    <DashboardContent>
      <div className="TodoPage2">
        <div className="TodoPage2-Title">TodoList 내가만든다.</div>
        <TodoList2 />
        <TodoInput2 />
      </div>
    </DashboardContent>
  )
}
