import mongoose from 'mongoose'

const todoSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    complete: {
        type: Boolean,
        default: false
    },
    createdBy: {   // make relation with user, has 2 parameter => special type and reference
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'

    },
    subTodos: [                                   // array of objects
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'SubTodo'
        }
    ]
}, {timestamps: true})


export const Todo = mongoose.model('Todo', todoSchema)