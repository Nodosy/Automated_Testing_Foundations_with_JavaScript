// Given the string 'ahb acb aeb aeeb adcb axeb'. Write a regular expression that matches the strings ahb, acb, aeb by pattern: letter 'a', any character, letter 'b'
let str1 = "ahb acb aeb aeeb adcb axeb";
let match_1 = /a.b/g;
let result_first = str1.match(match_1);
console.log(result_first);

// Given the string '2 + 3 223 2223'. Write a regex that finds line 2 + 3 without capturing the rest
let str2 = "2 + 3 223 2223";
let match_2 = /\d\s.\s\d/;
let result_second = str2.match(match_2);
console.log(result_second);

// Get the day, month and year of the current date and output it to the console separately
let currentDate = new Date();
let day = currentDate.getDate();
let month = currentDate.getMonth() + 1;
let year = currentDate.getFullYear();
console.log(day);
console.log(month);
console.log(year);
