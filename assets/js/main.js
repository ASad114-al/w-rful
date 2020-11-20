// variables
let presetValue = 0
let numOfSides = 0
let diceThrowResult = 0

// references
const sidesPresets = document.getElementById('sidesPresets')
let customInput = document.getElementById('customInput')
let rollResult = document.getElementById('rollResult')
let allPresetBtns = document.querySelectorAll('.preset')
let spinTarget = document.getElementById('spinTarget')
let frontFace = document.getElementById('frontFace')
let randArrayNum = 1
let myArray = [1, 2, 3, 4, 5, 6]


// functions
let changeNumber = () => {
    randArrayNum = myArray[Math.floor(Math.random() * myArray.length)];
    frontFace.innerHTML = randArrayNum
}



sidesPresets.addEventListener('click', (event) => {
    console.log(event);
    presetValue = parseInt(event.target.innerHTML)
    customInput.placeholder = "Using a preset above"
    
    allPresetBtns.forEach((item) => {
        item.classList.remove('active-button')
    }) 
    if (event.target.localName == "a") {
        event.target.classList.add('active-button')
    }
})

let resetPresetValue = () => {
  presetValue = 0
  customInput.placeholder = ""
}

let genRandomNum = () => {
    if (presetValue == 0) {
        numOfSides = parseInt(customInput.value)
    } else{
        numOfSides = presetValue
    }
    diceThrowResult = Math.ceil(Math.random() * numOfSides)
    if (typeof diceThrowResult !== Number) {

    }
    // animation functionality
    spinTarget.classList.add('box')
    let callChangeNum = setInterval(() => {
        changeNumber()
    }, 100)
    setTimeout(() => {
        clearInterval(callChangeNum)
        frontFace.innerHTML = diceThrowResult
        spinTarget.classList.remove('box')
    }, 2400);

}
