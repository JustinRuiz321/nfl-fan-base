const { Schema, model } = require('mongoose');

const commentSchema = new Schema({
    commentText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280
    },
    createdAt: {
        type: Date,
        default: new Date ()
    },
    username: {
        type: String,
        required: true
    },
        
    reactions: [reaction],
    
    
});
// thoughtSchema.virtual('reactionCount').get(function () {
//     return this.reactions.length
// });
const Comment = model('Comment', commentSchema);
module.exports = Comment;