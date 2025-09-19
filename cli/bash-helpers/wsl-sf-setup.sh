# update Linux
sudo apt update
sudo apt upgrade -y
sudo apt install wget ca-certificates

# install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm

# install node
nvm install --lts

# install yarn
npm install --global yarn

# install sf cli
npm install -g @salesforce/cli
npm update -g @salesforce/cli

# configure chrome on WSL
sudo apt-get install xdg-utils -y

# install chrome
cd /tmp
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
sudo apt install --fix-missing ./google-chrome-stable_current_amd64.deb -y
cd ~/

# java jdk 21
sudo apt install openjdk-21-jdk -y
# Salesforce Extension Folder: /usr/lib/jvm/java-21-openjdk-amd64/

# PMD
sudo apt install unzip
cd $HOME
wget https://github.com/pmd/pmd/releases/download/pmd_releases%2F7.14.0/pmd-dist-7.14.0-bin.zip
unzip pmd-dist-7.14.0-bin.zip
rm pmd-dist-7.14.0-bin.zip
alias pmd="$HOME/pmd-bin-7.14.0/bin/pmd"
pmd check -d /usr/src -R rulesets/java/quickstart.xml -f text