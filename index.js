// Your code here

function createEmployeeRecord(employeeArray){
  let array={}
  array={"firstName":employeeArray[0],"familyName":employeeArray[1], "title":employeeArray[2],"payPerHour":employeeArray[3],timeInEvents:[],timeOutEvents:[]};
  return array;
}

function createEmployees(employee){
  let newArray=[]
  for(let i=0;i<employee.length;i++)
  {
    newArray.push(createEmployeeRecord(employee[i]))
  }
  return newArray
}

function createTimeInEvent(employeeArray,timeIn){

let hourTime=timeIn.split(' ')[1]
let dateTime=timeIn.split(' ')[0]
let newArray=createEmployeeRecord(employeeArray)
  newArray.timeInEvents={type:"TimeIn",hour:hourTime,date:dateTime}
  return newArray
}