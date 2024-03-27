"use strict";

// Final Project.js

//validate social security number
function validateSSN(ssn) {
    return true; 
}

//validate date of birth
function validateDOB(dob) {
    return true; 
}

//validate phone numbers
function validatePhone(phone) {
    return true; 
}

//validate zip code
function validateZip(zip) {
    return true; 
}

// Validate email address
function validateEmail(email) {
    // Regular expression to match email format
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// function to add a new employee
function addEmployee() {
    var firstName = document.getElementById("firstName").value;
    var middleName = document.getElementById("middleName").value;
    var lastName = document.getElementById("lastName").value;
    var ssn = document.getElementById("ssn").value;
    var dob = document.getElementById("dob").value;
    var hireDate = document.getElementById("hireDate").value;
    var position = document.getElementById("position").value;
    var department = document.getElementById("department").value;
    var homePhone = document.getElementById("homePhone").value;
    var workPhone = document.getElementById("workPhone").value;
    var mobilePhone = document.getElementById("mobilePhone").value;
    var email = document.getElementById("email").value;

    // validate entries
    if (!validateSSN(ssn)) {
        alert("Invalid Social Security Number");
        return;
    }
    if (!validateDOB(dob)) {
        alert("Invalid Date of Birth");
        return;
    }
    var emailAddress = "example@example.com"; // Replace with the email input value
		if (validateEmail(emailAddress)) {
    console.log("Email address is valid.");
		} else {
    console.log("Please enter a valid email address.");
	}

    // create employee object
    var employee = {
        firstName: firstName,
        middleName: middleName,
        lastName: lastName,
        ssn: ssn,
        dob: dob,
        hireDate: hireDate,
        position: position,
        department: department,
        homePhone: homePhone,
        workPhone: workPhone,
        mobilePhone: mobilePhone,
        email: email
    };

    // get existing employees from localStorage or initialize empty array
    var employees = JSON.parse(localStorage.getItem("employees")) || [];

    // add new employee to array
    employees.push(employee);

    // store updated array back in localStorage
    localStorage.setItem("employees", JSON.stringify(employees));

    //clear form fields after submission
    document.getElementById("employeeForm").reset();

    //display success message
    alert("Employee added successfully");
}

//display employees
function displayEmployees() {
    var employees = JSON.parse(localStorage.getItem("employees")) || [];
    var output = "<h2>Employee Listing</h2>";
    output += "<ul>";
    employees.forEach(function (employee, index) {
        output += "<li><a href='#' onclick='displayEmployeeDetails(" + index + ")'>" + employee.firstName + " " + employee.lastName + "</a></li>";
    });
    output += "</ul>";
    document.getElementById("employeeListing").innerHTML = output;
}

//display detailed employee information
function displayEmployeeDetails(index) {
    var employees = JSON.parse(localStorage.getItem("employees")) || [];
    var employee = employees[index];
    var output = "<h2>Employee Details</h2>";
    output += "<p><strong>Name:</strong> " + employee.firstName + " " + employee.middleName + " " + employee.lastName + "</p>";
    output += "<p><strong>Social Security Number:</strong> " + employee.ssn + "</p>";
    output += "<p><strong>Date of Birth:</strong> " + employee.dob + "</p>";
    // Add other fields as needed
    document.getElementById("employeeDetails").innerHTML = output;
}

//handle form submission
function handleSubmit(event) {
    event.preventDefault();
    addEmployee();
    displayEmployees();
}

// event listener for form submission
document.getElementById("employeeForm").addEventListener("submit", handleSubmit);

// display employees on page load
window.onload = displayEmployees;
