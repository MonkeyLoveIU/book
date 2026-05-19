(function () {
  var loaded = false;

  function loadScript(src, cb) {
    var s = document.createElement('script');
    s.src = src;
    s.onload = cb;
    s.async = true;
    document.head.appendChild(s);
  }

  function initMermaid() {
    if (!window.mermaid) return;
    window.mermaid.initialize({
      startOnLoad: true,
      theme: document.documentElement.classList.contains('ayu') ? 'dark' : 'default',
      securityLevel: 'loose'
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    if (loaded) return;
    loaded = true;
    loadScript('https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js', initMermaid);
  });
})();
