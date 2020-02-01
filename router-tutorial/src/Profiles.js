import React from "react";
import { NavLink, Route } from "react-router-dom";
import Profile from "./Profile";
// import WithRouterSample from "./WithRouterSample";

const Profiles = () => {
  const activeStyle = {
    background: "black",
    color: "white"
  };
  return (
    <div>
      <h3> user list</h3>
      <ul>
        {/* NavLink는 현재 경로와 Link에서 사용하는 경로가 일치할 경우
            특정 스타일 혹은 Css를 적용 시켜준다. */}
        <li>
          <NavLink activeStyle={activeStyle} to="/profiles/bong">
            bong
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={activeStyle} to="/profiles/gildong">
            gildong
          </NavLink>
        </li>
      </ul>

      <Route path="/profiles" exact render={() => <div>select user</div>} />
      <Route path="/profiles/:username" component={Profile} />

      {/* 이런식으로 넣으면 해당  컴포넌트로 들어온 값만 보여주기 때문에
        서브 라우터의 쿼리 값을 읽어오지 못한다
        Profiles -> Profile 로 추가 이동
    */}
      {/* <WithRouterSample /> */}
    </div>
  );
};

export default Profiles;
