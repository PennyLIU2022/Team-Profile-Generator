const intern = require("../lib/Intern");

test("Can show Intern's School", ()=>{
    const name = "Alex";
    const id = 126;
    const email = "alex@gmail.com";
    const school = "XYZ"
    const internObject = new intern (name,id,email,school);
    expect(internObject.school).toBe(school);
})

test("Can get Intern's School using getSchool method", ()=>{
    const name = "Alex";
    const id = 126;
    const email = "alex@gmail.com";
    const school = "XYZ"
    const internObject = new intern (name,id,email,school);
    expect(internObject.getSchool()).toBe(school);
})

test("Return Intern using getRole method", ()=>{
    const returnValue = "Intern";
    const internObject = new intern("Alex", 126, "alex@gmail.com", "XYZ");
    expect(internObject.getRole()).toBe(returnValue);
})