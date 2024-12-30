// 분산된 비즈니스 로직을 하나로 통합
// 첫 번째 인자 : 관리할 상태
// 두 번째 인자 : AppTodo.jsx에서 dispatch 함수로 넘겨준 action 객체
export default function todoReducer(todos, action) {
  // type
  switch(action.type) { // reducer 함수 안에서는 switch 문을 사용하는 게 규칙
    case 'added': {
      const { nextId, todoText } = action;
      // 기존에는 setter 계열 메서드로 값을 전달했다면, 여기서는 값을 저장하는 대신 return하면 됨
      return [
        ...todos,
        { id: nextId, text: todoText, done: false }
      ];
    }
    case 'added_index': {
      const { insertAt, nextId, todoText } = action;
      return [
        ...todos.slice(0, insertAt), // 삽입 지점 이전 항목
        { id: nextId, text: todoText, done: false },
        ...todos.slice(insertAt) // 삽입 지점 이후 항목
      ];
    }
    case 'deleted': {
      const { deleteId } = action;
      return todos.filter(item => item.id !== deleteId);
    }
    case 'done': {
      const { id, done } = action;
      return todos.map(item => {
        if (item.id === id) {
          return { ...item, done }; // return { ...item, done: done };을 간략히 작성
        }
        return item;
      })
    }
    case 'reverse': {
      return todos.toReversed();
    }
    default: {
      throw Error('알 수 없는 액션 타입: ' + action.type);
    }
  }
}