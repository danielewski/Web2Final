//var mongoose = require('mongoose');
var mongoose = require('mongoose')
  , Schema = mongoose.Schema


mongoose.connect('mongodb://mongodb/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('connected!');

  var kittySchema = mongoose.Schema({
    name: String
  });

  kittySchema.methods.speak = function ()
  {
    var greeting = this.name ? "Meow name is " + this.name : "I don't have a name";
    console.log(greeting);
  }
  var Kitten = mongoose.model('Kitten', kittySchema);

  var silence = new Kitten({ name: 'Silence' });
  console.log(silence.name); // 'Silence'

  var fluffy = new Kitten({ name: 'fluffy' });
  fluffy.speak(); // "Meow name is fluffy"

  fluffy.save(function (err, fluffy)
  {
    if (err) return console.error(err);
    fluffy.speak();
    Kitten.find(function (err, kittens)
    {
      if (err) return console.error(err);
      console.log(kittens);
    })
  })

  var authorSchema = Schema({
    name    : String,
    stories : [{ type: Schema.Types.ObjectId, ref: 'Story' }]
  });
  var storySchema = Schema({
    author : { type: Schema.Types.ObjectId, ref: 'Author' },
    title    : String
  });
  var Story  = mongoose.model('Story', storySchema);
  var Author = mongoose.model('Author', authorSchema);

  var bob = new Author({ name: 'Bob Smith' });
  bob.save(function (err) {
    if (err) return handleError(err);
    //Bob now exists, so lets create a story
    var story = new Story({
      title: "Bob goes sledding",
      // assign the _id from the our author Bob.
      //This ID is created by default!
      author: bob._id
    });
    story.save(function (err) {
      if (err) return handleError(err);
      bob.stories.push(story._id);
      bob.save(function(err)
      {
        console.log("Bob Saved!");
      })
      // Bob now has his story
    });
  });

  Story
    .findOne({ title: 'Bob goes sledding' })
    //This populates the author id
    //with actual author information!
    .populate('author')
    .exec(function (err, story) {
      if (err) return handleError(err);
      console.log('The author is %s',
        story.author.name);
      console.log(story);
      // prints "The author is Bob Smith"
    });
  //Kitten.find({ name: /^fluff/ }, callback);
});


