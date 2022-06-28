/*
    Quando clicar no pokémon da pokemon-list esconder outros cards e mostrar somente o que foi selecionado.
    - pokemon-list
    - pokemon-card
   
    - Criar duas variáveis js para trabalhar com os elementos da tela.
    - Trabalhar com evento de clique feito pelo usuário na pokemon-list
    - remover a classe opened do cartão que está aberto
    - adicionar a classe opened no pokémon que foi clicado, através de seu id
    - remover classe active, que marca o pokémon selecionado
    - adicionar classe active no item da lista que foi selecionado
*/

const pokemonSelectionList = document.querySelectorAll('.pokemon')
const pokemonCards = document.querySelectorAll('.pokemon-card')

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