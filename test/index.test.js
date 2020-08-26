var hand = require("../build/index");

describe("test validation errors", () => {
  it("should return true", () => {
    var err = new hand.HandErrors();
    err.setErrors({
      firstName: ["required", "must e string"],
      lastName: ["required", "must e string"],
    });
    expect(err.controls.firstName.hasErrors).toBe(true);
  });

  it("should return arrays of errors", () => {
    var err = new hand.HandErrors();
    err.setErrors({
      firstName: ["required", "must e string"],
      lastName: ["required", "must e string"],
    });

    expect(err.controls.firstName.errors).toStrictEqual([
      "required",
      "must e string",
    ]);
  });
});
