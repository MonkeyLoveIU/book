(function () {
  function normalizeInlineMath(text) {
    // Convert \( ... \) into $...$ to improve compatibility in markdown sources.
    return text.replace(/\\\((.+?)\\\)/g, function (_, expr) {
      return '$' + expr + '$';
    });
  }

  function walk(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      node.textContent = normalizeInlineMath(node.textContent);
      return;
    }
    if (node.nodeType !== Node.ELEMENT_NODE) return;
    const tag = node.tagName && node.tagName.toLowerCase();
    if (tag === 'code' || tag === 'pre' || tag === 'script' || tag === 'style') return;
    for (const child of node.childNodes) walk(child);
  }

  document.addEventListener('DOMContentLoaded', function () {
    const writeRoot = document.querySelector('.content main') || document.body;
    walk(writeRoot);
    if (window.MathJax && window.MathJax.typesetPromise) {
      window.MathJax.typesetPromise();
    }
  });
})();
