
const express = require("express");

module.exports.application = class {
    constructor(serverPort) {
        this.SERVER_PORT = serverPort || 3030;

        this.application = express();

        this.application.use(express.json());
        this.application.use(express.urlencoded({ extended: false }));
    }

    attachMiddleware(middleware) {
        this.application.use(middleware);
    }

    attachMiddleware(route, middleware) {
        this.application.use(route, middleware);
    }

    launch() {
        this.application.listen(this.SERVER_PORT);
    }
}