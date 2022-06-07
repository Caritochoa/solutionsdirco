'use strict';
const { Directory } = require('../services/directory');


module.exports.move = async (event) => {

  const directory = new Directory('fruits');
  directory.move();

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'congratulations !!The Directory has been created',
        input: event,
      },
      null,
      2
    ),
  };
};