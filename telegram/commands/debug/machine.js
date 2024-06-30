
module.exports = class {
    commandName = "machine"
    commandAliases = [ "machine", "host" ]

    commandDescription = ""

    executionGuards = [ ]

    allowedChats = [ "private" ]

    constructor() {

    }

    execute(context) {
        context.reply("Hello, world!");
    }
}