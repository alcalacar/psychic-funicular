const { exec } = require("child_process");
const fs = require("fs");
let env = JSON.parse(fs.readFileSync("cypress.env.json"));
const featureDir = env.featureDir;
const jiraFields = env.jira.jiraFields;
const reports = "reports/*";

// Clean the folder of features
exec(`rm -f ${featureDir}/*.feature`);
exec(`rm -f ${reports}`);
exec(`rm -f ${jiraFields}`);
exec(`rm -f -r cypress/screenshots/*`);
exec(`rm -f -r cypress/videos/*`);
exec(`rm -f -r jsonlogs/*`);
