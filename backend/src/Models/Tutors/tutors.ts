import mongoose, { Schema, Document } from 'mongoose';


const TutorSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    courses: [{ type: Schema.Types.ObjectId, ref: 'Course' }]  
}, { timestamps: true });

const Tutor = mongoose.model('Tutor', TutorSchema);

export default Tutor;
