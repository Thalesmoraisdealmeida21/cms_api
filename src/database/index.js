const Sequelize = require('sequelize');
const dbConfig = require('../config/config');

const User = require('./models/User');
const Post = require('./models/Post');
const Blacklist = require('./models/Blacklist')

const connection = new Sequelize(dbConfig);

User.init(connection);
Post.init(connection);
Blacklist.init(connection)




module.exports = connection;