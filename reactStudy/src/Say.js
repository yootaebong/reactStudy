import React from "react";

const Say = () => {
  //useState 함수의 인자에는 상태의 초기값을 넣는다.
  //함수 호출 시 배열이 반환 되는데
  //배열의 첫번째 원소는 원소의 현재 상태이고
  //배열의 두번째 원소는 원소의 상태를 바꾸어 주는 함수.

  //여러개 사용해도 상관이 없다.
  const [msg, setMsg] = React.useState("");
  const onClickEnter = () => setMsg("안녕하세요");
  const onClickLeve = () => setMsg("bye");

  const [color, setColor] = React.useState("black");
  //state를 업데이트 할 때에는 setState 나 useState의 function을 사용 해야한다.
  //배열이나 객체를 업데이트 할 때에는 ? 사본을 생성, 업데이트 -> 사본을 원본에 대입.

  return (
    <div>
      {/* 리엑트에서는 이벤트는 함수 형태의 객체를 전달하게 된다. */}
      <button onClick={onClickEnter}>Enter</button>
      <button onClick={onClickLeve}>Leave</button>
      <h1 style={{ color }}>{msg}</h1>
      <button onClick={() => setColor("red")}> red</button>
      <button onClick={() => setColor("green")}> green</button>
    </div>
  );
};

export default Say;
