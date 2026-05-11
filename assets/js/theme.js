(function() {
  var btn = document.getElementById('theme-toggle');
  var icon = document.getElementById('theme-icon');
  if (!btn) return;

  function applyIcon() {
    var t = document.documentElement.getAttribute('data-theme');
    // ☀ means "switch to light", ☾ means "switch to dark"
    icon.textContent = t === 'light' ? '☾' : '☀';
  }

  applyIcon();

  btn.addEventListener('click', function() {
    var cur = document.documentElement.getAttribute('data-theme') || 'dark';
    var next = cur === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch(e) {}
    applyIcon();
  });
})();
