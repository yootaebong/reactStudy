import React, { Component } from "react";

//history객체는 라우트로 사용된 컴포넌트에 포함된 props 중 하나로
//컴포넌트 내 메서드에서 라우터 api를 호출 할 수 있다

class HistorySample extends Component {
  //뒤로가기
  handleGoBack = () => {
    this.props.history.goBack();
  };

  //홈으로 이동
  handleGoHome = () => {
    this.props.history.push("/");
  };

  componentDidMount() {
    //페이지 이동이 일어날 때 마다 나갈 건지 물어보게 하는 함수.
    this.unblock = this.props.history.block("real exit?");
  }

  render() {
    return (
      <div>
        <button onClick={this.handleGoBack}>Back</button>
        <button onClick={this.handleGoHome}>Home</button>
      </div>
    );
  }
}

export default HistorySample;
