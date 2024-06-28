
const grammy = require("grammy");

module.exports.client = class {
    constructor(clientToken) {
        this.client = new grammy.Bot(clientToken || "");
        
        this.privateChat = this.client.chatType("private");

        this.groupChat = this.client.chatType("group");
        this.supergroupChat = this.client.chatType("supergroup");

        this.channelChat = this.client.chatType("channel");

        this.chatTypes = {
            "private": this.privateChat,
            "group": this.groupChat,
            "supergroup": this.supergroupChat,
            "channel": this.channelChat,
        };
    }

    attachCommand(command) {
        for (const chatType of command.allowedChats) {
            this.chatTypes[chatType].command(command.commandAliases, command.executionGuards, command.execute);
        }
    }

    webhookCallback(frameworkAdapter) {
        return grammy.webhookCallback(this.client, frameworkAdapter);
    }

    launch() {
        this.client.start();
    }
}

