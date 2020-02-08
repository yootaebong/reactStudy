// ssr 서버 인덱스
import React from "react";
import ReactDOMServer from "react-dom/server";
import express from "express";
import { StaticRouter } from "react-router-dom";
import App from "./App";
import path from "path";
import fs from "fs";

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

function createPage(root) {
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
        <script src="${manifest.files["runtime-main.js"]}"></script>
        ${chunks}
        <script src="${manifest.files["main.js"]}"></script>
    <body>
    </html>
    `;
}

const app = express();

//서버 사이드 렌더링을 처리할 핸들러 함수
const serverRender = (req, res, next) => {
  const context = {};
  const jsx = (
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );

  const root = ReactDOMServer.renderToString(jsx);

  res.send(createPage(root));
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
