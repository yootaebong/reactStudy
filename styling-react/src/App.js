import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SassComponent from "./SassComponent";

function App() {
  // return (
  //   // css를 작성할 때 가장 중요한 것은 css 클래스를 중복되지 않게 하는 것이다.
  //   // css 클래스가 중복되는 것을 방지하는 여러가지 방식중
  //   // 1. 이름을 지을 때 규칙을 정해두는 것.
  //   // 2. css selector를 활용하는것.
  //   // BEM 네이밍은 CSS 방법론 중 하나로, 이름을 지을 때 클래스가 어디에서 어떤 용도로 사용되는지 명확하게 사용하는 방식이다.
  //   // CSS Selector을 사용하면 CSS 클래스가 특정 클래스 내부에 있는 경우에만 스타일을 적용 할 수 있다!
  //   // 현 아래 있는 방식처럼. 최상위 html 요소에는 컴포넌트의 이름을 짓고 그 내부에서는 소문자를 입력하거나
  //   // 태그를 사용하여 선택할 수 있다.
  //   <div className="App">
  //     <header>
  //       <img src={logo} className="logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );

  return (
    <div>
      <SassComponent />
    </div>
  );
}

export default App;
