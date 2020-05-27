# handerrors

[![npm version](https://img.shields.io/npm/v/handerrors.svg?style=flat-square)](https://www.npmjs.org/package/handerrors)
[![install size](https://packagephobia.now.sh/badge?p=handerrors)](https://packagephobia.now.sh/result?p=handerrors)
[![npm downloads](https://img.shields.io/npm/dm/handerrors.svg?style=flat-square)](http://npm-stat.com/charts.html?package=handerrors)


a simple library for handing back-end errors with front-end worked with angular,react and vuejs and native js

for exemple if you have a api you want sending data by httpClient you have to validate data in back-end  and you have using framework like laravel if not valide will return a json errors something like 
you have to hand this errors in check if filed hasErrors or not and return errors if field hasErrors
```js 
{
    message:'invalid data',
    errors :{
            firstName:['error 1','error 2'],
            lastName:['error 1','error 2'],
    }
}

```
# Install
```
`npm install handerrors --save-dev`
    or use cdn
 <script src="https://unpkg.com/handerrors"></script>
 ```
## methods api

- handErrors(errors={}) // helpers return a object HandErrors
- setErrors(errors) // set new errors to prop errors setErrors({firstName:['error 1','error 2']})
- hasErrors(field) // return true if giving field is has errors hasErrors('firstName')
- getErrors(field) // return array|string of field if exist else null
- error(field) // return object with HasError/getErrors 
- controls // get field with errors exemple controls.firstName.errors/ controls.firstName.hasErrors // controls.firstName.remove();

### How works ??

```js

import handErrors from 'handerrors';
import axios from 'axios';

...

let erros  = handErrors();
errors.setErrors(
{
    message:'invalid data',
    errors :{
            firstName:['error 1','error 2'],
            lastName:['error 1','error 2'],
    }
}
);
if(errors.controls.someField.hasErrors){
// field has errors
  console.log(errors.controls.someField.errors)
} else {
  // not errors
}
```
### Exemple with vuejs / laravel

```js
<template>
   <div class="form-group">
        <label for="first_name">First Name</label>
        <input
          v-model="formdData.model.first_name"
          @blur="contorls.first_name.remove()"
          :class="{'is-invalid':contorls.first_name.hasErrors}"
          type="text"
          class="form-control"
          id="first_name"
          placeholder="Last Name"
          
        />
        <div v-if="contorls.first_name.hasErrors" class="error">
          <p v-for="msg in contorls.first_name.errors" :key="msg">{{msg}}</p>
        </div>
      </div>
     <div class="form-group">
        <label for="last_name">Last Name</label>
        <input
          v-model="formdData.model.last_name"
          @blur="contorls.last_name.remove()"
          :class="{'is-invalid':contorls.last_name.hasErrors}"
          type="text"
          class="form-control"
          id="last_name"
          placeholder="Last Name"
          
        />
        <div v-if="contorls.last_name.hasErrors" class="error">
          <p v-for="msg in contorls.last_name.errors" :key="msg">{{msg}}</p>
        </div>
      </div>
      <div class="form-group">
        <label for="username">=UserName</label>
        <input
          v-model="formdData.model.username"
          :class="{'is-invalid':contorls.username.hasErrors}"
          @blur="contorls.username.remove()"
          type="text"
          class="form-control"
          id="username"
          placeholder="UserName"
        />
        <div v-if="contorls.username.hasErrors" class="error">
          <p v-for="msg in contorls.username.errors" :key="msg">{{msg}}</p>
        </div>
      </div>
      <div>
       <div class="form-group">
        <label for="password">=password</label>
        <input
          v-model="formdData.model.password"
          :class="{'is-invalid':contorls.password.hasErrors}"
          @blur="contorls.password.remove()"
          type="text"
          class="form-control"
          id="password"
          placeholder="password"
        />
        <div v-if="contorls.password.hasErrors" class="error">
          <p v-for="msg in contorls.password.errors" :key="msg">{{msg}}</p>
        </div>
      </div>
      <div>
        <button @click="createUser()" type="button" class="btn btn-primary">
        <div v-if="formData.submited" class="spinner-grow text-warning" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <span v-else>Register</span>
      </button>
</template>
<script>
import handErrors from 'handerrors'
export default {
  mounted() {
    this.init();
  },
  data: () => {
    return {
      formData: {
        model: {
          username: "",
          first_name: "",
          last_name: "",
          password: ""
        },
        errors: {},
        submited: false,
      }
    };
  },
  methods: {
    createUser() {
      this.formData.submited = true;
      axios.post('endpoint').then(
        res => {
           this.formData.submited = false;
            aler("ok");
        },
        err => {
          this.formData.submited = false;
          this.formData.errors = handErrors(err.body.errors);
        }
      );
    },
    controls(){
    return this.formData.errors;
  },
  
};
</script>

```
### Contribute 
  feel free to Contribute a edit code we can make better
 
