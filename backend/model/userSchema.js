const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
      trim: true,
      index: true,
      match: /.+\@.+\..+/
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
      select: false 
    },
    passwordResetToken: String,
    passwordResetExpires: Date,
    firstName: {
      type: String,
      required: true,
      trim: true
    },
    lastName: {
      type: String,
      trim: true
    },
    fullName: {
      type: String,
      get: function() {
        return `${this.firstName} ${this.lastName}`;
      }
    }
});

module.exports = mongoose.model('User', userSchema);




