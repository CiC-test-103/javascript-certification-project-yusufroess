// Necessary Imports (you will need to use this)
const { Student } = require('./Student')

/**
 * Node Class (GIVEN, you will need to use this)
 */
class Node {
  // Public Fields
  data               // Student
  next               // Object
  /**
   * REQUIRES:  The fields specified above
   * EFFECTS:   Creates a new Node instance
   * RETURNS:   None
   */
  constructor(data, next = null) {
    this.data = data;
    this.next = next
  }
}

/**
 * Create LinkedList Class (for student management)
 * The class should have the public fields:
 * - head, tail, length
 */
class LinkedList {
  // Public Fields
  head              // Object
  tail              // Object
  length            // Number representing size of LinkedList

  /**
   * REQUIRES:  None
   * EFFECTS:   Creates a new LinkedList instance (empty)
   * RETURNS:   None
   */
  constructor() {
    // TODO
        this.head = null;
        this.tail = null;
        this.size = 0;
      
    }
    
  


  /**
   * REQUIRES:  A new student (Student)
   * EFFECTS:   Adds a Student to the end of the LinkedList
   * RETURNS:   None
   * CONSIDERATIONS:
   * - Think about the null case
   * - Think about adding to the 'end' of the LinkedList (Hint: tail)
   */
  addStudent(newStudent) {
    // TODO
     
        if (newStudent == null) {
            return; // Handle the null case
        }
    
        if (this.tail == null) { // If the list is empty
            this.head = newStudent;
            this.tail = newStudent;
        } else {
            this.tail.next = newStudent; // Assuming 'next' is a field in Student that points to the next student
            this.tail = newStudent;
        }
    
    
  }
  /**
   * REQUIRES:  email(String)
   * EFFECTS:   Removes a student by email (assume unique)
   * RETURNS:   None
   * CONSIDERATIONS:
   * - Think about the null case
   * - Think about how removal might update head or tail
   */
  
    removeStudentEmail(email) {
    
        //if statement checks if the list is empty by seeing if this.head is null. If the list is empty,
        //  the function returns null.
          if (!this.head) {
            return null;
          }
          //if statement checks if the email of the student to be removed matches the email of the student at the head of
           //the list (this.head.student.email). If true,
          // it removes the head by updating this.head to point to the next node in the list. Then, the function returns.
          // If the student to be removed is the head
          if (this.head.student.email === studentEmail) {
            this.head = this.head.next;
            return;
          }
      //while loop traverses the list. It iterates through each node to find the student with the matching email.
      //  The loop continues as long as the next node (current.next) exists and the email of the next student
      //  (current.next.student.email) does not match the given studentEmail.
          let current = this.head;
          while (current.next && current.next.student.email !== studentEmail) {
            current = current.next;
          }
      //after while loop, an if statement checks if the next node (current.next) is null.
      //  If it is null, the student with the given email was not found, and the function returns null.
          // If the student was not found
          if (!current.next) {
            return null;
          }
      
          // Remove the student
          current.next = current.next.next;
        }
      

  /**
   * REQUIRES:  email (String)
   * EFFECTS:   None
   * RETURNS:   The Student or -1 if not found
   */
  
     findStudent(email){
      // TODO
     
function getString() {
  // This should be implemented to return the list of student strings
  // Example: returning JSON strings
  return [
      '{"name": "John Doe", "email": "john.doe@example.com"}',
      '{"name": "Jane Doe", "email": "jane.doe@example.com"}'
  ];
}

// Function to find a student by their email

  let studentStringList = getString();
  
  for (const studentString of studentStringList) {
      const student = JSON.parse(studentString);
      if (student.email === email) {
          return student;
      }
  
  
  return -1;
    }

    }
      

  /**
   * REQUIRES:  None
   * EFFECTS:   Clears all students from the Linked List
   * RETURNS:   None
   */
  clearStudents() {
    // TODO
    (head = null)
  
  
  }

  /**
   * REQUIRES:  None
   * EFFECTS:   None
   * RETURNS:   LinkedList as a String for console.log in caller
   * CONSIDERATIONS:
   *  - Let's assume you have a LinkedList with two people
   *  - Output should appear as: "JohnDoe, JaneDoe"
   */
 displayStudents() {
    // TODO
    let result = "";
///initializing an empty string result which will hold the concatenated names.
    if (this.head) {
      
      const nodes = [];
      let current = this.head;
      while (current) {
        nodes.push(current);
        current = current.next;
      }
      //check if this.head is not null or undefined to ensure there’s
       // a linked list to process. We then convert the linked list to an array for easier manipulation using a while loop.
      result = nodes.reduce((acc, node) => {
        if (node.data && typeof node.data.getName === 'function') {
          let student = node.data.getName();
          acc += `${student}, `;
        } else {
          console.log("Error: getName method is not available on node.data", node);
        }
        return acc;
      }, "");
    //reduce method on the nodes array to iterate over each node and accumulate the names into the result string.
    //  If getName is available on node.data, we append the name to the accumulator acc, followed by a comma and space.
    //  If not, we log an error to the console.

      // Remove the trailing comma and space
      if (result.length > 0) {
        result = result.slice(0, -2);
      }
    }
    //After accumulating the names, 
    //we check if result has any content. If it does, we remove the trailing comma and space using slice.
    // Print and return the result
    console.log(result);
    return result;
    
    

  }
          
