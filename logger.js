'use strict';
const { createLogger, format, transports } = require('winston');
const fs = require('fs');
const path = require('path');

const env = process.env.NODE_ENV || 'development';

const logDir = 'log';
// Create the log directory if it does not exist
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}

const filename = path.join(logDir, 'error.log');

const logger = createLogger({
    level: 'debug',
    format: format.combine(format.colorize(), format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss'
    }),
        //format.label({ label: path.basename(process.mainModule.filename) }),
        format.printf(
            // We display the label text between square brackets using ${info.label} on the next line
            info => `${info.timestamp} ${info.level} [${info.label}]: ${info.message}`
        )

        // format.json()

    ),
    // You can also comment out the line above and uncomment the line below for JSON format
    // format: format.json(),

    transports: [new transports.Console({
        level: 'info',
        format: format.combine(
            format.colorize(),
            // format.label({ label: path.basename(process.mainModule.filename) }),
            format.printf(
                info => `${info.timestamp} ${info.level} [${info.label}]: ${info.message}`
            )
        )

    }), new transports.File({
        filename,
        level: 'error',
        format: format.combine(
            format.colorize(),
            // format.label({ label: path.basename(process.mainModule.filename) }),
            format.printf(
                info => `${info.timestamp} ${info.level} [${info.label}]: ${info.message}`
            )
        )
    })]
});
// logger.error('Hello world');
// logger.info('Hello world');
// logger.debug('Debugging info');

module.exports = logger;