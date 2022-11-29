const db = require('./connection');
const { User, Comment } = require('../models');

db.once('open', async () => {

    await User.create({
        username: 'user100',
        email: 'user100@gmail.com',
        password: 'password1',
        comments: 'Mike White looks like the real deal'
    });

    await User.create({
        username: 'user101',
        email: 'user101@gmail.com',
        password: 'password2',
        comments: 'Trevor Lawrence finally showed why he was the #1 pick.'
    });

    await User.create({
        username: 'user102',
        email: 'user102@gmail.com',
        password: 'password3',
        comments: 'Dang Cardinals ruined my bet.'
    })


  process.exit();
});