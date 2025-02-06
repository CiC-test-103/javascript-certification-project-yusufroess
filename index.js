// Necessary Imports, DO NOT REMOVE
const { LinkedList } = require("./LinkedList");
const { Student } = require('./Student')
const readline = require('readline');

// Initialize terminal interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Creates the Student Management System as a Linked List
/**
 * studentManagementSystem is the object that the main() function will be modifying
 */
const studentManagementSystem = new LinkedList();

// Display available commands
function main() {
  console.log(`
      Available Commands:
      - add [name] [year] [email] [specialization]: Add a student
      - remove [email]: Remove a student by email
      - display: Show all students
      - find [email]: Find a student by email
      - save [fileName]: Save the current linked list to the specified file
      - load [fileName]: Load a linked list from a file
      - clear: Clear the current linked list
      - q: Quit the terminal
  `);
}

// Command handling logic
async function handleCommand(command) {
  const [operation, ...args] = command.trim().split(' ');

  switch (operation) {
    case 'add':
      /**
       * TODO:
       *  Finds a particular student by email, and returns their information
       *  You will need to do the following:
       *   - Implement LinkedList (run tests locally to check implementation)
       *   - Grab the args (code is given)
       *   - Use implemented functions in LinkedList to add the Student, and display the updated LinkedList
       */
        console.log('Adding student...')
        const [name, year, email, specialization] = args
        // --------> WRITE YOUR CODE BELOW
        

function addStudent(student) {
 (student);
    console.log('Student added:', student);
}

function processNewStudent(args, callback) {
    const [name, year, email, specialization] = args;
    let newStudent = { name, year, email, specialization };
    callback(addStudent);
}

const studentArgs = ['John Doe', 2023, 'john@example.com', 'Computer Science'];
processNewStudent(studentArgs, addStudent);

// Log the students array to verify the addition
console.log(addStudent);

    
        // --------> WRITE YOUR CODE ABOVE
       break;


    case 'remove':
      /**
       * TODO:
       *  Removes a particular student by email
       *  You will need to do the following:
       *   - Implement LinkedList (run tests locally to check implementation)
       *   - Grab the args (removeEmail)
       *   - Use implemented functions in LinkedList to remove the Student, and display the updated LinkedList
       */
      console.log('Removing student...')
      // --------> WRITE YOUR CODE BELOW
      
    
    function removeStudent(student) {
        const index = student.indexOf(student);
        if (index > -1) {
            student.splice(index, 1);
            console.log('Student removed:', student);
        } else {
            console.log('Student not found:', student);
        }
    }
    
    function findAndRemoveStudentByEmail( email, callback) {
        
        if (Student) {
            (Student);
        } else {
            console.log(`Student with email ${email} not found.`);
        }
    }
    
    findAndRemoveStudentByEmail(Student, "bob@example.com", removeStudent);
    
    // Log the students array to verify the removal
    console.log(Student);
``    


    
      // --------> WRITE YOUR CODE ABOVE
      break;

    case 'display':
      /**
       * TODO:
       *  Displays the students in the Linked List
       *  You will need to do the following:
       *   - Use implemneted functions in LinkedList to display the student
       */
      console.log('Displaying students...')
      // --------> WRITE YOUR CODE BELOW
      
    function displayStudent(student) {
        console.log(`ID: ${displayStudent.id}, Name: ${displayStudent.name}, Age: ${displayStudent.age}`);
    }
    
    function processStudents(students, callback) {
        for (let i = 0; i < students.length; i++) {
            callback(students[i]);
        }
    }
    
    processStudents(Student, displayStudent);
    


      // --------> WRITE YOUR CODE ABOVE
      break;

    case 'find':
      /**
       * TODO:
       *  Finds a particular student by email, and returns their information
       *  You will need to do the following:
       *   - Implement LinkedList (run tests locally to check implementation)
       *   - Grab the args (findEmail)
       *   - Use implemented functions in LinkedList to grab the Student
       *   - Use implemented functions in Student to display if found, otherwise, state "Student does not exist"
       */
      console.log('Finding student...')
      // --------> WRITE YOUR CODE BELOW
      
    
    function processStudents(findstudentbyEmail) {
        console.log(`Found student: ID ${Student.id}, Name ${Student.name}, Age ${Student.age}, Email ${Student.email}`);
    }
    
    function findStudentbyEmail( email, callback) {
        
        if (Student) {
            (findStudentbyEmail);
        } else {
            console.log(`Student with email ${email} not found.`);
        }
    }
    
    findStudentbyEmail(findStudentbyEmail, "bob@example.com", processStudents);  
    
    
    
    
        
   
      // --------> WRITE YOUR CODE ABOVE
      break;

    case 'save':
      /**
       * TODO:
       *  Saves the current LinkedList to a specified JSON file
       *  You will need to do the following:
       *   - Implement LinkedList (run tests locally to check implementation)
       *   - Grab the args (saveFileName)
       *   - Use implemented functions in LinkedList to save the data
       */
      console.log('Saving data...')
      // --------> WRITE YOUR CODE BELOW
      const fs = require('fs');

// Function to convert LinkedList to array (Assuming this function exists in LinkedList)
function toArray(linkedList) {
    const nodeArray = [];
    let currentNode = linkedList.head;
    while (currentNode) {
        nodeArray.push(currentNode.data);
        currentNode = currentNode.next;
    }
    return nodeArray;
}

// Function to save LinkedList to JSON file
function saveLinkedListToJson(linkedList, saveFileName) {
    const nodeArray = toArray(linkedList);
    fs.writeFileSync(saveFileName, JSON.stringify(nodeArray, null, 2), 'utf-8');
}


      
    
      // --------> WRITE YOUR CODE ABOVE
    break
    case "load":
      /**
       * TODO:
       *  Loads data from specified JSON file into current Linked List
       *  You will need to do the following:
       *   - Implement LinkedList (run tests locally to check implementation)
       *   - Grab the args (loadFileName)
       *   - Use implemented functions in LinkedList to save the data, and display the updated LinkedList
       */
      console.log('Loading data...')
      // --------> WRITE YOUR CODE BELOW
      

// Function to convert JSON data to LinkedList
function loadFromJson(linkedList, fileName) {
    const data = fs.readFileSync(fileName, 'utf-8');
    const nodeArray = JSON.parse(data);
    nodeArray.forEach(data => linkedList.append(data));
}


      // --------> WRITE YOUR CODE ABOVE
      break;

    case 'clear':
      /**
       * TODO:
       *  Clears all data in the Linked List
       *  You will need to do the following:
       *   - Implement LinkedList (run tests locally to check implementation)
       *   - Use implemented functions in LinkedList to clear the data
       */
      console.log('Clearing data...')
      // --------> WRITE YOUR CODE BELOW
      head = null;
      // --------> WRITE YOUR CODE ABOVE
      break;

    case 'q':
        console.log('Exiting...');
        rl.close();
        break;

    default:
        console.log('Unknown command. Type "help" for a list of commands.');
        break;
  }
}

// Start terminal-based interaction (DO NOT MODIFY)
console.log('Welcome to the Student Management System!');
main();
rl.on('line', async (input) => {
  if (input.trim().toLowerCase() === 'help') {
    main();
  } else {
      await handleCommand(input);
  }
});
rl.on('close', () => {
  console.log('Goodbye!');
});
