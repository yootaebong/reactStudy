import React from "react";
import { Route, Link, Switch } from "react-router-dom";

import About from "./About";
import Home from "./Home";
import Profiles from "./Profiles";
import HistorySample from "./HistorySample";

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
        <li>
          <Link to="/profiles">profiles</Link>
        </li>
        <li>
          <Link to="/history">history Sample</Link>
        </li>
      </ul>
      <hr />

      {/* 배열을 사용하면 라우터 컴포넌트 하나에 여러개의 페이지를 보여줄 수 있다. */}
      {/* Switch를 사용하면 반드시 일치하는 것만 보여주기 때문에, notFount 구현 가능. */}
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path={["/about", "/info"]} component={About} />
        <Route path="/profiles" component={Profiles} />
        <Route path="/history" component={HistorySample} />
        <Route //path를 정하지 않으면 모든 상황에서 렌더링 된다.
          render={({ location }) => (
            <div>
              <h2>Not Found</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
