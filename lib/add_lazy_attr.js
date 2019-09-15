const regex = /<img +(src).+>/gm;

const log = require("hexo-log")({
  debug: false,
  silent: false
});

const replace = html => {
  return html.replace(regex, s => {
    if (s.indexOf('loading="lazy"') !== -1) {
      return s;
    }
    return s.substring(0, 4) + ' loading="lazy" ' + s.substring(4, s.length);
  });
};
exports.posts = function(data) {
  log.info(`Add lazy load attribute in ${data.title} in ${data.source}`);
  data.content = replace(data.content);
  return data;
};

exports.all = function(html) {
  html = replace(html);
  return html;
};
