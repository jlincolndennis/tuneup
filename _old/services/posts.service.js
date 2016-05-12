angular.module('redditClone').factory('postsService',function() {

  var postsService ={
    addPost: function (post) {
      post['date'] = new Date()
      post['votes'] = 0;
      post['comments'] = [];
      return this.posts.push(post);
    },
    posts: [
      { title:  "What It's Like Teaching g20",
        image: 'http://i.imgur.com/YXz7X7w.png',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula fermentum neque et congue. Vestibulum sed nulla dictum, accumsan nulla a, mattis tortor. Mauris purus risus, maximus ac risus quis, suscipit sagittis lectus. Nulla sit amet pulvinar lorem. Integer in sapien finibus, scelerisque lacus eget, malesuada diam.",
        author: "SpicyChocoLatte",
        date: new Date(),
        votes: 23,
        showComments: false,
        comments: [
          {
          commentAuthor: "Zdarsky",
          commentBody: "I am a neat guy"
        },{
          commentAuthor: "Fraction",
          commentBody: "Everything Chip says is a lie!"
        }
      ]
      },
     {
       title:  '"How did you make it search as you typed?"',
       image: 'http://i.imgur.com/WS3aUSl.png',
       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula fermentum neque et congue. Vestibulum sed nulla dictum, accumsan nulla a, mattis tortor. Mauris purus risus, maximus ac risus quis, suscipit sagittis lectus. Nulla sit amet pulvinar lorem. Integer in sapien finibus, scelerisque lacus eget, malesuada diam.",
       author: "BodaciousBud",
       date: new Date("April 3, 2016"),
       votes: 23,
       showComments: false,
       comments: []
     },
     {
       title:  'Good Guy Akyuna',
       image: 'http://i.imgur.com/6FKyxPi.png',
       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula fermentum neque et congue. Vestibulum sed nulla dictum, accumsan nulla a, mattis tortor. Mauris purus risus, maximus ac risus quis, suscipit sagittis lectus. Nulla sit amet pulvinar lorem. Integer in sapien finibus, scelerisque lacus eget, malesuada diam.",
       author: "courtm187",
       date: new Date("March 25, 2016"),
       votes: 10,
       showComments: false,
       comments: [
         {
         commentAuthor: "Romeo",
         commentBody: "Yo, what up girl?"
       }
       ]
     },
     {
       title:  "When the Page Doesn't Load",
       image: 'http://i.imgur.com/8A4fvHL.png',
       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula fermentum neque et congue. Vestibulum sed nulla dictum, accumsan nulla a, mattis tortor. Mauris purus risus, maximus ac risus quis, suscipit sagittis lectus. Nulla sit amet pulvinar lorem. Integer in sapien finibus, scelerisque lacus eget, malesuada diam.",
       author: "Mike-Ferg-a-nator",
       date: new Date("March 25, 2016"),
       votes: 10,
       showComments: false,
       comments: []
     },
     {
       title:  'MRW Someone Asks a Dumb Question',
       image: 'http://i.imgur.com/dhmZJ8E.png',
       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula fermentum neque et congue. Vestibulum sed nulla dictum, accumsan nulla a, mattis tortor. Mauris purus risus, maximus ac risus quis, suscipit sagittis lectus. Nulla sit amet pulvinar lorem. Integer in sapien finibus, scelerisque lacus eget, malesuada diam.",
       author: "SpicyChocoLatte",
       date: new Date("March 25, 2016"),
       votes: 10,
       showComments: false,
       comments: []
     },
     {
       title:  'A Valid Question',
       image: 'http://i.imgur.com/PZthqMa.png',
       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula fermentum neque et congue. Vestibulum sed nulla dictum, accumsan nulla a, mattis tortor. Mauris purus risus, maximus ac risus quis, suscipit sagittis lectus. Nulla sit amet pulvinar lorem. Integer in sapien finibus, scelerisque lacus eget, malesuada diam.",
       author: "lastlincoln",
       date: new Date("March 25, 2016"),
       votes: 10,
       showComments: false,
       comments: []
     },
     {
       title:  'MRW they tease me about my accent',
       image: 'http://i.imgur.com/8x2stCz.png',
       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula fermentum neque et congue. Vestibulum sed nulla dictum, accumsan nulla a, mattis tortor. Mauris purus risus, maximus ac risus quis, suscipit sagittis lectus. Nulla sit amet pulvinar lorem. Integer in sapien finibus, scelerisque lacus eget, malesuada diam.",
       author: "SpicyChocoLatte",
       date: new Date("January 2, 2016"),
       votes: 50,
       showComments: false,
       comments: []
     },
     {
       title:  'Styling with Bootstrap like....',
       image: 'http://i.imgur.com/ycARl6n.png',
       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula fermentum neque et congue. Vestibulum sed nulla dictum, accumsan nulla a, mattis tortor. Mauris purus risus, maximus ac risus quis, suscipit sagittis lectus. Nulla sit amet pulvinar lorem. Integer in sapien finibus, scelerisque lacus eget, malesuada diam.",
       author: "Mike-Ferg-a-nator",
       date: new Date("March 9, 2016"),
       votes: 4,
       showComments: false,
       comments: []
     },
     {
       title:  'After coding for 4 hours straight...',
       image: 'http://i.imgur.com/cIoDQQA.png',
       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula fermentum neque et congue. Vestibulum sed nulla dictum, accumsan nulla a, mattis tortor. Mauris purus risus, maximus ac risus quis, suscipit sagittis lectus. Nulla sit amet pulvinar lorem. Integer in sapien finibus, scelerisque lacus eget, malesuada diam.",
       author: "lastlincoln",
       date: new Date("February 26, 2016"),
       votes: 1,
       showComments: false,
       comments: []
     }
   ],
   getPosts: function(){
     return this.posts;
   }
  }
  return postsService;
});
