// Update with your config settings.
//require("dotenv").config();

module.exports = {
  development: {
    client: 'oracledb',
    connection: {
      user: 'root',
      password: 'admin1',
      connectString: 'XE',
      database : 'cnss'
    },
    pool: {
      min: 250,
      max: 500,
    },
    migrations: {
      directory: __dirname + '/migrations',
    },
    seeds: {
      directory: __dirname + '/seeds',
    },
  },
};
