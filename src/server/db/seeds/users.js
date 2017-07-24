
const bcrypt = require('bcryptjs');

exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(() => {
      const salt = bcrypt.genSaltSync();
      const hash = bcrypt.hashSync('johnson123', salt);
      return Promise.join(
        // Inserts seed entries
        knex('users').insert({
          email: 'jerdoo@ymail.com',
          username: 'jeremy',
          password: hash
        })
      );
    });
};
