const students = require('../models/student-model');

module.exports = {
    // GET /
    getStudents: (req, res) => {
        students.find()
            .then(students => {
                res.status(200).json(students);
            })
            .catch(err => {
                res.status(500).json({
                    message: 'Failed to get students',
                    error: err
                });
            });
    },
    // GET /:id
    getStudentById: (req, res) => {
        students.findById(req.params.id)
            .then(student => {
                res.status(200).json(student);
            })
            .catch(err => {
                res.status(500).json({
                    message: 'Failed to get student',
                    error: err
                });
            });
    },
    // POST /
    addStudent: (req, res) => {
        students.create(req.body)
            .then(student => {
                res.status(201).json(student);
            })
            .catch(err => {
                res.status(500).json({
                    message: 'Failed to add student',
                    error: err
                });
            });
    },
    // PUT /:id
    updateStudent: (req, res) => {
        students.findByIdAndUpdate(req.params.id, req.body, { new: true })
            .then(student => {
                res.status(200).json(student);
            })
            .catch(err => {
                res.status(500).json({
                    message: 'Failed to update student',
                    error: err
                });
            });
    },
    // DELETE /:id
    deleteStudent: (req, res) => {
        students.findByIdAndDelete(req.params.id)
            .then(() => {
                res.status(200).json({
                    message: 'Student deleted successfully'
                });
            })
            .catch(err => {
                res.status(500).json({
                    message: 'Failed to delete student',
                    error: err
                });
            });
    }
}