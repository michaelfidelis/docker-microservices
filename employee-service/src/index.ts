import * as Database from './config/db/database.config';
import * as Server from './server/server';
import * as Mongoose from 'mongoose';
import { App } from './App';

const port = process.env.PORT || 3000;

Database.connect()
    .then(() => {
        const server = Server.init();
        server.listen(port, () => {
          new App(server)
        });
    })
    .catch(error => {
        console.error('[Database] ', error);
    });
