const Intern = require("../lib/Intern");

class Intern {
  constructor (name, id, title, getName, getId, getEmail, getRole, school, getSchool) {
  this.name = name
  this.id = id
  this.title = title
  this.getName = getName()
  this.getId = getId()
  this.getEmail = getEmail()
  this.getRole = getRole()
  this.school = school
  this.getSchool = getSchool()
}
}

test("Can set school via constructor", () => {
  const testValue = "UCLA";
  const e = new Intern("Foo", 1, "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Foo", 1, "test@test.com", "UCLA");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "UCLA";
  const e = new Intern("Foo", 1, "test@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});