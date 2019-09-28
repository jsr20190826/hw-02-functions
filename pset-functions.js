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

    if (playerCardScore>21 && dealerCardScore>21) {
      result = 0
  } else if (playerCardScore>21 || dealerCardScore>21) {
      result = Math.min(playerCardScore, dealerCardScore)
  }
    else {
      result = Math.max(playerCardScore, dealerCardScore)
  }
  return result
}

const a=19
const b=21
console.log("Test case a=19 and b=21.  Winner is:")
console.log(blackJack(a,b))


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
  // Have to split the sentence into words
  // first get rid of possible commas --
  const nocomma=phrase.replace(',',"")
  const words=nocomma.split(" ")
  const nWord={}
  //loop through the number of words in the sentence and
  //check for each of the words we have already identifies
  words.forEach((word) => {
    //    console.log(nWord[word])
    if (nWord[word] === undefined) {
    nWord[word] = 1
    } else {
    nWord[word]++
    }
  })  // closing the loop
  return nWord
} // closing the function

const phrase="Baby shark, doo doo doo doo doo doo"
console.log("Test:" + phrase)
console.log(wordCount(phrase))

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
function scrabbleScore(word) {
  // Have to split the sentence into words
  let characters=word.split("")
  let points=0
  // put the cases inside arrays to facilitate adding points
  const onePoint=["a","e","i","o","u","l","n","r","s","t"]
  const twoPoint=["d","g"]
  const threePoint=["b","c","m","p"]
  const fourPoint=["f","h","v","w","y"]
  const fivePoint=["k"]
  const eightPoint=["j","x"]
  const tenPoint=["q","z"]
  //loop through the number of characters in the workd

  for (var i = 0; i < characters.length; i++) {
      // check which point categories the character belongs in and add points
    if (onePoint.includes(characters[i])) {
        points=points+1
    } else if (twoPoint.includes(characters[i])) {
        points=points+2
    } else if (threePoint.includes(characters[i])) {
      points=points+3
    } else if (fourPoint.includes(characters[i])) {
      points=points+4
    } else if (fivePoint.includes(characters[i])) {
      points=points+5
    } else if (eightPoint.includes(characters[i])) {
      points=points+8
    } else if (tenPoint.includes(characters[i])) {
      points=points+10
    }//find in the point categories
  } //for each charater in the test word
  return points
} // end of function

const word="function"
console.log("Test: " + word)
console.log("Number of points: " + scrabbleScore(word))




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
function isPalindrome(word){
  // split the word into characters
  let wordChar=word.split("")
  let reverseWord=[]
  //console.log(wordChar)
  // add the characters into reverseWord in reverseorder
  for (let i = 0; i < wordChar.length; i++) {
    reverseWord[wordChar.length-i-1]=wordChar[i]
  }
  // Output the word and the revers for debugging
  console.log("Original word: " + word)
  console.log("Revers word: " + reverseWord.join(""))
  // check if we have a Palindrome
  if (word===reverseWord.join("")) {
    return true
  }
}

const test="racecar"
if (isPalindrome(test))
  {console.log("is a Palindrome")
  } else
  {console.log("maybe undefined")
  }


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
  // Have to split the sentence into words
  // first get rid of possible commas --
  const characters=word.split("")
  let double=false
  //loop through the number of words in the sentence and
  //check for each of the words we have already identifies
  for (var i = 0; i < (word.length)-1; i++) {
    if (characters[i]===characters[i+1]) {
      double=true
    }
  }  //closing the todoloop
 return double
} // closing the function

const testword="runu"
console.log("Test: " + testword)
console.log("Result for double character test:", doubleLetters(testword))


// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')
