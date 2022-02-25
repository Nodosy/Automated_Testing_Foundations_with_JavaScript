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
let name = movies.map((movie) => {
  console.log(movie);
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

// Sort the array [1,6,7,8,3,4,5,6] in descending order
let orderedArray = [1, 6, 7, 8, 3, 4, 5, 6];
let sortedArray = orderedArray.sort();
let descendingArray = sortedArray.reverse();

// Filter array [1,6,7,8,3,4,5,6] by value> 3
let filterArr = [1, 6, 7, 8, 3, 4, 5, 6];
let filteredArr = filterArr.filter((value) => {
  return value > 3;
});

// Write a function that takes two parameters - an array and a number and outputs the index of an array element equal to a number
const indexElement = function (arr, ind) {
  return arr[ind];
};

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
let num2 = oddNumber(8);
