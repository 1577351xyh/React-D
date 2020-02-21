const { override, fixBabelImports } = require("customize-cra");
//装饰起配置
const { addDecoratorsLegacy } = require("customize-cra");
module.exports = override(

  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: "css",
  }),
  addDecoratorsLegacy(),
  );