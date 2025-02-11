// Necessary Imports (you will need to use this)
const fs = require('fs').promises;
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
       // this.size = 0;
        this.students = [];
        this.length = 0
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

    const newNode = new Node(newStudent);

    if (!this.head) { // If the list is empty
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode; // Link the new node at the end of the list
      this.tail = newNode;
    }

    this.length++;
    console.log(`Added student: ${newStudent.getName()}`);
  }
  /**
   * REQUIRES:  email(String)
   * EFFECTS:   Removes a student by email (assume unique)
   * RETURNS:   None
   * CONSIDERATIONS:
   * - Think about the null case
   * - Think about how removal might update head or tail
   */
  
    removeStudent(email) {
      //TODO
       // If the list is empty, return null
    if (!this.head) {
      return null;
    }

    // If the head node has the email, remove the head
    if (this.head.data.getEmail() === email) {
      this.head = this.head.next;
      if (!this.head) { // If the list is now empty, update the tail
        this.tail = null;
      }
      this.length--;
      return;
    }

    // Traverse the list to find the student with the matching email
    let current = this.head;
    while (current.next && current.next.data.getEmail() !== email) {
      current = current.next;
    }

    // If the student was not found
    if (!current.next) {
      return null;
    }

    // Remove the student node
    current.next = current.next.next;
    // If the removed node was the tail, update the tail
    if (!current.next) {
      this.tail = current;
    }

    this.length--;
  
       
        }
      

  /**
   * REQUIRES:  email (String)
   * EFFECTS:   None
   * RETURNS:   The Student or -1 if not found
   */
  
     findStudent(email){
      // TODO
      let current = this.head;
    while (current !== null) {
  // console.log(current)
      if (current.data.getEmail() === email) {
        console.log("found")
        return current.data;
      }
      current = current.next;
      
    }

    return -1; // return -1 if not found
  }
    
      

  /**
   * REQUIRES:  None
   * EFFECTS:   Clears all students from the Linked List
   * RETURNS:   None
   */
  clearStudents() {
    // TODO
    this.head = null
  
  
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
    let resultArray = [];
    let current = this.head;

while (current) {
    if (current.data && typeof current.data.getName === 'function') {
        resultArray.push(current.data.getName());
    } else {
        console.log("Error: getName method is not available on node.data", current);
    }
    current = current.next;
}

// Join the array elements into a string with a comma separator
const result = resultArray.join(', ');

console.log(`Displaying students: ${result}`);
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
   //TODO
   
    let resultArray = [];
    let current = this.head;
  
    while (current) {
      if (current.data && typeof current.data.getSpecialization === 'function' && current.data.getSpecialization() === specialization) {
        resultArray.push(current.data);
      } else {
        console.log("Error: getSpecialization method is not available on node.data or doesn't match specialization", current);
      }
      current = current.next;
    }
  
    // Sort the result array by student names
    resultArray.sort((a, b) => a.getName().localeCompare(b.getName()));
  
    return resultArray;
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
    if (this.length === 0) return [];
// the length of the LinkedList is zero, it returns an empty array because there are no students to filter.

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
    console.log(`saveToJson called with fileName: ${fileName}`); // Debug statement
    // TODO
    try {
      const studentsArray = [];
      let current = this.head;
      while (current) {
        studentsArray.push({
          name: current.data.getName(),
          year: current.data.getYear(),
          email: current.data.getEmail(),
          specialization: current.data.getSpecialization()
        });
        current = current.next;
      }
      const json = JSON.stringify(studentsArray, null, 2);
      console.log('Saving JSON:', json);  // Debug statement
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
    try {
      const data = await fs.readFile(fileName, 'utf8');
      const parsedData = JSON.parse(data);
      console.log('Loading JSON:', parsedData);  // Debug statement
      this.clearStudents();
      parsedData.forEach(item => {
        const student = new Student(item.name, item.year, item.email, item.specialization);
        this.addStudent(student);
      });
      console.log('Data successfully loaded from', fileName);
    } catch (error) {
      console.log('Error loading data from file:', error);
    }
  
  }
 
}

module.exports = { LinkedList }

 //let x = new LinkedList();

 //let studentA = new Student("John", 2, "john@gmail.com", "computerScience");
// let studentB = new Student("Jane", 3, "jane@gmail.com", "Math");
 //let studentC = new Student("Isaiah", 2, "isaiah@gmail.com", "computerScience");

// x.addStudent(studentA);
 //x.addStudent(studentB);
 // x.addStudent(studentC); 
  //console.log(x.displayStudents())

// console.log(x.findStudent("isaiah@gmail.com").getName())

//x.saveToJson("data.json")