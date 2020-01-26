import React from "react";
import Counter from "./Counter";
import Info from "./info";
import Average from "./Average";

// function App() {
//   return (
//     <div className="App">
//       <Counter />
//     </div>
//   );
// }

const App = () => {
  // const [visible, setVisible] = React.useState(false);

  // return (
  //   <div>
  //     <button
  //       onClick={() => {
  //         setVisible(!visible);
  //       }}
  //     >
  //       {visible ? "숨기기" : "보이기"}
  //     </button>
  //     <hr />
  //     {visible && <Info />}
  //   </div>
  // );
  // return <Info />;
  return <Average />;
};

export default App;
