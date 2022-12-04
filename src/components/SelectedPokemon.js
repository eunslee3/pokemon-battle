import React from 'react'

function SelectedPokemon({showCharzard, showVenusaur, showBlastoise, setSelectedPokemon}) {
    function showSelectedPokemon() {
        if(showBlastoise === true) {
            setSelectedPokemon("Blastoise")
            return(
            <div >
                <div className="displayedDescriptionTextContainer">
                    <p>Click Pokeball Again To Deselect</p>
                </div>
                <div className="displayedPokemonContainer">
                    <img className="displayedPokemon" src="https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-blue-version/4/4a/Blastoise.gif" />
                </div>
                <div className="displayedDescriptionTextContainer">
                    <h2>Blastoise</h2>
                </div>
            </div>
            )
        }
        if(showCharzard === true) {
            setSelectedPokemon("Charzard")
            return (
            <div >
                <div className="displayedDescriptionTextContainer">
                    <p>Click Pokeball Again To Deselect</p>
                </div>
                <div className="displayedPokemonContainer">
                    <img className="displayedPokemon" src="https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-switch/6/69/Charizard.jpg" />
                </div>
                <div className="displayedDescriptionTextContainer">
                    <h2>Charzard</h2>
                </div>
            </div>
            )
        }
        if(showVenusaur === true) {
            setSelectedPokemon("Venusaur")
            return (
            <div >
                <div className="displayedDescriptionTextContainer">
                    <p>Click Pokeball Again To Deselect</p>
                </div>
                <div className="displayedPokemonContainer">
                    <img className="displayedPokemon" src="https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-omega-ruby-and-alpha-sapphire/1/12/Venusaur.jpg" />
                </div>
                <div className="displayedDescriptionTextContainer">
                    <h2>Venusaur</h2>
                </div>
            </div>   
            )
        }
        else{
            return null
        }
    }

    return (
    <div className="showPokemon">
        {showSelectedPokemon()}
    </div>
    )
}

export default SelectedPokemon