import express from 'express'
import CoursesRouter from './courses.routers'
import StudentRouter from './student.routers'
import TutorRouter from './tutors.routers'
const RouterApp = express()

RouterApp.use('/courses', CoursesRouter)
RouterApp.use('/student', StudentRouter)
RouterApp.use('/tutor', TutorRouter)

export default RouterApp