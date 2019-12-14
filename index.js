// Your code here
function createEmployeeRecord([firstName, familyName, title, payRatePerHour]) {
    return {
        firstName: firstName
        , familyName: familyName
        , title: title
        , payPerHour: payRatePerHour
        , timeInEvents: []
        , timeOutEvents: []
    }
}

function createEmployees(arr) {
    let arrayOfObj = [];
    for (let i = 0; i < arr.length; i++) {
        arrayOfObj.push(createEmployeeRecord(arr[i]))
    }
    return arrayOfObj
}

function createTimeInEvent(obj, dateStamp) {
    let date = dateStamp.split(" ")
   let timeObj = {
        type: "TimeIn"
        , date: date[0]
        , hour: parseInt(date[1])
    }
    obj.timeInEvents.push(timeObj)
    return obj
}

function createTimeOutEvent(obj, dateStamp) {
    let date = dateStamp.split(" ")
   let timeObj = {
        type: "TimeOut"
        , date: date[0] 
        , hour: parseInt(date[1])
    }
    obj.timeOutEvents.push(timeObj)
    return obj
}

function hoursWorkedOnDate(obj, date) {

    for (let i = 0; i < obj.timeInEvents.length; i++) {
        if (obj.timeInEvents[i].date == date && obj.timeOutEvents[i].date == date) {
          return (obj.timeOutEvents[i].hour- obj.timeInEvents[i].hour)/100
        }
    }
}


function wagesEarnedOnDate(obj, date) {
    let hours=hoursWorkedOnDate(obj,date)
    return hours*obj.payPerHour
}

function allWagesFor(obj) {
    let allPayOwed=0
    for(let i=0;i<obj.timeInEvents.length;i++){
        allPayOwed+=wagesEarnedOnDate(obj,obj.timeInEvents[i].date)
    }
    return allPayOwed
}

function createEmployeeRecords(arrayOfArray){
    let arrayOfObj=[]
    for(let i=0;i<arrayOfArray.length;i++){
       arrayOfObj.push(createEmployeeRecord(arrayOfArray[i]))
    }
    return arrayOfObj
}

 function findEmployeeByFirstName(srcArray,firstName){

    for(let i=0;i<srcArray.length;i++){
       if(srcArray[i].firstName===firstName){
           return srcArray[i]
       }
    }
 }

 function calculatePayroll(arrayOfEmployee){
    let allPayOwed=0
    let payroll=0
    for(let i=0;i<arrayOfEmployee.length;i++){
        allPayOwed=0
        for(let j=0;j<arrayOfEmployee[i].timeInEvents.length;j++){
            allPayOwed+=wagesEarnedOnDate(arrayOfEmployee[i],arrayOfEmployee[i].timeInEvents[j].date)
        }
        payroll+=allPayOwed
    }
    return payroll
 } 