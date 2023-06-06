var empArr=[{empId:101,empName:"Sara",projectId:"P101"},
{empId:102,empName:"Keshav",projectId:"P101"},
{empId:103,empName:"Saurabh",projectId:"P102"},
{empId:104,empName:"Giri",projectId:"P102"},
{empId:105,empName:"Saraansh",projectId:"P103"},
{empId:106,empName:"Piyush",projectId:"P104"},
{empId:107,empName:"Neha",projectId:"P104"},
{empId:108,empName:"Priyam",projectId:"P105"},
{empId:109,empName:"Pranav",projectId:"P105"},
{empId:110,empName:"Puja",projectId:"P104"}]

//Add Employee
let empAdd = (empId1,empName1,projectId1) => empArr.push({
    empId:empId1,empName:empName1,projectId:projectId1
});

//  empAdd(111,'Anand123','PCS123')
//  console.log(empArr);

//Update Employee Name
var newarr;
let empUpdate= (empName,empNewName) =>{
    newarr = empArr.map(u => u != null && u != undefined && u.empName != null && u.empName == empName ? u : null);
    newarr = newarr.filter(function (obj) {
        return obj !== null && obj[0] !== null;
    });
    
    newarr[0].empName = empNewName;
}

// empUpdate("Sara", "Anand");
// console.log(empArr);


//Delete Employee
let empDelete = (empId) =>{
empArr = empArr.map(u => u != null && u != undefined && u.empId != null && u.empId != empId ? u : null);
empArr = empArr.filter(function (obj) {
    return obj !== null && obj[0] !== null;
});
}

// empDelete(101);
// console.log(empArr);

//Get Employee Detail by ID
let empDetails = (empId) =>{
    empArr = empArr.map(u => u != null && u != undefined && u.empId != null && u.empId == empId ? u : null);
    empArr = empArr.filter(function (obj) {
        return obj !== null && obj[0] !== null;
    });
}
// empDetails(101) 
// console.log(empArr);



// JOBS
// add a new employee
// change the employee name for a particular employee
// delete a particular emp for a given empId
// given a empId, get the entire details
