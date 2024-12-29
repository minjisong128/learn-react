import Counter from "./Counter";

export default function Main() {

  return (
    <main>
      {/* Counter 컴포넌트를 두 번 렌더링함 */}
      {/* 한쪽 counter 값이 증가한다고 해서 다른 쪽 counter 값이 증가하지 않음
          -> useState를 사용해서 만들어진 컴포넌트 메모리는 컴포넌트 인스턴스별로 관리됨 */}
      <Counter />
      <br />
      <br />
      <Counter />
    </main>
  )
}