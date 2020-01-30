import React, { useCallback, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');

  //useCallback을 사용해서 렌더링 될 때마다 재 생성 되는 것이 아닌. 한번 만들어 두고
  // 재사용하는 방향으로 진행.
  const onChange = useCallback(e => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    e => {
      onInsert(value);
      setValue('');
      //sumit 이벤트는 브라우저 새로고침을 발생시키는데 그것을 방지하기위해서
      //함수를 호출해준다.
      e.preventDefault();
    },
    [onInsert, value],
  );

  return (
    //클릭 이벤트만으로도 가능한데? submit을 사용하는 이유는???
    //submit은 엔터 이벤트가 자동으로 발생한다.
    //만약 클릭으로 진행한다면 keypress 이벤트를 따로 발생시켜줘야하기 때문에
    //추가 로직이 발생한다.
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input placeholder="insert todo" value={value} onChange={onChange} />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
