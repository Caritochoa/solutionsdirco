'use strict';
const { Directory } = require('../services/directory');


module.exports.list = async (event) => {

  const directory = new Directory('fruits');
  directory.list();

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'listing all the directories',
        input: event,
      },
      null,
      2
    ),
  };
};