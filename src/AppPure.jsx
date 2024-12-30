import './App.css';
import PullUpImpure from './components/PullUpImpure';

function AppPure(props) {
  return (
    <div>
      {/* 순수한 컴포넌트 : 동일한 입력에 대해 동일한 JSX 반환 */}
      <PullUpImpure />
      <PullUpImpure />
      <PullUpImpure />
    </div>
  );
}

export default AppPure;