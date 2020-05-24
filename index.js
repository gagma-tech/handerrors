"use strict";
exports.__esModule = true;
exports.HandErrors = void 0;
var HandErrors = /** @class */ (function () {
    function HandErrors(errros) {
        if (errros === void 0) { errros = {}; }
        this.errors = errros;
        this.newErrors = {};
        for (var field in this.errors)
            this.newErrors[field] = this.error(field);
    }
    HandErrors.prototype.setErrors = function (errros) {
        this.errors = errros;
        for (var field in this.errors)
            this.newErrors[field] = this.error(field);
    };
    HandErrors.prototype.hasErrors = function (field) {
        return this.errors[field] ? true : false;
    };
    HandErrors.prototype.getErrors = function (field) {
        if (!this.hasErrors(field))
            return null;
        return this.errors[field];
    };
    HandErrors.prototype.error = function (field) {
        return {
            hasError: this.hasErrors(field),
            errors: this.getErrors(field)
        };
    };
    Object.defineProperty(HandErrors.prototype, "controls", {
        get: function () {
            return this.newErrors;
        },
        enumerable: false,
        configurable: true
    });
    return HandErrors;
}());
exports.HandErrors = HandErrors;
