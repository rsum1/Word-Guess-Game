//array of words
const words = ["Apple", "Banana", "Orange", "Green", "Red", "Purple", "Zebra", "Ham", "Doctor", "Engineer"]

//gets new random word
const getRandWord = function () {
  return words[Math.floor(Math.random() * words.length)].toLowerCase()
}

//initialize values
let wins = 0
let losses = 0
let guesses = 10
let lettersGuessed = []
let word = getRandWord()

//resets to initial state
const reset = function () {
  word = getRandWord()
  lettersGuessed = []
  guesses = 10
  displayWord()
  document.getElementById('guesses').textContent = guesses
  document.getElementById('wins').textContent = wins
  document.getElementById('losses').textContent = losses
  document.getElementById('letters').textContent = lettersGuessed.join(', ')
}

//displays word with blanks
const displayWord = function () {

  //string of letters and blanks
  let wordStr = ""

  //toggle tracks if user won
  let winStatus = true

  //loop over word and build string
  word.split("").forEach(function (letter) {
    //if letter is in word AND user guesses letter
    if (lettersGuessed.indexOf(letter) != -1) {
      wordStr += `${letter} `
    } else {
      //add blanks for letters guessed
      wordStr += "_ "
      //blank indicates game is not won
      winStatus = false
    }
  })

  //display current state of word string
  document.getElementById('word').textContent = wordStr

  //if no blanks were added
  if (winStatus) {
    alert('Win!')
    wins++
    //reset game
    reset()
  }
}

document.onkeyup = function (event) {
  if (event.keyCode >= 65 && event.keyCode <= 90) {
    if (lettersGuessed.indexOf(event.key) === -1) {
      lettersGuessed.push(event.key)
      document.getElementById('letters').textContent = lettersGuessed.join(', ')
      if (word.includes(event.key)) {
        displayWord()
      } else {
        guesses--
        document.getElementById('guesses').textContent = guesses
        if (guesses <= 0) {
          alert('Looser')
          losses++
          reset()
        }
      }
    }
  }
}
displayWord()