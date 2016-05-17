
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
        user_id: 1,
        created_at: new Date("April 3, 2016")
      }),
    knex('posts')
      .insert({
        title:  'This is Cave Music by Moon Hooch',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula fermentum neque et congue. Vestibulum sed nulla dictum, accumsan nulla a, mattis tortor. Mauris purus risus, maximus ac risus quis, suscipit sagittis lectus. Nulla sit amet pulvinar lorem. Integer in sapien finibus, scelerisque lacus eget, malesuada diam.",
        votes: 10,
        track: "Contra Dubstep",
        track_url: "https://youtu.be/T4-N9XK1pvw?list=PLszSeIdIl0rndnHnbVaTfCrh33gQ-UusX",
        cover_url: 'http://www.moonhooch.com/wp-content/uploads/2013/06/MoonHooch_ThisIsCaveMusic.jpg',
        user_id: 2,
        created_at: new Date("March 25, 2016")
      }),
    knex('posts')
      .insert({
        title:  "Lousy with Sylvianbriar, another great one by Of Montreal",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula fermentum neque et congue. Vestibulum sed nulla dictum, accumsan nulla a, mattis tortor. Mauris purus risus, maximus ac risus quis, suscipit sagittis lectus. Nulla sit amet pulvinar lorem. Integer in sapien finibus, scelerisque lacus eget, malesuada diam.",
        votes: 13,
        track: "Obsidian Currents",
        track_url: "https://youtu.be/Q-pe3MBRPhA",
        cover_url: 'http://www.tinymixtapes.com/sites/default/files/1307/news-13-07-of-montreal.jpg',
        user_id: 3,
        created_at: new Date("March 24, 2016")
      }),
    knex('posts')
      .insert({
        title:  'Everything Goes Numb',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula fermentum neque et congue. Vestibulum sed nulla dictum, accumsan nulla a, mattis tortor. Mauris purus risus, maximus ac risus quis, suscipit sagittis lectus. Nulla sit amet pulvinar lorem. Integer in sapien finibus, scelerisque lacus eget, malesuada diam.",
        votes: 35,
        track: "A Moment Of Silence",
        track_url: "https://youtu.be/yOFkcj4iDvM",
        cover_url: 'https://images.victoryrecords.com/600/VR209.jpg',
        user_id: 1,
        created_at: new Date("March 02, 2016")
      }),
    knex('posts')
      .insert({
        title:  'How it Feels to be Thick As A ...',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula fermentum neque et congue. Vestibulum sed nulla dictum, accumsan nulla a, mattis tortor. Mauris purus risus, maximus ac risus quis, suscipit sagittis lectus. Nulla sit amet pulvinar lorem. Integer in sapien finibus, scelerisque lacus eget, malesuada diam.",
        votes: 10,
        track: "The Whole Thing!",
        track_url: "https://youtu.be/M9JEPeeohYs",
        cover_url: 'http://www.rock.com/assets/products/376930/large/jethro-tull-thick-as-a-brick-vinyl-lp-28213932-rplh139507.jpg',
        user_id: 2,
        created_at: new Date("May 5, 2016")
      }),
    knex('posts')
      .insert({
        title:  'Born of Flag Day by Deer Tick: Good Ol\' Rock n Roll',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula fermentum neque et congue. Vestibulum sed nulla dictum, accumsan nulla a, mattis tortor. Mauris purus risus, maximus ac risus quis, suscipit sagittis lectus. Nulla sit amet pulvinar lorem. Integer in sapien finibus, scelerisque lacus eget, malesuada diam.",
        votes: 4,
        track: "Straight Into The Storm",
        track_url: "https://youtu.be/I3sNrnIBvho",
        cover_url: 'http://ecx.images-amazon.com/images/I/615igx8tltL.jpg',
        user_id: 3,
        created_at: new Date("March 9, 2016")
      }),
    knex('posts')
      .insert({
        title:  'Underappreciated Masterpiece? Thelonious Alone in San Francisco',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula fermentum neque et congue. Vestibulum sed nulla dictum, accumsan nulla a, mattis tortor. Mauris purus risus, maximus ac risus quis, suscipit sagittis lectus. Nulla sit amet pulvinar lorem. Integer in sapien finibus, scelerisque lacus eget, malesuada diam.",
        votes: 13,
        track: "Why Pick Just One? (Full Album!)",
        track_url: "https://youtu.be/g4mVNZQC9DM",
        cover_url: 'http://ecx.images-amazon.com/images/I/91NQ1M50goL._SL1500_.jpg',
        user_id: 2,
        created_at: new Date("February 26, 2016")
      }),
    knex('posts')
      .insert({
        title:  'My First Jam: A String Cheese Incident',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula fermentum neque et congue. Vestibulum sed nulla dictum, accumsan nulla a, mattis tortor. Mauris purus risus, maximus ac risus quis, suscipit sagittis lectus. Nulla sit amet pulvinar lorem. Integer in sapien finibus, scelerisque lacus eget, malesuada diam.",
        votes: 15,
        track: "How Mountain Girls Can Love",
        track_url: "https://youtu.be/s6EFWCbgSpc",
        cover_url: 'http://ecx.images-amazon.com/images/I/412DMQSEZQL._AC_UL320_SR318,320_.jpg',
        user_id: 2,
        created_at: new Date("March 23, 2016")
      }),
    knex('posts')
      .insert({
        title:  'Grand Weepers and Grim Reapers',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula fermentum neque et congue. Vestibulum sed nulla dictum, accumsan nulla a, mattis tortor. Mauris purus risus, maximus ac risus quis, suscipit sagittis lectus. Nulla sit amet pulvinar lorem. Integer in sapien finibus, scelerisque lacus eget, malesuada diam.",
        votes: 15,
        track: "Swordfishtrombones",
        track_url: "https://youtu.be/g3rkaPl5w6U",
        cover_url: 'http://s3.amazonaws.com/quietus_production/images/articles/13446/swordfishtrombones_front_1380150464_crop_560x550.0.jpeg',
        user_id: 2,
        created_at: new Date("May 3, 2016")
      })
  );
};
