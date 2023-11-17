const cardArray = [
    {
        name: 'fries',
        img: 'https://github.com/kubowania/memory-game/blob/master/images/fries.png?raw=true'
    },
    {
        name: 'cheeseburger',
        img: 'https://github.com/kubowania/memory-game/blob/master/images/cheeseburger.png?raw=true'
    },
    {
        name: 'hotdog',
        img: 'https://github.com/kubowania/memory-game/blob/master/images/hotdog.png?raw=true'
    },
    {
        name: 'ice-cream',
        img: 'https://github.com/kubowania/memory-game/blob/master/images/ice-cream.png?raw=true'
    },
    {
        name: 'milkshake',
        img: 'https://github.com/kubowania/memory-game/blob/master/images/milkshake.png?raw=true'
    },
    {
        name: 'pizza',
        img: 'https://github.com/kubowania/memory-game/blob/master/images/pizza.png?raw=true'
    },
    {
        name: 'fries',
        img: 'https://github.com/kubowania/memory-game/blob/master/images/fries.png?raw=true'
    },
    {
        name: 'cheeseburger',
        img: 'https://github.com/kubowania/memory-game/blob/master/images/cheeseburger.png?raw=true'
    },
    {
        name: 'hotdog',
        img: 'https://github.com/kubowania/memory-game/blob/master/images/hotdog.png?raw=true'
    },
    {
        name: 'ice-cream',
        img: 'https://github.com/kubowania/memory-game/blob/master/images/ice-cream.png?raw=true'
    },
    {
        name: 'milkshake',
        img: 'https://github.com/kubowania/memory-game/blob/master/images/milkshake.png?raw=true'
    },
    {
        name: 'pizza',
        img: 'https://github.com/kubowania/memory-game/blob/master/images/pizza.png?raw=true'
    }
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard()  {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'https://github.com/kubowania/memory-game/blob/master/images/blank.png?raw=true')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    }
}

createBoard()

function checkMatch() {
    const cards = document.querySelectorAll('.grid img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    console.log(cards)
    console.log('check for match!')
    if (cardsChosen[0] == cardsChosen[1]) {
        alert('You found a match!')
        cards[optionOneId].setAttribute('src', 'https://github.com/kubowania/memory-game/blob/master/images/white.png?raw=true') 
        cards[optionTwoId].setAttribute('src', 'https://github.com/kubowania/memory-game/blob/master/images/white.png?raw=true') 
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'https://github.com/kubowania/memory-game/blob/master/images/blank.png?raw=true')
        cards[optionTwoId].setAttribute('src', 'https://github.com/kubowania/memory-game/blob/master/images/blank.png?raw=true')
        alert('Sorry try again!')
    }
    resultDisplay.innerHTML = cardsWon.length
    cardsChosen = []
    cardsChosenIds = []

    if (cardsWon.length == cardArray.length/2) {
        resultDisplay.innerHTML = 'Congratulations! You found them all!'
    }
}

function flipCard() {
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    console.log(cardsChosen)
    console.log(cardsChosenIds)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout( checkMatch, 500)
    }
}