  /**
   * REQUIRES:  None
   * EFFECTS:   None
   * RETURNS:   A sorted array of students by name
   */
  #sortStudentsByName() {
 // TODO
  if (this.size === 0) return [];
  //If the linked list is empty, we return an empty array immediately.

  // Convert LinkedList to array
  let current = this.head;
  const studentsArray = [];
  while (current) {
    studentsArray.push(current.data);
    current = current.next;
  }
  //traverse the linked list and push the data of each node into the studentsArray.


  // Sort the array by student names
  studentsArray.sort((a, b) => a.getName().localeCompare(b.getName()));
  //use the sort method with localeCompare to sort the students by their names.
  return studentsArray;


  }

   

  /**
   * REQUIRES:  specialization (String)
   * EFFECTS:   None
   * RETURNS:   An array of students matching the specialization, sorted alphabetically by student name
   * CONSIDERATIONS:
   * - Use sortStudentsByName()
   */
  filterBySpecialization(specialization){
    // TODO
  
  // Filter the students by the given specialization
  const filteredStudents = (student => student.specialization === specialization);
//first need to filter the students array based on the given specialization.
//  Make sure this.students contains your list of student objects.

  // Sort the filtered students by name
  const sortedStudents = this.#sortStudentsByName(filteredStudents);
//After filtering, sort the filtered array using the helper function #sortStudentsByName.
  // Return the sorted array
  return sortedStudents;

  }
// Helper function to sort students by name
sortStudentsByName(Student) {
  return Student.sort((a, b) => a.name.localeCompare(b.name));
}

  
    
  
  

  /** 
   * REQUIRES:  minYear (Number)
   * EFFECTS:   None
   * RETURNS:   An array of students who are at least minYear, sorted alphabetically by student name
   * CONSIDERATIONS:
   * -Use sortStudentsByName()
   */
  filterByMinYear(minYear){
    // TODO
    if (this.size === 0) return [];
// the size of the LinkedList is zero, it returns an empty array because there are no students to filter.

    // Convert LinkedList to array
    let current = this.head;
    //initializes current to point to the head of the LinkedList and creates an empty array
      // studentsArray to store the filtered students.

    const studentsArray = [];
    while (current) {
      if (current.year >= minYear) {
        studentsArray.push(current);
      }
      current = current.next;
      // loop traverses through each node of the LinkedList. If the year property of the current student is greater than or equal to minYear,
       //it adds the student to studentsArray. Then, it moves the current pointer to the next node in the LinkedList.

    // Sort the filtered array by student name using #sortStudentsByName method
    return this.#sortStudentsByName(studentsArray);
   // After filtering, it calls a method #sortStudentsByName to sort the array studentsArray
    // by student name and returns the sorted array.
    }
  }
   
  


  /**
   * REQUIRES:  A valid file name (String)
   * EFFECTS:   Writes the LinkedList to a JSON file with the specified file name
   * RETURNS:   None
   */
  async saveToJson(fileName) {
    // TODO
    const fs = require('fs').promises;
    try {
    const json = JSON.stringify(linkedList);
    await fs.writeFile(fileName, json);
    console.log('LinkedList successfully written to', fileName);
  } catch (error) {
    console.log('Error writing LinkedList to file:', error);
  }

  }

  /**
   * REQUIRES:  A valid file name (String) that exists
   * EFFECTS:   Loads data from the specified fileName, overwrites existing LinkedList
   * RETURNS:   None
   * CONSIDERATIONS:
   *  - Use clearStudents() to perform overwriting
   */
  async loadFromJSON(fileName) {
    // TODO
    const fs = require('fs').promises;
      try {
        // Load the data from the file
        const data = await fs.readFile(fileName, 'utf8');
        const parsedData = JSON.parse(data);
    
        // Clear the existing linked list
        clearStudents(LinkedList);
    
        // Populate the linked list with the new data
        parsedData.forEach(item => LinkedList.add(item));
    
        console.log('Data successfully loaded from', fileName);
      } catch (error) {
        console.log('Error loading data from file:', error);
      
    }
    
    function clearStudents(linkedList) {
      // Implementation to clear the linked list
      while (linkedList.size() > 0) {
        linkedList.removeFirst();
      }
    }
    
  }

}

module.exports = { LinkedList }
