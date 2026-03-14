let myDate = new Date();
console.log(myDate.toString());

console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toLocaleString());
console.log(myDate.toTimeString());
console.log(myDate.toUTCString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());

console.log(myDate.getTime());

console.log(myDate.setTime(1772782708815));

console.log(myDate);

// let eventTime = new Date();
// let twoHoursInMs = 2 * 60 * 60 * 1000;

// // Update the object to be 2 hours in the future
// eventTime.setTime(eventTime.getTime() + twoHoursInMs);

// console.log("Updated time:", eventTime);