const fs = require('fs');

const addTask = function(title, description) {
    // get old task
    const tasks = getTask();
    // check exists task
    const checkTask = tasks.find((item) => {
        return item.title === title;
    })
    if (checkTask) return;
    // add task
    const task = { title, description };
    tasks.push(task);
    const taskJSON = JSON.stringify(tasks)
        // write file
    fs.writeFileSync("task.json", taskJSON);

}


const getTask = function() {
    try {
        const taskBuffer = fs.readFileSync('task.json');
        const taskJSON = taskBuffer.toString();
        return JSON.parse(taskJSON);
    } catch (error) {
        return []
    }
}

// const student = { name: "Bao", age: "24" }
// console.log(student)
// const studentJSON = JSON.stringify(student);
// console.log(studentJSON)

module.exports = {
    addTask,
}