import { createContext } from "react";

// 초깃값 true로 설정하더라도, 부모 컴포넌트에서 설정한 값(AppTheme.jsx 참고)으로 전달받음
export const DarkModeContext = createContext(true);