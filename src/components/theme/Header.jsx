import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";

export default function Header() {

  const {darkMode, toggleDarkMode} = useContext(DarkModeContext); // DarkModeContext에서는 객체 타입으로 받아야 함

  return (
    // header--dark
    <header className={`header ${darkMode ? 'header--dark' : 'header--light'}`}>
      <h1 className="header__title">헤더 컴포넌트</h1>
      <button className="header__button" onClick={toggleDarkMode}>
        {darkMode ? '라이트 모드로 전환' : '다크 모드로 전환'}
      </button>
    </header>
  );
};