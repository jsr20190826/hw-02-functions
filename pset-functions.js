/***********
Problem: Blackjack

Create a function named `blackJack()` that accepts two parameters:
playerCardScore (number)
dealerCardScore (number)

Return whichever value is nearest (or equal) to 21 without going over. Return 0 if both scores go over 21.

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. blackJack(19, 21)

   Result: 21

2. blackJack(22, 22)

   Result: 0

3. blackJack(19, 22)

   Result: 19

3. blackJack(21, 21)

   Result: 21

************/
console.log('Problem 1:')

// Add your code below this line

// Create function 'blackJack' with 2 paramenters playerCardScore and dealerCardScore

// function blackJack.(playerCardScore, dealerCardScore) {
//   if (playerCardScore > 21 && dealerCardScore > 21)
//   return '0'
//
// }
//
// console.log(blackJack(22,22))

// const cardNumbers = [22, 22]
// let goalNumber = 21;
//
// const blackJack = cardNumbers.reduce(function(playerCardScore, dealerCardScore) {
//   return (Math.abs(dealerCardScore - goalNumber) < Math.abs(playerCardScore - goalNumber) ? dealerCardScore : playerCardScore) ? playerCardScore && dealerCardScore > 21 : ;
// });
//
// console.log(blackJack);

// Return value nearest or = 21 without going over. Return 0 if both scores go over 21

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem: Word Counter

Create a function named `wordCount()` that accepts a parameter called "phrase" which counts the number of occurrences of each word in that phrase

For example, the phrase: "olly olly in come free" should result in output that looks similar to the following:

```
olly: 1
in: 1
come: 1
free: 1
```

Feel free to add any additional functions or variables you deem necessary to meet the above requirements

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. wordCount("olly olly in come free")

   Result:

   olly: 2
   in: 1
   come: 1
   free: 1

2. wordCount("Baby shark, doo doo doo doo doo doo")

   Result:

   baby: 1
   shark: 1
   doo: 6

3. wordCount("Humpty Dumpty sat on a wall Humpty Dumpty had a great fall")

   Result:

   humpty: 2
   dumpty: 2
   sat: 1
   a: 2
   on: 1
   fall: 1
   great: 1
   had: 1
   wall: 1
************/
console.log('Problem 2:')

// Add your code below this line

const phrase1 = "olly olly in come free"
const phrase2 = "Baby shark, doo doo doo doo doo doo"
const phrase3 = "Humpty Dumpty sat on a wall Humpty Dumpty had a great fall"



function wordCount(str) {
    return str.split(" ").reduce(function(count, word) {
      count[word] = count.hasOwnProperty(word) ? count[word] + 1 : 1;
      return count;
    }, {});
}

console.log(wordCount(phrase1))
console.log(wordCount(phrase2))
console.log(wordCount(phrase3))
// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem: Scrabble Scorer

Create a function named `scrabbleScore()` that accepts a parameter called "word". The function should use the following table to calculate the Scrabble score of a provided word:

```
Letter                           Value
A, E, I, O, U, L, N, R, S, T       1
D, G                               2
B, C, M, P                         3
F, H, V, W, Y                      4
K                                  5
J, X                               8
Q, Z                               10
```

Feel free to add any additional functions or variables you deem necessary to meet the above requirements

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. scrabbleScore("cabbage")
   Note: c = 3, a = 1 (twice), b = 3 (twice), g = 2, e = 1

   Expected Result: 14

2. scrabbleScore("javascript")

   Expected Result: 24

3. scrabbleScore("function")

   Expected Result: 13

************/
console.log('Problem 3:')

// Add your code below this line

// Array scores of alphabet
const letters = {
    1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
    2: ['D', 'G'],
    3: ['B', 'C', 'M', 'P'],
    4: ['F', 'H', 'V', 'W', 'Y'],
    5: ['K'],
    8: ['J', 'X'],
    10: ['Q', 'Z']
}
// Variable to count score
let sum;

// Function: return score of letter
function lettersToScore(letter) {
    for (let index in letters) {
	if (Object.keys(letters).indexOf((letters[index].indexOf(letter) !== -1) ? index.toString() : '-1')
	    !== -1) {
	    return parseInt(index);
	}
    }
}

// Function: count final score
const scrabbleScore = function(input) {
    sum = 0;
    if (input === null || input === "") {
	return 0;
    }

    input.toUpperCase().split("").forEach(function(elem, index, array) {
	sum += lettersToScore(elem);
    });
    return sum;
}

console.log(scrabbleScore('cabbage'))
console.log(scrabbleScore('javascript'))
console.log(scrabbleScore('function'))

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem: Palindromes

Palindromes are words which read the same forward as backwards. For example, "madam" and "noon" are both palindromes.

Create a function named `isPalindrome()` that accepts a parameter called "word". The function will return true if the word is a palindrome and false if it is not.

Feel free to add any additional functions or variables you deem necessary to meet the above requirements

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. isPalindrome("noon")

   Expected Result: true

2. isPalindrome("racecar")

   Expected Result: true

3. isPalindrome("moon")

   Expected Result: false

4. isPalindrome("run")

   Expected Result: false

************/
console.log('Problem 4:')

// Add your code below this line

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem: Double Letter Checker

Create a function that takes a "word" as a parameter and returns true if the word has two consecutive identical letters.

Feel free to add any additional functions or variables you deem necessary to meet the above requirements

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. doubleLetters("loop")

   Expected Result: true

2. doubleLetters("rune")

   Expected Result: false

3. doubleLetters("apple")

   Expected Result: true

************/
console.log('Problem 5:')

// Add your code below this line

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')
