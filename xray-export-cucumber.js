const { exec } = require("child_process");
const fs = require("fs");
let env = JSON.parse(fs.readFileSync("cypress.env.json"));

const zipfile = "featuresDownloadedJira.zip";
const featureDir = env.featureDir;
const cloudAuth = env.jira.cloudAuth;
const testJiraKey = env.jira.testJiraKey;
const xrayEndpoint = env.jira.xrayEndpoint;

// Clean the folder of features
exec(`rm -f ${featureDir}/*.feature`);

// Read the cloud_auth.json file and get the token
exec(
	`curl -H "Content-Type: application/json" -X POST --data @${cloudAuth} ${xrayEndpoint}/authenticate`,
	(err, stdout) => {
		if (err) {
			console.error(err);
			return;
		}
		const token = stdout.replace(/"/g, "").trim();

		// Send a GET  request with the token to export the feature.zip file
		exec(
			`curl -H "Content-Type: application/json" -X GET -H "Authorization: Bearer ${token}"  "${xrayEndpoint}/export/cucumber?keys=${testJiraKey}" -o ${zipfile}`,
			(err) => {
				if (err) {
					console.error(err);
					return;
				}
				exec(`unzip ${zipfile} -d ${featureDir}`, () => {
					exec(`rm ${zipfile}`);
				});
			}
		);
	}
);
