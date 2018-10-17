"use strict";

const MongoClient = require("mongodb").MongoClient;
const MONGODB_URI = "mongodb://localhost:27017/tweeter";

MongoClient.connect(MONGODB_URI, (err, db) => {
  if (err) {
    console.error(`Failed to connect: ${MONGODB_URI}`);
    throw err;
  }

  // ==> We have a connection to the "test-tweets" db,
  //     starting here.
  console.log(`Connected to mongodb: ${MONGODB_URI}`);

  // ==> In typical node-callback style, any program
  //     logic that needs to use the connection needs
  //     to be invoked from within here.
  //
  // Another way to say: this is an "entry point" for
  // a database-connected application!
// ==> Let's "get all the tweets". In Mongo-speak, we "find" them.
  

// db.collection("tweets").find({}, (err, result) => {
//   // Lazy error handling:
//   if (err) throw err;

//   // ==> Fair warning: This is going to log a lot of stuff...
//   // console.log("find result: ", result);
//   // console.log("type of find result: ", typeof result);

//      // ==> So we Read The Fantastic Manual, right?

//     // ==> We can iterate on the cursor to get results, one at a time:
//     console.log("for each item yielded by the cursor:");
//     result.each((err, item) => console.log("  ", item));



// db.collection("tweets").find({}, (err, results) => {
//   if (err) throw err;
//     // ==> We could instead just slurp the items into an array:
//     results.toArray((err, resultsArray) => {
//       if (err) throw err;

//       console.log("results.toArray:", resultsArray);

//   // This is the end...
//   db.close();
// });



  // ...
  // ==> We can just get the results as an array all at once:
  db.collection("tweets").find().toArray((err, results) => {
    if (err) throw err;

    console.log("results array: ", results);

    // This is the end...
    db.close();
  });


  // ==> This is inside this callback now. Think about it:
  // This is now the "end of the program", right?.
  // ==> At the end, we close the connection:
  db.close();

});