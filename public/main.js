const main = () => {
  document.querySelector('h1').textContent += '?'
}

document.addEventListener('DOMContentLoaded', main)


const addMessage = (message) => {
  const newLi = document.createElement('li')
  newLi.textContent = message
  document.querySelector(".results").appendChild(newLi)
}
const choices = ["rock", "paper", "scissors"]

const clickRock  = () => {
const computerChoice = choices[Math.floor(Math.random()*3)]
// rock
if(computerChoice==="rock") {
  console.log("You tied")
  addMessage("You tied")
} else {
  if(computerChoice==="scissors") {
    console.log("You WIN!!!!")
    addMessage("You WIN!!!!")
  } else {
    console.log("You Loose")
    addMessage("You Loose")
  }
}
}

// paper
const clickPaper  = () => {
  const computerChoice = choices[Math.floor(Math.random()*3)]
  
  if(computerChoice==="paper") {
    console.log("You tied")
    addMessage("You tied")
  } else {
    if(computerChoice==="rock") {
      console.log("You WIN!!!!")
      addMessage("You WIN!!!!")
    } else {
      console.log("You Loose")
      addMessage("You Loose")
    }
  }
  }

// scissors
  const clickScissors = () => {
    const computerChoice = choices[Math.floor(Math.random()*3)]
  
  if(computerChoice==="scissors"){
    console.log("You tied")
    addMessage("You tied")
  } else {
    if(computerChoice==="paper") {
      console.log("You Win!!!!")
      addMessage("You WIN!!!!")
    } else {
      console.log("You Loose")
      addMessage("You Loose")
    }
  }
  }




document.querySelector('.rock').addEventListener('click',clickRock)
document.querySelector('.paper').addEventListener('click',clickPaper)
document.querySelector('.scissors').addEventListener('click',clickScissors)