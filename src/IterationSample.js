import React from "react";

const IterationSample = () => {
  //   // 배열 선언
  //   const names = [1, 2, 3, 4];
  //   //jsx코드로 된 배열을 새로 생성한 후 담아주기.
  //   //리엑트에서는 컴포넌트 배열을 렌더링 했을 때, 어떤 원소에 변동이 있었는지 알아 내려고 key값을 사용한다.
  //   //key가 없을 때는 Virtual DOM을 비교하는 과정에서 리스트를 순차적으로 비교하면서 변화를 감지한다.
  //   //하지만 key가 있다면 이 값을 사용하여 어떤 변화가 일어났는지 더욱 빠르게 알 수 있다.
  //   //index를 활용할 수 있지만, index를 key값으로 사용하면 리엑트가 효율적으로 렌더링하지 못한다.
  //   const nameList = names.map((name, index) => <li key={index}>{name}</li>);

  const [names, setNames] = React.useState([
    { id: 1, text: 1 },
    { id: 2, text: 2 },
    { id: 3, text: 3 },
    { id: 4, text: 4 }
  ]);
  //스테이트 선언
  const [inputText, setInputText] = React.useState("");
  const [nextId, setNextId] = React.useState(5);
  //   const nameList = names.map(name => <li key={name.id}>{name.text}</li>);

  const onChange = e => setInputText(e.target.value);

  const onClick = () => {
    //concat을 사용하는 이뉴는?
    //push는 원본 배열에 데이터를 넣는 것이고 concat은 새로운 배열을 만들어서 데이터를 넣어준다.
    //리엑트는 항상 원본을 유지하면서 상태를 업데이트 해야한다 -> 불변성 유지.
    const nextNames = names.concat({
      id: nextId,
      text: inputText
    });

    setNextId(nextId + 1); //아이디값 증가
    setNames(nextNames); //이름 배열 추가
    setInputText(""); //인풋 텍스트 초기화
  };

  const onRemove = id => {
    const nextNames = names.filter(name => name.id !== id);
    setNames(nextNames);
  };

  const nameList = names.map(name => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));

  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{nameList}</ul>;
    </>
  );
};

export default IterationSample;
