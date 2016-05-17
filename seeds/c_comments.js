
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('comments').del(),

    // Inserts seed entries
    knex('comments')
      .insert({
        user_id: 1,
        post_id: 1,
        comment: 'How does a bastard, orphan, son of a whore and a Scotsman, dropped in the middle of a forgotten spot in the Caribbean by providence impoverished, in squalor grow up to be a hero and a scholar?'}),
    knex('comments')
      .insert({
        user_id: 2,
        post_id: 1,
        comment: 'The ten-dollar founding father without a father got a lot farther by working a lot harder by being a lot smarter, by being a self-starter by fourteen, they placed him in charge of a trading charter'}),
    knex('comments')
      .insert({
        user_id: 3,
        post_id: 1,
        comment: 'And every day while slaves were being slaughtered and carted away across the waves, he struggled and kept his guard up inside, he was longing for something to be a part of the brother was ready to beg, steal, borrow, or barter'}),
    knex('comments')
      .insert({
        user_id: 1,
        post_id: 2,
        comment: 'Then a hurricane came, and devastation reigned our man saw his future drip, dripping down the drain put a pencil to his temple, connected it to his brain and he wrote his first refrain, a testament to his pain'}),
    knex('comments')
      .insert({
        user_id: 3,
        post_id: 2,
        comment: 'Well, the word got around, they said, "This kid is insane, man" Took up a collection just to send him to the mainland. "Get your education, don\’t forget from whence you came, and The world is gonna know your name. What’s your name, man?"'}),
    knex('comments')
      .insert({
        user_id: 1,
        post_id: 3,
        comment: 'Alexander Hamilton. My name is Alexander Hamilton. And there’s a million things I haven\’t done. But just you wait, just you wait...'}),
    knex('comments')
      .insert({
        user_id: 2,
        post_id: 2,
        comment: 'When he was ten his father split, full of it, debt-ridden Two years later, see Alex and his mother bed-ridden Half-dead sittin in their own sick, the scent thick'}),
    knex('comments')
      .insert({
        user_id: 3,
        post_id: 1,
        comment: 'And Alex got better but his mother went quick. Moved in with a cousin, the cousin committed suicide. Left him with nothin but ruined pride, something new inside, A voice saying...'}),
    knex('comments')
      .insert({
        user_id: 3,
        post_id: 3,
        comment: 'Alex, you gotta fend for yourself. He started retreatin and readin every treatise on the shelf.'})

  );
};
