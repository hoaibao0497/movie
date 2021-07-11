const yargs = require('yargs');
const { addTask, deleteTask } = require('./task');

// add task
yargs.command({
    command: "add",
    builder: {
        title: {
            type: "string",
            demandOption: true,

        },
        description: {
            type: "string",
            demandOption: true,
        }
    },
    handler: function(args) {
        addTask(args.title, args.description);
    },
});
// remove task
yargs.command({
    command: "delete",
    builder: {
        title: {
            type: "string",
            demandOption: true,
        },
    },
    handler: function(args) {
        deleteTask(args.title)
    },
});

// update task
yargs.command({
    command: "update",
    builder: {
        title: {
            type: "string",
            demandOption: true,
        },
        description: {
            type: "string",
            demandOption: true,
        }
    },
    handler: function(args) {
        console.log("add", args)
    },
});

// list task
yargs.command({
    command: "list",
    builder: {},
    handler: function(args) {
        console.log("list", args)
    },
});

// list task detail
yargs.command({
    command: "detail",
    builder: {
        title: {
            type: "string",
            demandOption: true,
        },
        description: {
            type: "string",
            demandOption: true,
        }
    },
    handler: function(args) {
        console.log("detail", args)
    },
});

yargs.parse();