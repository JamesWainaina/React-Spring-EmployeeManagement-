import React, { useEffect, useState } from 'react';
import { createEmployee, getEmployee, updateEmployee } from '../services/EmployeeService';
import { useNavigate, useParams } from 'react-router-dom';

const EmployeeComponent = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: ''
    });
 
    const navigator = useNavigate();
    const {id} = useParams();
    useEffect(()=>{
        if(id){
            getEmployee(id).then((response) =>{
                setFirstName(response.data.firstName);
                setLastName(response.data.lastName);
                setEmail(response.data.email);
            }).catch(error =>{
                console.error(error);
            })
        }
    }, [id])

    function saveorUpdateEmployee(e) {
        e.preventDefault();

        const isValid = validateForm();
        if (isValid) {
            const employee = { firstName, lastName, email };
            console.log(employee);

            if (id){
                updateEmployee(id, employee).then((response) =>{
                    console.log(response.data);
                    navigator('/employees');
                }).catch(error => {
                    console.log(error);
                });
            }else {
                createEmployee(employee).then((response)=> {
                    console.log(response.data);
                    navigator('/employees')
                }).catch(error =>{
                    console.error(error);
                });
            }
           

            createEmployee(employee)
                .then((response) => {
                    console.log(response.data);
                    navigator('/employees');
                })
                .catch((error) => {
                    console.error('Error saving employee:', error);
                    // Handle error
                });
        }
    }

    function validateForm() {
        let valid = true;
        const errorCopy = { ...errors };

        if (firstName.trim()) {
            errorCopy.firstName = '';
        } else {
            errorCopy.firstName = 'First Name is required';
            valid = false;
        }
        if (lastName.trim()) {
            errorCopy.lastName = '';
        } else {
            errorCopy.lastName = 'Last Name is required';
            valid = false;
        }
        if (email.trim()) {
            errorCopy.email = '';
        } else {
            errorCopy.email = 'Email is required';
            valid = false;
        }

        setErrors(errorCopy); // Update errors state
        return valid;
    }

    function pageTitle(){

        if(id){
            return  <h2 className="text-center">Update Employee</h2> 
        }else{
            return  <h2 className="text-center">Add Employee</h2>
        }
    }

    return (
        <div className="container">
            <br /> <br />
            <div className="row">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    {
                        pageTitle()
                    }
                    <div className="card-body">
                        <form>
                            <div className="form-group mb-2">
                                <label className="form-label">First Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter employee first name"
                                    name="firstName"
                                    value={firstName}
                                    className="form-control"
                                    onChange={(event) => setFirstName(event.target.value)}
                                />
                                <div className="text-danger">{errors.firstName}</div>
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label">Last Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter employee last name"
                                    name="lastName"
                                    value={lastName}
                                    className="form-control"
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                                <div className="text-danger">{errors.lastName}</div>
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label">Email</label>
                                <input
                                    type="text"
                                    placeholder="Enter employee email"
                                    name="email"
                                    value={email}
                                    className="form-control"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <div className="text-danger">{errors.email}</div>
                            </div>
                            <button className="btn btn-success" onClick={saveorUpdateEmployee}>
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployeeComponent;
