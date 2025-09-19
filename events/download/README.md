# Download Salesfore EventLogFiles

**Get** the EventLogFile details since Yesterday (via Salesforce REST Api)
**Download** each file as ./logs/{salesforceId}.csv

## Config Files
- **.env** *authentication* details (uses client-credentials)

## Run

<code>npm update<br>
node index.js
</code>

## References
- https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/dome_event_log_file_query.htm
- https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/dome_event_log_file_download.htm