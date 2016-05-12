
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(),

    // Inserts seed entries
    knex('users').insert({
      email: 'bodaciousbud@example.com',
      username: 'bodaciousbud',
      password: 'secret',
      salt: 12345
    }),
    knex('users').insert({
      email: 'lastlincoln@example.com',
      username: 'lastlincoln',
      password: 'secret',
      salt: 12345
    }),
    knex('users').insert({
      email: 'jigglyjames@example.com',
      username: 'jigglyjames',
      password: 'secret',
      salt: 12345
    })
  );
};
