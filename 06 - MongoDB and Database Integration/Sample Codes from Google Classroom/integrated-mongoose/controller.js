import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    stdnum: { type: String, required: true },
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    age: { type: Number, required: true }
});

const Student = mongoose.model('Student', studentSchema);

const homepage = (req, res) => {
    res.send('Welcome to the Homepage');
}

const addStudent = async (req, res) => {
    try {
        const { stdnum, fname, lname, age } = req.body;

        const newStudent = new Student({ stdnum, fname, lname, age });
        await newStudent.save();

        console.log("Student added successfully:", newStudent);
        res.status(201).send(newStudent);
    } catch (err) {
        // Log the exact error to troubleshoot
        console.error("Error occurred while saving the student:", err);

        // Send error response with error message
        res.status(500).send("Error saving the student.");
    }
};

const findStudent = async (req, res) => {
    res.send(await Student.find({age:req.body.age}));
}

export { homepage, addStudent, findStudent }