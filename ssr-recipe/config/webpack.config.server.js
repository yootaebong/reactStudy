const nodeExternals = require("webpack-node-externals");
const paths = require("./paths");
const getCSSModuleLocalIdent = require("react-dev-utils/getCSSModuleLocalIdent"); //CSS 모듈의 고유 className을 만들 때 필요하다.
const webpack = require("webpack");
const getClientEnviroment = require("./env");

const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;
// console.log(paths);
const publicUrl = paths.servedPath.slice(0, -1);

const env = getClientEnviroment(publicUrl);

module.exports = {
  mode: "production", //프로덕션 모드로 활성화 될 경우 최적화 옵션들을 활성화 시킵니다.
  entry: paths.ssrIndexJs, //entry path
  target: "node", //노드 환경에서 실행될 것이라는것을 명시.
  output: {
    path: paths.ssrBuild, //빌드 경로
    filename: "server.js", //파일 이름
    chunkFilename: "js/[name].chunk.js", //청크파일 이름
    publicPath: paths.servedPath //정적파일이 제공될 경로를 명시
  },
  module: {
    rules: [
      {
        oneOf: [
          //자바스크립트를 위한 처리
          //기존 webpack.config.js를 참고하여 작성합니다.
          {
            test: /\.(js|mjs|jsx|ts|tsx)$/,
            include: paths.appSrc,
            loader: require.resolve("babel-loader"),
            options: {
              customize: require.resolve(
                "babel-preset-react-app/webpack-overrides"
              ),
              plugins: [
                [
                  require.resolve("babel-plugin-named-asset-import"),
                  {
                    loaderMap: {
                      svg: {
                        ReactComponent: "@svgr/webpack?-svgo![path]"
                      }
                    }
                  }
                ]
              ],
              cacheDirectory: true,
              cacheCompression: false,
              compact: false
            }
          },
          //css를 위한 처리
          {
            test: cssRegex,
            exclude: cssModuleRegex,
            loader: require.resolve("css-loader"),
            options: {
              //   이 옵션을 주어야지 실제 css파일을 생성하지 않는다.
              onlyLocals: true
            }
          },
          //   css 모듈을 위한 처리
          {
            test: cssModuleRegex,
            loader: require.resolve("css-loader"),
            options: {
              modules: true,
              onlyLocals: true,
              getLocalIdent: getCSSModuleLocalIdent
            }
          },
          //   sass를 위한 처리
          {
            test: sassRegex,
            exclude: sassModuleRegex,
            use: [
              {
                loader: require.resolve("css-loader"),
                options: {
                  onlyLocals: true
                }
              },
              require.resolve("sass-loader")
            ]
          },
          //   sass+ css module을 위한 처리
          {
            test: sassRegex,
            exclude: sassModuleRegex,
            use: [
              {
                loader: require.resolve("css-loader"),
                options: {
                  modules: true,
                  onlyLocals: true,
                  getLocalIdent: getCSSModuleLocalIdent
                }
              },
              require.resolve("sass-loader")
            ]
          },
          // url-loader를 위한 설정
          {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            loader: require.resolve("url-loader"),
            options: {
              emitFile: false, //파일을 따로 저장하지 않는다.
              limit: 10000, // 기본은 9.76kb가 넘어가면 파일로 저장을하는데, emitFile을 false설정 했기 때문에 경로만 준비하고 파일은 저장하지 않는다.
              name: "static/media/[name].[hash:8].[ext]"
            }
          },
          //위 설정된 확장자를 제외한 파일은 -> file-loader를 사용한다.
          {
            loader: require.resolve("file-loader"),
            exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
            options: {
              emitFile: false,
              name: "static/media/[name].[hash:8].[ext]"
            }
          }
        ]
      }
    ]
  },
  resolve: {
    modules: ["node_modules"]
  },
  externals: [nodeExternals()],
  plugins: [
    new webpack.DefinePlugin(env.stringified) //환경 변수 주입.
  ]
};
