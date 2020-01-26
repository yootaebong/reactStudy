import React from "react";

const getAverage = numbers => {
  console.log("average cal...");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = React.useState([]);
  const [number, setNumber] = React.useState("");

  const onChange = e => {
    setNumber(e.target.value);
  };

  const onInsert = e => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
  };

  //useMemo기능은 결과값이 바뀌지 않으면 값을 다시 연산하지 않도록 할 수 있다.
  //즉 값이 바뀌지 않았으면 기존에 값을 다시 사용한다.
  const avg = React.useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange} />
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
