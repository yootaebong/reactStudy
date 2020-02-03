import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const CHANGE_INPUT = 'todos/CHANGE_INPUT'; //인풋값 변경
const INSERT = 'todos/INSERT'; //새로운 todo 등록
const TOGGLE = 'todos/TOGGLE'; //todo를 체크 /체크해제 한다.
const REMOVE = 'todos/REMOVE'; //todo를 제거한다.

//파라미터가 들어가는 액션 생성자 만들어 주기.
// export const changeInput = input => ({
//   type: CHANGE_INPUT,
//   input,
// });
// let id = 3; //insert 가 호출 될 때마다 하나씩 더해진다.
// export const insert = text => ({
//   type: INSERT,
//   todo: {
//     id: id++,
//     text,
//     done: false,
//   },
// });

// export const toggle = id => ({
//   type: TOGGLE,
//   id,
// });

// export const remove = id => ({
//   type: REMOVE,
//   id,
// });

//2차 변형 -> 위 코드와 동일
export const changeInput = createAction(CHANGE_INPUT, input => input);
let id = 3;
//텍스트를 넣으면 todo객체가 반환.
export const insert = createAction(INSERT, text => ({
  id: id++,
  text,
  done: false,
}));
//파라미터를 그대로 반환!
export const toggle = createAction(TOGGLE, id => id);
export const remove = createAction(REMOVE, id => id);

//초기 상태 값
const initialState = {
  input: '',
  todos: [
    {
      id: 1,
      text: 'text 1',
      done: true,
    },
    {
      id: 2,
      text: 'text 2',
      done: false,
    },
  ],
};

//리듀서 제작
// function todos(state = initialState, action) {
//   switch (action.type) {
//     case CHANGE_INPUT:
//       return {
//         ...state,
//         input: action.input,
//       };
//     case INSERT:
//       return {
//         ...state,
//         todos: state.todos.concat(action.todo),
//       };
//     case TOGGLE:
//       return {
//         ...state,
//         todos: state.todos.map(todo =>
//           todo.id === action.id ? { ...todo, done: !todo.done } : todo,
//         ),
//       };
//     case REMOVE:
//       return {
//         ...state,
//         todos: state.todos.filter(todo => todo.id !== action.id),
//       };
//     default:
//       return state;
//   }
// }

//2차 변형 -> handleActions를 사용해서 더 쉽게 사용하자.
const todos = handleActions(
  {
    //모든 데이터가 payload 를 조회하기 때문에 객체 비구조화 할당을 사용해서 이름을 명명 해주면
    //조금 더 직관적인 코드가 될 수 있다.
    // [CHANGE_INPUT]: (state, { paylod: input }) => ({ ...state, input: input }),
    //immer를 사용하면 객체 불변성을 유지하면서 코드를 업데이트 할 수 있다.
    //아래와 주석 코드는 같은 기능을 한다. depth가 깊어지면 깊어질 수록 immer은 활약하지만
    //너무 얕은 depth에서는 오히려 코드가 길어지는 불상사를 초래한다.
    [CHANGE_INPUT]: (state, { payload: input }) =>
      produce(state, draft => {
        draft.input = input;
      }),

    [INSERT]: (state, { payload: todo }) => ({
      ...state,
      todos: state.todos.concat(todo),
    }),

    [TOGGLE]: (state, { payload: id }) => ({
      ...state,
      todos: state.todos.map(todo =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    }),

    [REMOVE]: (state, { payload: id }) => ({
      ...state,
      todos: state.todos.filter(todo => todo.id !== id),
    }),
  },
  initialState,
);

export default todos;
