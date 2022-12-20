const manager = require('../lib/Manager');

test("Can show Manager's Office Number", ()=>{
    const name = "James";
    const id = 121;
    const email = "james@gmail.com";
    const officeNumber = 1;
    const managerObject = new manager (name,id,email,officeNumber);
    expect(managerObject.officeNumber).toBe(officeNumber);
})

test("Can get Manager's Office Number using getOfficeNumber method", ()=>{
    const name = "James";
    const id = 121;
    const email = "james@gmail.com";
    const officeNumber = 1;
    const managerObject = new manager (name,id,email,officeNumber);
    expect(managerObject.getOfficeNumber()).toBe(officeNumber);
})

test("Return Manager using getRole method", ()=>{
    const returnValue = "Manager";
    const managerObject = new manager("James", 121, "james@gmail.com", 1);
    expect(managerObject.getRole()).toBe(returnValue);
})
