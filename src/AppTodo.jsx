import { useReducer, useState } from 'react';
import './App.css';
import TodoList from './components/todo/TodoList'
import todoReducer from './reducer/todo-reducer';
import { useImmerReducer } from 'use-immer';

function AppTodo(props) {
  const [todoText, setTodoText] = useState('');
  const [todos, dispatch] = useImmerReducer(todoReducer, [
    { id: 0, text: 'HTML&CSS 공부하기', done: false },
    { id: 1, text: '자바스크립트 공부하기', done: false }
  ]);

  const [insertAt, setInsertAt] = useState(todos.length - 1);

  const handleTodoTextChange = (e) => {
    setTodoText(e.target.value);
  }

  //1] added
  const handleAddTodo= () => {
    dispatch({ // reducer(todo-reducer.js)에 dispatch 함수로 action 객체 넘김
      type: 'added',
      nextId: todos.length,
      todoText
    });
    setTodoText(''); // 추가 버튼 클릭 후 텍스트 초기화 위한 코드 cf) 빈 문자열 말고 null이나 undefined로 작성 시 동작 안 함
  }

  //2] added_index
  const handleAddTodoByIndex = () => {
    dispatch({
      type: 'added_index',
      insertAt,
      nextId: todos.length,
      todoText
    });
    setTodoText('');
  }

  //3] deleted
  const handleDeleteTodo = (deleteId) => {
    dispatch({ type: 'deleted', deleteId });
  }

  // 텍스트 입력 후 Enter 키 눌렀을 때에도 추가 버튼 눌렀을 때와 동일하게 항목 추가
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  }

  //4] done (완료 처리)
  // checkbox 클릭 시 상태 변경
  const handleToggleTodo = (id, done) => {
    dispatch({ type: 'done', id, done });
  }

  //5] reverse
  const handleReverse = () => {
    dispatch({ type: 'reverse' })
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