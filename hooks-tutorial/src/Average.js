import React, { useCallback, useRef } from "react";

const getAverage = numbers => {
  console.log("average cal...");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = React.useState([]);
  const [number, setNumber] = React.useState("");
  //useRef는 hook함수형 컴포넌트에서 ref를 쉽게 사용하게 해주는 것 이다.
  //useRef는 값이 바뀌더라도 컴포넌트가 재 랜더링 되지 않는 다는 것을 명시해야한다.
  const inputEl = useRef(null);

  // 이런 방식으로 사용하게 되면 컴포넌트가 리렌더링될 때 마다 계속 함수가 생성된다.
  // const onChange = e => {
  //   setNumber(e.target.value);
  // };
  // const onInsert = e => {
  //   const nextList = list.concat(parseInt(number));
  //   setList(nextList);
  //   setNumber("");
  // };

  //useCallback을 사용하면? 컴포넌트가 처음 렌더링될 때만 함수를 생성 할 수 있다.
  //useCallback의 첫번째 함수는, 생성하고 싶은 함수를 넣고, 두번째에는 배열을 넣으면 된다.
  //두번째 배열에는 어떠한 값이 바뀌었을 때 새롭게 생성할 수 있는가를 명시한다.
  const onChange = useCallback(e => {
    setNumber(e.target.value);
  }, []); //이렇게 비어있는 배열을 넣게 되면? 맨 처음 한번만 함수를 생성.
  const onInsert = useCallback(() => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
    //useRef를 통해서 만들면 객체의 current값이 실제 엘리먼트를 가르킨다.
    inputEl.current.focus();
  }, [number, list]); //number or list가 바뀌었을 때만 함수를 생성 한다.

  //useMemo기능은 결과값이 바뀌지 않으면 값을 다시 연산하지 않도록 할 수 있다.
  //즉 값이 바뀌지 않았으면 기존에 값을 다시 사용한다.
  const avg = React.useMemo(() => getAverage(list), [list]);

  //즉 useMemo와 useCallback의 차이점은? 숫자, 문자열, 객체처럼 일반 값을 재사용 하는 것은 useMemo
  //함수를 재사용 하는 것은 useCallback을 사용하면 된다.

  return (
    <div>
      <input value={number} onChange={onChange} ref={inputEl} />
      <button onClick={onInsert}>insert</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        {/* <b>average : {getAverage(list)}</b> */}
        <b>average : {avg}</b>
      </div>
    </div>
  );
};

export default Average;
