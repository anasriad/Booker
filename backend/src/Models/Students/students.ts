import mongoose from 'mongoose'
enum AcademicLevels {
    Primaire,
    Collége,
    Lycée,
    Uiversité,
}
const studentSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    School: { type: String },
    Academic_Level: { type: AcademicLevels }
})

const Student = mongoose.model('Student', studentSchema)

export default Student