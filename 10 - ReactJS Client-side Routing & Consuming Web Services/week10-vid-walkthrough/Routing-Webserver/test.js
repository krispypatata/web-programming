const needle = require('needle');

const gameInfo = {
    title: "Dead by Daylight",
    developer: "Behaviour Interactive et al"
};

const submitData = (gameInfo) => {
    needle.post('http://localhost:3001/add', gameInfo, { json: true }, (err, res) => {
        if (err) {
            console.error(err);
        } else {
            console.log('Response:', res.body);
        }
    });
};

submitData(gameInfo);
