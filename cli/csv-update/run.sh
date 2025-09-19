targetOrg=$1
if [ -z "$targetOrg" ]; then
  echo "Usage: $0 <targetOrg>"
  exit 1
fi

# Create CSV
rm -f accounts.csv
sf data export bulk \
  --target-org "$targetOrg" \
  --query-file accounts.soql \
  --result-format csv \
  --output-file accounts.csv \
  --wait 10

# Import CSV into SQLite database
sqlFile=accounts.db
rm accounts.db
sqlite3 $sqlFile -csv ".import accounts.csv accounts"

# Create a new CSV file with cleaned data
rm accounts-cleaned.csv
limit="LIMIT 1"
newLinePlaceholder="__NEWLINE__"
sqlite3 $sqlFile -header -csv "SELECT Id, concat(BillingStreet, '$newLinePlaceholder', 'x') AS BillingStreet, BillingState FROM accounts $limit;" > accounts-cleaned.csv
sed -i "s/$newLinePlaceholder/\n/g" accounts-cleaned.csv

# Re-Import CSV into Salesforce
sf data update bulk \
  --target-org "$targetOrg" \
  --sobject Account \
  --file accounts-cleaned.csv \
  --wait 10