
const fs = require("node:fs");
const path = require("node:path");

module.exports = function (client, commandsDir) {
    const inlineCommands = path.join(commandsDir, "inline"); 
    const slashCommands = path.join(commandsDir, "slash");

    for (const commandFile of commandsList) {
        if (!commandFile.endsWith(".js")) {
            continue;
        }

        const commandModule = require(path.join(commandsDir, commandFile));

        client.attachCommand(new commandModule);
    }
}

function loadInlineCommands(commandsDir) {
    const commandsList = fs.readdirSync(commandsDir, { recursive: true });
}

function loadSlashCommand(commandsDir) {
    const commandsList = fs.readdirSync(commandsDir, { recursive: true });
}