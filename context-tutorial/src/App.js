import React from "react";
import ColorBox from "./component/ColorBox";
import { ColorProvider } from "./contexts/color";
import SelectColors from "./component/SelectColors";

const App = () => {
  return (
    // Provider를 통해서 Context의 값을 바꿔 줄 수 있따.
    //Provider은 값을 지정해주지 않으면 문제가 생긴다.
    <ColorProvider>
      <div>
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
  );
};

export default App;
