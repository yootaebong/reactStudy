// ssr 서버 인덱스
import React from "react";
import ReactDOMServer from "react-dom/server";
import express from "express";
import { StaticRouter } from "react-router-dom";
import App from "./App";
import path from "path";
import fs from "fs";
import { createStore, applyMiddleware } from "redux";˙
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./modules";
import PreloadContext from "./lib/PreloadContext";

//asset-manifest.json에서 파일 경로들을 조회
const manifest = JSON.parse(
  fs.readFileSync(path.resolve("./build/asset-manifest.json"), "utf8")
);

// const test = Object.keys(manifest.files).filter(key => /chunk\.js$/.exec(key));
// console.log(manifest.files["main.css"]);

const chunks = Object.keys(manifest.files)
  .filter(key => /chunk\.js$/.exec(key))
  .map(key => `<script src="${manifest.files[key]}"></script>`)
  .join("");

function createPage(root, stateScript) {
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="utf-8"/>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta
            name="viewport"
            content="width=device-width,initial-scale=1,shrink-to-fit=no"
        />
        <meta name="theme-color" content="#000000" />
        <title>React App</title>
        <link href="${manifest.files["main.css"]}" rel="stylesheet" />
    </head>
    <body>
        <noscript> js run! </noscript>
        <div id="root">
            ${root}
        </div>
        ${stateScript}
        <script src="${manifest.files["runtime-main.js"]}"></script>
        ${chunks}
        <script src="${manifest.files["main.js"]}"></script>
    <body>
    </html>
    `;
}

const app = express();

//서버 사이드 렌더링을 처리할 핸들러 함수
const serverRender = async (req, res, next) => {
  const context = {};
  const store = createStore(rootReducer, applyMiddleware(thunk));
  const preloadContext = {
    done: false,
    premises: []
  };
  const jsx = (
    <PreloadContext.Provider value={preloadContext}>
      <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
          <App />
        </StaticRouter>
      </Provider>
    </PreloadContext.Provider>
  );
  //리엑트를 사용해서 정적 페이지를 만들 때 사용한다.
  //지금 단게에서 Markup을 사용한 이유는 Preloader로 사용했던 함수를 호출하기 위해서.
  ReactDOMServer.renderToStaticMarkup(jsx);

  try {
    await Promise.all(preloadContext.premises); //모든 프로미스를 기다린다.
  } catch (e) {
    return res.status(500);
  }
  preloadContext.done = true;
  const root = ReactDOMServer.renderToString(jsx);

  //JSON을 문자열로 변환하고 악성 스크립트 실행되는 것을 방지하기 위해 <를 치환 처리.
  const stateString = JSON.stringify(store.getState()).replace(/</g, `\\u003c`);
  const stateScript = `<script>__PRELOADED_STATE__=${stateString}</script>`; //리덕스 초기 상태를 스크립트로 주입한다.

  res.send(createPage(root, stateScript));
};
const serve = express.static(path.resolve("./build"), {
  index: false //"/"경로에서 index.html을 보여주지 않도록 설정
});

app.use(serve);
app.use(serverRender);

//5000 port use

app.listen(5000, () => {
  console.log("Running 5000");
});
