exports.addAttr = require("./add_lazy_attr");
const hexo_log = require("hexo-log");
exports.log = hexo_log({
  debug: false,
  silent: false
});
exports.addScript = require("./add_lazysizes");
