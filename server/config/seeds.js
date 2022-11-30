const db = require('./connection');
const { User, Comment } = require('../models');

db.once('open', async () => {

    await User.create({
        username: 'user100',
        email: 'user100@gmail.com',
        password: 'password1',
    });

    await User.create({
        username: 'user101',
        email: 'user101@gmail.com',
        password: 'password2',
    });

    await User.create({
        username: 'user102',
        email: 'user102@gmail.com',
        password: 'password3',
    })

    await Comment.create({
        commentText: 'Mike White looks like the real deal',
        createdAt: '',
        username: 'User100'
    })

    await Comment.create({
        commentText: 'Trevor Lawrence finally showed why he was the #1 pick.',
        createdAt: '',
        username: 'User101'
    })

    await Comment.create({
        commentText: 'Dang Cardinals ruined my bet.',
        createdAt: '',
        username: 'User102'
    })

    await Comment.create({
        commentText: 'Mike White looks like the real deal',
        createdAt: '',
        username: 'User100'
    })

  process.exit();
});