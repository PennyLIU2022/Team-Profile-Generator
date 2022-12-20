const employee = require("../lib/Employee");

test("Can create an new employee", ()=>{
    const newEmployee = new employee();
    expect(typeof(newEmployee)).toBe("object");
})

test("Can show Emplyee Name", ()=>{
    const name = "Mike";
    const newEmployee = new employee(name);
    expect(newEmployee.name).toBe(name);
})

test("Can show Emplyee Id", ()=>{
    const name = "Mike";
    const id = 123;
    const newEmployee = new employee(name,id);
    expect(newEmployee.id).toBe(id);
})

test("Can show Emplyee Email", ()=>{
    const name = "Mike";
    const id = 123;
    const email = "mike@test.com";
    const newEmployee = new employee(name,id,email);
    expect(newEmployee.email).toBe(email);
})

test("Can get Emplyee Name using getName method", ()=>{
    const actualName = "John";
    const Emplyee = new employee(actualName);
    const expectName = Emplyee.getName();
    expect(expectName).toBe(actualName);
})

test("Can get Emplyee Id using getId method", ()=>{
    const actualName = "John";
    const actualId = 124;
    const Emplyee = new employee(actualName,actualId);
    const expectId = Emplyee.getId();
    expect(expectId).toBe(actualId);
})

test("Can get Emplyee Email using getEmail method", ()=>{
    const actualName = "John";
    const actualId = 124;
    const actualEmail = "John@test.com";
    const Emplyee = new employee(actualName,actualId,actualEmail);
    const expectEmail = Emplyee.getEmail();
    expect(expectEmail).toBe(actualEmail);
})

test("Return Employee using getRole method", ()=>{
    const returnValue = "Employee";
    const Emplyee = new employee("John", 124, "John@test.com");
    const expectReturn = Emplyee.getRole();
    expect(expectReturn).toBe(returnValue);
})