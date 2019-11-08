const path = require("path");
const replace = require("./lib/replace");
const addScript = require("./lib/add_lazysizes");
const log = hexo.log;


if (!hexo.config.lazy_load || !hexo.config.lazy_load.enable) {
  return;
}
if (hexo.config.lazy_load.all) {
  // default only posts
  log.info("Add lazy load attribute to all image");
  hexo.extend.filter.register(
    "after_render:html",
    function(html) {
      html = replace(html);
      return html;
    },
    15
  );
} else {
  log.info("Add lazy load attribute to all post");
  hexo.extend.filter.register(
    "after_post_render",
    function(data) {
      if (hexo.config.post_asset_folder === true && hexo.config.lazy_load.width_height !== false) {
        data.content = replace(
          data.content,
          path.join(
            hexo.source_dir,
            data.source.substring(0, data.source.length - 3)
          )
        );
      }
      data.content = replace(data.content);
      return data;
    },
    15
  );
}
if (hexo.config.lazy_load.fallback !== false) {
  // default enable
  log.info("Add fallback lazy load using lazysizes");
  hexo.extend.filter.register("after_render:html", addScript, 25);
}
