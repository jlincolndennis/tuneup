
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('posts').del(),

    // Inserts seed entries
    knex('posts')
      .insert({
        title:  'The Best Thing On Broadway, Hamilton',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula fermentum neque et congue. Vestibulum sed nulla dictum, accumsan nulla a, mattis tortor. Mauris purus risus, maximus ac risus quis, suscipit sagittis lectus. Nulla sit amet pulvinar lorem. Integer in sapien finibus, scelerisque lacus eget, malesuada diam.",
        votes: 23,
        track: "My Shot",
        track_url: "https://www.youtube.com/watch?v=VK4Wk_8PbcI",
        cover_url: 'http://www.okayplayer.com/wp-content/uploads/2015/09/Hamilton-Cast-Album-The-Roots.jpg',
        user_id: 1
        // created_at: new Date("April 3, 2016")
      }),
    knex('posts')
      .insert({
        title:  'This is Cave Music by Moon Hooch',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula fermentum neque et congue. Vestibulum sed nulla dictum, accumsan nulla a, mattis tortor. Mauris purus risus, maximus ac risus quis, suscipit sagittis lectus. Nulla sit amet pulvinar lorem. Integer in sapien finibus, scelerisque lacus eget, malesuada diam.",
        votes: 10,
        track: "Contra Dubstep",
        track_url: "https://youtu.be/T4-N9XK1pvw?list=PLszSeIdIl0rndnHnbVaTfCrh33gQ-UusX",
        cover_url: 'http://www.moonhooch.com/wp-content/uploads/2013/06/MoonHooch_ThisIsCaveMusic.jpg',
        user_id: 2
        // created_at: new Date("March 25, 2016")
      }),
    knex('posts')
      .insert({
        title:  "Lousy with Sylvianbriar, another great one by Of Montreal",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula fermentum neque et congue. Vestibulum sed nulla dictum, accumsan nulla a, mattis tortor. Mauris purus risus, maximus ac risus quis, suscipit sagittis lectus. Nulla sit amet pulvinar lorem. Integer in sapien finibus, scelerisque lacus eget, malesuada diam.",
        votes: 13,
        track: "Obsidian Currents",
        track_url: "https://youtu.be/Q-pe3MBRPhA",
        cover_url: 'http://www.tinymixtapes.com/sites/default/files/1307/news-13-07-of-montreal.jpg',
        user_id: 3
        // created_at: new Date("March 24, 2016")
      })
    // knex('posts')
    //   .insert({
    //     title:  'When I Ask A Question',
    //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula fermentum neque et congue. Vestibulum sed nulla dictum, accumsan nulla a, mattis tortor. Mauris purus risus, maximus ac risus quis, suscipit sagittis lectus. Nulla sit amet pulvinar lorem. Integer in sapien finibus, scelerisque lacus eget, malesuada diam.",
    //     votes: 35,
    //     track: "",
    //     track_url: "",
    //     cover_url: 'http://i.imgur.com/dhmZJ8E.png',
    //     user_id: 1
    //     // created_at: new Date("March 02, 2016")
    //   }),
    // knex('posts')
    //   .insert({
    //     title:  'A Valid Question',
    //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula fermentum neque et congue. Vestibulum sed nulla dictum, accumsan nulla a, mattis tortor. Mauris purus risus, maximus ac risus quis, suscipit sagittis lectus. Nulla sit amet pulvinar lorem. Integer in sapien finibus, scelerisque lacus eget, malesuada diam.",
    //     votes: 10,
    //     track: "",
    //     track_url: "",
    //     cover_url: 'http://i.imgur.com/PZthqMa.png',
    //     user_id: 2
    //     // created_at: new Date("May 5, 2016")
    //   }),
    // knex('posts')
    //   .insert({
    //     title:  'Styling with Bootstrap like....',
    //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula fermentum neque et congue. Vestibulum sed nulla dictum, accumsan nulla a, mattis tortor. Mauris purus risus, maximus ac risus quis, suscipit sagittis lectus. Nulla sit amet pulvinar lorem. Integer in sapien finibus, scelerisque lacus eget, malesuada diam.",
    //     votes: 4,
    //     track: "",
    //     track_url: "",
    //     cover_url: 'http://i.imgur.com/ycARl6n.png',
    //     user_id: 3
    //     // created_at: new Date("March 9, 2016")
    //   }),
    // knex('posts')
    //   .insert({
    //     title:  'After coding for 4 hours straight...',
    //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula fermentum neque et congue. Vestibulum sed nulla dictum, accumsan nulla a, mattis tortor. Mauris purus risus, maximus ac risus quis, suscipit sagittis lectus. Nulla sit amet pulvinar lorem. Integer in sapien finibus, scelerisque lacus eget, malesuada diam.",
    //     votes: 13,
    //     track: "",
    //     track_url: "",
    //     cover_url: 'http://i.imgur.com/cIoDQQA.png',
    //     user_id: 2
    //     // created_at: new Date("February 26, 2016")
    //   })
  );
};
