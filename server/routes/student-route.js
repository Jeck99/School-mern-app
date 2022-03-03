const studentRoute = require('express').Router();
const {
    getStudents,
    getStudentById,
    addStudent,
    updateStudent,
    deleteStudent
} = require('../controllers/student-ctrl');

studentRoute.get('/', getStudents);
studentRoute.get('/:id', getStudentById);
studentRoute.post('/', addStudent);
studentRoute.put('/:id', updateStudent);
studentRoute.delete('/:id', deleteStudent);

module.exports = studentRoute;