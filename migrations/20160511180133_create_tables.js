
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('users', function(table){
      table.increments('user_id');
      table.string('email').unique();
      table.string('username').unique();
      table.string('password');
    })

    .createTable('posts', function(table){
      table.increments('post_id');
      table.string('title');
      table.text('description');
      table.integer('votes');
      table.text('image_url');
      table.integer('user_id').references('users.user_id').onDelete('CASCADE').onUpdate('CASCADE');
      table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
    })

    .createTable('comments', function (table){
      table.increments('comment_id');
      table.integer('user_id').references('users.user_id').onDelete('CASCADE').onUpdate('CASCADE');
      table.integer('post_id').references('posts.post_id').onDelete('CASCADE').onUpdate('CASCADE');
      table.text('comment');
      table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
    })

};

exports.down = function(knex, Promise) {
  return knex.schema
  .dropTable('comments')
  .dropTable('posts')
  .dropTable('users')
};
