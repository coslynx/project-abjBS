const Discord = require('discord.js');

module.exports = {
  name: 'role',
  description: 'Manage user roles',
  execute(message, args) {
    if (!message.member.hasPermission('MANAGE_ROLES')) {
      return message.reply('You do not have the permissions to manage roles.');
    }

    const targetUser = message.mentions.users.first();
    if (!targetUser) {
      return message.reply('Please specify a user to manage roles.');
    }

    const targetMember = message.guild.members.cache.get(targetUser.id);
    if (!targetMember) {
      return message.reply('User not found in this server.');
    }

    const roleName = args.slice(1).join(' ');
    const role = message.guild.roles.cache.find(r => r.name === roleName);
    if (!role) {
      return message.reply('Role not found.');
    }

    if (targetMember.roles.cache.has(role.id)) {
      targetMember.roles.remove(role);
      message.channel.send(`Role ${role.name} removed from ${targetUser.tag}.`);
    } else {
      targetMember.roles.add(role);
      message.channel.send(`Role ${role.name} added to ${targetUser.tag}.`);
    }
  }
};