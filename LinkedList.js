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
    


LinkedList<String> list >= new LinkedList ();

console.log("Empty LinkedList created: " + list);

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
       const newNode = { value: data, next: null }; 
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
     // TODO
      if (email === null) {
          console.log("Email is null, cannot remove student.");
          return
      }
      
      const index = this.students.findIndex(student => student.email === email);

      if (index !== -1) {
          this.students.splice(index, 1);
          console.log(`Student with email ${email} has been removed.`);
      } else {
          console.log(`No student found with email ${email}.`);
      }

      if (this.students.length === 0) {
          console.log("List is now empty after removal.");
      }
  }

  
  /**
   * REQUIRES:  email (String)
   * EFFECTS:   None
   * RETURNS:   The Student or -1 if not found
   */
  
     findStudent(email) {
      // TODO
      
        let current = this.head;
        while (current !== null) {
          if (current.data.email === email) {
            return current.data;
          }
          current = current.next;
        }
        return -1
       }
    

  /**
   * REQUIRES:  None
   * EFFECTS:   Clears all students from the Linked List
   * RETURNS:   None
   */
  clearStudents() {
    // TODO
    head = null;
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
    if (this.students.length === 0) {
      console.log("No students in the list.");
      return;
  }
  this.students.forEach(student => {
      
  });
  
  }


  /**
   * REQUIRES:  None
   * EFFECTS:   None
   * RETURNS:   A sorted array of students by name
   */
  #sortStudentsByName() {
 // TODO

    return [Student 
      .filter(Student => Student.name >= byname  )
      .sort((a.b) = a.byname.localeCompare(b.name))
    ];
  }

  /**
   * REQUIRES:  specialization (String)
   * EFFECTS:   None
   * RETURNS:   An array of students matching the specialization, sorted alphabetically by student name
   * CONSIDERATIONS:
   * - Use sortStudentsByName()
   */
  filterBySpecialization(specialization) {
    // TODO
   

    return [];
  }
  

  /**
   * REQUIRES:  minYear (Number)
   * EFFECTS:   None
   * RETURNS:   An array of students who are at least minYear, sorted alphabetically by student name
   * CONSIDERATIONS:
   * - Use sortStudentsByName()
   */
  filterByMinYear(minYear) {
    // TODO
    let year = array 
    return [ students
      .filter(student => student.year >= minYear)
      .sort((a.b) = (BYname) .localeCompare(b.name))
];
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
    console.error('Error writing LinkedList to file:', error);
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
        clearStudents(linkedList);
    
        // Populate the linked list with the new data
        parsedData.forEach(item => linkedList.add(item));
    
        console.log('Data successfully loaded from', fileName);
      } catch (error) {
        console.error('Error loading data from file:', error);
      
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
