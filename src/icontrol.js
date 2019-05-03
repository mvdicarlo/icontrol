(function(name, context, definition) {
  if (typeof module != 'undefined' && module.exports) module.exports = definition()
  else if (typeof define == 'function' && define.amd) define(definition)
  else context[name] = definition()
})('IControl', this, function() {
  function Control(e, opts) {
    var validTags = ['INPUT', 'FORM', 'SELECT', 'TEXTAREA']
    var noop = function() {}
    var o = opts || {}
    var c = o.change || noop
    var b = o.blur || noop
    var s = o.submit || noop
    var v = o.validate || noop
    if (!(e instanceof Element)) throw 'Not an element'
    if (validTags.indexOf(e.tagName) < 0) throw 'Unsupported Tag: ' + e.tagName
    function val(e) {return e.tagName == 'FORM' ? new FormData(e) : e.val}
    e.type == 'text' || e.tagName == 'TEXTAREA' ? e.addEventListener('input', function(n) {
      c.call(e, n, !!v.call(e, e), val(e))
    }) : e.addEventListener('change', function(n) {
      c.call(e, n, !!v.call(e, e), val(e))
    })
    e.addEventListener('blur', function(n) {
      b.call(e, n, !!v.call(e, e), val(e))
    })
    e.tagName == 'FORM' ? e.addEventListener('submit', function(n) {
      s.call(e, n, !!v.call(e, e), val(e))
    }) : null
    return e;
  }
  return Control
}, this)
