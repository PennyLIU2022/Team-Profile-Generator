const generateTeam = team => {

    // create the manager div in html
    const generateManager = manager => {
        return `
     <div class="card employee-card">
        <div class="card-header bg-info text-white">
            <h2 class="card-title">${manager.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${manager.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
     </div>
        `;
    };

    // create the engineer div in html
    const generateEngineer = engineer => {
        return `
     <div class="card employee-card">
        <div class="card-header bg-info text-white">
            <h2 class="card-title">${engineer.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${engineer.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${engineer.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
            </ul>
        </div>
     </div>
        `;
    };

    // create the intern div in html
    const generateIntern = intern => {
        return `
     <div class="card employee-card">
        <div class="card-header bg-info text-white">
            <h2 class="card-title">${intern.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${intern.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${intern.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                <li class="list-group-item">School: ${intern.getSchool()}</li>
            </ul>
        </div>
     </div>
        `;
    };

    // let html to be an empty array
    const html = [];

    // filter each employee type, then use map to creat a new array populated with the results of calling generate function
    html.push(
        team.filter(employee => employee.getRole()==="Manager")
        .map(manager => generateManager(manager))
        );
    html.push(
        team.filter(employee => employee.getRole("Engineer"))
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    html.push(
        team.filter(employee => employee.getRole("Intern"))
        .map(intern => generateIntern(intern))
        .join("")
    );

    // return a new string by concatenating all of the elements in the array
    return html.join("");
}

// Creat the export function to generate the html page
module.exports = team => {
    return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossorigin="anonymous"
        />
        <link 
         rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" 
         integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" 
         crossorigin="anonymous" referrerpolicy="no-referrer" 
        />
        <link rel="stylesheet" href="./style.css">
    
        <title>My Team Profile</title>
    </head>

    <body>
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 jumbotron mb-3 bg-gradient-info text-white">
            <h1 class="text-center">My Team</h1>
          </div>
        </div>
      </div> 

      <div class="container">
        <div class="row">
            <div class="row col-12 d-flex justify-content-center">
              ${generateTeam(team)}
            </div>
        </div>
      </div>
    </body>
  </html>
    `
}