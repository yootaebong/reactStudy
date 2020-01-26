import React from "react";
import PropTypes from "prop-types";

//ES6에서 새롭게 도입 된 화살표 함수.
//화살표 함수는 기존 함수를 표현하는 새로운 방법.
//기존 함수의 모든 선언 방식을 대체하는 것이 아니라 사용 용도가 조금 다르다.
//주로 함수를 파라미터로 전달할 때 유용하다.

//기존의 함수는 자신이 종속 된 객체를 this로 지정한다.
//화살표 함수는 자신이 종속 된 인스턴스를 가르킨다.
// const triple = (value) => value * 3; 이렇게 { }를 열어주지 않으면? 자신의 연산한 값을 그대로 반환 한다는 이야기이다.

// const MyComponent = props => {
//   //props는 properties를 줄인 표현으로 컴포넌트 속성을 설정할 때 사용하는 요소이다.
//   //props의 값은 해당 컴포넌트를 불러와서 사용하는 부모 컴포넌트에서 설정할 수 있다.
//   return <div>{props.name}</div>;
// };

// const MyComponent = props => {
//   return (
//     <div>
//       name : {props.name} <br />
//       children : {props.children}
//     </div>
//   );
// };
//es6에서는 비구조화 할당이 가능하다.
//이런식으로 사용하면 내부 구조물을 바로 할당해서 가져 올 수 있다.
const MyComponent = ({ name, children, number }) => {
  return (
    <div>
      name : {name} <br />
      children : {children} <br />
      number : {number}
    </div>
  );
};

//props의 기본값을 설정 해 줄 수 있다.
MyComponent.defaultProps = {
  name: "default props"
};

//props의 타입을 설정해 줄 수 있다.
//설정을 하게 되면 무조건 그 타입으로 값이 들어와야 한다.
//그 값을 들어가지 않게 되면 값은 나타나게 되도 콘솔창에 에러를 뿜는다.
MyComponent.propTypes = {
  name: PropTypes.string,
  //이 값을 넣지 않으면 에러를 준다.
  number: PropTypes.number.isRequired
};
//이 코드는 다른 클래스에서 import 할 때 선언한 클래스를 불러 오도록 한다.
export default MyComponent;
