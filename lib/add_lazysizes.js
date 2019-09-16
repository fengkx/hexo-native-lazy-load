const jsSrc = `https://cdn.jsdelivr.net/npm/lazysizes@5.1.1/lazysizes.min.js`;
module.exports = html => {
  if (!/<\/body>/gi.test(html) || !/<img/.test(html)) {
    return html;
  }
  if (html.indexOf("lazysizes") === -1) {
    const lastIndex = html.lastIndexOf("</body>");
    const script = `<script>
    if(!('loading' in HTMLImageElement.prototype)) {
        const srp = document.createElement('script');
        srp.src = '${jsSrc}';
        document.body.append(srp);
        const imgs = document.querySelectorAll('img');
        imgs.forEach(el => {
            el.setAttribute('data-src', el.getAttribute('src'));
            el.removeAttribute('src');
            el.classList.add('lazyload');
    })
}
</script>`;
    return `${html.substring(0, lastIndex)}${script}${html.substring(
      lastIndex,
      html.length
    )}`;
  }
  return html;
};
