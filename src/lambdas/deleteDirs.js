'use strict';
const { Directory } = require('../services/directory');


module.exports.deleteDir = async (event) => {

  const directory = new Directory('fruits');
  directory.delete();

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'congratulations !!The Directory has been deleted',
        input: event,
      },
      null,
      2
    ),
  };
};