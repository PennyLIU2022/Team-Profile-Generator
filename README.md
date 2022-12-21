# Team Profile Generator
![License Badge](https://shields.io/badge/license-ISC-green)
## Description
This application takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person.
## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [Contributing](#contributing)
4. [Tests](#tests)
5. [Questions](#questions)

## Installation
Install Jest to do the test first, To do so, please enter "npm i jest".<br />
Install inquirer to generate the HTML for the team profile. To do so, please enter "npm i inquirer@8.2.4".
## Usage
There are two parts in this application, the first one is the test. After installing Jest, enter "npm run tes". If the test passes, it will show PASS highlighted in green.<br />
The second part is to generate the HTML webpage. After installing Inquirer, enter "node index.js". Then you need to choose which role you want to add to the team profile, and provide employee information by answering the questions. Add more employees if you like, finally choose "No more team members needed" to finish. An HTML webpage will be generated automatically.<br />
For more detailed information, please visit the walkthrough video [HERE](https://drive.google.com/file/d/1-yodqio5Dr3YPZOR7DiNScyCdUVLvVNp/view)
## Contributing
WHEN I am prompted for my team members and their information. THEN an HTML file is generated that displays a nicely formatted team roster based on user input.<br />
WHEN I click on an email address in the HTML. THEN my default email program opens and populates the TO field of the email with the address.<br />
WHEN I click on the GitHub username. THEN that GitHub profile opens in a new tab.<br />
WHEN I start the application. THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number.<br />
WHEN I enter the team manager’s name, employee ID, email address, and office number. THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team.<br />
WHEN I select the engineer option. THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu.<br />
WHEN I select the intern option. THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu.<br />
WHEN I decide to finish building my team. THEN I exit the application, and the HTML is generated.<br />
## Tests
There are four test files in total for the four classes (Employee, Manager, Engineer and Intern). To run the test, we can check whether the parameters and the functions in those classes can return the correct information that the users put.
## Questions
[HERE](https://github.com/PennyLIU2022) is my GitHub profile link.
If you have any questions, you can reach me by penny@gmail.com
