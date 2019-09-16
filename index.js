const { addAttr, addScript } = require("./lib");
const log = hexo.log;
if (!hexo.config.lazy_load || !hexo.config.lazy_load.enable) {
  return;
}
if (hexo.config.lazy_load.all) {
  // default only posts
  log.info("Add lazy load attribute to all image");
  hexo.extend.filter.register("after_render:html", addAttr.all, 15);
} else {
  log.info("Add lazy load attribute to all post");
  hexo.extend.filter.register("after_post_render", addAttr.posts, 15);
}
if (hexo.config.lazy_load.fallback !== false) {
  // default enable
  log.info("Add fallback lazy load using lazysizes");
  hexo.extend.filter.register("after_render:html", addScript, 25);
}
