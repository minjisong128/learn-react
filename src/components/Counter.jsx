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
    // 아래에서 세 개의 counter에는 렌더링 당시의 state 값이 동일하게 들어감. 따라서 setCounter(counter + 1); 하나만 있을 때와 동일하게 동작할 것.
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
    console.log('[함수호출] Counter: ', counter);

    if (onTotal) {
      onTotal(); // total 값 1씩 증가시킴
    }
  }

  return (
    <button onClick={handleCounter}>Counter: {counter}</button>
  )
}