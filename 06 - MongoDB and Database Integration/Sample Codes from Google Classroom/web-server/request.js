const { response } = require("express");
const needle = require("needle");

const fname = "Alexander";
const password = "1234";

const data = {
    fname: fname,
    password: password,
    message: "Hello from the other side!!"
}

const displayHome = () => {
    needle('http://localhost:3001/', (err, response, body) => {
        console.log(body);
    });
}

const displayName = (fname) => {
    needle(`http://localhost:3001/greeting?name=${fname}`, (err, response) => {
        console.log(response.body);
    });
}

const submitData = (data) => {
    needle('http://localhost:3001/submit-data', data, { json: true }, { method: "POST", form: data }, (err, response, body) => {
        if(err){
            console.log(err);
        }else {
            console.log("Response: " + response.body);
        }
    })
}

displayHome();
displayName(fname);
submitData(data);
