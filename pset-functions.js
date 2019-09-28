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
function blackJack (playerCardScore, dealerCardScore) {
  //  first, let's determine if there are any entries above 21
  if ((playerCardScore > 21) && (dealerCardScore > 21)) {
    return 0
  } else if (playerCardScore > 21) {
    return dealerCardScore
  } else if (dealerCardScore > 21) {
    return playerCardScore
  } else {
    //  if none of the entries are above 21 the score will be calculated
    calculateScore(playerCardScore, dealerCardScore)
  }
}

function calculateScore (player, dealer) {
  //  calculate the difference from 21 for each score
  const playerScore = 21 - player
  const dealerScore = 21 - dealer

  //  if playerScore has a larger difference from 21 then return dealerScore
  if (playerScore > dealerScore) {
    return dealerScore
  } else {
    return playerScore
  }
}

console.log(blackJack(19, 22))
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

function wordCount (phrase) {
  const words = phrase.split(' ')
  //  empty array for counting words
  const wordCounter = {}

  //  for each word in the phrase
  words.forEach((word) => {
    if (wordCounter[word] === undefined) {
      //  debug
      //  console.log ('word doesnt exist. adding word')
      wordCounter[word] = 1
    } else {
      wordCounter[word] = wordCounter[word] + 1
    }
  })

  return wordCounter
}

console.log(wordCount('Humpty Dumpty sat on a wall Humpty Dumpty had a great fall'))
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

const pointChart = [
  { letters: 'aeioulnrst', points: 1 },
  { letters: 'dg', points: 2 },
  { letters: 'bcmp', points: 3 },
  { letters: 'fhvwy', points: 4 },
  { letters: 'k', points: 5 },
  { letters: 'jx', points: 8 },
  { letters: 'qz', points: 10 }
]

function scrabbleScore (word) {
  const lettersInWord = word.split('')
  let wordScore = 0

  //  iterate over the letters in the submitted word
  lettersInWord.forEach(function (letter) {
    // interate over the points array and find which letter
    // is currently selected
    pointChart.forEach((value) => {
      // debug
      // console.log(value['letters'])

      //  create an array of letters that align the current
      //  amount of points to be given. these letters will be compared
      //  against the current letter in the word that was submitted
      const comparisonLetters = value.letters.split('')

      //  debug
      //  console.log(comparisonLetters)

      //  find if the current letter from the submitted word exists
      //  within the set of letters for this point value.
      //  if it does, add points. if not, the set the loop proceeds
      //  to the next set of letters associated with value['points']
      if (comparisonLetters.find(element => element === letter)) {
        wordScore += (value.points)

        // debug
        // console.log(`new wordScore is ${wordScore}`)
      }
    })
  })

  return (`This word is worth ${wordScore} points`)
}

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
function isPalindrome (word) {
  if (word === reverseWord(word)) {
    return true
  } else {
    return false
  }
}

function reverseWord (fwd) {
  const str = fwd.split('')
  const reverseStr = str.reverse()
  const reversedWord = reverseStr.join('')

  return reversedWord
}

console.log(isPalindrome('run'))
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

function doubleLetters (word) {
  const wordLetters = word.split('')
  let hasDoubleLetters = false

  //  iterate through letters of the submitted word
  wordLetters.forEach((letter, index) => {
    //  declare the current letter and previous letter of the iteration
    const currentLetter = wordLetters[index]
    const previousLetter = wordLetters[index - 1]

    //  debug
    //  console.log(`current letter is ${currentLetter}. previous letter was ${previousLetter}.`)

    //  if they're the same, then double letters are present,
    //  return true
    if (currentLetter === previousLetter) {
      hasDoubleLetters = true
    }
  })

  return (hasDoubleLetters)
}

console.log(doubleLetters('apple'))
// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')
