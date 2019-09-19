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

function blackJack(playerCardScore, dealerCardScore) {
   if (playerCardScore > dealerCardScore && playerCardScore <= 21) {
      return playerCardScore
   } else if (playerCardScore < dealerCardScore && dealerCardScore <= 21) {
      return dealerCardScore
   } else if (playerCardScore < dealerCardScore && playerCardScore <= 21) {
      return playerCardScore
   } else if (playerCardScore === 21 && dealerCardScore === 21) {
      return 21
   } else {
      return 0
   }
}

console.log(blackJack(19, 21))

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

function wordCount(phrase) {
   //Defining the Word array
   const cleanedPhrase = phrase.replace(/[,]/g, '')
   //Defining blank array for later use
   const wordArray = {}

   //Looping through array and assigning number of instances to each element
   cleanedPhrase.split(" ").forEach(function(currentValue, i, array) {
      wordArray[currentValue] = wordArray[currentValue]? ++ wordArray[currentValue]: 1
   })
   //Printing final array
   return wordArray
}

const finalPhrase = wordCount("Baby shark, doo doo doo doo doo doo")
console.log(finalPhrase)

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

//Takes user input and calculates points
function scrabbleScore(word) {
   //Using split to convert user input to array of individual letters
   const splitLetters = word.split('')
   
   //For loop that iterates through each array element and assigns a point value
   for (i = 0; i < splitLetters.length + 1; i++) {
      //If statement that assigns number to array element based on criteria
      if (splitLetters[i] === 'a' || splitLetters[i] === 'e' || splitLetters[i] === 'i' || splitLetters[i] === 'o' || splitLetters[i] === 'u' || splitLetters[i] === 'l' || splitLetters[i] === 'n' || splitLetters[i] === 'r' || splitLetters[i] === 's' || splitLetters[i] === 't') {
         splitLetters[i] = 1
      } else if (splitLetters[i] === 'd' || splitLetters[i] === 'g') {
         splitLetters[i] = 2
      } else if (splitLetters[i] === 'b' || splitLetters[i] === 'c' || splitLetters[i] === 'm' || splitLetters[i] === 'p') {
         splitLetters[i] = 3
      } else if (splitLetters[i] === 'f' || splitLetters[i] === 'h' || splitLetters[i] === 'v' || splitLetters[i] === 'w' || splitLetters[i] === 'y') {
         splitLetters[i] = 4
      } else if (splitLetters[i] === 'k') {
         splitLetters[i] = 5
      } else if (splitLetters[i] === 'j' || splitLetters[i] === 'x') {
         splitLetters[i] = 8
      } else if (splitLetters[i] === 'q' || splitLetters[i] === 'z') {
         splitLetters[i] = 10
      }  else {
         //Adds up the converted numbers to get total points
         const add = (a, b) => a + b
         const totalSum = splitLetters.reduce(add)
         //console.log(totalSum)
         //Returns the total points
         return totalSum
      }
   }
}

const finalScore = scrabbleScore("cabbage")
console.log(`Expected Result: ${finalScore}`)

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

//Global variable for user inputted word
const userInput = 'run'

//Create variable and reverse user inputted word
function reverseString(word) {
   //Turn the word into individual letters in an array
   const splitString = word.split('')
   //Reverse the array elements
   const reverseArray = splitString.reverse()
   //Combine the array elements back into a word
   const joinArray = reverseArray.join('')
   return joinArray
}

//Global variable that holds reversed word
const reversedString = reverseString(userInput)

//Comparing original word to reversed word and returning True or False
function isPalindrome(word) {
   if(word === reversedString) {
      return "True"
   } else {
      return "False"
   }
}

const qualityCheck = isPalindrome(userInput)
console.log(`Is your word input a palindrome? ${qualityCheck}.`)

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

function doubleLetters(word) {
   //Converted word to individual letters array
   const splitWord = word.split('')
   //Created false variable as finalCheck kept displaying undefined
   const notFound = false
   //Checks each letter to see if it matches the consecutive element
   for ( i = 0; i < splitWord.length; i++ ) {
      if(splitWord[i] === splitWord[i + 1]) {
         return true
      }
   }
   //Returns false if for loop produces no results
   return notFound
}

const finalCheck = doubleLetters('apple')

console.log(finalCheck)

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')
