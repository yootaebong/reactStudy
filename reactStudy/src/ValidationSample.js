import React from "react";
import "./ValidationSample.css";

class ValidationSample extends React.Component {
  state = {
    password: "",
    clicked: false,
    validated: false
  };
  //리엑트 16.3부터 사용 가능한 리엑트 내부 함수를 통해 ref객체를 생성해 준다.
  //이 방식을 사용할 때에는 this.input.current를 조회해서 사용 해야한다.
  //   input = React.createRef();

  handleChange = e => {
    this.setState({
      password: e.target.value
    });
  };

  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === "0000"
    });
    this.input.focus();
  };

  render() {
    return (
      <div>
        <input
          // 가장 기본이 되는 ref설정 방법. ref라는 콜백 함수를 props로 전달해 주면 된다.
          // 이 콜백 함수는 ref 값을 파라미터로 전달 받는다.
          // 그리고 함수 내부에서 파라미터로 받은 ref를 컴포넌트의 멤버 변수로 설정 해 준다.
          // 이렇게 되면앞으로 this.input은 input 요소의 DOM을 가르키게 된다.
          ref={ref => {
            this.input = ref;
          }}
          //   생성한 Ref객체를 지정.
          //   ref={this.input}
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          className={
            this.state.clicked
              ? this.state.validated
                ? "success"
                : "failure"
              : ""
          }
        />
        <button onClick={this.handleButtonClick}>검증</button>
      </div>
    );
  }
}

export default ValidationSample;
