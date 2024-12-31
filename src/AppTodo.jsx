import { useReducer, useState } from 'react';
import './App.css';
import TodoList from './components/todo/TodoList'
import todoReducer from './reducer/todo-reducer';
import AddTodo from './components/todo/AddTodo';
import { useImmerReducer } from 'use-immer';

function AppTodo(props) {

  const [todos, dispatch] = useImmerReducer(todoReducer, [
    { id: 0, text: 'HTML&CSS 공부하기', done: false },
    { id: 1, text: '자바스크립트 공부하기', done: false }
  ]);

  //1] added
  const handleAddTodo= (text) => {
    dispatch({ // reducer(todo-reducer.js)에 dispatch 함수로 action 객체 넘김
      type: 'added',
      nextId: todos.length,
      todoText: text
    });
  }

  //3] deleted
  const handleDeleteTodo = (deleteId) => {
    dispatch({ type: 'deleted', deleteId });
  }

  //4] done (완료 처리)
  // checkbox 클릭 시 상태 변경
  const handleToggleTodo = (id, done) => {
    dispatch({ type: 'done', id, done });
  }

  return (
    <div>
      <h2>할일목록</h2>
      <AddTodo
        onAddTodo={handleAddTodo}
      />
      <TodoList
        todos={todos}
        onDeleteTodo={handleDeleteTodo}
        onToggleTodo={handleToggleTodo}
      />
    </div>
  );
}

export default AppTodo;