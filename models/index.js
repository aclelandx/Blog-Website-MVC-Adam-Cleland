const User = require('./User');
const Post = require('./Posts');
const Comment = require('./Comment');

Post.belongsTo(User, {
    foreignKey: `userId`,
    onDelete: `CASCADE`
})

Comment.belongsTo(User, {
    foreignKey: `userId`,
    onDelete: `CASCADE`
})

Post.hasMany(Comment, {
    foreignKey: `postID`
})

module.exports = { User, Post, Comment };
