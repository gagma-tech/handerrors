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
console.log(err.controls().name.hasError);
console.log("---------------");
console.log(err.controls().name.errors);
