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

let empAdd = (empId1,empName1,projectId1) => empArr.push({
    empId:empId1,empName:empName1,projectId:projectId1
});

// empAdd(113,'Anand','PCS')
// // console.log(empArr);
// var arr = empArr.map(u => u != null && u != undefined && u.empId != null && u.empId != 110 ? u : null);
// console.log(arr);

let empDelete = (empId) =>{
empArr = empArr.map(u => u != null && u != undefined && u.empId != null && u.empId != empId ? u : null);
empArr = empArr.filter(function (obj) {
    return obj !== null && obj[0] !== null;
});
}

//empDelete(109);
//console.log(empArr);

let empDetails = (empId) =>{
    empArr = empArr.map(u => u != null && u != undefined && u.empId != null && u.empId == empId ? u : null);
    empArr = empArr.filter(function (obj) {
        return obj !== null && obj[0] !== null;
    });
}
//empDetails(103) 
//console.log(empArr);

var newarr;
let empUpdate= (empName,empNewName) =>{
    newarr = empArr.map(u => u != null && u != undefined && u.empName != null && u.empName == empName ? u : null);
    newarr = newarr.filter(function (obj) {
        return obj !== null && obj[0] !== null;
    });
    
    newarr[0].empName = empNewName;
    //console.log(newarr);
    //empArr= empArr.map(u => u != null && u != undefined && u.empName != null && u.empName != empName ? u : null);
    //console.log(empArr);
    // empArr = empArr.filter(function (obj) {
    //     return obj !== null && obj[0] !== null;
    // });
    //console.log(empArr);
    // empArr.push({
    //     empId:newarr.empId,empName:newarr.empName,projectId:newarr.projectId
    // });

   
}

//empUpdate("Sara", "Anand");
//console.log(empArr);
// JOBS
// add a new employee
// change the employee name for a particular employee
// delete a particular emp for a given empId
// given a empId, get the entire details
