var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create schema and model

const MarioCharSchema = new Schema({
    name: String,
    weight: Number
});

const MarioChar = mongoose.model('mariochar', MarioCharSchema);

module.exports = MarioChar;

// [
//     {
//       "questionText": "Why is the sky blue?", "answers": [
//         { "answerText": "blah blah 1", "correct": true },
//         { "answerText": "blah blah 2", "correct": false },
//         { "answerText": "blah blah 3", "correct": false }
//       ]
//     },
//     {
//       "questionText": "Why is the meaning of life?", "answers": [
//         { "answerText": "blah blah 1", "correct": true },
//         { "answerText": "blah blah 2", "correct": false },
//         { "answerText": "blah blah 3", "correct": false }
//       ]
//     },
//     {
//       "questionText": "How many pennies are in $10.00?", "answers": [
//         { "answerText": "1,000.", "correct": true },
//         { "answerText": "10,000.", "correct": false },
//         { "answerText": "A lot", "correct": false }
//       ]
//     },
//     {
//       "questionText": "What is the default program?", "answers": [
//         { "answerText": "Hello World.", "correct": true },
//         { "answerText": "Hello Sunshine.", "correct": false },
//         { "answerText": "Hello my ragtime gal.", "correct": false }
//       ]
//     }
//   ]