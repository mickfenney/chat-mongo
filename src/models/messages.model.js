// messages-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const messages = new mongooseClient.Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'users' },
    text: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

  return mongooseClient.model('messages', messages);
};
