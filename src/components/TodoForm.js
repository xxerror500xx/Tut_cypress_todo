import React from 'react'

export default props =>
  <form>
    <input
      type='text'
      autoFocus
      className="new-todo"
      value={props.currentTodo}
      onChange={props.handleNewTodoChange}
      placeholder="What needs to be done?"/>
  </form>
