// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    let LicenseBadge = ''
    if (license==='Apache'){
        LicenseBadge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    }else if(license==='BSD') {
        LicenseBadge = `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
    }else if(license==='Eclipse') {
        LicenseBadge = `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`
    }else if(license==='GNU'){
        LicenseBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    }
    return LicenseBadge;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ### ${renderLicenseBadge(data.license)}

  ## TABLE OF CONTENTS
  - [TITLE](#TITLE)
  - [DESCRIPTION](#DESCRIPTION)
  - [INSTALLATION](#INSTALLATION)
  - [USAGE](#USAGE)
  - [LICENSE](#LICENSE)
  - [CONTRIBUTION](#CONTRIBUTION)
  - [TEST](#TEST)
  - [GITHUB](#GITHUB)
  - [EMAIL](#EMAIL)

  ## DESCRIPTION
  ### ${data.description}

  ## INSTALLATION
  ### ${data.installation}

  ## USAGE
  ### ${data.usage}  
  
  ## LICENSE
  ### ${data.license}

  ## CONTRIBUTION
  ### ${data.contribution}

  ## TEST
  ### ${data.test}

  ## Questions
  ### If additional questions arise please reach out to:
  ### ${data.github}
  ### ${data.email}
`;
}

module.exports = generateMarkdown;
