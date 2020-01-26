import React from "react";

class EventPractice extends React.Component {
  constructor(props) {
    super(props);
    //클래스의 임의의 메서드가 특정 html요소의 이벤트로 등록되는 과정에서 this의 관계가 끊어져 버린다.
    //이 때문에 제대로 this를 가리키기 위해서는 메서드를 this와 바인딩 해 주어야 한다.
    //이 방식을 계속해서 사용하면 불편하기 떄문에 Property Initializer Syntex 사용하면 메서드를 작성하면 바인드 하지 않아도 된다.
    // this.handleClick = this.handleClick.bind(this);
    // this.handleClick = this.handleClick.bind(this);
  }
  state = {
    message: "",
    username: ""
  };
  //이벤트를 전달 할 때 함수를 객체로써 전달한다고 했는데, 미리 지정해 놓고 사용할 수 있다.
  //성능상 큰 차이는 없지만 가독성을 좋게 할 수 있기 때문에 선호 된다.
  //   handleChange(e) {
  //     this.setState({
  //       message: e.target.value
  //     });
  //   }
  //   handleClick() {
  //     alert(this.state.message);
  //     this.setState({
  //       message: ""
  //     });
  //   }

  //바인드 하지 않는 방식의 함수 선언 방법. 바벨의 transform-class-properties문법을 사용하면 된다.
  //여러개를 사용할 때, input값의 name 을 넣어주면 관리가 편하게 된다
  handleChange = e => {
    this.setState({
      //객체 안에서 키 값을 []으로 감싸게 되면 ? 실제 값이 key값으로 사용 된다.
      [e.target.name]: e.target.value
    });
  };
  handleClick = () => {
    alert(this.state.username + ": " + this.state.message);

    this.setState(
      {
        message: "",
        username: ""
      },
      () => {
        console.log(this.state.username);
      }
    );
  };
  handleKeyPress = e => {
    if (e.key === "Enter") {
      this.handleClick();
    }
  };
  render() {
    return (
      <div>
        <h1>event</h1>
        <input
          type="text"
          name="username"
          placeholder="name"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="placeholder"
          //   onChange={e => {
          //     //  e는 SyntheticEvent로 웹 브라우저의 네이티브 이벤트를 감싸는 객체이다.
          //     this.setState({
          //       message: e.target.value
          //     });
          //   }}
          value={this.state.message}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <button
          //   onClick={() => {
          //     alert(this.state.message);
          //     this.setState({
          //       message: ""
          //     });
          //   }}
          onClick={this.handleClick}
        >
          chk
        </button>
      </div>
    );
  }
}

export default EventPractice;
