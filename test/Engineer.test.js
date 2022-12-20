const engineer = require("../lib/Engineer");

test("Can show Engjneer's GitHub", ()=>{
    const githubUsername = "MikeJohn";
    const name = "Mike";
    const id = 125;
    const email= "mike@gmail.com";
    const engineerObject = new engineer (name,id,email,githubUsername);
    expect(engineerObject.github).toBe(githubUsername);
})

test("Can get Engineer's GitHub using getGithub method", ()=>{
    const githubUsername = "MikeJohn";
    const name = "Mike";
    const id = 125;
    const email= "mike@gmail.com";
    const engineerObject = new engineer(name,id,email,githubUsername);
    expect(engineerObject.getGithub()).toBe(githubUsername);
})

test("Return Engineer using getRole method", ()=>{
    const returnValue = "Engineer";
    const engineerObject = new engineer("Mike", 125, "mike@gmail.com", "MikeJohn");
    expect(engineerObject.getRole()).toBe(returnValue);
})