import { HandErrors } from './index';

let err = new HandErrors();

err.setErrors({
    name: [
        'required',
        'must e string',
    ],
    lastName: [
        'required',
        'must e string',
    ],
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