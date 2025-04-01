import mongoose, { Schema, Document } from 'mongoose';

const CoursesSchema = new Schema({
    courseName: { type: String, required: true },
    description: { type: String, required: true },
    tutors: [{ type: Schema.Types.ObjectId, ref: 'Tutor' }]
}, { timestamps: true });

const Course = mongoose.model('Course', CoursesSchema);

export default Course;
