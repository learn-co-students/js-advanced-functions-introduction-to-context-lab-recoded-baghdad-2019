// Your code here
function createEmployeeRecord(emprec){
  let arr = {
    "firstName": emprec[0],
    "familyName": emprec[1],
    "title": emprec[2],
    "payPerHour": emprec[3],
    "timeInEvents": [] ,
    "timeOutEvents": [],
  };
return arr}

function createEmployees(employees){
  let newEmployeearr = []
  for(let i = 0; i<employees.length;i++){
    newEmployeearr.push(createEmployeeRecord(employees[i]));
  }
return newEmployeearr}

function createTimeInEvent(emprec,timeIn){
     let [date, hour] = timeIn.split(' ');
     emprec.timeInEvents.push({
       type: "TimeIn",
       hour:parseInt(hour,10),
       date
     }) 
     return emprec
}