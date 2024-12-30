import './App.css';
import PullUpPure from './components/PullUpPure';

function AppPure(props) {
  return (
    <div>
      {/* 순수한 컴포넌트 : 동일한 입력에 대해 동일한 JSX 반환 */}
      <PullUpPure counter={11} />
      <PullUpPure counter={12} />
      <PullUpPure counter={13} />
    </div>
  )
}

export default AppPure;