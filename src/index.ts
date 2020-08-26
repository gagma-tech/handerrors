export interface Errors {
    [error: string]: any;
}

export interface NewErrors {
    [error: string]: {
        errors: any,
        hasErrors: boolean,
        remove: Function
    };
}
export interface Error {
    errors: any,
    hasErrors: boolean,
    remove: Function
}


export default function handErrors(errros: Errors = {}) {

    return new HandErrors(errros);
}

export class HandErrors {

    errors: Errors;
    newErrors: NewErrors;
    constructor(errros: Errors = {}) {
        this.errors = errros;
        this.newErrors = {};
        for (let field in this.errors)
            this.newErrors[field] = this.error(field);

    }

    setErrors(errros: Errors) {
        this.errors = errros;
        for (let field in this.errors)
            this.newErrors[field] = this.error(field);
    }
    hasErrors(field): boolean {

        return this.errors[field] ? true : false;
    }

    getErrors(field): any[] {

        if (!this.hasErrors(field))
            return null;


        return this.errors[field];
    }
    removErrors(field) {
        this.errors[field] = null;
    }

    error(field): Error {
        return {
            hasErrors: this.hasErrors(field),
            errors: this.getErrors(field),
            remove: () => { this.newErrors[field].hasErrors = false; this.newErrors[field].errors = []; }
        }
    }
    get controls(): NewErrors {
        return this.newErrors;
    }

}