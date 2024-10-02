import needle from 'needle';

needle.get('http://localhost:3000', (err, res) => {
    console.log(res.body); // Prints the body of the response message; in this case, "Hello"
});

// needle.get('http://info.cern.ch/hypertext/WWW/TheProject.html', (err, res) => {
//     console.log();
//     console.log(res.body);
// });

needle.get('http://localhost:3000/greeting?name=Monina', (err, res) => {
    console.log('\nGREETING');
    console.log(res.body);
});

needle.get('http://localhost:3000/greeting', (err, res) => {
    console.log('\nGREETING without query parameter name');
    console.log(res.body);
});


// POST request with empty data
needle.post(
    'http://localhost:3000/submit-data', 
    {}, // Is an empty object for now. This second parameter is where we would put data to be sent to the server (e.g. from data)
    (err, res) => {
        console.log('\nPOST request with EMPTY data');
        console.log(res.body); // Prints the server's response "Received a POST request."
    },
);

// POST request with valid data
needle.post(
    'http://localhost:3000/submit-data', 
    { name: 'Keith' }, // Can be an object or a string
    (err, res) => {
        console.log('\nPOST request with VALID data');
        console.log(res.body); // Prints the server's response "Received a POST request."
    },
);