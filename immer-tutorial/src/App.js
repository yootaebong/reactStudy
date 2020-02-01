import React, { useRef, useCallback, useState } from "react";
import produce from "immer";

const App = () => {
  const nextId = useRef(1);
  const [form, setForm] = useState({ name: "", username: "" });
  const [data, setData] = useState({ array: [], uselessValue: null });

  //input Modify function
  const onChange = useCallback(e => {
    const { name, value } = e.target;

    setForm(
      produce(draft => {
        draft[name] = value;
      })
    );
  }, []);

  //form add fucntion
  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      const info = {
        id: nextId.current,
        name: form.name,
        username: form.username
      };

      setData(
        produce(drafy => {
          drafy.array.push(info);
        })
      );

      //form reset
      setForm({
        name: "",
        username: ""
      });
      nextId.current += 1;
    },
    [form.name, form.username]
  );

  //item remove function
  const onRemove = useCallback(id => {
    setData(
      //   immer를 사용한다고 해서 꼭 코드가 깔끔해지는 것은 아니다.
      //   상황에 맞게 코드가 복잡해 질 경우 immer을 사용하는 것으로 충분하다.
      produce(draft => {
        draft.array.splice(
          draft.array.findIndex(info => info.id === 1),
          1
        );
      })
    );
  }, []);

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
