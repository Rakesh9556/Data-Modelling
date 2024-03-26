# Data Modelling

## import mongoose

- import mongoose from 'mongoose'

## create schema

- const schemaName = new mongoose.Schema({},{timestamps: true})

## export schema

- export const model_Name = mongoose.model('schameName', schema)
- .model('name', on which basis schema will be made)


## How images are stored

- Images are not stored in database
- place it in server in another folder and share the public url to access the image
- third party service --> AWS bucket ---> store the public url in database
- famous is Cloudnary --> give a url response ---> that url contain the address of the images
