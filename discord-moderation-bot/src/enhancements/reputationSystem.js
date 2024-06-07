const reputationSystem = {
  users: [],
  
  addUser: function(userId, username) {
    const newUser = {
      userId: userId,
      username: username,
      reputation: 0
    };
    this.users.push(newUser);
  },

  updateUserReputation: function(userId, reputationPoints) {
    const user = this.users.find(user => user.userId === userId);
    if (user) {
      user.reputation += reputationPoints;
    }
  },

  getUserReputation: function(userId) {
    const user = this.users.find(user => user.userId === userId);
    return user ? user.reputation : null;
  },

  removeUser: function(userId) {
    this.users = this.users.filter(user => user.userId !== userId);
  },

  getTopUsers: function() {
    return this.users.sort((a, b) => b.reputation - a.reputation).slice(0, 10);
  }
};

module.exports = reputationSystem;