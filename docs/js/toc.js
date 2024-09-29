function tocPlugin(hook, vm) {
    hook.beforeEach(function (content) {
      return content;
    });
  
    hook.afterEach(function (html, next) {
      if (html.indexOf('[[toc]]') !== -1) {
        let toc = '<ul>';
        const currentUrl = location.hash;
        const headingTags = html.match(/<(h[1-6]).*?id="(.*?)".*?>(.*?)<\/\1>/g) || [];
  
        headingTags.forEach(function (heading) {
          const id = heading.match(/id="(.*?)"/)[1];
          const level = heading.match(/<h([1-6])/)[1];
          const text = heading.replace(/<\/?[^>]+(>|$)/g, ""); // Strip HTML tags
          const link = `<li style="margin-left: ${(level - 1) * 20}px;"><a href="${currentUrl}?id=${id}">${text}</a></li>`;
  
          toc += link;
        });
  
        toc += '</ul>';
        html = html.replace('[[toc]]', toc);
      }
  
      next(html);
    });
  }

if (!window.$docsify) {
    console.error('no docsify');
} else {
    window.$docsify.plugins = [].concat(tocPlugin, window.$docsify.plugins);
}