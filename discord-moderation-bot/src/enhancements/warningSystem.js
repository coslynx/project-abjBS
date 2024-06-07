const warningSystem = {
  usersWarnings: {},

  addWarning: function(userId) {
    if (this.usersWarnings[userId]) {
      this.usersWarnings[userId]++;
    } else {
      this.usersWarnings[userId] = 1;
    }
  },

  getWarnings: function(userId) {
    return this.usersWarnings[userId] ? this.usersWarnings[userId] : 0;
  },

  clearWarnings: function(userId) {
    if (this.usersWarnings[userId]) {
      delete this.usersWarnings[userId];
    }
  }
};

module.exports = warningSystem;