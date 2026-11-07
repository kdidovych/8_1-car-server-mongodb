# HOW TO
## Install MongoDB
https://www.mongodb.com/docs/manual/administration/install-community-linux/?linux-distro=ubuntu&linux-method=pkg
```
sudo apt-get install gnupg curl

curl -fsSL https://pgp.mongodb.com/server-9.asc | \
   sudo gpg -o /usr/share/keyrings/mongodb-server-9.gpg \
   --dearmor

echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-9.gpg ] https://repo.mongodb.org/apt/ubuntu resolute/mongodb-org/9.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-9.0.list

sudo apt-get update

sudo apt-get install -y mongodb-org
```
Modules that was installed:
```
The following additional packages will be installed:
mongodb-database-tools
mongodb-mongosh
mongodb-org-database
mongodb-org-database-tools-extra
mongodb-org-mongos
mongodb-org-server
mongodb-org-shell
mongodb-org-tools

The following NEW packages will be installed:
mongodb-database-tools
mongodb-mongosh
mongodb-org
mongodb-org-database
mongodb-org-database-tools-extra
mongodb-org-mongos
mongodb-org-server
mongodb-org-shell
mongodb-org-tools
```

1. Start MongoDB.
```
sudo systemctl start mongod
```
  if error
```
sudo systemctl daemon-reload
```
Verify that MongoDB has started successfully.
```
sudo systemctl status mongod
sudo systemctl enable mongod
```
2. Stop MongoDB.
```
sudo systemctl stop mongod
```
3. Restart MongoDB.
```
sudo systemctl restart mongod
```
4. Begin using MongoDB.
```
mongosh
```

Disable telemetry (statistic usage sent to mongo vendor)
```
mongosh
disableTelemetry()
```

## Client for MongoDB
1. WebStorm has it by default
2. Compass
https://www.mongodb.com/docs/compass/
https://www.mongodb.com/docs/compass/install/?operating-system=linux&package-type=.deb#std-label-download-install

## js module for MongoDB (js, not ts)
mongodb mongoose
https://www.mongodb.com/docs/drivers/node/current/integrations/mongoose/mongoose-get-started/



# WORKFLOW
### Project
```
git init
git remote add origin git@github.com:kdidovych/8_1-car-server-mongodb.git
touch ReadMe.md
mkdir server
cd server
npm init -y
mkdir src
npm install dotenv express cors yup mongodb mongoose
npm install nodemon --save-dev
npm install multer
```

### Tutorials
https://www.mongodb.com/docs/drivers/node/current/integrations/mongoose/mongoose-get-started/
https://github.com/mongodb/sample-app-nodejs-mflix/blob/main/server/src/types/index.ts