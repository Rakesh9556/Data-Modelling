import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        //custom validator is used if that thing will not perform then what will be done
        // required: [true, 'password is required'],
        required: true,
    }
}, {timestamps: true})

export const User = mongoose.model('User', userSchema)