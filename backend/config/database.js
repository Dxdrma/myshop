// const path = require('path');

// module.exports = ({ env }) => ({
//   connection: {
//     client: 'sqlite',
//     connection: {
//       filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
//     },
//     useNullAsDefault: true,
//   },
// });
 module.exports = ({ env }) => ({
   defaultConnection: "default",
   connection: {
     client: "postgres",
     connection: {
       host: env("DATABASE_HOST", "localhost"),
       port: env.int("DATABASE_PORT", 5432),
       database: env("DATABASE_NAME", "codewithharry"),
       user: env("DATABASE_USER", "postgres"),
       password: env("DATABASE_PASSWORD", "Diksha"),
       schema: env("DATABASE_SCHEMA", "public"),
     },
   },
 });