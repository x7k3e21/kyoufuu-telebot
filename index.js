
const path = require("node:path");

const fs = require("node:fs");
const os = require("node:os");

const clientModule = require("./telegram/client");
const serverModule = require("./server/application");

const client = new clientModule.client(process.env.TELEGRAM_TOKEN);

const commandsDir = path.join(__dirname, "./telegram/commands");

require("./telegram/utilities/loadCommands")(client, commandsDir);

const application = new serverModule.application(process.env.SERVER_PORT);

if (process.env.NODE_ENV == "production") {
    application.attachMiddleware("/telegram/callback", client.webhookCallback("express"));
}

if (process.env.NODE_ENV == "debug") {
    client.launch();
}

application.launch();

process.once("SIGINT", function() {

});

process.once("SIGTERM", function() {

});