// Your code here
function createEmployeeRecord(arr){
    return {firstName: arr[0], familyName: arr[1],
        title: arr[2], payPerHour: arr[3], timeInEvents: [],
        timeOutEvents: []}
}

function createEmployees(newData){
    return newData.map(createEmployeeRecord)
}

let createEmployeeRecords = function(db) {
    return db.map(createEmployeeRecord)
}

function createTimeInEvent(emp, dateTime){
    let [date, time] = dateTime.split(' ')
    emp.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(time,10),
        date,
    })

    return emp
}

function createTimeOutEvent(emp, dateTime){
    let [date, time] = dateTime.split(' ')
    emp.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(time,10),
        date, //==========================================================
    })

    return emp
}

function hoursWorkedOnDate(emp, givenDate){
    let timeIn = emp.timeInEvents.find((e) => e.date === givenDate)

    let timeOut = emp.timeOutEvents.find((e) => e.date === givenDate)

    return (timeOut.hour - timeIn.hour) / 100
}

function wagesEarnedOnDate(emp, givenDate){
    let income = hoursWorkedOnDate(emp, givenDate) * emp.payPerHour
    return parseFloat(income.toString()) //===============================
}

function allWagesFor(emp){
    let timeInDates = emp.timeInEvents.map((e) => e.date)

    let income = timeInDates.reduce(function(all, date){
        return all + wagesEarnedOnDate(emp, date)
    },0)

    return income
}

let findEmployeebyFirstName = function(arr, firstName) {
    return arr.find((emp) => emp.firstName === firstName)
}

function calculatePayroll(records){
    return records.reduce(function(all, emp){
        return all + allWagesFor(emp)
    }, 0)
}
