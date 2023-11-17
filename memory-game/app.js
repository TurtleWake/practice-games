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

const cardsChosen = []

function createBoard()  {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'https://github.com/kubowania/memory-game/blob/master/images/blank.png?raw=true')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.append(card)
    }
}

createBoard()

function checkMatch() {
    console.log('check for match!')
}

function flipCard() {
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.legnth === 2) {
        setTimeout( checkMatch, 500)
    }
}