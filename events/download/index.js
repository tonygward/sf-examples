import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as jsforce from 'jsforce';

// Login to Salesforce
dotenv.config();
const credentials = new jsforce.OAuth2({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  loginUrl: process.env.LOGIN_URL
});
var connection = new jsforce.Connection({ oauth2: credentials });
await connection.authorize({ grant_type: 'client_credentials' });

// Query EventLogFiles
const eventLogFiles = await connection.query(
    'SELECT Id, EventType, LogFile, LogDate, LogFileLength, Sequence ' +
    'FROM EventLogFile ' +
    'WHERE LogDate >= Yesterday ' +
    'ORDER BY LogDate'
);

// Download EventLogFiles to ./logs
eventLogFiles.records.forEach(async (eventLogFile) => {
    await connection.request({
        method: 'GET',
        url: `${connection.instanceUrl}${eventLogFile.LogFile}`,
        responseType: 'text/csv',
        headers: { 'Accept-Encoding': 'gzip' },
        gzip: true
    }).stream().pipe(fs.createWriteStream(`./logs/${eventLogFile.Id}.csv`));
});
