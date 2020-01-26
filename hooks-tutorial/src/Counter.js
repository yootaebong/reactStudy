import React, { useState, useReducer } from "react";

function reducer(state, action) {
  //action type 에 따라서 다른 작업을 수행한다.
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };

    default:
      return state;
  }
}

const Counter = () => {
  //파라미터 상의 기본 값을 넣어줍니다.
  //즉 카운터의 기본 값을 0으로 설정하겠다는 소리.
  //useState를 호출하면 반환 값으로 배열이 들어오는데, 이 첫번째가 파라미터 값, 두번째가 상태를 설정하는 함수이다.
  //   const [value, setValue] = useState(0);

  //useReducer 첫번째 파라미터에는 리듀서 함수를 넣고, 두번째 파라미터에는 기본 값을 넣어줍니다.
  // 이 Hook을 사용하면 stat값과 dispatch값을 받아오는데, 여기서 state는 현재 가르키고 있는 상태이고 dispatch는 액션을 발생시키는 함수이다.
  // useReducer을 사용하면, 가장 큰 장점이 컴포넌트 로직을 바깥 쪽으로 뺄 수 있다.
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  console.log(state);

  return (
    <div>
      <p>
        now Count is : <b>{state.value}</b>
      </p>
      {/* <button onClick={() => setValue(value + 1)}>+1</button>
      <button onClick={() => setValue(value - 1)}>-1</button> */}
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
    </div>
  );
};

export default Counter;
