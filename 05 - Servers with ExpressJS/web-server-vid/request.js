const needle = require("needle");

const fname = "Alexander";
const password = "1234";

const data = {
  fname: fname,
  password: password,
  message: "Hello world!",
};

const displayHome = () => {
  needle("http://localhost:3000/", (err, response, body) => {
    console.log(body);
  });
};

const displayName = (fname) => {
  needle(`http://localhost:3000/greeting?name=${fname}`, (err, response) => {
    console.log();
    console.log(response.body)
  });
};

const submitData = (data) => {
  needle.post(
    "http://localhost:3000/submit-data",
    data,
    { json: true },
    // { method: "POST", form: data },
    (err, response, body) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Response ' + body);
      }
    }
  );
};

displayHome();
displayName(fname);
submitData(data);