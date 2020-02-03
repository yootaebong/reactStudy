import { createStore } from "redux";

const divToggle = document.querySelector(".toggle");
const counter = document.querySelector("h1");
const btnIncrease = document.querySelector("#increase");
const btnDecrease = document.querySelector("#decrease");
const TOGGLE_SWITCH = "TOGGLE_SWITCH";
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increase = differnce => ({ type: INCREASE, differnce });
const decrease = () => ({ type: DECREASE });

const initialState = {
  toggle: false,
  counter: 0
};

//state === undefined 일 떄에는 initialState 를 기본값으로 사용한다.
function reducer(state = initialState, action) {
  //action에 따른 다른 작업 처리.
  switch (action.type) {
    case TOGGLE_SWITCH:
      return {
        ...state, //불변성 유지시키기.
        toggle: !state.toggle
      };
    case INCREASE:
      return {
        ...state,
        counter: state.counter + action.differnce
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

const render = () => {
  const state = store.getState(); // 현 스토어의 상태를 불러온다.
  //toggle
  if (state.toggle) {
    divToggle.classList.add("active");
  } else {
    divToggle.classList.remove("active");
  }
  //counter
  counter.innerText = state.counter;
};

render();

//상태가 업데이트 될 때마다 호출된다.
store.subscribe(render);

//액션을 발생시키자 -> dispatch
divToggle.onclick = () => {
  store.dispatch(toggleSwitch());
};

btnIncrease.onclick = () => {
  store.dispatch(increase(1));
};

btnDecrease.onclick = () => {
  store.dispatch(decrease());
};
