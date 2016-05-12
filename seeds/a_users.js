
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(),

    // Inserts seed entries
    knex('users').insert({
      email: 'bodaciousbud@example.com',
      username: 'bodaciousbud',
      password: 'secret',
    }),
    knex('users').insert({
      email: 'lastlincoln@example.com',
      username: 'lastlincoln',
      password: 'secret',
    }),
    knex('users').insert({
      email: 'jigglyjames@example.com',
      username: 'jigglyjames',
      password: 'secret',
    })
  );
};
