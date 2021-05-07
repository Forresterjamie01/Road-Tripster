const User = require('./User');
const Triplog = require('./TripLog');

User.hasMany(Triplog, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Triplog.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Triplog };
