const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const dist_dir = path.resolve(__dirname, "dist");
const distPath = path.join(dist_dir, "team.html");
const generateTeam = require("./src/template");

// create an empty array for team members
teamMembers = [];

function runApp(){

    // create a function, so users can choose the team member type
    function creatTeam(){
        inquirer.prompt(
            [{
                type: "list",
                message: "Choose employee type you want to add to your team:",
                name: "addMember",
                choices: ["Manager", "Engineer", "Intern", "No more team members needed"]
            }]
        ).then(function (userChoice){
            switch (userChoice.addMember){
                case "Manager":
                    addManager();
                    break;
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;
                default: htmlCreator();
            }
        })
    }

    // create a function to add Manager information, then return to menu so users can add another team member
    function addManager(){
        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "What's the manager's name?",
            },
            {
                type: "input",
                name: "managerId",
                message: "What's the manager's employee ID number?",
            },
            {
                type: "input",
                name: "managerEmail",
                message: "What's the manager's email address?",
            },
            {
                type: "input",
                name: "managerOfficeNumber",
                message: "What's the manager's office number?",
            },
        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
            teamMembers.push(manager);
            creatTeam();
        })
    }

    // create a function to add Engineer information, then return to menu so users can add another team member
    function addEngineer(){
        inquirer.prompt([
            {
                type: "input",
                name: "engineerName",
                message: "What's the engineer's name?",
            },
            {
                type: "input",
                name: "engineerId",
                message: "What's the engineer's employee ID number?",
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "What's the engineer's email address?",
            },
            {
                type: "input",
                name: "engineerGithub",
                message: "What's the engineer's GitHub username?",
            },
        ]).then(answers => {
            const engineer = new Engineer(answers.engineerName,answers.engineerId, answers.engineerEmail, answers.engineerGithub);
            teamMembers.push(engineer);
            creatTeam();
        })
    }

    // create a function to add Intern information, then return to menu so users can add another team member
    function addIntern(){
        inquirer.prompt([
            {
                type: "input",
                name: "internName",
                message: "What's the intern's name?",
            },
            {
                type: "input",
                name: "internId",
                message: "What's the intern's employee ID number?",
            },
            {
                type: "input",
                name: "internEmail",
                message: "What's the intern's email address?",
            },
            {
                type: "input",
                name: "internSchool",
                message: "What's the intern's school?",
            },
        ]).then(answers => {
            const intern = new Intern (answers.internName,answers.internId, answers.internEmail, answers.internSchool);
            teamMembers.push(intern);
            creatTeam();
        })
    }

    // HTML creator
    function htmlCreator (){
        console.log("Your team profile is created, check team.html under dist folder.")
        fs.writeFileSync(distPath, generateTeam(teamMembers), "utf-8")
    }

    creatTeam();
}

runApp();