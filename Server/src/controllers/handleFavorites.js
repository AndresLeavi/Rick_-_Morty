let  myFavorites = [];

const postFav = (req, res) => {
    const character = req.body;

    myFavorites.push(character);

    return res.status(200).json(myFavorites)
}

const  deleteFav = (req, res) => {
    const {id} = req.params;

    myFavorites = myFavorites.filter((favorite) => 
        favorite.id !== +id);

        //en esta linea pisamos el array original y lo retornamos, de esa forma me van a quedar solo los favortios que queremos, de no hacerlo asi nunca modificariamos el array originial

    return res.status(200).json(myFavorites);
    
};

module.exports = {
    postFav,
    deleteFav
}