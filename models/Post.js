const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const PostSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  text: {
    type: String,
    required: true
  },

  name: {
    type: String
  },
  avatar: {
    type: String
  },

  // The post can have many likes from many users, so an array of objects/users are required
  likes: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "users"
      }
    }
  ],

  // The post can have many comments from many users, so an array of objects/ users,text, etc are req.
  comments: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "users"
      },
      text: {
        type: String,
        required: true
      },
      name: {
        type: String
      },
      avatar: {
        type: String
      },
      // Dates the comment
      date: {
        type: Date,
        default: Date.now
      }
    }
  ],

  // Dates the actual post
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Post = mongoose.model("post", PostSchema);
