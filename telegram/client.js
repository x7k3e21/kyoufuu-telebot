
const grammy = require("grammy");

module.exports.client = class {
    constructor(clientToken) {
        this.client = new grammy.Bot(clientToken || "");
    }

    webhookCallback(frameworkAdapter="express") {
        return grammy.webhookCallback(this.client, frameworkAdapter);
    }

    launch() {
        this.client.start();
    }
}

