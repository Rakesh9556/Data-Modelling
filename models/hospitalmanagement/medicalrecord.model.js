import mongoose from 'mongoose'

const medicalRecordSchema = new mongoose.Schema({
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient'
    },
    doctorAssigned: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor'
    },
    date: {
        type: String
    },
    time: {
        type: String
    },
    duration: {
        type: String
    }  

},{timestamps: true})

export const MedicalRecord = mongoose.model('MedicalRecord', medicalRecordSchema)