/**
 * Setup environment
 */
import setup from './env'
setup();



/**
 * Express server
 */
import path from 'path'
import debug from 'debug'

import express, { Request, Response, NextFunction } from 'express'
import nunjucks from 'nunjucks'

import ExpressError from './errors/ExpressError'


// Create Express application
const app = express();
debug('server:express:init')('Created Express application');


// Apply middleware
import accessLog from './middleware/accessLog'
app.use(accessLog);
debug('server:express:init')('Middleware applied: access log');

import compression from 'compression'
app.use(compression({ threshold: 0 }));


// Configure nunjucks
nunjucks.configure('src/views', {
    // Automatically escape dangerous characters
    autoescape: true,

    // Express app that nunjucks will install to
    express: app,
});


// Configure frontend static serving
const frontendDistFolder = path.join(__dirname, '..', '..', 'client', 'dist');
const staticServeMiddleware = express.static(frontendDistFolder);

const frontendPaths = ['/'];
for (const path of frontendPaths) {
    app.use(path, staticServeMiddleware);
    debug('server:express:init')('Setup frontend static serving for route:', path);
}


// Register API router
import APIRouter, { path as APIPath } from './api'
app.use(APIPath, APIRouter);
debug('server:express:init')('Registered API router at ' + APIPath);


// Catch all other routes to catch 404
app.use((_req: Request, _res: Response, next: NextFunction) =>
    next(new ExpressError('Sorry, the page you\'re looking for doesn\'t exist.', 404)));


// Express error handler
app.use((err: any | ExpressError, _req: Request, res: Response, _next: NextFunction) => {
    const status = err instanceof ExpressError ? err.status : 500;
    res.render(`errors/${status}.html`);
});


// Start the express server
const server = app.listen(Number(process.env.PORT!), process.env.HOST!, () => {
    const addressInfo = server.address()!;
    const address = typeof addressInfo === 'string' ? addressInfo : `${addressInfo.address}:${addressInfo.port} (${addressInfo.family})`;
    debug('server:express')('Server started at', address);
});
