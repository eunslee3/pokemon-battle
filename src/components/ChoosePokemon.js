import React, {useState} from 'react'
import StartPagePokemons from './StartPagePokemons'

function ChoosePokemon({setSelectPokemon}) {
    const [showBlastoise, setShowBlastoise] = useState(false)
    const [showVenusaur, setShowVenusaur] = useState(false)
    const [showCharzard, setShowCharzard] = useState(false)

    console.log(showBlastoise)
    console.log(showVenusaur)
    console.log(showCharzard)

    function showSelectedPokemon() {
        if(showBlastoise === true) {
            return(
                <div className="displayedPokemonContainer">
                    <img className="displayedPokemon" src="https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-blue-version/4/4a/Blastoise.gif" alt="daBlastoise"/>
                    <h3>Blastoise</h3>
                </div>
            )
        }
        if(showVenusaur === true) {
            return (
                <div className="displayedPokemonContainer">
                    <img className="displayedPokemon" src="https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-omega-ruby-and-alpha-sapphire/1/12/Venusaur.jpg" alt="daVenusaur"/>
                    <h3>Venusaur</h3>
                </div>
            )
        }
        if(showCharzard === true) {
            return (
                <div >
                    <div className="displayedPokemonContainer">
                        <img className="displayedPokemon" src="https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-switch/6/69/Charizard.jpg" alt="daCharzard"/>
                    </div>
                    <div className="displayedDescriptionText">
                        <h3>Charzard</h3>
                    </div>
                </div>
            )
        }
        else{
            return null
        }
    }

    return (
        <div id="start-menu-outline">
            <header className="start-title"><strong>Choose Your Pokemon!</strong></header>
            <StartPagePokemons 
                showBlastoise={showBlastoise}
                setShowBlastoise={setShowBlastoise}
                showVenusaur={showVenusaur}
                setShowVenusaur={setShowVenusaur}
                showCharzard={showCharzard}
                setShowCharzard={setShowCharzard}
            />
            <div className="showPokemon">
                {showSelectedPokemon()}
            </div>
            <div id="parent-start-button">
                <button className="button">Start Battle!</button>
            </div>
        </div>
    )
}

export default ChoosePokemon