import React from "react";

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value
  };
}

const Info = () => {
  //   const [name, setName] = React.useState("");
  //   const [nickname, setNickname] = React.useState("");

  //hooks 의 useEffect는 렌더링 될 때마다 특정 작업을 수행하도록 설정할 수 있는 것이다.
  //클래스형 컴포넌트의 componentDidMount와 componentDidUpdate를 합친 형태로 봐도 무방하다.
  //   React.useEffect(
  //     () => {
  //       console.log("effect");
  //       //만약 언마운트 되기 전이나 업데이트되기 직전에 작업을 수행하고 싶은 경우 cleanup함수를 반환 해주어야 한다.
  //       return () => {
  //         console.log("clean up");
  //         console.log(name);
  //       };
  //     },
  //   이곳에 비어있는 배열을 넣을 경우, 맨 처음 렌더링 될 때만 호출되고 이후에는 호출 되지 않는다.
  // 비교하고 싶은 경우에는 배열에 검사하고 싶은 값을 넣어주면 된다.
  // 오직 언 마운트 될 때만 불러오고 싶다면? cleanup function + [] 을 사용해야 한다.
  //     []
  //   );
  //   const onChangeName = e => {
  //     setName(e.target.value);
  //   };

  //   const onChangeNickname = e => {
  //     setNickname(e.target.value);
  //   };

  //   return (
  //     <div>
  //       <div>
  //         <input value={name} onChange={onChangeName} />
  //         <input value={nickname} onChange={onChangeNickname} />
  //       </div>
  //       <div>
  //         <div>
  //           <b>이름 : {name}</b>
  //           <br />
  //           <b>닉네임 : {nickname}</b>
  //         </div>
  //       </div>
  //     </div>
  //   );

  const [state, dispatch] = React.useReducer(reducer, {
    name: "",
    nickname: ""
  });
  const { name, nickname } = state;

  //객체가 지니고 있는 e.tartget값 그 자체를 넘겨서 액션 값으로 사용을 했다.
  const onChange = e => {
    dispatch(e.target);
  };
  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>이름 : {name}</div>
        <div>닉네임 : {nickname}</div>
      </div>
    </div>
  );
};

export default Info;
