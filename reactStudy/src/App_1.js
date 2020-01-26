//node module을 사용할 수 있게 해준다
//원래 브라우저에는 없는 기능인데, node.js에서 할 수 있게 해준다.
//이러한 기능을 브라우저에서도 사용 할 수 있게 bundler를 사용한다.
//리엑트는 bundler중 웹팩을 사용 하도록 하는 추세이다.
import React, { Fragment } from "react";
//웹팩을 사용하면 svg파일과 css파일도 불러와서 사용할 수 있다.
//이렇게 불러오는 기능은 웹팩 loader의 기능이다.
//loader은 많은 것이 있는데 css-loader, file-loader, babel-loader이다.
//여기에서 babel-loader은 최신 js 문법을 es5 문법으로 변환 해 준다.
//굳이 바꾸는 이유는 브라우저 호환 때문에
import logo from "./logo.svg";
import "./App.css";

//현 코드는 App이라는 컴포넌트를 만들어 준다.
//function 키워드를 사용해서 만드는 컴포넌트를 함수형 컴포넌트라고 한다.
//컴포넌트 렌더링을 하면 함수에서 반환하고 있는 내용을 나타낸다.
//반환은 HTML, 문자열 템플릿이 아니라 JSX라는 형식으로 반환 된다.
//
function App() {
  //es5 이전에는 var으로 사용 했지만, es6버전 부터는 변하지 않는 값을 const를 사용 변할 수 있는 값을 let을 사용한다.
  const 불변 = 1;
  let 유동 = undefined;
  return (
    //리턴값이 하나의 태크로 감싸져 있는 이유 -> Virtual DOM에서 컴포넌트의 변화를 감지할 때 효율적으로 비교할 수 있도록
    //컴포넌트 내부는 하나의 DOM트리 구조로 이루어져야 한다.라는 규칙이 있기 때문에.
    //Fragment 태그로 감싸주어도 되고, 생략하면 자동으로 Fragment 태그가 들어가게 된다.
    <>
      {/* 리엑트 에서는 class 대신 className을 사용한다. */}
      <header className="App-header">
        {/* JSX는 표현식이 사용 가능해서. {}으로 감싸주면 변수의 사용이 가능하다. */}
        <img src={logo} className="App-logo" alt="logo" />
        {/* 이 코드는 불변 === 1 ?  "삼항식 응용" : null 과 같은 기능을 한다.
            이것이 가능해지는 이유는 리엑트는 false를 렌더링 할 때는 null을 반환하기 때문에 */}
        <b>{불변 === 1 && "삼항식 응용"}</b>
        {/* 리엑트 컴포넌트는 기본적으로 undefined를 리턴할 수 없다.
            또한 삼항식 응용, false인 경우는 ||을 사용한다. */}
        <b>{유동 || "언디파인 에러"}</b>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </>
  );
}

export default App;
