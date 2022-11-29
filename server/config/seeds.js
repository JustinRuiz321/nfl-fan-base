const db = require('./connection');
const { User, Comment } = require('../models');

await User.create({
    username: 'user100',
    email: 'user100@gmail.com',
    password: 'password1',
    comments: 'Mike White looks like the real deal'
})