// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.project}

  ## Description
  ${data.description}

  ## Table of Contents
  
  *[Installation](#installation)
  *[Usage](#usage)
  *[License](#license)
  *[Contribution](#contribution)
  *[Test](#test)
  *[Questions](#questions)

  ## Installation

  To install required dependencies, please run the followin = 

  \`
    ${data.installation}
  \`

  ## Usage

  ${data.usage}

  ## License

  This repo is currently using ${data.license} license.

  ## Contribution

  These fellow coders are contributors to this project ${data.contribution}.

  ## Tests

  If you would like to run a test please run the following:

  \`
  ${data.test}
  \`

  ## Questions

  If you have any questions please feel free to reach out to [${data.email}](mailto:${data.email}), and for more of my work feel free to take a look at my GitHub [${data.username}](https://github.com/${data.username})

`;
}

module.exports = generateMarkdown;
