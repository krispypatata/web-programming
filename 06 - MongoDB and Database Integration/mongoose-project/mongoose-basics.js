import mongoose from "mongoose";

// connection string
await mongoose.connect("mongodb://127.0.0.1:27017/ICS");

// deprecated
// await mongoose.connect('mongodb://127.0.0.1:27017/ICS', {useNewUrlParser: true, useUnifiedTopology: true});

// Subject model
// const Student = mongoose.model('Student', {
//     stdnum: String,
//     fname: String,
//     lname: String,
//     age: Number
// });

// Subject model with forced collection name (e.g. topics)
const Student = mongoose.model(
  "Student",
  {
    stdnum: String,
    fname: String,
    lname: String,
    age: Number,
  },
  "studentData"
);

// ==============================================================
// Find
// the result parameter will contain a single object (the first matching document found)
// if no matching document was found, result will be null
// let data = await Student.findOne({ fname: "Peter", lname: "Parker" });
// console.log(data);

// results here will always be an array, regardless of how many matching documents were found
let data = await Student.find({ age: 17 });
console.log(data);

// NOTE: If we remove a field from the schema (e.g. terminal), the object/s returned by mongoose will still have field (and any other underclared fields). It doesn't make a difference in finding data. But in other operations (such as save) it will make a difference.
// ==============================================================
// SAVE
const newStudent = new Student({
  stdnum: "12345678",
  fname: "Juan",
  lname: "dela Cruz",
  age: 20,
});

await newStudent.save();

let newStudentSaved = await Student.find({ age: 20 });
console.log(newStudentSaved);

// NOTE:
// To add a new document, create an instance of the model and call save() on the object.
// If we remove a field in the schema and execute this code, the undeclared field will not be saved even if it was included in the newSubject object.

// ==============================================================
// UPDATE
let stud = await Student.findOne({ age: 20 });
stud.fname = "Peter";
await stud.save();

// updates a single document and returns an object containing the result details (NOT the document).
await Student.updateOne(
    { age: 17 },
    { $set: {fname: "John"}}
);

// updates multiple documents and returns an object containing the result details
// (NOT the documents)

await Student.updateMany(
    { age: 20 },
    { $set : { age : 17 }}
);
// ==============================================================
// DELETE
await Student.deleteOne({ stdum: '8051495842'});

await Student.deleteMany({ fname: 'John'});