const words = ["Apple", "Banana", "Orange"]

const getRandWord = function () {
  return words[Math.floor(Math.random() * words.length)].toLowerCase()
}

let wins = 0
let losses = 0
let guesses = 10
const lettersGuessed = []
let word = getRandWord()


const displayWord = function (chosen) {
  let wordStr = ""
  word.split("").forEach(function (letter) {
    if (letter === chosen || lettersGuessed.indexOf(letter) != -1) {
      wordStr += `${letter} `
    } else {
      wordStr += "_ "
    }
  })

  document.getElementById('word').textContent = wordStr
}

document.onkeyup = function (event) {
  if (event.keyCode >= 65 && event.keyCode <= 90) {
    if (word.includes(event.key)) {
      lettersGuessed.push(event.key)
      displayWord(event.key)
      console.log(word)
      console.log('yes')

    }
  }
}