# Get Target Org
targetOrgConfig=$(sf config get target-org --json)
if [[ $(jq '.status' <<< $targetOrg) -ne 0 ]]; then
    echo 'failed to read target org user'
    exit 1
fi

targetOrg=$(jq -r '.result[] | .value' <<< $targetOrgConfig)
if [[ -z $targetOrg ]]; then
    echo 'target org user is null'
    exit 1
fi
standardUser="$targetOrg.usr"

# Create Standard User
sf org create user --definition-file config/standard-user.json Username=$standardUser --target-org $targetOrg