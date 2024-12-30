import { useState } from 'react';
import './App.css';
import TodoList from './components/todo/TodoList'

function AppTodo(props) {
  const [todoText, setTodoText] = useState('');
  const [todos, setTodos] = useState([
    { id: 0, text: 'HTML&CSS 공부하기', done: false },
    { id: 1, text: '자바스크립트 공부하기', done: false }
  ])
  const [insertAt, setInsertAt] = useState(todos.length - 1);

  const handleTodoTextChange = (e) => {
    setTodoText(e.target.value);
  }

  const handleAddTodo= () => {
    const nextId = todos.length;
    // cf) todos.push({ id: nextId, text: '' }) 와 같이 작성 시 추가 안 됨
    setTodos([
      ...todos,
      { id: nextId, text: todoText, done: false }
    ]);
    setTodoText(''); // 추가 버튼 클릭 후 텍스트 초기화 위한 코드 cf) 빈 문자열 말고 null이나 undefined로 작성 시 동작 안 함
  }

  const handleAddTodoByIndex = () => {
    const nextId = todos.length;
    const newTodos = [
      ...todos.slice(0, insertAt), // 삽입 지점 이전 항목
      { id: nextId, text: todoText, done: false },
      ...todos.slice(insertAt) // 삽입 지점 이후 항목
    ];
    setTodos(newTodos);
    setTodoText('');
  }

  const handleDeleteTodo = (deleteId) => {
    const newTodos = todos.filter(item => item.id !== deleteId);
    setTodos(newTodos);
  }

  // 텍스트 입력 후 Enter 키 눌렀을 때에도 추가 버튼 눌렀을 때와 동일하게 항목 추가
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  }

  // checkbox 클릭 시 상태 변경
  const handleToggleTodo = (id, done) => {
    // 기존 배열 안의 객체 속성을 변경
    const nextTodos = todos.map(item => {
      if (item.id === id) {
        return { ...item, done }; // return { ...item, done: done };을 간략히 작성
      }
      return item;
    })
    setTodos(nextTodos);
  }

  const handleReverse = () => {
    // 1. reverse() 활용 : 원본 배열 변경하는 mutable API
    // const nextTodos = [...todos];
    // nextTodos.reverse();
    // setTodos(nextTodos);

    // 2. toReversed() 활용 : 원본 배열 변경하지 않는 immutable API
    setTodos(todos.toReversed());
  }

  return (
    <div>
      <h2>할일목록</h2>
      <div>
        <input
          type="text"
          value={todoText}
          onChange={handleTodoTextChange}
          onKeyDown={handleKeyDown} />
        <button onClick={handleAddTodo}>추가</button>
      </div>
      <div>
        <select value={insertAt} onChange={(e) => setInsertAt(e.target.value)}>
          {todos.map((item, index) => (
            <option key={item.id} value={index}>{index} 번째</option>
          ))}
        </select>
        <button onClick={handleAddTodoByIndex}>{insertAt}번째 추가</button>
      </div>
      <div>Preview: {todoText}</div>
      <button onClick={handleReverse}>Reverse</button>
      <TodoList
        todos={todos}
        onDeleteTodo={handleDeleteTodo}
        onToggleTodo={handleToggleTodo}
      />
    </div>
  );
}

export default AppTodo;