// Your code here
function createEmployeeRecord(arr) {
    return {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: []
    }

}

function createEmployees(arr) {
    return arr.map(function(record) {
        return createEmployeeRecord(record);
    })
}

function createTimeInEvent(record, dateStamp) {
    let [date, time] = dateStamp.split(' ');
    record.timeInEvents.push({ type: "TimeIn", hour: parseInt(time, 10), date: date })
    return record;
}

function createTimeOutEvent(record, dateStamp) {
    let [date, time] = dateStamp.split(' ');
    record.timeOutEvents.push({ type: "TimeOut", hour: parseInt(time, 10), date: date })
    return record;
}
let hoursWorkedOnDate = function(record, givenDate) {
    let timeIn = record.timeInEvents.find(function(t) {
        return t.date === givenDate
    })
    let timeOut = record.timeOutEvents.find(function(t) {
        return t.date === givenDate
    })

    return (timeOut.hour - timeIn.hour) / 100;
}
let wagesEarnedOnDate = function(record, givenDate) {
    let wages = hoursWorkedOnDate(record, givenDate) * record.payPerHour;
    return parseFloat(wages);
}
let allWagesFor = function(record) {
    let allDates = record.timeInEvents.map(t => t.date)
    let wages = allDates.reduce(function(init, givendate) {
        return init + wagesEarnedOnDate(record, givendate);
    }, 0)
    return wages;
}

function createEmployeeRecords(record) {
    let records = record.map(r => createEmployeeRecord(r));
    return records;
}

function findEmployeebyFirstName(records, firstName) {
    return records.find(function(name) {
        return name.firstName === firstName;
    })
}

function calculatePayroll(records) {
    let payroll = records.reduce(function(init, record) {
        return init + allWagesFor(record);
    }, 0)
    return payroll;
}