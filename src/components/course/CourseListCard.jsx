import { Fragment } from 'react'; // React에서는 여러 개의 DOM 노드를 렌더링하고 싶을 때 Fragment 활용
import Card from '../Card';
import CourseItem from './CourseItem'

function CourseListCard({ onFavorite, title, items }) {

  const lastIndex = items.length - 1;

  return (
    <>
      <Card title={title}>
        <div className="courses">
          {items.map((item, index) => (
            // 리스트 안에서 자식 컴포넌트 렌더링할 때는 key가 필요
            <Fragment key={item.id}>
              <CourseItem {...item} onFavorite={onFavorite} />
              {/* 마지막 항목에 대해서는 구분선 없애기 위한 조건부 렌더링 */}
              {index !== lastIndex && <hr className="divider" />}
            </Fragment>
          ))}
        </div>
      </Card>
    </>
  );
}

export default CourseListCard;