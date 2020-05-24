export interface Errors {
    [error: string]: any;
}

export interface NewErrors {
    [error: string]: {
        errors: any,
        hasError: boolean
    };
}
export interface Error {
    errors: any,
    hasError: boolean
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

    error(field): Error {
        return {
            hasError: this.hasErrors(field),
            errors: this.getErrors(field)
        }
    }
    controls(): NewErrors {

        return this.newErrors;
    }

}