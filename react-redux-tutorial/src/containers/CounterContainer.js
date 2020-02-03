import React, { useCallback } from 'react';
// import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

//컴포넌트에서 리덕스 스토어에 접근하여 원하는 상태를 받아오고, 액션도 디스패치 해 주는 컴포넌트를
//컨테이너 컴포넌트라고 명명.

// const CounterContainer = ({ number, increase, decrease }) => {
//   return (
//     <Counter number={number} onIncrease={increase} onDecrease={decrease} />
//   );
// };

// //리덕스 스토어 안의 상태를 컴포넌트의 props값으로 넘겨주기 위한 함수
// const mapStateToProps = state => ({
//   number: state.counter.number,
// });

// //액션 생성 함수를 컴포넌트의 props로 넘겨주기 위해 사용하는 함수.
// const mapDispatchToProps = dispatch => ({
//   //임시 함수들
//   increase: () => {
//     dispatch(increase());
//   },
//   decrease: () => {
//     dispatch(decrease());
//   },
// });

// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);

//useSelector를 사용하면? connect함수를 사용하지 않고도 리덕스의 상태 값을 조회할 수 있다. 혁신!!
//useDispatch를 사용하면 액션을 발생 시키는것이 간단해진다.
//위와 아래는 동일한 코드
const CounterContainer = () => {
  const number = useSelector(state => state.counter.number);
  const dispatch = useDispatch();
  //useCallback을 사용하지 않으면? 함수가 호출 될 때마다 항상 새로운 함수가 생성된다.
  //성능 최적화가 필요하다면? useCallback을 활용하자.
  const onIncrease = useCallback(() => dispatch(increase()), [increase]);
  const onDecrease = useCallback(() => dispatch(decrease()), [decrease]);
  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};

export default React.memo(CounterContainer);
