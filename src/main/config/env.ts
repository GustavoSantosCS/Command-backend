import path from 'path';

export const app = {
  name: 'Command',
  env: process.env.NODE_ENV || 'development',
  key: process.env.APP_KEY || 'key app',
  protocol: process.env.APP_PROTOCOL || 'http',
  host: process.env.APP_HOST || 'localhost',
  port: process.env.APP_PORT || 3333
};

export const db = {
  connection: process.env.DB_CONNECTION || 'postgres',
  database: process.env.DB_DATABASE || 'docker',
  username: process.env.DB_USERNAME || 'docker',
  host: process.env.DB_HOST || 'docker',
  port: parseInt(process.env.DB_PORT) || 5433,
  password: process.env.DB_PASSWORD || 'docker'
};

export const multer = {
  destinationRoot: {
    disc: path.resolve(__dirname, '..', '..', '..', 'tmp', 'storage')
  }
};
