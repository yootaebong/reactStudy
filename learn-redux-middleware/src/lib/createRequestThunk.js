export default function createRequestThunk(type, request) {
  //성공 실패 액션 타입을 정의
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return params => async dispatch => {
    dispatch({ type });
    try {
      const response = await request(params);
      dispatch({
        type: SUCCESS,
        payload: response.data
      });
    } catch (e) {
      dispatch({
        type: FAILURE,
        payload: e,
        error: true
      });
      throw e;
    }
  };
}
