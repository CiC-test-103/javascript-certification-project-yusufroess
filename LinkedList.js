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
     
       newNode = new Node(newStudent);

      // If the list is empty, set the new node as both head and tail
      if (head == null) {
          head = newNode;
          tail = newNode;
      } else {
          // Otherwise, add the new node to the end of the list and update the tail
          tail.next = newNode;
          tail = newNode;
          length++
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
     // TODO
 
  if (email == null) return this; 
  
  if (head == null) return this; 

  if (head.email.equals(email)) {
      head = head.next; 
      return this;
  }

   current = head;
  while (current.next != null) {
      if (current.next.email.equals(email)) {
          current.next = current.next.next; // Remove the node
          return this;
      }
      current = current.next;
  }
  
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
          if (current.data.email === email) {
            return current.data;
          }
          current = current.next;
          return -1
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
          let result = 'linkedlist as a string';
          let current = this.head;
          while (current) {
             
              let student = current.data;
              result += `ID: ${student.id}, Name: ${student.name}\n`;
              current = current.next;
          
          console.log(listenerCount.displayStudents());
          return result.trim(); 
          }
      }
  



  /**
   * REQUIRES:  None
   * EFFECTS:   None
   * RETURNS:   A sorted array of students by name
   */
  #sortStudentsByName() {
 // TODO
 if (this.size === 0) return [];

    // Convert LinkedList to array
    let current = this.head;
    const studentsArray = [];
    while (current) {
      studentsArray.push(current);
      current = current.next;
    

    
    studentsArray.sort((a, b) => a.name.localeCompare(b.name));

    return studentsArray;
    }
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
        if (this.size === 0) return [];
    
        let current = this.head;
        const studentsArray = [];
        while (current) {
          if (current.specialization === specialization) {
            studentsArray.push(current);
          }
          current = current.next;
        
    
        return this.#sortStudentsByName(studentsArray);
        }
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

    // Convert LinkedList to array
    let current = this.head;
    const studentsArray = [];
    while (current) {
      if (current.year >= minYear) {
        studentsArray.push(current);
      }
      current = current.next;
    

    // Sort the filtered array by student name using sortStudentsByName method
    return this.#sortStudentsByName(studentsArray);
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
