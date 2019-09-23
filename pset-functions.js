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

const cards = [19,20,21,22]

for (i = 0; i < 10; i++) {

  const playerCardScore = cards[Math.floor(Math.random() * cards.length)]
  const dealerCardScore = cards[Math.floor(Math.random() * cards.length)]

  blackJack(playerCardScore,dealerCardScore)

  function blackJack(playerCardScore,dealerCardScore) {

    if (playerCardScore === 22 && dealerCardScore === 22 ) {

      console.log(`Player:${playerCardScore}`)
      console.log(`Dealer:${dealerCardScore}`)
      console.log('Both 22: 0')
    }

    else if (playerCardScore === 21 && dealerCardScore === 21 ) {

      console.log(`Player: ${playerCardScore}`)
      console.log(`Dealer: ${dealerCardScore}`)
      console.log('Both 21: 21')
    }

    if (playerCardScore === 22 || dealerCardScore === 22 ) {

      //console.log('One is over 21')
      console.log(`Player: ${playerCardScore}`)
      console.log(`Dealer: ${dealerCardScore}`)

        if (playerCardScore === 22 &&  dealerCardScore !== 22 ) {

          console.log(`Dealer wins with: ${dealerCardScore}`)
        }

        if (playerCardScore !==22 &&  dealerCardScore === 22 ) {

          console.log(`Player wins with:${playerCardScore}`)

        }
      }


  else if (playerCardScore > dealerCardScore) {

    console.log(`Player:${playerCardScore}`)
    console.log(`Dealer:${dealerCardScore}`)
    console.log(`Player wins with:${playerCardScore}`)

  }

  else if (playerCardScore < dealerCardScore) {

    console.log(`Player:${playerCardScore}`)
    console.log(`Dealer:${dealerCardScore}`)
    console.log(`Dealer wins with: ${dealerCardScore}`)

  }
    console.log(`-------------------`)
}
}


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


var input = "olly olly in come free";
var arrayOfWords = input.split(/\s+/);

var wordCounts = Object.create(null);

for (i = 0; i < arrayOfWords.length; i++) {
    var word = arrayOfWords[i];
    // add count of one if new word
    if (!wordCounts[word]) {
        wordCounts[word] = 1;
    } else {
    //add if existing
        wordCounts[word]++;
    }
}

var result = Object.keys(wordCounts).map(function(word) {
  console.log(`${word} : ${wordCounts[word]}`)
});


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


const wordPlayed = "javascript"

scrabbleScore(wordPlayed)

function scrabbleScore(word) {

  let sum = 0

  const Score1 = ["a","e","i","o","u","l","n","r","s","t"]
  const Score2 = ["d","g"]
  const Score3 = ["b","c","m","p"]
  const Score4 = ["f","h","v","w","y"]
  const Score5 = ["k"]
  const Score8 = ["j","x"]
  const Score10 = ["q","z"]

  for (var position = 0; position < word.length; position++) {

    let character = word.charAt(position)
    //console.log(`character = ${word.charAt(position)}`)

    if ( Score1.includes(character)) {
      sum = sum + 1
    }

    else if  ( Score1.includes(character)) {
      sum = sum + 1
    }

    else if ( Score2.includes(character)) {
      sum = sum + 2
    }

    else if ( Score3.includes(character)) {
      sum = sum + 3
    }
    else if ( Score4.includes(character)) {
      sum = sum + 4
    }
    else if ( Score5.includes(character)) {
      sum = sum + 5
    }
    else if ( Score8.includes(character)) {
      sum = sum + 8
    }
    else if ( Score10.includes(character)) {
      sum = sum + 10
    }

  }

  console.log(`"${word}" has a Scrabble Score of ${sum}`)

}


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

const wordToTest = "racecar"

isPalindrome(wordToTest)

function isPalindrome(word) {

  const arrayForward = word.split('')
  const arrayReverse = word.split('').reverse()

    if (arrayForward.toString() === arrayReverse.toString()) {

      console.log(`${word} isPalindrome = true`)
    }
    else {

    console.log(`${word} isPalindrome = false`)

    }
}


/*
// ORIGINALLY HAD THIS CODE, but it wouldn't do a string of any length

let firstChar = word.substring(0,1)
let secondChar = word.substring(1,2)
let thirdChar = word.substring(2,3)
let fourthChar = word.substring(3,4)
let lastChar = word.substring(word.length - 1, word.length)
let secondlastChar = word.substring(word.length - 2, word.length - 1)
let thirdlastChar = word.substring(word.length - 3, word.length - 2)
let fourthlastChar = word.substring(word.length - 4, word.length - 3)

if ((firstChar === lastChar) && (secondChar === secondlastChar) && (thirdChar === thirdlastChar) && (fourthChar === fourthlastChar)) {

  console.log("isPalindrome = TRUE")
}

else {

  console.log("isPalindrome = FALSE")

}
*/

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

const wordTest = "loop"

hasDoubleLetters(wordTest)

function hasDoubleLetters(word) {

 let hasDoubles = false

  for (var i = 0; i < word.length; i++) {
  //  console.log(word.charAt(i))
  if (word.charAt(i) === word.charAt(i+1)) {
    hasDoubles = true
  }

  }
  console.log(`${wordTest} has double letters = ${hasDoubles}`)

}

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')
