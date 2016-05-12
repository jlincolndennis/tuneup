
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('posts').del(),

    // Inserts seed entries
    knex('posts')
      .insert({
        title:  '"How did you make it search as you typed?"',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula fermentum neque et congue. Vestibulum sed nulla dictum, accumsan nulla a, mattis tortor. Mauris purus risus, maximus ac risus quis, suscipit sagittis lectus. Nulla sit amet pulvinar lorem. Integer in sapien finibus, scelerisque lacus eget, malesuada diam.",
        votes: 23,
        image_url: 'http://i.imgur.com/WS3aUSl.png',
        user_id: 1
        // created_at: new Date("April 3, 2016")
      }),
    knex('posts')
      .insert({
        title:  'Good Guy Akyuna',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula fermentum neque et congue. Vestibulum sed nulla dictum, accumsan nulla a, mattis tortor. Mauris purus risus, maximus ac risus quis, suscipit sagittis lectus. Nulla sit amet pulvinar lorem. Integer in sapien finibus, scelerisque lacus eget, malesuada diam.",
        votes: 10,
        image_url: 'http://i.imgur.com/6FKyxPi.png',
        user_id: 2
        // created_at: new Date("March 25, 2016")
      }),
    knex('posts')
      .insert({
        title:  "When the Page Doesn't Load",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula fermentum neque et congue. Vestibulum sed nulla dictum, accumsan nulla a, mattis tortor. Mauris purus risus, maximus ac risus quis, suscipit sagittis lectus. Nulla sit amet pulvinar lorem. Integer in sapien finibus, scelerisque lacus eget, malesuada diam.",
        votes: 13,
        image_url: 'http://i.imgur.com/8A4fvHL.png',
        user_id: 3
        // created_at: new Date("March 24, 2016")
      }),
    knex('posts')
      .insert({
        title:  'When I Ask A Question',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula fermentum neque et congue. Vestibulum sed nulla dictum, accumsan nulla a, mattis tortor. Mauris purus risus, maximus ac risus quis, suscipit sagittis lectus. Nulla sit amet pulvinar lorem. Integer in sapien finibus, scelerisque lacus eget, malesuada diam.",
        votes: 35,
        image_url: 'http://i.imgur.com/dhmZJ8E.png',
        user_id: 1
        // created_at: new Date("March 02, 2016")
      }),
    knex('posts')
      .insert({
        title:  'A Valid Question',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula fermentum neque et congue. Vestibulum sed nulla dictum, accumsan nulla a, mattis tortor. Mauris purus risus, maximus ac risus quis, suscipit sagittis lectus. Nulla sit amet pulvinar lorem. Integer in sapien finibus, scelerisque lacus eget, malesuada diam.",
        votes: 10,
        image_url: 'http://i.imgur.com/PZthqMa.png',
        user_id: 2
        // created_at: new Date("May 5, 2016")
      }),
    knex('posts')
      .insert({
        title:  'Styling with Bootstrap like....',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula fermentum neque et congue. Vestibulum sed nulla dictum, accumsan nulla a, mattis tortor. Mauris purus risus, maximus ac risus quis, suscipit sagittis lectus. Nulla sit amet pulvinar lorem. Integer in sapien finibus, scelerisque lacus eget, malesuada diam.",
        votes: 4,
        image_url: 'http://i.imgur.com/ycARl6n.png',
        user_id: 3
        // created_at: new Date("March 9, 2016")
      }),
    knex('posts')
      .insert({
        title:  'After coding for 4 hours straight...',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula fermentum neque et congue. Vestibulum sed nulla dictum, accumsan nulla a, mattis tortor. Mauris purus risus, maximus ac risus quis, suscipit sagittis lectus. Nulla sit amet pulvinar lorem. Integer in sapien finibus, scelerisque lacus eget, malesuada diam.",
        votes: 13,
        image_url: 'http://i.imgur.com/cIoDQQA.png',
        user_id: 2
        // created_at: new Date("February 26, 2016")
      })
  );
};
