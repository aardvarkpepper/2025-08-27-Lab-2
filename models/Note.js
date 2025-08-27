const { Schema, model } = require('mongoose');
const User = require('./User');
 
// This is the model you will be modifying
const noteSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
 
const Note = model('Note', noteSchema);
 
module.exports = Note;

// Update the Note Model: Add a new field to the Note schema (models/Note.js). This field should be named user (or owner) and should store the ObjectId of the user who created the note. It should be a required reference to the User model.


// // Example snippet for the Note schema
// user: {
//   type: Schema.Types.ObjectId,
//   ref: 'User',
//   required: true,
// }
// Modify the “Create Note” Route: In your notes route file (routes/api/notes.js), find the POST / route. When a new note is created, you must associate it with the currently logged-in user. The authenticated user’s data should be available on req.user from the authentication middleware. Save the user’s _id to the new note’s user field.