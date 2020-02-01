import React from "react";
import qs from "qs";

const About = ({ location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true //쿼리 문자열 맨 앞의 ?를 없에 줍니다.
  });
  const showDetail = query.detail === "true"; //쿼리 파싱 결과값은 문자열이다.

  return (
    <div>
      <h1>intro</h1>
      <p>innnnnntrooooooo</p>
      {showDetail && <p>true</p>}
    </div>
  );
};

export default About;
