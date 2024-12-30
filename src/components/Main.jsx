import { useState } from "react";
import Counter from "./Counter";

export default function Main() {

  const [total, setTotal] = useState(0);
  const [flag, setFlag] = useState(false);

  // total 값 추가하기 위한 이벤트 핸들러
  const handleTotal = () => {
    setTotal(total + 1);
  }

  return (
    <main>
      <h2>total: {total}</h2>
      <h2>flag: {flag.toString()}</h2>
      <button onClick={() => setFlag(!flag)}>toggle flag</button>
      <hr />
      {/* Counter 컴포넌트를 두 번 렌더링함 */}
      {/* 한쪽 counter 값이 증가한다고 해서 다른 쪽 counter 값이 증가하지 않음
          -> useState를 사용해서 만들어진 컴포넌트 메모리는 컴포넌트 인스턴스별로 관리됨 */}
      <Counter onTotal={handleTotal} />
      <hr />
      <Counter onTotal={handleTotal} />
      <hr />
      <Counter />
    </main>
  )
}