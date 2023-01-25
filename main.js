//Timer
const buttonPlay = document.querySelector('.btnPlay')
const buttonPause = document.querySelector('.btnPause')
const buttonStop = document.querySelector('.btnStop')
const buttonAdd = document.querySelector('.btnAdd')
const buttonLess = document.querySelector('.btnLess')

//Sounds
const buttonTree = document.querySelector('.btnTree')
const buttonRain= document.querySelector('.btnRain')
const buttonStore = document.querySelector('.btnStore')
const buttonFire = document.querySelector('.btnFire')

const musicTree = document.getElementById('musicTree')
const musicRain = document.getElementById('musicRain')
const musicStore = document.getElementById('musicStore')
const musicFire = document.getElementById('musicFire')


//timer
let displayMinutes = document.querySelector('.minutes')
let displaySeconds = document.querySelector('.seconds')

let minutes
let timerId


buttonPlay.addEventListener('click', function(){
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')

    minutes = prompt('Quantos minutos: \n')
    displayMinutes.textContent = String(minutes).padStart(2,'0')

    if(displayMinutes.textContent <= 0 || displayMinutes.textContent == null || displayMinutes.textContent == undefined || isNaN(Number(displayMinutes.textContent))){
        console.log('Condição inválida')
        alert('Por gentileza, Digite somente Números.')

        buttonPause.classList.add('hide')
        buttonPlay.classList.remove('hide')

        return stopCountdown();
    }


    countdown()

})
buttonPause.addEventListener('click', function(){
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')

    clearTimeout(timerId)
})
buttonStop.addEventListener('click', function () {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')

    return stopCountdown()
})
buttonAdd.addEventListener('click', function () {
    minutes = Number(displayMinutes.textContent) + 5
    displayMinutes.textContent = String(minutes).padStart(2,'0')
})
buttonLess.addEventListener('click', function () {
    minutes = Number(displayMinutes.textContent) - 5
    displayMinutes.textContent = String(minutes).padStart(2, '0')

    console.log(displayMinutes)

    if (displayMinutes.textContent <= 0) {
        console.log(`Contador Zerado, Por favor renicie o timer`)

        alert(`Opa!, Você Não pode zerar o timer e nem deixar ele negativo. \n
        Por gentileza renicie o timer e se atente ao número do contador`)

        buttonPause.classList.add('hide')
        buttonPlay.classList.remove('hide')

        return stopCountdown() 

        
    }
})

function countdown(){
    timerId = setTimeout(function () {
        let minutes = Number(displayMinutes.textContent)
        let seconds = Number(displaySeconds.textContent)

        if(seconds <= 0){
            seconds = 60

            displayMinutes.textContent = String(minutes - 1).padStart(2, '0')
        }
        displaySeconds.textContent = String(seconds - 1).padStart(2, '0')

        if (minutes <= 0) {
            buttonPause.classList.add('hide')
            buttonPlay.classList.remove('hide')

            console.log('final contador')
            return stopCountdown() 
        }
        countdown()
    }, 1000)
}

//Melhorar código abaixo stopCountdown:
function stopCountdown(){
    clearTimeout(timerId);
    displaySeconds.textContent = "00"
    displayMinutes.textContent = '00'
}

//Button Sounds
let currentSound

function playSound(sound) {
  if (currentSound === sound) {
        sound.pause()
        sound.currentTime = 0
        currentSound = null
  }
  else {
      sound.play()
        currentSound = sound
    }
}


buttonTree.addEventListener('click', function () {
  playSound(musicTree)
})

buttonRain.addEventListener('click', function () {
  playSound(musicRain)
})

buttonStore.addEventListener('click', function () {
  playSound(musicStore)
})

buttonFire.addEventListener('click', function () {
  playSound(musicFire)
})
