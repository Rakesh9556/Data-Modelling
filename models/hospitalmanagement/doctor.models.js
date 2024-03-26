import mongoose from 'mongoose'

const hospitalHourSchema = new mongoose.Schema({
    hospitalId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hospital'
    },
    hour: { 
        type: String,
        required: true
    }
})

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    salary: {
        type: String,
        required: true
    },
    qualification: {
        type: String,
        required: true
    },
    experienceInYear: {
        type: Number,
        default: 0 
    },
    // workInHospital: [
    //     {
    //         type: mongoose.Schema.Types.ObjectId,    // if only one thing needed  --> which doctor work in which number of hospital
    //         ref: 'Hospital'
    //     }
    // ]

    // but we want to know that which doctor spends how much time in each hospital
    workInHospital: [hospitalHourSchema]
},{timestamps: true})

export const Doctor = mongoose.model('Doctor', doctorSchema)