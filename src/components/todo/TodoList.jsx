import TodoItem from "./TodoItem";

function TodoList({ onToggleTodo, onDeleteTodo, todos = [] }) {
  return (
    <ul>
      {todos.map(item => (
        <li key={item.id}>
          <TodoItem
            item={item}
            onToggleTodo={onToggleTodo}
            onDeleteTodo={onDeleteTodo}
          />
        </li>
      ))}
    </ul>
  )
}

export default TodoList;