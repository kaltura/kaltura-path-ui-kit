### adding new package to ui-kit
* create new directory with the package name
* copy path-theming content to the newly created directory and remove un-necessary files
  * clear CHANGELOG.md file
  * update README.md file
  * update package.json:
    * replace 'name' to be the newly created package
    * review peerDependencies and dependencies and remove irrelevant ones
* update global package.json file with new package:
      "@kaltura-react-ui-kits/package-name": "file:packages/package-name"
* update global tsconfig.build.json with new package:
      "@kaltura-react-ui-kits/package-name": \["package-name"\]
* update tsconfig.json with the new package name:
      "@kaltura-react-ui-kits/package-name": \["package-name/src"\]

* if you want to link the new package to path-composer project:
  * goto path-composer main package.json file
  * edit the following npm command: "ui-kit:link" and add the following
    to the end of the existing command:
      * 'npm link @kaltura-react-ui-kits/<new-package>




