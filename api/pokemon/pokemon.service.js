const rp = require('request-promise');

exports.getAllPokemons = () => {

    return rp.get({
        url: 'https://pokeapi.co/api/v2/pokemon?limit=1000',
        json: true
    })

};