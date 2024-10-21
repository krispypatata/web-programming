import mongoose from "mongoose";

await mongoose.connect("mongodb://127.0.0.1:27017/ICS");

const Student = mongoose.model("Student", {
  stdnum: Number,
  fname: String,
  lname: String,
  age: Number,
});

const homepage = (req, res) => {
  res.send("Welcome to the homepage");
};

const findStudents = async (req, res) => {
  res.send(await Student.find({}));
  res.send(await Student.find({ fname: req.query.fname }));
};

const findSubjectsPost = async (req, res) => {
  res.send(await Student.find({ age: req.body.age }));
};

export { homepage, findStudents, findSubjectsPost };
