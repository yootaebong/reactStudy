import React from "react";
import MyComponent from "./MyComponent"; //컴포넌트를 불러 온다.
import Counter from "./Counter";
import Say from "./Say";
import EventPractice from "./EvnetPractice";

// 클래스형 컴포넌트
// 1. 라이프 사이클 이용 가능
// 2. 임이의 메서드 사용 가능.

// 함수형 컴포넌트
// 1. 간단한 구조
// 2. 메모리 자원을 덜 사용.
// 3. 배포시 파일 크기의 간소화.
// 4. 라이프 사이클 사용 불가. -> hooks 로 해결
// 5. State 사용 불가 -> hooks 로 해결
// class App extends Compoenent {
//   render() {
//     const name = "react";
//     return <div className="react">{name}</div>;

//   }
// }

const App = () => {
  //   //사용하는 컴포넌트에 넘겨 줄 props값
  //   return <MyComponent name="bong" />;
  //   //컴포넌트 태그 사이에 내용을 보여주는 props.
  //   return (
  //     <MyComponent name="bong" number="7">
  //       Children
  //     </MyComponent>
  //   );
  //   return <Counter />;
  //   return <Say />;
  return <EventPractice />;
};

export default App;
