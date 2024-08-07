const fs = require("fs-extra");
const path = require("path");


// Define the source and destination paths
const componentsSourceFile = path.join(__dirname, "build/components.js");
const componentsDestinationFile = path.join(__dirname, "dist/components.js")

// Move the file
fs.move(componentsSourceFile, componentsDestinationFile, { overwrite: true }, (err) => {
  if (err) throw err;
  console.log("File moved successfully!");
});


// Define the source and destination paths
const utilitiesSourceFile = path.join(__dirname, "build/utilities.js");
const utilitiesDestinationFile = path.join(__dirname, "dist/utilities.js")

// Move the file
fs.move(utilitiesSourceFile, utilitiesDestinationFile, { overwrite: true }, (err) => {
  if (err) throw err;
  console.log("File moved successfully!");
});
