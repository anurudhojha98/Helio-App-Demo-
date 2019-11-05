# Helio-App-Demo-
This is basic helio app demo.
npm install
npm install -g sequelize-cli
sequalize-cli init
sequelize-cli seed:generate --name schedules

sequelize-cli db:migrate
sequelize-cli db:seed:all

sequelize-cli db:seed:undo:all
