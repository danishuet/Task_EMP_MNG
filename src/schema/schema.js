const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type AttendanceRecord {
    date: String!
    status: String!
  }

  type Employee {
    id: ID!
    name: String!
    age: Int!
    class: String!
    subjects: [String!]!
    attendance: [AttendanceRecord!]!
  }

  input EmployeeInput {
    name: String!
    age: Int!
    class: String!
    subjects: [String!]!
  }

  input PaginationInput {
    page: Int
    limit: Int
  }

  type Query {
    getEmployees(pagination: PaginationInput): [Employee]
    getEmployee(id: ID!): Employee
  }

  type Mutation {
    addEmployee(input: EmployeeInput): Employee
    updateEmployee(id: ID!, input: EmployeeInput): Employee
  }
`;

module.exports = typeDefs;
