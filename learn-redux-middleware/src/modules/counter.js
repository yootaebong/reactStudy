import { createAction, handleActions } from "redux-actions";
import { delay, put, takeEvery, takeLatest } from "redux-saga/effects";

const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";
const INCREASE_ASYNC = "counter/INCREASE_ASYNC";
const DECREASE_ASYNC = "counter/DECREASE_ASYNC";

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// export const increaseAsync = () => dispatch => {
//   setTimeout(() => {
//     dispatch(increase());
//   }, 1000);
// };

// export const decreaseAsync = () => dispatch => {
//   setTimeout(() => {
//     dispatch(decrease());
//   }, 1000);
// };

//마우스 클릭 이벤트가 payload안으로 들어가지 않도록
// () => undefined를 두번째 파라미터로 넣는다.
export const increaseAsync = createAction(INCREASE_ASYNC, () => undefined);
export const decreaseAsync = createAction(DECREASE_ASYNC, () => undefined);

//제너레이터 사용
function* increaseSaga() {
  yield delay(1000); //1초를 기다린다.
  yield put(increase()); //특정 액션 디스패치
}

function* decreaseSaga() {
  yield delay(1000); //1초를 기다린다.
  yield put(decrease()); //특정 액션을 디스패치한다.
}

export function* counterSaga() {
  //takeEvery는 들어오는 모든 액션에 대해 특정 작업을 처리해준다.
  yield takeEvery(INCREASE_ASYNC, increaseSaga);

  //takeLasy는 기존 작업이 있다면 취소하고
  //가장 마지막으로 실행된 작업만 수행한다.
  yield takeLatest(DECREASE_ASYNC, decreaseSaga);
}

const initialState = 0;

const counter = handleActions(
  {
    [INCREASE]: state => state + 1,
    [DECREASE]: state => state - 1
  },
  initialState
);

export default counter;
