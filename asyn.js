const fs = require('fs');

console.log("Start");

// Reading file using callback
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("File content:", data);

  const newContent = data + "\nNew content added.";

  // Writing file using callback
  fs.writeFile('example.txt', newContent, 'utf8', (err) => {
    if (err) {
      console.error("Error writing file:", err);
      return;
    }
    console.log("File written successfully");
  });
});

console.log("End");


//Converted to Async/Await:

const fs = require('fs').promises;

async function processFile() {
  console.log("Start");

  try {
    const data = await fs.readFile('example.txt', 'utf8');
    console.log("File content:", data);

    const newContent = data + "\nNew content added.";
    await fs.writeFile('example.txt', newContent, 'utf8');

    console.log("File written successfully");
  } catch (error) {
    console.error("Error:", error);
  }

  console.log("End");
}

processFile();