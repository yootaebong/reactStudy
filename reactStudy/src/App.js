import React from "react";
import MyComponent from "./MyComponent"; //컴포넌트를 불러 온다.
import Counter from "./Counter";
import Say from "./Say";
import EventPractice from "./EvnetPractice";
import ValidationSaple from "./ValidationSample";
import ScrollBox from "./ScrollBox";
import IterationSample from "./IterationSample";
import LifeCycleSample from "./LifeCycleSample";
import ErrorBoundary from "./ErrorBoundary";
// 클래스형 컴포넌트
// 1. 라이프 사이클 이용 가능
// 2. 임이의 메서드 사용 가능.

// 함수형 컴포넌트
// 1. 간단한 구조
// 2. 메모리 자원을 덜 사용.
// 3. 배포시 파일 크기의 간소화.
// 4. 라이프 사이클 사용 불가. -> hooks 로 해결
// 5. State 사용 불가 -> hooks 로 해결
// class App extends Compoenent {
//   render() {
//     const name = "react";
//     return <div className="react">{name}</div>;

//   }
// }

// const App = () => {
//   //   //사용하는 컴포넌트에 넘겨 줄 props값
//   //   return <MyComponent name="bong" />;
//   //   //컴포넌트 태그 사이에 내용을 보여주는 props.
//   //   return (
//   //     <MyComponent name="bong" number="7">
//   //       Children
//   //     </MyComponent>
//   //   );
//   //   return <Counter />;
//   //   return <Say />;
//   //   return <EventPractice />;
//   //   return <ValidationSaple />;
//   return <ScrollBox />;
// };
function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends React.Component {
  state = {
    color: "#000000"
  };

  handleClick = () => {
    this.setState({
      color: getRandomColor()
    });
  };

  render() {
    return (
      //   <div>
      //     <ScrollBox ref={ref => (this.scrollBox = ref)} />
      //     {/* 문법상으로는 onClikc ={this.scrollBox.scrollToBottom()} 이런 식으로 작성해도 문제 되지 않으나
      //         처음에는 undefinded로 지정되어 있기 때문에 오류를 내 뿜는다.

      //         그래서 화살표 함수를 사용해서 아예 새로운 함수를 만들고 그 내부에서 함수를 실행한다.*/}
      //     <button onClick={() => this.scrollBox.scrollToBottom()}>Bottom</button>
      //   </div>
      // <IterationSample />
      <div>
        <button onClick={this.handleClick}>random color</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color} />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
