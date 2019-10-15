// Your code here
function createEmployeeRecord(arr){
  return {
    firstName: arr[0],
    familyName: arr[1],
    title: arr[2],
    payPerHour:arr[3],
    timeInEvents:[],
    timeOutEvents:[]
  };
}
function createEmployees(arrOfArr){
   return arrOfArr.map(e=>createEmployeeRecord(e))
}
function createTimeInEvent(employeeRecord,dateStamp){
     let [date, hour] = dateStamp.split(' ');
     employeeRecord.timeInEvents.push({
       type: "TimeIn",
       hour:parseInt(hour,10),date
     }) 
     return employeeRecord
}
function createTimeOutEvent(employeeRecord,dateStamp){
     let [date, hour] = dateStamp.split(' ');
     employeeRecord.timeOutEvents.push({
       type: "TimeOut",
       hour:parseInt(hour,10),date
     }) 
     return employeeRecord
}
function hoursWorkedOnDate (employeeRecord,time){
    let inEvent = employeeRecord.timeInEvents.find(function(e){
        return e.date === time
    })
    let outEvent = employeeRecord.timeOutEvents.find(function(e){
        return e.date === time
    })
    return (outEvent.hour - inEvent.hour) / 100
}
function wagesEarnedOnDate(employeeRecord,time){
  return parseFloat((hoursWorkedOnDate(employeeRecord,time)*employeeRecord.payPerHour).toString())
}
function allWagesFor(employeeRecord){
  let time=employeeRecord.timeInEvents.map(e=>e.date);
  return time.reduce(function(a,c){
    return a+wagesEarnedOnDate(employeeRecord,c)
  },0)
}
function calculatePayroll(employeeRecords){
   return employeeRecords.reduce(function(a,c){
        return a + allWagesFor(c)
    }, 0)
}
function createEmployeeRecords(record){
   return record.map(input=>createEmployeeRecord(input))
}
function findEmployeebyFirstName(employeeRecords,firstName){
  return employeeRecords.find(e=>e.firstName===firstName)
}