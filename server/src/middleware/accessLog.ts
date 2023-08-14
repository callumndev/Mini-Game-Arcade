import { Request, Response, NextFunction } from 'express'
import debug from 'debug'


export default (req: Request, res: Response, next: NextFunction) => {
    // Init request start time
    const startTime = new Date();

    // Callback for response finished
    res.on('finish', () => {
        // Response finished time
        const finishedTime = new Date();
        const responseTime = finishedTime.getTime() - startTime.getTime();

        // Log request
        debug('server:express:access')(...[
            // Remote host (client IP address)
            req.ip,
            '- -',
            // Timestamp of when the server received the HTTP request
            `[${startTime.toISOString()}]`,
            // The actual request itself from the client
            `"${[req.method, req.originalUrl, `HTTP/${req.httpVersion}`].join(" ")}"`,
            // The status code the server returns in response to the request
            res.statusCode,
            // The size of the request in bytes
            res.get('Content-Length') ?? 0,
            // Referrer header, or dash if not used
            `"${req.get('Referer') ?? '-'}"`,
            // User agent
            `"${req.get('User-Agent') ?? '-'}"`,
            // The amount of time it took to respond to the request in milliseconds
            `${responseTime}ms`,
        ]);
    });

    // Invoke the next middleware
    next();
}
