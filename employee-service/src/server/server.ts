import * as Express from 'express';
import * as BodyParser from 'body-parser';
import * as morgan from 'morgan';
import * as helmet from 'helmet';
import * as cors from 'cors';
import { ErrorModel } from '../model/error.model';

export function init(): Express.Application {
    const app = Express();
    app.use(BodyParser.urlencoded({ extended: true }));
    app.use(BodyParser.json());
    app.use(morgan('dev'));
    app.use(cors());
    app.use(helmet());

    app.use((err, req, res, next) => {
        res.status(500).send(new ErrorModel(500, 'err'));
        next();
    });
    app.use((req, res, next) => {
        next();
    });
    
    return app;
}
