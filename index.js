import SNIPS from './snippet-data.js';

const renderSnips = snippets => {
  // map over the SNIPS

  // transform that snip into the HTML
  const snippetHTML = snippets
    .map(
      snippet =>
        `<div class="snip">
    <div class="text">
      <h2>${snippet.title}</h2>
      <p>${snippet.description}</p>
    </div>
    <!-- preserves whitespace -->
    <pre><code class="${snippet.language}">${he.encode(
          snippet.code
        )}</code></pre>
  </div>`
    )
    .join('');
  console.log(snippetHTML);
  // put that HTML right into #snippets
  const snippetsElem = document.getElementById('snippets');
  console.log(snippetsElem);
  snippetsElem.innerHTML = snippetHTML;
};

renderSnips(SNIPS);

hljs.initHighlightingOnLoad();
