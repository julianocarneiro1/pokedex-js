const pokemonSelectionList = document.querySelectorAll('.pokemon')
const pokemonCards = document.querySelectorAll('.pokemon-card')

playSounds()

pokemonSelectionList.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
        const openedCard = document.querySelector('.opened')
        openedCard.classList.remove('opened')

        const itemRemoveClass = document.querySelector('.active')
        itemRemoveClass.classList.remove('active')

        const idSelectedPokemon = pokemon.attributes.id.value
        const cardToBeOpened = document.getElementById(idSelectedPokemon + '-card')
        cardToBeOpened.classList.add('opened')

        const itemAddClass = document.getElementById(idSelectedPokemon)
        itemAddClass.classList.add('active')
    })
})

function playSounds() {
    const soundMouseOver = document.getElementById("soundMouseOver");
    const soundMouseClick = document.getElementById("soundMouseClick");   

    pokemonSelectionList.forEach((pokemon) => {
        pokemon.addEventListener('mouseenter', () => {
            soundMouseOver.currentTime = 0
            soundMouseOver.volume = 0.03
            soundMouseOver.play()            
        });
        pokemon.addEventListener('click', () => {
            soundMouseClick.currentTime = 0
            soundMouseClick.volume = 0.05
            soundMouseClick.play()
        });
    });
}