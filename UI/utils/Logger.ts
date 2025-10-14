import winston from 'winston';
import moment from 'moment-timezone'
import { info } from 'console';

export class Logger {

  logger = winston.createLogger({
    level: 'info', // Set the default logging level
    format: winston.format.combine(
      winston.format.timestamp({ format: () => moment().tz('Asia/Kolkata', true).format() }), // Custom timestamp with timezone
      winston.format.printf(({ level, message, timestamp }) => {
        return `${timestamp} [${level.toUpperCase()}]: ${message}`;
      })
    ),
    transports: [
      new winston.transports.Console(), // Log to console
      new winston.transports.File({ filename: 'logs/combined.log' }), // Log to a file
      new winston.transports.File({ filename: 'logs/error.log', level: 'error' }), // Separate error log
    ],
  });

  // info(text: string): winston.Logger {
  //   return this.Logger
  // }

}


// export const logger = winston.createLogger({
//   level: 'info', // Set the default logging level
//   format: winston.format.combine(
//     winston.format.timestamp({ format: () => moment().tz('America/New_York').format() }), // Custom timestamp with timezone
//     winston.format.printf(({ level, message, timestamp }) => {
//       return `${timestamp} [${level.toUpperCase()}]: ${message}`;
//     })
//   ),
//   transports: [
//     new winston.transports.Console(), // Log to console
//     new winston.transports.File({ filename: 'logs/combined.log' }), // Log to a file
//     new winston.transports.File({ filename: 'logs/error.log', level: 'error' }), // Separate error log
//   ],
// });

// module.exports = logger;