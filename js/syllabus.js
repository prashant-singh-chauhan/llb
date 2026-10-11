// Search and expand/collapse for syllabus pages (Bootstrap accordion markup).
(function () {
  var modules = Array.prototype.slice.call(document.querySelectorAll('.syllabus-module'));
  var search = document.getElementById('syllabusSearch');
  var empty = document.getElementById('syllabusEmpty');

  function collapseOf(module) {
    return bootstrap.Collapse.getOrCreateInstance(module.querySelector('.accordion-collapse'), { toggle: false });
  }

  function setAll(open) {
    modules.forEach(function (module) {
      if (!module.hidden) {
        open ? collapseOf(module).show() : collapseOf(module).hide();
      }
    });
  }

  function filter() {
    var query = search.value.trim().toLowerCase();
    var visible = 0;

    modules.forEach(function (module) {
      var titleMatch = module.querySelector('.module-title').textContent.toLowerCase().indexOf(query) !== -1;
      var topicMatch = false;

      module.querySelectorAll('.topic').forEach(function (topic) {
        var match = query !== '' && topic.textContent.toLowerCase().indexOf(query) !== -1;
        topic.classList.toggle('is-match', match);
        topicMatch = topicMatch || match;
      });

      module.hidden = query !== '' && !titleMatch && !topicMatch;
      if (!module.hidden) {
        visible++;
        if (query !== '') collapseOf(module).show();
      }
    });

    empty.hidden = visible > 0;
  }

  document.getElementById('expandAll').addEventListener('click', function () { setAll(true); });
  document.getElementById('collapseAll').addEventListener('click', function () { setAll(false); });
  search.addEventListener('input', filter);
})();
