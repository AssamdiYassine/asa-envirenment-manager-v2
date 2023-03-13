# les versions stable

`node` : v16.19.0 or plus
`npm`: v8.19.3 or plus

# install node js

Example => ubuntu
`sudo apt-get install curl`
`curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash - &&\ `

`sudo apt-get install nodejs`
aprés
`node -v ` tu trove la d'ernier version 18 etc ..
pour le changé a 16.19.0

=> ouvrir nouveau terminal

`$ curl -sL https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.0/install.sh -o install_nvm.sh`

`$ bash install_nvm.sh`

`$ export NVM_DIR="$HOME/.nvm" [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion" # This loads nvm bash_completion `

`$ source ~/.bash_profile `

aprés fait

`nvm install 16 ` pour installé la version 16 de nodejs

NB : la node js et installer la npm tu pas besoin de install

pour vérifie la version fait =>> node -v 

##   tu pent positionné dans la racine de projet

# install dépendances

`npm i --legacy-peer-deps`

# pour démarré le project fait

`npm start`

# pour build project

`npm build `

# pour observer la project 

ouvrir la navigation par exemple google chrome
et fait  votre ip comme 196.168.1.1:3000 or localhost:3000 


# POUR  observé json file 
tu pent positionné dans  `/asa-envirenment-manager/src/pages/dataJson `

#####
service tourne sur  port 3008
# install pm2 
`npm install pm2 -g`

##   tu pent positionné dans la racine de projet
`cd serviceJs`

# pour démarrie service fiat
 `pm2 start index.js `
# pour Arrité service fiat
 `pm2 stop index`
# pour ls 
 `pm2 ls  `

 