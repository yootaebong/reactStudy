import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import loadable from "@loadable/component";
// // import notify from "./notify";

const SplitMe = loadable(() => import("./SplitMe"), {
  fallback: <div>loading...</div>
});
function App() {
  // const onClick = () => {
  //   //이런 식으로 사용하면 처음 로드될 때 notify.js파일을 로드한다.
  //   // notify();
  //   //하지만 import 함수를 사용하면 필요할 때 로드하게 된다.
  //   //이렇게 사용하는 문법은 표준 자바스크립트는 아니고
  //   //dynamic import 라는 문법이다.
  //   //default로 내보낼 것은 result.default 를 참조해야지 보낼 수 있다.
  //   import("./notify").then(result => result.default());
  // };
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    setVisible(true);
  };
  const onMouseOver = () => {
    SplitMe.preload();
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onClick} onMouseOver={onMouseOver}>
          hello React
        </p>
        {visible && <SplitMe />}
      </header>
    </div>
  );
}

export default App;
