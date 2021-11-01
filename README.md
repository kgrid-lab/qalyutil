# @kgrid/qalyutil

The utility library for QALY Lookup from the microsimulation result

## Importing a release of this codebase
- in order to use a versioned release of this project directly from github, simply add the following line to the `dependencies` section of the file `package.json` in the Knowledge Object, or any other node project:
  ```json
  "dependencies": {
        "@kgrid/qalyutil": "https://github.com/kgrid-lab/qalyutil/releases/download/v1.2.0/kgrid-qalyutil-1.2.0.tgz"
      }
  ```
- to do a release, simply run `npm pack` in the top level of the codebase, and [create a release](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository) on github with the zipped code.
## Linking directly to the github repo
- To use the code directly from the main branch, you can link directly to the github repo page like so:
  ```json
  "dependencies": {
        "@kgrid/qalyutil": "https://github.com/kgrid-lab/qalyutil"
      }
  ```
  
## Using the qalyutil
- After including the link above in the `package.json` file, you'll have to run `npm install` to actually fetch the package.
- Then, you should be able to import the main method with the following import in your code:
  ```
  const qalyoutcome = require('@kgrid/qalyutil/qalyoutcome')
  ```
- the arguments to the main method are the following:
  ```
    qalyoutcome(PATH_TO_CSV_DIRECTORY, CONFIG.JSON, PATIENT_OBJECT)
  ```
