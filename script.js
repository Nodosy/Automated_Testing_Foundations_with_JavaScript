let name = "Jack";
let user = false;
let age = 25;

// Perform addition of various types (string + boolean, string + number, number + boolean)
let sum_str_bool = name + user;
let sum_str_num = name + age;
let sum_num_bool = age + user;

console.log("string + boolean: ", sum_str_bool);
console.log("string + number: ", sum_str_num);
console.log("number + boolean: ", sum_num_bool);

// Perform multiplication of various types (string * boolean, string * number, number * boolean)
let mult_str_bool = name * user;
let mult_str_num = name * age;
let mult_num_bool = age * user;

console.log("string * boolean: ", mult_str_bool);
console.log("string * number: ", mult_str_num);
console.log("number * boolean: ", mult_num_bool);

// Divide different types (string / boolean, string / number, number / Boolean)
let div_str_bool = name / user;
let div_str_num = name / age;
let div_num_bool = age / user;

console.log("string / boolean: ", div_str_bool);
console.log("string / number: ", div_str_num);
console.log("number / Boolean: ", div_num_bool);

// Perform explicit conversion (number, string, boolean)
let string_to_number = "123";
string_to_number = Number(string_to_number);
console.log(typeof string_to_number);

let number_to_string = 123;
number_to_string = String(number_to_string);
console.log(typeof number_to_string);

let string_to_boolean = "";
string_to_boolean = Boolean(string_to_boolean);
console.log(typeof string_to_boolean);
