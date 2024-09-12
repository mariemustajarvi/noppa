

// hakee html-dokumentista dice-divin ja kuvan
const diceDiv = document.getElementById('dice')
const diceImg = document.getElementById('diceImage')

// Funktio, joka arpoo numeron ja päivittää kuvan
const rollDice = () => {
    // Math.random arpoo satunnaisluvun väliltä 1-6 ja Math.floor pyöristää sen alas kokonaisluvuksi
    const randomNumber = Math.floor(Math.random() * 6) + 1

    // asettaa kuvan nopan arvon perusteella
    diceImg.src = `./img/${randomNumber}.png`
}

// tapahtuma kuuntelija, joka kutsuu rollDice funktiota kun klikataan
diceDiv.addEventListener('click', rollDice)

