'use strict';

// Docsify plugin functions
function plugin(hook, vm) {
    hook.beforeEach(function (content) {
        // Replace PmWiki markup with corresponding HTML and Markdown

        // Replace '''''bold italics''''' with <b><i>bold italics</i></b>
        content = content.replace(/'''''(.*?)'''''/g, function (match, p1) {
            return `<b><i>${p1}</i></b>`;
        });

        // Replace '''bold''' with <b>bold</b>
        content = content.replace(/'''(.*?)'''/g, function (match, p1) {
            return `<b>${p1}</b>`;
        });

        // Replace ''italics'' with <i>italics</i>
        content = content.replace(/''(.*?)''/g, function (match, p1) {
            return `<i>${p1}</i>`;
        });

        // Replace @@monospaced@@ with <code>monospaced</code>
        content = content.replace(/@@(.*?)@@/g, function (match, p1) {
            return `<code>${p1}</code>`;
        });

        // Replace !!!! with ### (Markdown H3)
        content = content.replace(/!!!!\s*(.*?)(\n|$)/g, function (match, p1) {
            return `### ${p1}\n`;
        });

        // Replace !!! with ## (Markdown H2)
        content = content.replace(/!!!\s*(.*?)(\n|$)/g, function (match, p1) {
            return `## ${p1}\n`;
        });

        // Replace !! with # (Markdown H1)
        content = content.replace(/!!\s*(.*?)(\n|$)/g, function (match, p1) {
            return `# ${p1}\n`;
        });

        return content;
    });

    hook.afterEach(function (html, next) {
        // Step 1: Replace %embed% <a href="...">...</a> %% with an iframe
        html = html.replace(/%embed%\s*<a.*?href="(https:\/\/youtu\.be\/|https:\/\/www\.youtube\.com\/watch\?v=)([a-zA-Z0-9_-]+)".*?>.*?<\/a>\s*%%/g, function (match, baseUrl, videoId) {
          return `
            <iframe width="560" height="315" 
              src="https://www.youtube.com/embed/${videoId}" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen>
            </iframe>`;
        });
    
        next(html);  // Pass the transformed HTML to the next step in rendering
      });
}

if (!window.$docsify) {
    console.error('no docsify');
} else {
    window.$docsify.plugins = [].concat(plugin, window.$docsify.plugins);
}