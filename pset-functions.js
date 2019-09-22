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
function blackJack (){
  if(playerCardScore > dealerCardScore && playerCardScore <= 21){
        return `Player wins with a score of ${playerCardScore}`
      }
      else if(dealerCardScore > playerCardScore && dealerCardScore <= 21) {
        return `The dealer wins with a score of ${dealerCardScore}`
      }
      else {
        return `Bust! Player loses with a score of ${playerCardScore}, and the dealer loses with a score of ${dealerCardScore}`
      }

}

const playerCardScore = 22
const dealerCardScore = 22


console.log(blackJack())


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

/*
//testing out split array
console.log(wordCount()[1])

//testing out calling each array
wordCount().forEach(function(element, index) {
  console.log(`${element} is at index ${index}`)
})

//*/

let phrase = "Humpty Dumpty sat on a wall Humpty Dumpty had a great fall"

function wordCount(){
  return phrase.split(" ")
}

// Was playing with the stuff above but ran into issues figuring out how to solve, below is form googling


function compressArray(original) {

	var compressed = [];
	// make a copy of the input array
	var copy = original.slice(0);

	// first loop goes over every element
	for (var i = 0; i < original.length; i++) {

		var myCount = 0;
		// loop over every element in the copy and see if it's the same
		for (var w = 0; w < copy.length; w++) {
			if (original[i] == copy[w]) {
				// increase amount of times duplicate is found
				myCount++;
				// sets item to undefined
				delete copy[w];
			}
		}

		if (myCount > 0) {
			var a = new Object();
			a.value = original[i];
			a.count = myCount;
			compressed.push(a);
		}
	}

	return compressed;
};

// It should go something like this:

var newArray = compressArray(wordCount());

console.log(newArray)





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
let word = "cabbage"
let totalScore = 0
let score = 0
//let onePoint = ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"  ]

function scrabbleScore(){
   return word.split("")
}

    console.log(scrabbleScore())

for (let i = 0; i < word.length; i++) {

    //A, E, I, O, U, L, N, R, S, T       1
    if(scrabbleScore()[i] === "a" || scrabbleScore()[i] === "e" || scrabbleScore()[i] === "i" || scrabbleScore()[i] === "o" || scrabbleScore()[i] === "u" ||
    scrabbleScore()[i] === "l" || scrabbleScore()[i] === "n" || scrabbleScore()[i] === "r" || scrabbleScore()[i] === "s" || scrabbleScore()[i] === "t") {
      score++
    }
    //D, G                               2
    else if (scrabbleScore()[i] === "d" || scrabbleScore()[i] === "g") {
      score += 2
    }
    //B, C, M, P                         3
    else if (scrabbleScore()[i] === "b" || scrabbleScore()[i] === "c" || scrabbleScore()[i] === "m" || scrabbleScore()[i] === "p") {
      score += 3
    }
    //F, H, V, W, Y                      4
    else if (scrabbleScore()[i] === "f" || scrabbleScore()[i] === "h" || scrabbleScore()[i] === "v" || scrabbleScore()[i] === "n" || scrabbleScore()[i] === "y") {
      score += 4
    }
    //K                                  5
    else if (scrabbleScore()[i] === "k"){
      score += 5
    }
    //J, X                               8
    else if (scrabbleScore()[i] === "j" || scrabbleScore()[i] === "x") {
      score += 8
    }
    //Q, Z                               10
    else if (scrabbleScore()[i] === "Q" || scrabbleScore()[i] === "Z") {
      score += 10
    }

  }

console.log(score)


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
function isPalindrome(){

    let palRev = pal.split("").reverse().join("");

    if(pal === palRev){
        console.log(`${pal} is a palindrome!`)
    } else{
        console.log(`${pal} is NOT a palindrome!`)
    }
}
let pal = "noosh"
isPalindrome()
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

var texts = ["loop", "rune", "apple"];


for(var idx in texts){
    var text = texts[idx].split("");
    console.log(text.join("") + " is " + text.some(function(v,i,a){return a.lastIndexOf(v)!=i;}));

  }

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')
