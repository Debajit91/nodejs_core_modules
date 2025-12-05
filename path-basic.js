const path = require("path");

console.log("Current file Info: \n");
console.log("filename: ", __filename);
console.log("Directory: ", __dirname);

console.log("\n" + "-".repeat(50) + "\n");

const filePath = "/debajit/documents/nextlevel.pdf";

console.log("analyzing Path :", filePath, "\n");
console.log("Directory: ", path.dirname(filePath));
console.log("Base Name: ", path.basename(filePath));
console.log("Extension Name: ", path.extname(filePath));
console.log("File Name: ", path.basename(filePath, path.extname(filePath)));

console.log("\n" + "-".repeat(50) + "\n");

const parsed = path.parse(filePath);
console.log("Parsed path object: ", parsed);

console.log("Formatted Path: ", path.format(parsed));