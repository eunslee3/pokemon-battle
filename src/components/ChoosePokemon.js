import React, {useState} from 'react'
import StartPagePokemons from './StartPagePokemons'

function ChoosePokemon({setSelectPokemon}) {
    const [showBlastoise, setShowBlastoise] = useState(false)
    const [showVenusaur, setShowVenusaur] = useState(false)
    const [showCharzard, setShowCharzard] = useState(false)

    function showSelectedPokemon() {
        if(showBlastoise === true) {
            return(
                <img src="https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-blue-version/4/4a/Blastoise.gif" alt="daBlastoise"/>
            )
        }
        if(showVenusaur === true) {
            return (
                <img src="https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-omega-ruby-and-alpha-sapphire/1/12/Venusaur.jpg" alt="daVenusaur"/>
            )
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
        
            </div>
            <div id="parent-start-button">
                <button className="button">Start Battle!</button>
            </div>
        </div>
    )
}

export default ChoosePokemon