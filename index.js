const inquirer = require('inquirer');
const fs = require('fs');
// const util = require("utils");
const generateMd = require("./utils/generateMardkown");

// Arrat that contains all the questions needed to create a proper README.md file
const questions = [
    {
      type: "input",
      name: "project",
      message: "What is the title of your project?"
    },
    {
      type: "input",
      name: "description",
      message: "Please provide a breif description of your project:"
    },
    {
      type: "input",
      name: "installation",
      message: "Are there any required installations, and if so what are the step-by-step instructions?"
    },
    {
      type: "input",
      name: "usage",
      message: "Can you please explain how to use your application in the simpliest of terms:"
    },{
      type: "input",
      name: "contribution",
      message: "Please list all those that have contributed to this project?"
    },{
      type: "input",
      name: "test",
      message: "If needed please provide test instructions:"
    },
    {
      type: "checkbox",
      name: "license",
      message: "Please select a license",
      choices: ["[MIT License](LICENSE.txt)"]
    },
    {
      type: "input",
      name: "github",
      message: "Please enter your Git Hub username:"
    },
    {
      type: "input",
      name: "email",
      message: "Please enter your email address:"
    }
  ]
 
  // Function that creates the README.md, allows user to give the created file a proper title, and give it the date of creation.
  function writeToFile(filename, data) {

    fs.writeFile(filename, data, (error) => {
      if(error)
        throw error;
      console.log("The README.md has been created. Congrats!")
    });
  }

  // This function initializes the readme generator program
  function init() {
    inquirer.prompt(questions)
      .then(function(data) {
        // adds the date of the created README.md file
        let date = new Date();
        let newdate = date.toDateString().replace(" ","_");    
        
        writeToFile("README.md", generateMd(data));
        console.log(data, newdate)
      })
      .catch(error => {
        if(error.isTtyError) {
            console.log(error.isTtyError)
          // Prompt couldn't be rendered in the current environment
        } else {
          console.log(error);
          // Something else went wrong
        }
      });
  }

  // This is the call to the init function that initializes the program
  init();