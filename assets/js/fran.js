// variables
let presetValue = 0
let numOfSides = 0
let diceThrowResult = 0

// references
const sidesPresets = document.getElementById('sidesPresets')
let customInput = document.getElementById('customInput')
let rollResult = document.getElementById('rollResult')
let allPresetBtns = document.querySelectorAll('.preset')

// functions
sidesPresets.addEventListener('click', (event) => {
    presetValue = parseInt(event.target.innerHTML)
    customInput.placeholder = "Using a preset above"
    
    allPresetBtns.forEach((item) => {
        item.classList.remove('active-button')
    }) 
    event.target.classList.add('active-button')
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
    rollResult.innerHTML = diceThrowResult

}