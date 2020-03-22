const service = require('./pokemon.service')

exports.getAll = async (req, res) => {
    try {
        let response = await service.getAllPokemons();
        response = response.results.map(item => {
            item.id = item.url.split('/')[item.url.split('/').length-2]
            item.image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.id}.png`;
            return item;
        });
        res.status(200).json(response);
    }
    catch(err) {
        console.error(err);
        res.status(500).json({
            message: 'Error fetching data from pokemon api.'
        })
    }
};