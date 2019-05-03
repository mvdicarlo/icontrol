# IControl

Tiny and simple way to watch changes on form fields

### Installation

`npm i -S icontroljs`  
`<script src="some_dir/node_modules/icontroljs/dist/icontrol.min.js"></script>`  

### Documentation

IControl(Element, [Options])  
**options** {  
    change: _function_ `change(event, valid, value) { }`  
    blur: _function_ `blur(event, valid, value) { }`  
    submit: _function_ `submit(event, valid, value /* FormData */) { }`  
    validate: _function_ `validate(value) { return true }`  
}  

**returns** _Element_

**All callbacks have a '_this_' of the element passed into IControl**
**When providing a Form element, the value will always be a [FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData) object**

### Sample Usage (Input)

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

### Sample Usage (Form)

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
