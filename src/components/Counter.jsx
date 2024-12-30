import { useState } from "react"; // 훅 : React에서 useState와 같이 “use”로 시작하는 다른 모든 함수

export default function Counter({ onTotal }) {
  // cf) 이대로 작성하면 변경되는 Counter 값이 화면에 렌더링되지 않음
  // let counter = 1;
  // const handleCounter = () => {
  //   counter++;
  // }

  // useState의 첫 번째 인자 : 초깃값
  // 반환된 배열의 첫 번째 인자 : 컴포넌트 상태 / 두 번째 인자 : 컴포넌트 상태를 변경할 수 있는 setter 함수
  const [counter, setCounter] = useState(0);

  console.log('[렌더링] Counter: ', counter);

  const handleCounter = () => {
    // 이벤트 핸들러는 렌더링 당시의 state를 사용 (state는 스냅샷처럼 동작)
    // 하나의 이벤트에서 여러 번 동일한 state 변경 희망 시 콜백 함수 넣어주면 됨
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    console.log('[함수호출] Counter: ', counter);

    if (onTotal) {
      onTotal(); // total 값 1씩 증가시킴
    }
  }

  return (
    <button onClick={handleCounter}>Counter: {counter}</button>
  )
}