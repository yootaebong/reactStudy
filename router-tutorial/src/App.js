import React from "react";
import { Route, Link } from "react-router-dom";

import About from "./About";
import Home from "./Home";

//일반적으로 페이지 이동을 할 때에는 a태그를 사용하지만. 리엑트에서는 이것을 사용하면 새로고침이 되기 때문에 전부 새로 불러온다.
//그렇기 때문에  Link 라는 컴포넌트를 사용한다.
const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
      </ul>
      <hr />
      <Route path="/" component={Home} exact={true} />
      <Route path="/about" component={About} />
    </div>
  );
};

export default App;
