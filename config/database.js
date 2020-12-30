const parse = require('pg-connection-string').parse;
const config = parse(process.env.DATABASE_URL || 'postgres://psql:psql@127.0.0.1:5432/psql');

module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: config.host,
        port: config.port,
        database: config.database,
        username: config.user,
        password: config.password,
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
