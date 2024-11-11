const Employee = require('../models/Employee');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
  Query: {
    async getEmployees(_, { pagination }) {
      const { page = 1, limit = 10 } = pagination || {};
      const employees = await Employee.find()
        .skip((page - 1) * limit)
        .limit(limit);
      return employees;
    },

    async getEmployee(_, { id }) {
      return await Employee.findById(id);
    },
  },

  Mutation: {
    async addEmployee(_, { input }) {
      const employee = new Employee(input);
      await employee.save();
      return employee;
    },

    async updateEmployee(_, { id, input }) {
      return await Employee.findByIdAndUpdate(id, input, { new: true });
    },
  },
};

module.exports = resolvers;
