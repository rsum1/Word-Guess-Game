const words = ["Apple", "Banana", "Orange"]

const getRandWord = function () {
  return words[Math.floor(Math.random() * words.length)].toLowerCase()
}

let wins = 0
let losses = 0
let guesses = 10
const lettersGuessed = []
let word = getRandWord()


const displayWord = function () {
  let wordStr = ""
  let winStatus = true
  word.split("").forEach(function (letter) {
    if (lettersGuessed.indexOf(letter) != -1) {
      wordStr += `${letter} `
    } else {
      wordStr += "_ "
      winStatus = false
    }
  })
  
  document.getElementById('word').textContent = wordStr
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

      }
    }
  }
}