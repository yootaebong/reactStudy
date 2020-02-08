import { createAction, handleActions } from "redux-actions";
import { call, put, takeLatest } from "redux-saga/effects";
import * as api from "../lib/api";
import { startLoading, finishLoading } from "./loading";
// import createRequestThunk from "../lib/createRequestThunk";

const GET_POST = "sample/GET_POST";
const GET_POST_SUCCESS = "sample/GET_POST_SUCCESS";
const GET_POST_FAILURE = "sample/GET_POST_FAILURE";

const GET_USERS = "sample/GET_USERS";
const GET_USERS_SUCCESS = "sample/GET_USERS_SUCCESS";
const GET_USERS_FAILURE = "sample/GET_USERS_FAILURE";

//코드가 매우 복잡하기 때문에 따로 불리해서 사용하한다
// export const getPost = id => async dispatch => {
//   dispatch({ type: GET_POST }); //요청 시작을 알린다.
//   try {
//     const response = await api.getPost(id);
//     dispatch({
//       type: GET_POST_SUCCESS,
//       payload: response.data
//     }); // 요청 성공
//   } catch (e) {
//     dispatch({
//       type: GET_POST_FAILURE,
//       payload: e,
//       error: true
//     }); // 에러 발생
//     throw e; //나중에 컴포넌트 단에서 에러를 조회 할 수 있도록 해준다.
//   }
// };

// export const getUsers = () => async dispatch => {
//   dispatch({ type: GET_USERS });

//   try {
//     const response = await api.getUsers();
//     dispatch({
//       type: GET_USERS_SUCCESS,
//       payload: response.data
//     });
//   } catch (e) {
//     dispatch({
//       type: GET_USERS_FAILURE,
//       payload: e,
//       error: true
//     });
//     throw e;
//   }
// };

// //위와 동일한 코드
// export const getUsers = createRequestThunk(GET_USERS, api.getUsers);
// export const getPost = createRequestThunk(GET_POST, api.getPost);

export const getPost = createAction(GET_POST, id => id);
export const getUsers = createAction(GET_USERS);

//saga
function* getPostSaga(action) {
  yield put(startLoading(GET_POST)); //로딩 시작
  //파라미터로 action을 받아 오면 액션의 정보를 조회 가능하다.
  try {
    //call을 사용하면 Promise를 반환하는 함수를 호출하고, 기다릴 수 있다.
    //첫번째 파라미터는 함수, 나머지 파라미터는 해당 함수에 넣을 인수이다.
    const post = yield call(api.getPost, action.payload); //api.getPost(action.payload) 와 같은 의미이다.

    yield put({
      type: GET_POST_SUCCESS,
      payload: post.data
    });
  } catch (e) {
    yield put({
      type: GET_POST_FAILURE,
      payload: e,
      error: true
    });
  }

  yield put(finishLoading(GET_POST)); //로딩 완료
}

function* getUsersSaga() {
  yield put(startLoading(GET_USERS));
  try {
    const users = yield call(api.getUsers);
    yield put({
      type: GET_USERS_SUCCESS,
      payload: users.data
    });
  } catch (e) {
    yield put({
      type: GET_USERS_FAILURE,
      payload: e,
      error: true
    });
  }
}

export function* sampleSaga() {
  yield takeLatest(GET_POST, getPostSaga);
  yield takeLatest(GET_USERS, getUsersSaga);
}

export const initialState = {
  loading: {
    GET_POST: false,
    GET_USERS: false
  },
  users: null,
  post: null
};

const sample = handleActions(
  {
    [GET_POST_SUCCESS]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_POST: false
      },
      post: action.payload
    }),
    [GET_USERS_SUCCESS]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_USERS: false
      },
      users: action.payload
    })
  },
  initialState
);

export default sample;
