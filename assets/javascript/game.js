const words = ["Apple", "Banana", "Orange"]

let wins = 0
let losses = 0
let guesses = 10
const lettersGuessed = []


const getRandWord = function () {
  return words[Math.floor(Math.random() * words.length)]
}

const displayWord = function () {
  const word = getRandWord()
  let wordStr = ""
  word.split("").forEach(function (letter) {
    wordStr += "_ "
  })

  document.getElementById('word').textContent = wordStr
}
