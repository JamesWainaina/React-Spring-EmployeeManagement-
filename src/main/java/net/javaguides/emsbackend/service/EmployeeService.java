package net.javaguides.emsbackend.service;

import net.javaguides.emsbackend.dto.EmployeeDto;

import java.util.List;

public interface EmployeeService {
    EmployeeDto createEmployee(EmployeeDto employeeDto);

    EmployeeDto getEmployeeById(long employeeId);

    List<EmployeeDto> getaAllEmployees();

    EmployeeDto updateEmployee(long employeeId, EmployeeDto updatedEmployee);

    void deleteEmployee(long employeeId);
}

