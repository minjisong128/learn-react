import { useState } from 'react';
import './App.css';
import TodoList from './components/todo/TodoList'

function AppTodo(props) {
  const [todoText, setTodoText] = useState('');
  const [todos, setTodos] = useState([
    { id: 0, text: 'HTML&CSS 공부하기' },
    { id: 1, text: '자바스크립트 공부하기' }
  ])

  const handleTodoTextChange = (e) => {
    setTodoText(e.target.value);
  }

  const handleAddTodo= () => {
    const nextId = todos.length;
    // cf) todos.push({ id: nextId, text: '' }) 와 같이 작성 시 추가 안 됨
    setTodos([
      ...todos,
      { id: nextId, text: todoText }
    ]);
    setTodoText(''); // 추가 버튼 클릭 후 텍스트 초기화 위한 코드 cf) 빈 문자열 말고 null이나 undefined로 작성 시 동작 안 함
  }
  return (
    <div>
      <h2>할일목록</h2>
      <input type="text" value={todoText} onChange={handleTodoTextChange} />
      <button onClick={handleAddTodo}>추가</button>
      <div>Preview: {todoText}</div>
      <TodoList todos={todos} />
    </div>
  );
}

export default AppTodo;