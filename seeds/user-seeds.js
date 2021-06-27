const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
  {
    username: 'shanemcf',
    email: 'shanemcfadden95@yahoo.com',
    password: 'password'
  },

];

  const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
