
const fs = require("node:fs");
const path = require("node:path");

module.exports = function (client, commandsDir) {
    const commandsList = fs.readdirSync(commandsDir, { recursive: true });

    for (const commandFile of commandsList) {
        if (!commandFile.endsWith(".js")) {
            continue;
        }

        const commandModule = require(path.join(commandsDir, commandFile));

        client.attachCommand(new commandModule);
    }
}

function loadInlineCommands() {

}

function loadSlashCommand() {
    
}