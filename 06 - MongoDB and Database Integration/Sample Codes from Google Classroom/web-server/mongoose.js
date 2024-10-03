const mongoose = require('mongoose');

async function run() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/wplab');

        const Student = mongoose.model('Student', {
            stdnum: String,
            fname: String,
            lname: String,
            age: Number
        });
        
        const newStudent = new Student({
            stdnum: "12345678",
            fname: "Juan",
            lname: "dela Cruz",
            age: 20
        });

        await newStudent.save();
        console.log(newStudent);

        const newStudent2 = new Student({
            stdnum: "12345678",
            fname: "Selena",
            lname: "Gomez",
            age: 65
        });

        await newStudent2.save();
        console.log(newStudent2);

        let findStudentOne = await Student.findOne({ fname: "Peter", lname: "Parker" });
        console.log(findStudentOne);

        let findData = await Student.find({ age: 17 });
        console.log(findData);

        let stud = await Student.findOne({ age: 65 });
        
        if(stud){
            stud.fname = "Peter"
            await stud.save();
        }
        
        await Student.updateOne(
            { age: 65 },
            {$set: {fname: "Juan"}}
        );

        await Student.updateMany(
            { fname: "Juan" },
            {$set: {age: 17}}
        );

        const delStudent = await Student.deleteMany({ stdnum: "12345678"});
        console.log(delStudent);

    } catch (err) {
        console.error(err);
    } finally {
        mongoose.connection.close();
    }
}

run();
