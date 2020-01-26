import React from "react";

class ErrorBoundary extends React.Component {
  state = {
    error: false
  };
  //에러가 발생하면 이 메서드가 호출 됩니다.
  componentDidCatch(error, info) {
    //true로 업데이트
    this.setState({
      error: true
    });
    console.log({ error, info });
  }

  render() {
    //   에러가 발생하면 에러 메세지를 띄워주고
    // 발생하지 않았다면 자식으로 속한 값을 보여준다.
    // 개발할 때 도움이 많이 될듯하다!
    if (this.state.error) return <div>error!!!</div>;
    return this.props.children;
  }
}

export default ErrorBoundary;
