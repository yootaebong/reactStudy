import React from "react";

class Counter extends React.Component {
  //component는 생성자 메서드 이다.
  //constructor 을 작성할 때 반드시 super(props)를 호출 해줘야 한다.
  //이것은 컴포넌트가 상속하고 있는 리액트의 생성자 함수를 호출 해 준다.
  //   constructor(props) {
  //     //state는 컴포넌트 내부에서 바뀔 수 있는 값을 의미한다.
  //     //props는 컴포넌트 내부에서는 바뀔 수 없고 부모에서만 바뀔 수 있다.
  //     super(props);
  //     //state의 초기값을 설정 해 준다.
  //     this.state = {
  //       number: 0,
  //       fixedNumber: 0
  //     };
  //   }

  //이런 방식으로도 state를 선언 할 수 있다.
  state = {
    number: 0,
    fixedNumber: 0
  };
  render() {
    const { number, fixedNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h1>{fixedNumber}</h1>
        <button
          onClick={() => {
            //setState 가 끝났을 떄 무언가 하고 싶다면? 콜백 함수를 적용 시키자.
            this.setState(
              {
                number: number + 1
              },
              () => {
                console.log("setState callback.");
                console.log(this.state);
              }
            );

            // //this.setState는 바로 적용되지 않는다.
            // //이를 해결하기 위해서는 함수를 인자 값으로 넣어주면 관리가 편하다.
            // this.setState((prevState, props) => ({
            //   //prevState 기존 상태.
            //   //props는 현재 지니고 있는 props를 말한다.
            //   number: prevState.number + 1
            // }));
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
