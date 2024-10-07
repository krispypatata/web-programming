
var tasks = [];


// check if element is already in tasks
var checkIfTaskAlreadyExists = function(title) {

    isExisting = false;
    tasks.forEach(
        (element)=> {
            if (element.title.toLowerCase() == title.toLowerCase()) {
                isExisting = true;
            }
        }
    );

    return isExisting;
}

var addTask = function(title, description) { 
    console.log(`\nTrying to add new task with title "${title}"` );

    const newTask = {
        title: title,
        description: description
    }

    if (checkIfTaskAlreadyExists(title)) {
        console.log("ERROR: Can't add task. It's already stored in the records!");

        return false;
    }

    tasks.push(newTask);
    console.log("SUCCESS: Added task on the records!");
    return true;
}

var viewTasks = function() {
    console.log("\n=========================================");
    console.log("TASKS");
    tasks.forEach((task) => {
        console.log();
        console.log(`Title: ${task.title}`);
        console.log(`Description: ${task.description}`);
        
    })
    console.log("=========================================");
}


addTask("Sample", "sample description");
viewTasks();
addTask("Sample", "sample description");

addTask("Sample2", "sample description2");
viewTasks();
