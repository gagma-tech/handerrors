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
console.log(err.controls.name.hasError);
console.log("---------------");
console.log(err.controls.name.errors);
