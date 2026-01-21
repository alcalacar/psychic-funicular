const { exec } = require("child_process");
const fs = require("fs");
let env = JSON.parse(fs.readFileSync("cypress.env.json"));

const reportJson = env.reportJson;

const jsonTemplate = env.jira.jsonTemplate;
const jiraFields = env.jira.jiraFields;
const issueTitle = env.jira.issueTitle;
const testJiraKey = env.jira.testJiraKey;
const testPlanKey = env.jira.testPlanKey;
const assigneeId = env.jira.assigneeId;
const projectId = env.jira.project;
const issueTypeId = env.jira.issueType;
const componentId = env.jira.component;
const transitionDoneId = env.jira.transitionDoneId;
const cloudAuth = env.jira.cloudAuth;
const xrayEndpoint = env.jira.xrayEndpoint;

const datetime = new Date().toLocaleString();

//Update issueFields.json
let jsonData = fs.readFileSync(jsonTemplate).toString();
jsonData = jsonData
	.replace("$projectId", projectId)
	.replaceAll("$testJiraKey", testJiraKey)
	.replaceAll("$testPlanKey", testPlanKey)
	.replace("$assigneeId", assigneeId)
	.replace("$datetime", datetime)
	.replace("$issueTypeId", issueTypeId)
	.replace("$componentId", componentId)
	.replace("$transitionDoneId", transitionDoneId)
	.replace("$issueTitle", issueTitle);

fs.writeFileSync(jiraFields, jsonData);

// Read the cloud_auth.json file and get the token
exec(
	`curl -H "Content-Type: application/json" -X POST --data @${cloudAuth} ${xrayEndpoint}/authenticate`,
	(err, stdout) => {
		if (err) {
			console.error(err);
			return;
		}
		const token = stdout.replace(/"/g, "").trim();

		// Send a POST request with the token to import the data.json file
		exec(
			`curl -H "Content-Type: multipart/form-data" -X POST -F info=@${jiraFields} -F results=@${reportJson} -H "Authorization: Bearer ${token}" ${xrayEndpoint}/import/execution/cucumber/multipart`,
			(err, stdout) => {
				if (err) {
					console.error(err);
					return;
				}
				console.log(stdout);
			}
		);
	}
);
