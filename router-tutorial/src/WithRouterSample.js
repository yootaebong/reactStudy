import React from "react";
import { withRouter } from "react-router-dom";

//라우트로 사용된 컴포넌트가 아니더라도
//withRouter를 사용하면 match, location, history 객체에 접근 가능하게 해준다.
const WithRouterSample = ({ location, match, history }) => {
  return (
    <div>
      <h4>location</h4>
      <textarea
        value={JSON.stringify(location, null, 2)}
        rows={7}
        readOnly={true}
      />
      <h4>match</h4>
      <textarea
        value={JSON.stringify(match, null, 2)}
        rows={7}
        readOnly={true}
      />
      <button onClick={() => history.push("/")}>Home</button>
    </div>
  );
};

export default withRouter(WithRouterSample);
