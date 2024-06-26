
const clientModule = require("./telegram/client");
const serverModule = require("./server/application");

const client = new clientModule.client(process.env.TELEGRAM_TOKEN);

const application = new serverModule.application(process.env.SERVER_PORT);

if (process.env.NODE_ENV == "production") {
    application.attachMiddleware("/telegram/callback", client.webhookCallback());
}

if (process.env.NODE_ENV == "debug") {
    client.launch();
}

application.launch();