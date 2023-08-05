const express = require('express');
const router = express.Router();
const Student = require('../Modelschema/schema');

 
  

let data = []; // In-memory data store

router.use(express.json());

// GET operation
router.get('/Job', async (req, res) => {
    try {
      const studentsl = await Student.find();
      res.json(studentsl);
     } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'wait to fetch documents from the database.' });
     }
  });
  

// POST operation
router.post('/Job', async (req, res) => {
    try {
      const newStudent = new Student(req.body);
      const savedStudent = await newStudent.save();
      res.json(savedStudent);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'No to insert document into the database.', details: err.message });
    }
  });

// GET operation: job posts by location
//get http://localhost:4000/Job/sector-v  find by location

router.get('/Job/:Job_loc', async (req, res) => {
    try {
      const { Job_loc } = req.params;
  
      const students = await Student.find({ Job_loc });
      res.json(students);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'No to fetch documents from the database.' });
    }
  });
  
//by id

  

// PUT operation
router.put('/Job/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const updatedItem = req.body;
  
      const updatedStudent = await Student.findByIdAndUpdate(id, updatedItem, { new: true });
  
      if (!updatedStudent) {
        return res.status(404).json({ error: 'Document not found.' });
      }
  
      res.json(updatedStudent);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Failed to update the document.' });
    }
  });
  
// DELETE operation
router.delete('/Job/:id', async (req, res) => {
    try {
      const { id } = req.params;
  
      const deletedStudent = await Student.findByIdAndDelete(id);
  
      if (!deletedStudent) {
        return res.status(404).json({ error: 'Document not found.' });
      }
  
      res.json(deletedStudent);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Failed to delete the document.' });
    }
  });
  

module.exports = router;
