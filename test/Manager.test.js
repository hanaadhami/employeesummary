const Manager = require("../lib/Manager");

class Manager {
  constructor (name, id, title, getName, getId, getEmail, getRole, officeNumber, getRole) {
  this.name = name
  this.id = id
  this.title = title
  this.getName = getName()
  this.getId = getId()
  this.getEmail = getEmail()
  this.getRole = getRole()
  this.officeNumber = officeNumber
  this.getRole = getRole
}
}

test("Can set office number via constructor argument", () => {
  const testValue = 100;
  const e = new Manager("Foo", 1, "test@test.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
  const testValue = "Manager";
  const e = new Manager("Foo", 1, "test@test.com", 100);
  expect(e.getRole()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
  const testValue = 100;
  const e = new Manager("Foo", 1, "test@test.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});