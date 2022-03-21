// Given an array consisting of movie names, iterate over the array with the output of the names of each movie to the console
let movies = [
  "One Flew Over the Cuckoo's Nest",
  "Apocalypse Now",
  "Taxi Driver",
  "A Clockwork Orange",
  "Forrest Gump",
  "No Country for Old Men",
  "Schindler's List",
  "Once Upon a Time in America",
  "Pulp Fiction",
  "Twelve Monkeys",
  "Se7en",
  "The Godfather",
];
movies.forEach(function (element) {
  console.log(element);
});

// Given an array of car manufacturers, convert the array to a string and back to an array
let manufacturers = ["Tesla", "Mazda", "BMW", "Subaru", "Porsche"];
let manuToString = manufacturers.toString();
let manuToArray = manuToString.split(",");

// Given an array of the names of your friends, add the words hello to each element of the array
let friends = ["Jack", "John", "Jerry", "Linda", "Marry"];
let helloFriends = friends.map((friend) => {
  return `Hello ${friend}`;
});

// Convert numeric array to Boolean
let numerics = [1, 2, 3, 0, -99];
let boolnumerics = numerics.map((numeric) => {
  return Boolean(numeric);
});

// Sort the array [9, 10, 7, 21, 2, 1, 6, 7, 8, 3, 4, 11, 5, 6] in descending order
let array_of_numbers = [9, 10, 7, 21, 2, 1, 6, 7, 8, 3, 4, 11, 5, 6];
array_of_numbers.sort((a, b) => b - a);
console.log(array_of_numbers);

// Filter array [1,6,7,8,3,4,5,6] by value> 3
let filterArr = [1, 6, 7, 8, 3, 4, 5, 6];
let filteredArr = filterArr.filter((value) => {
  return value > 3;
});

// Write a function that takes two parameters - an array and a number and outputs the index of an array element equal to a number
function my_findIndex(array, callback) {
  const length = array.length;
  for (let index = 0; index < length; index += 1) {
    const value = array[index];
    if (callback(value, index, array)) {
      return index;
    }
  }
  return -1;
}
function my_indexOf(array, searchedValue) {
  return my_findIndex(array, function (value) {
    return value === searchedValue;
  });
}
const my_array_one = [0, 11, 2, 34];
const my_array_two = [14, 0, 2, 34];
console.log("index of 0 is: ", my_indexOf(my_array_one, 0));
console.log("index of 0 is: ", my_indexOf(my_array_two, 0));

// Implement a loop that will print the number 'a' until it is less than 10
for (let a = 0; a < 10; a++) {
  console.log(a);
}

// Implement a loop that prints prime numbers to the console
let primeNumber = function (number) {
  for (let i = 2; i * i <= number; i++) {
    if (number % i === 0) {
      console.log("not prime");
    } else {
      console.log("prime number");
    }
  }
};
let num1 = primeNumber(4);

// Implement a loop that prints odd numbers to the console
let oddNumber = function (number) {
  if (number % 2 === 0) {
    console.log("even number");
  } else {
    console.log("odd number");
  }
};
oddNumber(8);
