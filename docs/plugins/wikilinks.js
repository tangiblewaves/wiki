'use strict';

// Docsify plugin functions
function plugin(hook, vm) {
    hook.beforeEach(function (content) {
        return content;
    });

    hook.afterEach(function (html, next) {
        // Create a DOM element to hold the HTML content
        var mdDom = document.createElement('div');
        mdDom.innerHTML = html;

        // Get the current relative path from the URL hash
        var index = location.hash.lastIndexOf('/');
        var relativePath = location.hash.substring(0, index + 1);

        // Collect all paragraph and list item elements
        const list = [];
        list.push(...mdDom.getElementsByTagName('p'));
        list.push(...mdDom.getElementsByTagName('li'));

        // Loop through each element to find and replace the custom link syntax
        for (var i = 0; i < list.length; i++) {
            var para = list[i].innerHTML;

            // Replace the custom link pattern [[link|showtext]] or [[alias]]
            const eachParaRes = para.replace(/\[\[([^\[\]]+)\]\]/g, function (content) {
                const innerContent = content.replace('[[', '').replace(']]', '');
                const linkAliasSps = innerContent.split('|'); // Split into [link, alias]

                // If only the alias is provided (e.g., [[Step 1: Connect Power]])
                if (linkAliasSps.length === 1) {
                    var alias = linkAliasSps[0].trim();

                    // Slugify the alias: convert to lowercase and replace spaces and special characters with hyphens
                    var slug = alias.toLowerCase().replace(/[^a-z0-9]+/g, '-');

                    // Return the formatted link with the slug and alias
                    return `<a href="#${slug}.md">${alias}</a>`;
                }

                // Handle cases with both link and alias, and also already transformed links
                const link = linkAliasSps.length === 2 ? `${linkAliasSps[0].trim()}` : innerContent;
                var showText = linkAliasSps.length === 2 ? linkAliasSps[1].trim() : innerContent;

                // Find existing <a> tags in the paragraph and extract href if link is already transformed
                const aTagRegex = /<a.*?href=["'](.*?)["'].*?>(.*?)<\/a>/;
                const match = aTagRegex.exec(link);

                if (match) {
                    // If an <a> tag is found, use the href from the existing link
                    const href = match[1];
                    return `<a href="${href}" target="_blank">${showText}</a>`;
                }

                // Handle internal links or links not yet transformed
                var hashPath = link;
                var topic = '';

                // Check if the link has a hash for an internal topic (e.g., link#topic)
                if (link.indexOf('#') != -1) {
                    const linkTopicSps = link.split('#'); // Split into [link, topic]
                    hashPath = linkTopicSps[0];
                    topic = `?id=${linkTopicSps[1]}`;
                }

                // If showText contains an additional pipe, remove it
                if (showText.split("|").length == 2) {
                    showText = showText.split("|")[1];
                }

                // Check if the link is an absolute path (starts with '/')
                if (hashPath.indexOf('/') === 0) {
                    return `<a href="#${hashPath}${topic}">${showText}</a>`;
                } else {
                    return `<a href="${relativePath}${hashPath}${topic}">${showText}</a>`;
                }
            });

            list[i].innerHTML = eachParaRes;
        }

        // Pass the modified HTML to the next step
        next(mdDom.innerHTML);
    });
}
if (!window.$docsify) {
    console.error('no docsify');
} else {
    window.$docsify.plugins = [].concat(plugin, window.$docsify.plugins);
}
