import CourseItem from './CourseItem'

function CourseListCard({ items }) { // 객체 구조 분해

  const [course1, course2, course3] = items; // 배열 구조 분해

  return (
    // style={{backgroundColor: 'black', color: 'white'}}
    <div className="card">
      <div className="card__header">강의 목록</div>
      <div className="card__body">
        <div className="courses">
          {/* JSX spread 문법 활용 */}
          <CourseItem {...course1} />
          <CourseItem {...course2} />
          <CourseItem {...course3} />
        </div>
      </div>
    </div>
  );
}

export default CourseListCard;