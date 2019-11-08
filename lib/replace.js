const regex = /<img[^>]+src=\"(.+?)\"[^>]*>/gm;
const path = require("path");
const fs = require("fs");
const sizeOf = require("image-size");

const replace = (html, base) => {
  return html.replace(regex, (s, fname) => {
    if (s.indexOf('loading="lazy"') !== -1) {
      return s;
    }
    const p = path.join(base, fname);
    if (base && fs.existsSync(p)) {
      const dimensions = sizeOf(p);
      return (
        s.substring(0, 4) +
        ' loading="lazy"' +
        ` width="${dimensions.width}"` +
        ` height="${dimensions.height}"` +
        s.substring(4, s.length)
      );
    } else {
      return s.substring(0, 4) + ' loading="lazy"' + s.substring(4, s.length);
    }
  });
};

module.exports = replace;
