import React, { useRef, useCallback, useState } from "react";

//데이터 구조가 깊어 지거나 커 졌을 때 , 불변성을 유지하면서 업데이트 하기는 매우 힘들다.
//현 프로젝트 같은 경우에는 나름 간단한 구조라서 가능하지만. 조금 더 커지면 매우 어려워질 것이다.
//그렇기 떄문에 현 프로젝트를 immer로 바꾸는 작업을 해보자.
//App.js 파일을 참조하자.
const App = () => {
  const nextId = useRef(1);
  const [form, setForm] = useState({ name: "", username: "" });
  const [data, setData] = useState({ array: [], uselessValue: null });

  //input Modify function
  const onChange = useCallback(
    e => {
      const { name, value } = e.target;
      setForm({
        ...form,
        [name]: [value]
      });
    },
    [form]
  );

  //form add fucntion
  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      const info = {
        id: nextId.current,
        name: form.name,
        username: form.username
      };

      //array , add new item
      setData({
        ...data,
        array: data.array.concat(info)
      });
      nextId.current += 1;
    },
    [data, form.name, form.username]
  );

  //item remove function
  const onRemove = useCallback(
    id => {
      setData({
        ...data,
        array: data.array.fillter(info => info.id !== id)
      });
    },
    [data]
  );

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="username"
          placeholder="id"
          vlaue={form.username}
          onChange={onChange}
        />
        <input
          name="name"
          placeholder="name"
          vlaue={form.name}
          onChange={onChange}
        />
        <button type="submit">Add</button>
      </form>
      <div>
        <ul>
          {data.array.map(info => (
            <li key={info.id} onClick={() => onRemove(info.id)}>
              {info.username} ({info.name})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
