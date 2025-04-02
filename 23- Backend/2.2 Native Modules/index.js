const fs = require("fs");

// fs.writeFile("my_messages.txt", "Hello Bitch", (err) => {
//     if (err) throw err;
//     console.log("File has been saved!");
// });

fs.readFile("./my_messages.txt", (err, data) => {
    if (err) throw err;
    console.log(data); // <Buffer 48 65 6c 6c 6f 20 42 69 74 63 68>
});

fs.readFile("./my_messages.txt", options="utf-8", (err, data) => {
    if (err) throw err;
    console.log(data); // Original File Contents.
});