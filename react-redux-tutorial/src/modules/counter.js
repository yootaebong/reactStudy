import { createAction, handleActions } from 'redux-actions';
//ducks 타입의 개발 방법론 사용.

//액션 타입을 지정해준다.
//액션 타입은 대문자 사용. 문자열 내용은 '모듈 이름 / 액션 이름' 과 같은 형태로 넣는다.
//이런식으로 작성하는 이유는 프로젝트가 커 졌을 때 중복 네이밍을 방지하기 위해서.
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

//액션 생성 함수 만들기.
//다른 파일에서 사용할 수 있도록. export 사용하기.
// export const increase = () => ({ type: INCREASE });
// export const decrease = () => ({ type: DECREASE });

//2차 변형
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

//초기 상태 값 지정.
const initialState = {
  number: 0,
};

// 리듀서 함수 생성
// function counter(state = initialState, action) {
//   //상태 값이 변경될 때 반한되는 모든 값은 현 객체를 참조한 새로운 객체로 반환이 되어야 한다.
//   switch (action.type) {
//     case INCREASE:
//       return {
//         number: state.number + 1,
//       };
//     case DECREASE:
//       return {
//         number: state.number - 1,
//       };
//     default:
//       return state;
//   }
// }

//2차 변형 위 코드와 동일하다.
const counter = handleActions(
  {
    [INCREASE]: (state, action) => ({ number: state.number + 1 }),
    [DECREASE]: (state, action) => ({ number: state.number - 1 }),
  },
  initialState,
);
export default counter;
