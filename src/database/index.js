const Sequelize = require('sequelize');
const dbConfig = require('../config/config');

const User = require('./models/User');
const Post = require('./models/Post');
const Blacklist = require('./models/Blacklist');
const Contact = require('./models/Contact');
const ConfigEmail = require('./models/ConfigEmail');
const AreasAtuacao = require('./models/AreasAtuacao')

const connection = new Sequelize(dbConfig);

User.init(connection);
Post.init(connection);
Blacklist.init(connection);
Contact.init(connection);
ConfigEmail.init(connection);
AreasAtuacao.init(connection);




module.exports = connection;