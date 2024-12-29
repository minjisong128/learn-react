import Card from "../Card";

export default function CourseForm() {

  function handleCourseForm(e) { // 이 이벤트 핸들러 없으면 '등록' 버튼 클릭 시 페이지 reload됨
    e.preventDefault(); // 기본 동작 막음
  }

  return (
    <Card title="강의 등록">
      <form style={{ display:'flex', flexDirection: 'column', gap: '1rem' }} onSubmit={handleCourseForm}>
        <input type="text" placeholder="강의 제목" />
        <input type="text" placeholder="강의 한줄 설명" />
        <input id="submit" type="submit" value="등록" />
      </form>
    </Card>
  )
}