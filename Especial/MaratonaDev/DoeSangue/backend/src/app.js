import express from 'express';

import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

import routes from './routes';

import './app/database';

class App {
    constructor() {
        this.server = express();
        this.server.use(cors());

        this.middlewares();
        this.routes();

        this.server.use(helmet());
        this.server.use(morgan('dev'));
    }

    middlewares() {
        this.server.use(express.json());
        this.server.use(express.urlencoded({ extended: true }));
    }

    routes() {
        this.server.use(routes);
    }
}

export default new App().server;
