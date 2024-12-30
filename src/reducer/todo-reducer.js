// 분산된 비즈니스 로직을 하나로 통합
// 첫 번째 인자 : 관리할 상태
// 두 번째 인자 : AppTodo.jsx에서 dispatch 함수로 넘겨준 action 객체

// useImmerReducer 활용 시 수정 가능한 객체(여기서는 draft) 넘어옴
// Immer 내부적으로 새로운 객체 생성
// cf) useReducer 사용 시 첫 번째 인자 수정 불가
export default function todoReducer(draft, action) {
  // type
  switch(action.type) { // reducer 함수 안에서는 switch 문을 사용하는 게 규칙
    case 'added': {
      const { nextId, todoText } = action;
      draft.push({ id: nextId, text: todoText, done: false });
      break;
    }
    case 'added_index': {
      const { insertAt, nextId, todoText } = action;
      draft.splice(insertAt, 0, { id: nextId, text: todoText, done: false });
      break;
    }
    case 'deleted': {
      const { deleteId } = action;
      return draft.filter(item => item.id !== deleteId);
    }
    case 'done': {
      const { id, done } = action;
      const target = draft.find(item => item.id === id);
      target.done = done;
      break;
    }
    case 'reverse': {
      return draft.toReversed();
    }
    default: {
      throw Error('알 수 없는 액션 타입: ' + action.type);
    }
  }
}