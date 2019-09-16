const regex = /<img +(src).+>/gm;

const replace = html => {
  return html.replace(regex, s => {
    if (s.indexOf('loading="lazy"') !== -1) {
      return s;
    }
    return s.substring(0, 4) + ' loading="lazy" ' + s.substring(4, s.length);
  });
};
exports.posts = function(data) {
  data.content = replace(data.content);
  return data;
};

exports.all = function(html) {
  html = replace(html);
  return html;
};
