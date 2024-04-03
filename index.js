// Write your solution in this file!
// Initialize employee object
let employee = {
    name: "John Doe",
    streetAddress: "123 Main St"
  };
  
  // Function to update employee with key and value (non-destructively)
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee,
      [key]: value
    };
  }
  
  // Function to update employee with key and value (destructively)
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  // Function to delete property from employee object (non-destructively)
  function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  // Function to delete property from employee object (destructively)
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
  // Example usage:
  console.log("Initial employee:", employee);
  
  let updatedEmployee = updateEmployeeWithKeyAndValue(employee, "name", "Jane Doe");
  console.log("Updated employee (non-destructive):", updatedEmployee);
  
  console.log("Employee after non-destructive update:", employee); // Original employee object remains unchanged
  
  destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "456 Elm St");
  console.log("Employee after destructive update:", employee);
  
  let employeeWithoutAddress = deleteFromEmployeeByKey(employee, "streetAddress");
  console.log("Employee without street address (non-destructive):", employeeWithoutAddress);
  
  console.log("Employee after non-destructive deletion:", employee); // Original employee object remains unchanged
  
  destructivelyDeleteFromEmployeeByKey(employee, "name");
  console.log("Employee after destructive deletion:", employee);
  