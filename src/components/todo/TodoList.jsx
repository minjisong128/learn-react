function TodoList({ todos = [] }) {
  // 순수한 컴포넌트로 만들기 위해서는 items에 대한 깊은 복사(Deep Copy) 필요
  // 깊은 복사(Deep Copy)하지 않으면 AppTodo.jsx에서 TodoList 컴포넌트 여러 개 활용 시 items에 누적하여 push됨 (todos 내에 id값이 2인 요소가 여러 개 될 수 있음)
  const items = [...todos]; // 깊은 복사(Deep Copy)
  items.push({ id: 2, label: '포트폴리오 사이트 만들기' });

  return (
    <ul>
      {items.map(item => <li key={item.id}>{item.label}</li>)}
    </ul>
  )
}

export default TodoList;