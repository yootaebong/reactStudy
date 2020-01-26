import React from "react";

class LifeCycleSample extends React.Component {
  state = {
    number: 0,
    color: null
  };

  myRef = null;

  constructor(props) {
    super(props);
    console.log("constructor");
  }

  //부모에게서 받은 color값을 state에 동기화 하는 작업을 한다.
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.color !== prevState.color) {
      console.log(
        "getDerivedStateFromProps ",
        nextProps.color,
        prevState.color
      );
      return { color: nextProps.color };
    }

    return null;
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", nextProps, nextState);

    //숫자의 마지막 자리가 4라면 리렌더링 하지 않음.
    return nextState.number % 10 !== 4;
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1
    });
  };

  //DOM에 변화가 일어나기 직전의 색상 속성을 snapshot 값으로 반환하여 이것을 componentDidUpdate에서 조화가 가능하다.
  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (prevProps.color !== this.props.color) {
      console.log(
        "getSnapshotBeforeUpdate",
        "return" + this.myRef.style.color,
        prevState
      );
      //   console.log(prevProps.color);
      //   console.log(this.props.color);
      //   console.log(this.myRef.style.color);
      return this.myRef.style.color;
    }
    console.log("getSnapshotBeforeUpdate null");
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate", prevProps, prevState, snapshot);

    if (snapshot) {
      console.log("업데이트 전 색상 :", snapshot);
    }
  }

  render() {
    console.log("render + color : ", this.props.color);

    const style = {
      color: this.props.color
    };

    return (
      <div>
        {this.props.missing.value}
        <h1 style={style} ref={ref => (this.myRef = ref)}>
          {this.state.number}
        </h1>
        <p>color : {this.state.color}</p>
        <button onClick={this.handleClick}>+</button>
      </div>
    );
  }
}

export default LifeCycleSample;
