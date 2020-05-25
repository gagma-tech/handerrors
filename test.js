"use strict";
exports.__esModule = true;
var index_1 = require("./index");
var err = new index_1.HandErrors();
err.setErrors({
    name: [
        'required',
        'must e string',
    ],
    lastName: [
        'required',
        'must e string',
    ]
});
console.log(err.controls.name.hasErrors);
console.log("---------------");
console.log(err.controls.name.errors);
console.log("---------------");
console.log(err.controls.name.remove());
console.log("---------------");
console.log(err.controls.name.hasErrors);
console.log("---------------");
console.log(err.controls.name.errors);
