import needle from "needle";

const fname = "Alexander";
const password = "1234";

const data = {
    stdnum: "12345",
    fname: "Michael",
    lname: "Flores",
    age: 12,
};

const data2 = {
    age: 12,
}

const submitData = (data) => {
    needle.post('http://localhost:3001/add_student', data, { json: true }, (err, response, body) => {
        if (err) {
            console.error("Error occurred:", err);
        } else {
            console.log("Status Code:", response.statusCode);
            console.log("Response Body:", body);
        }
    });
};

const findData = (data2) => {
    needle.post('http://localhost:3001/find_student', data2, { json: true }, (err, res) => {
        if (err) {
            console.error('Error:', err);
        } else {
            console.log('Response for finding data:', res.body);
        }
    });
}

submitData(data);
findData(data2);

// const data = {
//     fname: fname,
//     password: password,
//     message: "Hello from the other side!!"
// }

// const displayHome = () => {
//     needle('http://localhost:3001/', (err, response, body) => {
//         console.log(body);
//     });
// }

// const displayName = (fname) => {
//     needle(`http://localhost:3001/greeting?name=${fname}`, (err, response) => {
//         console.log(response.body);
//     });
// }

// const submitData = (data) => {
//     needle('http://localhost:3001/submit-data', data, { json: true }, { method: "POST", form: data }, (err, response, body) => {
//         if(err){
//             console.log(err);
//         }else {
//             console.log("Response: " + response.body);
//         }
//     })
// }

// displayHome();
// displayName(fname);
// submitData(data);
