const loggerMiddleware = store => next => action => {
  //미들웨어의 기본 구조\
  //함수를 반환하는 함수를 반환하는 함수.
  //store = 리덕스 스토어 인스턴스
  //action = 디스패치된 액션
  //next = 파라미터는 함수 형태이고, next(action) 호출하면 그 다음 처리해야할 미들웨어가 있을 경우 미들웨어로
  //없을 경우에는 리듀서로 액션을 넘겨준다.

  console.group(action && action.type); // 액션 타입으로 Log를 그룹화 한다.

  console.log("이전 상태", store.getState());
  console.log("액션", action);
  next(action); //다음 미들웨어 혹은 리듀서에게 전달.
  console.log("다음 상태", store.getState()); //업데이트 된 상태
  console.groupEnd(); //그룹 끝
};

export default loggerMiddleware;
