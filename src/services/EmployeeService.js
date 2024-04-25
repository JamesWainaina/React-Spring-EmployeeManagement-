import axios from 'axios'

const REST_API_BASE_URI = 'http://localhost:8080/api/employees';

export const listEmployees = () => axios.get(REST_API_BASE_URI);

export const createEmployee = (employeee) => axios.post(REST_API_BASE_URI, employeee);

export const getEmployee = (employeeId) => axios.get(REST_API_BASE_URI + '/' + employeeId);

export const updateEmployee = (employeeId, employee) => axios.put(REST_API_BASE_URI + '/' + employeeId, employee);

export const deleteEmployee = (employeeId) => axios.delete(REST_API_BASE_URI + '/' + employeeId);
