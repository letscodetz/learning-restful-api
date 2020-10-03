let promise = require('bluebird');

let options = {
    // Initialization Options
    promiseLib: promise
};

let pgp = require('pg-promise')(options);
let connectionString = 'postgres://postgres:StrongPass@id8@localhost:5432/puppies';
let db = pgp(connectionString);

// add query functions

module.exports = {
    getAllPuppies: getAllPuppies,
    // getSinglePuppy: getSinglePuppy,
    // createPuppy: createPuppy,
    // updatePuppy: updatePuppy,
    // removePuppy: removePuppy
};

function getAllPuppies(req, res, next) {
    db.any('SELECT * FROM pups')
      .then(function (data) {
          res.status(200)
            .json({
                status: 'success',
                data: data,
                message: 'Retrieved All puppies'
            });
      })
      .catch(function (error) {
          return next(error);
      });
}
