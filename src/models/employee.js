const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  class: { type: String, required: true },
  subjects: [{ type: String, required: true }],
  attendance: [
    {
      date: { type: Date, required: true },
      status: { type: String, required: true }, // 'Present', 'Absent', etc.
    },
  ],
});

const Employee = mongoose.model('Employee', EmployeeSchema);
module.exports = Employee;
