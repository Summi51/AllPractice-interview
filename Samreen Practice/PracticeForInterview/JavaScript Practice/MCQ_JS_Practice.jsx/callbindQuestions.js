
//=============================

// const obj = {
//     x: 10,
//     getX() {
//       return this.x;
//     }
//   };
  
//   const retrieveX = obj.getX;
  
//   const x = retrieveX();
  
//   console.log(x)
  
//   //undefined

//----------------
//solution 

// const obj = {
//     x: 10,
//     getX() {
//       return this.x;
//     }
//   };
  
//   const retrieveX = obj.getX.bind(obj); // Bind obj as the context
  
//   const x = retrieveX();
  
//   console.log(x); // Now it will correctly log 10

//==========================================

// Important question

// function getFullName(firstName, lastName) {
//     return `${this.firstName} ${this.lastName}`;
//   }
  
//   const person = {
//     firstName: 'John',
//     lastName: 'Doe'
//   };
  
//   const fullName = getFullName.call(person, 'Alice', 'Smith');
  
//   console.log(fullName); // Output should be "John Doe"


//=======================

// function getFullName(firstName, lastName, a, v) {
//     return `${firstName} ${lastName}, ${a}, ${v}`;
//   }
  
//   const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//   };
  
//   const fullName = getFullName.call(person, 'Alice', 'Smith', 'additionalA', 'additionalV');
  
//   console.log(fullName); // Output should be "John Doe, Alice, Smith, additionalA, additionalV"
  

// //=========================================
// function calculate(a, b, operation) {
//     return operation.call(null, a, b);
//   }
  
//   function add(x, y) {
//     return x + y;
//   }
  
//   function subtract(x, y) {
//     return x - y;
//   }
  
//   const result1 = calculate(5, 3, add);
//   const result2 = calculate(10, 4, subtract);
  
//   console.log(result1); // Should output 8
//   console.log(result2); // Should output 6
  

//=====================================

// function greet(name, language) {
//     if (language === 'en') {
//       console.log(`Hello, ${name}!`);
//     } else if (language === 'es') {
//       console.log(`Hii, ${name}!`);
//     }
//   }
  
//   const greetEnglish = greet.bind(null, 'John', 'es');
//   const greetSpanish = greet.bind(null, 'Juan', 'en');
  
//   greetEnglish(); // Should output "Hello, John!"
//   greetSpanish(); // Should output "¡Hola, Juan!"