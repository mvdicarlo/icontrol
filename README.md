# IControl
Tiny and simple way to watch changes on form fields

### Documentation
IControl(Element, [Options]);
*options* {
  change: *function* ```change(event, valid, value) { }```
  blur: *function* ```blur(event, valid, value) { }```
  submit: *function* ```submit(event, valid, value /* FormData */) { }```
  validate: *function* ```validate(value) { return true }```
}
*returns* Element

**All callbacks have a '*this*' of the element passed into IControl**
**When providing a Form element, the value will always be a [FormData] (https://developer.mozilla.org/en-US/docs/Web/API/FormData) object**
### Sample Usage (Input)
```
<input type="text" name="name" id="name">

<script>
  var control = IControl(document.getElementById('name'), {
    change(event, valid, value) {
      console.log(this, event, valid, value);
    },
    blur(event, valid, value) {
      console.log(this, event, valid, value);
    },
    validate(value) {
      console.log(this, value);
    },
  })
</script>
```

### Sample Usage (Form)
```
<form action="" id="form">
  <input type="text" name="name" id="name">
  <input type="checkbox" name="cbox" id="cbox">
  <select name="v" id="select">
    <option value="1">Hello</option>
    <option value="2">Goodbye</option>
  </select>
</form>

<script>
  var control = IControl(document.getElementById('form'), {
    change(event, valid, value) {
      console.log(this, event, valid, value);
    },
    validate(value) {
      console.log(this, value);
    },
    submit(event, valid, value) {
      console.log(this, event, valid, value);
    }
  })
</script>
```
