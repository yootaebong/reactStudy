import { createContext, useContext } from "react";

//클라이언트 환경 : null
//서버 환경 : {done : false, promises :[]}

//서버 사이드 렌더링을 하는 과정에서 처리해야 할 작업을들 실행한다.
const PreloadContext = createContext(null);
export default PreloadContext;

//resolve라는 함수를 props로 받아오고, 컴포넌트가 렌더링 될 때 서버 환경에서만 resolve 함수를 호출 한다.
export const Preloader = ({ resolve }) => {
  const preloadContext = useContext(PreloadContext);
  if (!preloadContext) return null; // context 값이 유효하지 않으면 아무것도 하지 않는다.
  if (preloadContext.done) return null; //작업이 끝났다면 아무것도 하지 않는다.

  //proises 배열에 프로미스 등록
  //설령 resolve함수가 프로미스를 반환하지 않더라도, 프로미스 취급을 하기위해
  //Promise.resolve 함수를 사용한다.

  preloadContext.promise.push(Promise.resolve(resolve()));
  return null;
};
