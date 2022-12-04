import React, {useState} from 'react'

function StartPagePokemons({showBlastoise, setShowBlastoise, showVenusaur, setShowVenusaur, showCharzard, setShowCharzard}) {
    const [clickedPokeball, setClickedPokeball] = useState(true)

    function handlePokeballClick(e) {
        setClickedPokeball(!clickedPokeball)
        if(clickedPokeball === true) {
            e.target.className="clickedPokemon"
            const starterPokemon = document.querySelectorAll(".starterPokemon")
            starterPokemon.forEach((elem) => {
                elem.classList.add('staticPokemon')
                elem.classList.remove('starterPokemon')
            })
        }
        else if(clickedPokeball === false) {
            e.target.className="starterPokemon"
            const staticPokemon = document.querySelectorAll('.staticPokemon')
            staticPokemon.forEach((elem) => {
                elem.classList.add('starterPokemon')
                elem.classList.remove('staticPokemon')
            })
        }
    }

    function masterClickPokeball(e, setterFunction, stateVariable, clickerFunction) {
        clickerFunction(e)
        setterFunction(!stateVariable)
    }

    return (
    <div className="starting-pokemon">
        <img onClick={(e) => masterClickPokeball(e, setShowBlastoise, showBlastoise, handlePokeballClick)} className="starterPokemon" alt="blastoise" src="https://e7.pngegg.com/pngimages/906/501/png-clipart-pokeball-pokeball-thumbnail.png"></img>
        <img onClick={(e) => masterClickPokeball(e, setShowVenusaur, showVenusaur, handlePokeballClick)} className="starterPokemon" alt="charzard" src="https://e7.pngegg.com/pngimages/906/501/png-clipart-pokeball-pokeball-thumbnail.png"></img>
        <img onClick={(e) => masterClickPokeball(e, setShowCharzard, showCharzard, handlePokeballClick)} className="starterPokemon" alt="venusaur" src="https://e7.pngegg.com/pngimages/906/501/png-clipart-pokeball-pokeball-thumbnail.png"></img>
    </div>
    )
}

export default StartPagePokemons