import Card from '../Card';
import CourseItem from './CourseItem'

function CourseListCard({ items }) { // 객체 구조 분해

  const [course1, course2, course3] = items; // 배열 구조 분해

  return (
    <>
      <Card title="강의 목록">
        <div className="courses">
          {items.map(item => <CourseItem {...item} />)}
        </div>
      </Card>
    </>
  );
}

export default CourseListCard;