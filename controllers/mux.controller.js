const Distance = require('../models/distance');
const Velocity = require('../models/velocity');
const Rhythm = require('../models/rhythm');
const User = require('../models/user');
const Repetition = require('../models/repetition');




const getData = async (req, res) => {
    const { distancia, velocidad, ritmo, repeticion, _id } = req.body;

    const dbUser = await User.findById({ _id });
    console.log(dbUser);

    if(!dbUser) {
        return res.status(400).json({
            ok: false,
            msg: 'El usuario no existe',
        });
    }

    const username = dbUser.username;
    console.log('USUARIO:', dbUser.username);

    const dbDistance = new Distance({ distancia, username });
    const dbVelocity = new Velocity({ velocidad, username });
    const dbRhythm = new Rhythm({ ritmo ,username });
    const dbRepetition = new Repetition( { repeticion, username } );

    await dbDistance.save();
    await dbVelocity.save();
    await dbRhythm.save();
    await dbRepetition.save();


    return res.status(200).json({
        ok: true,
        msg: 'Datos almacenados exitosamente.',
        distancia: dbDistance,
        velocidad: dbVelocity,
        repeticion: dbRepetition,
        ritmo: dbRhythm,
        _id
    })

}


module.exports = {
    getData,
}
