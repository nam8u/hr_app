const oracledb = require('oracledb');
const database = require('../services/database.js');

const baseQuery = 'SELECT USERID "id", USERNAME "Username", PASSWORD "Password" FROM SEC_LOGIN';

async function find(context) {
  let query = baseQuery;
  const binds = {};

  if (context.id) {
    binds.USERID = context.id;

    query += `\nwhere USERID = :USERID`;
  }

  const result = await database.simpleExecute(query, binds);

  return result.rows;
}

module.exports.find = find;
