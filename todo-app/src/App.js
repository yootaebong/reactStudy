import React, { useState, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '1111111111111',
      checked: true,
    },
    {
      id: 2,
      text: '22222222222222',
      checked: true,
    },
    {
      id: 3,
      text: '333333333333333',
      checked: false,
    },
  ]);

  //useRef를 사용하는 이유는 단순히 키 값으로 사용할 것 이기 때문에.
  //렌더링에 영향을 미치지 않는 방향으로 사용. 리소스 절약.
  const nextId = useRef(4);

  //todo의 값이 변경 되었을 때만, onInsert 함수가 재 생성 되도록 구현.
  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos],
  );

  const onRemove = useCallback(
    id => {
      setTodos(todos.filter(todo => todo.id !== id));
    },
    [todos],
  );

  const onToggle = useCallback(
    id => {
      setTodos(
        // map함수를 사용해서 특정 id값을 가진 것을 반전 시켰다.
        //불변성을 유지하면서 특정 코드를 업데이트 시켜야 할 때 map을 사용하면 간결하게 작성 가능!!
        todos.map(todo =>
          todo.id === id
            ? {
                ...todo,
                checked: !todo.checked,
              }
            : todo,
        ),
      );
    },
    [todos],
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
