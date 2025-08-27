// const noteSchema = new Schema({
//   title: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   content: {
//     type: String,
//     required: true,
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
//   user: {
//     type: Schema.Types.ObjectId,
//     //https://mongoosejs.com/docs/schematypes.html#objectids
//     // for user's ObjectId.
//     ref: 'User',
//     required: true,
//   }
// });

// {
//     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJuYW1lIjoiQWJvbWFzbm93IiwiZW1haWwiOiJBYm9tYXNub3dAZ21haWwuY29tIiwiX2lkIjoiNjhhZWM4YzgxMTAyZjE4ZWVlYjJhY2MxIn0sImlhdCI6MTc1NjMxMjc1NCwiZXhwIjoxNzU2MzE5OTU0fQ.Cjx3Yrvs0kynQSrdC_K3E7d_IS5QFzCzalI9Sf-bIL8",
//     "user": {
//         "_id": "68aec8c81102f18eeeb2acc1",
//         "username": "Abomasnow",
//         "email": "Abomasnow@gmail.com",
//         "password": "$2b$10$6j/lfUy7QlwwfznK/Dth8eFEsBVLPxVXDUT/ifc7c6yuKr.3nNnrS",
//         "__v": 0
//     }
// }

const originalUserData = [
  {
    "username": "Abomasnow",
    "email": "Abomasnow@gmail.com",
    "password": "abcdefgh"
  },
  {
    "username": "Burmy",
    "email": "Burmy@gmail.com",
    "password": "abcdefgh"
  },
]


const userData = [
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJuYW1lIjoiQWJvbWFzbm93IiwiZW1haWwiOiJBYm9tYXNub3dAZ21haWwuY29tIiwiX2lkIjoiNjhhZWM4YzgxMTAyZjE4ZWVlYjJhY2MxIn0sImlhdCI6MTc1NjMxMzk5OSwiZXhwIjoxNzU2MzIxMTk5fQ.S6IhVlro4KvspIMu4OmqP3dXcM7YlromH1icI133Ngc",
    "user": {
      "_id": "68aec8c81102f18eeeb2acc1",
      "username": "Abomasnow",
      "email": "Abomasnow@gmail.com",
      "password": "$2b$10$6j/lfUy7QlwwfznK/Dth8eFEsBVLPxVXDUT/ifc7c6yuKr.3nNnrS",
      "__v": 0
    }
  },
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJuYW1lIjoiQnVybXkiLCJlbWFpbCI6IkJ1cm15QGdtYWlsLmNvbSIsIl9pZCI6IjY4YWU5YWJjY2ExNzQ4ODcyMGM0OTc4OCJ9LCJpYXQiOjE3NTYzMTM5MTUsImV4cCI6MTc1NjMyMTExNX0.3QTEQGWs4pPh___qrR8Tqj0fYakstcqWbN9F1qQ2Fho",
    "user": {
      "_id": "68ae9abcca17488720c49788",
      "username": "Burmy",
      "email": "Burmy@gmail.com",
      "password": "$2b$10$66wfMuTIpyxvlJjv15dR/.R6TUkrJYrySujYz0QpRMsG3//qUf4Wa",
      "__v": 0
    }
  }
]


const noteData = [
  {
    "title": "A Note Title",
    "content": "A Note Content"
  },
  {
    "title": "B Note Title",
    "content": "B Note Content"
  },
  {
    "title": "C Note Title",
    "content": "C Note Content"
  }
]

const updatedNoteData = [
  {
    "_id": "68af3848df8f6c1a6c30145f",
    "title": "A Note Title",
    "content": "A Note Content",
    "user": "68aec8c81102f18eeeb2acc1",
    "createdAt": "2025-08-27T16:54:32.718Z",
    "__v": 0
  },
  {
    "_id": "68af3a844d0f33842b8593d4",
    "title": "B Note Title",
    "content": "B Note Content",
    "user": "68aec8c81102f18eeeb2acc1",
    "createdAt": "2025-08-27T17:04:04.713Z",
    "__v": 0
  },
    {
        "_id": "68af4451e36731549553dff9",
        "title": "C Note Title",
        "content": "C Note Content",
        "user": "68aec8c81102f18eeeb2acc1",
        "createdAt": "2025-08-27T17:45:53.597Z",
        "__v": 0
    }
]

/**
 * Postman no surprise, when POST note 'you must be logged in to do that'
 * triggers from auth.js
 * In Postman, attempted set Headers, key 'authorization' (not capitalized yet, try that if fail), value
 * 
 * Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJuYW1lIjoiQWJvbWFzbm93IiwiZW1haWwiOiJBYm9tYXNub3dAZ21haWwuY29tIiwiX2lkIjoiNjhhZWM4YzgxMTAyZjE4ZWVlYjJhY2MxIn0sImlhdCI6MTc1NjMxMjc1NCwiZXhwIjoxNzU2MzE5OTU0fQ.Cjx3Yrvs0kynQSrdC_K3E7d_IS5QFzCzalI9Sf-bIL8
 * 
 * Fail.
 * 
 * In Postman, attemtped set Authorization, Type: Bearer Token
 * Success. (for user Abomasnow)
 * 
 * Changed token to Burmy's, retrieved empty array (correct)
 * 
 * Changed token back to Abomasnow's retrieved array with note.  Success.
 * 
 * On attempting delete with Abomasnow, '403 Forbidden; user is not authorized to delete this note.' from noteRoutes.
 * 
 * Updated file references.  Got message '403 Forbidden' on attempt to PUT note, but the PUT seemed to take.
 * Updated check; had to coerce data type to String.  However, noted control flow is incorrect.  Currently invoking Mongoose to check on file, which causes deletion / update.
 * 
 * Ended up popping in user.id checks.  I think auth is supposed to weed this out, but eh.  If I get a 'token' message, I know where it's from, if I get 'no user._id detected' I know where it's from.
 * 
 * All routes fixed ok.  Update and delete OK; changing bearer auth disables update and delete (and reading too); looking for deleted post and updated post when changing bearer back showed posts were not deleted or updated.  (Correct.  In other words, when 'logged in' a user can update and delete their own notes - not posts, ugh, and when another user is logged in they can't see, update, or delete others' posts.)
 */
