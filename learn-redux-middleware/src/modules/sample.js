import { handleActions } from "redux-actions";
import * as api from "../lib/api";
import createRequestThunk from "../lib/createRequestThunk";

const GET_POST = "sample/GET_POST";
const GET_POST_SUCCESS = "sample/GET_POST_SUCCESS";
// const GET_POST_FAILURE = "sample/GET_POST_FAILURE";

const GET_USERS = "sample/GET_USERS";
const GET_USERS_SUCCESS = "sample/GET_USERS_SUCCESS";
// const GET_USERS_FAILURE = "sample/GET_USERS_FAILURE";

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

//위와 동일한 코드
export const getUsers = createRequestThunk(GET_USERS, api.getUsers);
export const getPost = createRequestThunk(GET_POST, api.getPost);

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
