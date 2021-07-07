// Your code here
function createEmployeeRecord(array){

    return  {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }

}
  function createEmployees(array){
    return array.map(function(record) {
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
    record.timeOutEvents.push({ 
      type: "TimeOut",
      hour: parseInt(time, 10),
      date: date })
    return record;
}


  let hoursWorkedOnDate = function(record, Date) {
    let timeIn = record.timeInEvents.find(function(d) {
        return d.date === Date
    })
    let timeOut = record.timeOutEvents.find(function(d) {
        return d.date === Date
    })

    return (timeOut.hour - timeIn.hour) / 100;
}
function wagesEarnedOnDate(record,Date){
  
 let wages= hoursWorkedOnDate(record,Date)*record.payPerHour
  
      return wages;
}


 let allWagesFor = function(record){
    let eligibleDates = record.timeInEvents.map(function(e){
        return e.date
    })

    let payable = eligibleDates.reduce(function(memo, d){
        return memo + wagesEarnedOnDate(record, d)
    }, 0)

    return payable
}

let createEmployeeRecords = function(src) {
  return src.map(function(row){
    return createEmployeeRecord(row)
  })
}

let findEmployeebyFirstName = function(srcArray, firstName) {
  return srcArray.find(function(rec){
    return rec.firstName === firstName
  })
}

let calculatePayroll = function(arrayOfEmployeeRecords){
    return arrayOfEmployeeRecords.reduce(function(memo, rec){
        return memo + allWagesFor(rec)
    }, 0)
}
