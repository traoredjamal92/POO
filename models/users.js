const mongoose = require('mongoose');

      const users = new mongoose.Schema ({
          name:String,
          email:String,
          password:String,
          date: {
              type: Date,
              default: Date.now
          }
      })


      const User = mongoose.model('User', users);
      module.exports = User;