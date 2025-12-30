**MASTERING JAVASCRIPT COURSE** <br/> <br/>

**Requirements**
The minimum requirement to follow this challenge <br/>
**1.** Computer <br/>
**2.** Internet <br/>
**3.** Consistency <br/>
**4** Html (Hypertext markup languge) skill <br/>
**3.** Css (Cascading style sheet) skill <br/>



**Code Editor** <br/>
As web developer, you should write code using a text or code editor. Therefore, to write HTML code, CSS, JS, React etc. You need to have a code editor.
I will use Visual studio code and I will use it in this challenge too. I strongly suggest to use Visual Studio Code because it has lots of productivity extensions that makes super productive. Now, let's download https://code.visualstudio.com/Download visual studio code. <br/>



------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
**EVERY LESSONS YOU WILL FIND ON THIS "JAVASCRIPT" Practically COURSE are :** <br/>
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



➡️ **What Is JavaScript ?** <br/>
Javascript is the technology we use to create Websites. We use javascript to modify the Web Page. Javascript was create by “Brendan Eich” in 1995. <br/>

   ✔️ **Three (3) major technologies we use in creating website, they include:** <br/>
   1. Html
   2. Css
   3. Javascript



➡️ **NUMBERS And MATHS (IN JAVASCRIPT)** <br/>

   ✔️ **Data Types In Javascript** <br/>
   Javascript has 8 basic data types, which are categoried into “primitive & non-primitive types”. <br/>
   
  Primitive Data Types:  These are immutable & represent the most basic data types. They include:  <br/>
  1)Numbers: Represents numeric values , including integers and floating-point numbers. <br/>
  2)String: Represents sequence of characters , used for text. <br/>
  3)Boolean: Represents logical values, either  “true” or “false” .   <br/>
  4)Null: Represents the intentional absence  of any object value. It has only one value: Null. <br/>
  5)Undefined:  Represents the absence of a defined value. It has only one value: undefined. <br/>
  6)BigInt:  Represents integers of arbitrary precision, useful for numbers larger than standard Number type can handle. <br/>
  7)Symbol:  Represents a unique and immutable identifier , often used as object keys. <br/>
  
  Non-Primitive Data Types:  These are mutable and represent more complex structure. <br/>
  8)Object: Represents a collection of key-value pairs.  It can be used to store various data structures , including other objects, arrays and functions . Arrays and functions are technically special kind of objects in javascript.

   ✔️ **OrderOf Operation (with the operators)** <br/>
      1) (...) <br/>
      2) * /  <br/>
      3) + -  <br/>
      4) Comparison Operators  <br/>
      5) Logical Operators  <br/>

      In Javascript Order of operation is done this way below:  
      * / are done first
      + - are done after

      NOTE: We can use brackets () to control which part of the calculation gets done first. <br/>
      In programming:  2,3,4 = integers  &  2.3, 2.7 <br/>

   ✔️ **The following table summarizes the Math object's methods** <br/>
      a) abs().   /for absolute value <br/>
      
      b) sin(). , cos(). , tan().    /Standard trigonometric functions; with the argument in radians. <br/>
      
      c) asin(). , acos(), atan(). , atan2().   /Inverse trigonometric functions; return values in radians. <br/>
      
      d) sinh(). , cosh(). , tanh().  /Hyperbolic functions; argument in hyperbolic angle. <br/>
      
      e) asinh(). , acosh(). , atanh().   /Inverse hyperbolic functions; return values in hyperbolic angle. <br/>
      
      f) pow(). , exp(). , expm1(). , log(). , log10(). , log1p(). , log2().   /Exponential and logarithmic functions. <br/>
      
      g) floor(). , ceil().     /Returns the largest/smallest integer less/greater than or equal to an argument.  <br/>
      
      h) min(). , max().     /value of a comma separated list of numbers as arguments. <br/>
      
      i) random().      /Returns a random number between 0 and 1. <br/>
      
      j) round(). , fround(). , trunc(). ,      /Rounding and truncation functions. <br/>
      
      k) sqrt()., cbrt()., hypot().      /Square root, cube root, Square root of the sum of square arguments. <br/>
      
      l) sign().      /The sign of a number, indicating whether the number is positive, negative or zero. <br/>
      
      m) clz32(). ,      /Number of leading zero bits in the 32-bit binary representation. <br/>
      
      n) imul().      /The result of the C-like 32-bit multiplication of the two arguments. <br/>
      
      E.g   Math.random();



➡️ **STRINGS (IN JAVASCRIPT)** <br/>

   ✔️  **Strings = text** <br/>
      Concatenation means when we combine strings together (e.g ‘some’ + ‘more’) . <br/>
      E.g  of concatenated string 
      ‘Items (‘+ (1+1) + ‘): $ ’ + (2095 + 799) /100
      
   ✔️ **A Character can be :** <br/>
      1.letter (a,b,c) <br/>
      2.Numbers (1,2,3) <br/>
      3.Symbol (!,@,#) <br/>
      4.Escape character  \’  , \n  <br/>
      5.Backtick `` :- To inset values you need to use this using back ticks <br/>
      E.g of a javascript string format: 
      ‘I\’m  learning javascript’
      `how are you jerick

      NOTE:  String created by back-ticks are called template strings
      I.) The First Special Feature of Template Strings is call ‘interpolation’: Interpolation lets us insect a value directly into a string. <br/>
      E.g of a interpolated template string
      `Items (${1+1}): $${(2095 + 799)/100}`

      II.) The Second Special Feature of Template Strings is called ‘Multi-Line Strings’ <br/>
      E.g of a multi-line template string
             `Some
         Text`



➡️ **VARIABLES (IN JAVASCRIPT)** <br/>
   ✔️ Variable: A variable is just a container for value , we can save a number or a string etc. inside a variable.  <br/>
	Variable = container  <br/>
	E.g  
	let variable1 = 3; <br/>
   
   ✔️Declaring a variable: To use a “variable” , you got to first of all create it.
	E.g  let variable;    => Note this is a  an empty container <br/>
   
   ✔️ Initializing a variable: Once you “declared a variable” , you can now “initialze” it with a value .  <br/>
	E.g variable = 2; 
   NOTE: You can also “declare & initialize” you variable the same time. <br/>
   E.g let coddy = 26; 

✔️ **Variable Types**: There are a few different  types of data we can  store in variable. <br/>

	1. Numbers: you can store numbers in variables (integers “whole numbers” , decimal numbers “floating numbers” )  <br/>
	e.g let myAge= 21;  <br/>
	
	2. Strings: String are piece of text. When you give a a variable a string value, you need a wrap it in a single / double / backticks quote marks <br/>
		   e.g let hello = ‘this is it’;
	 	    e.g let hiLegend = `his is it`;
		 e.g let welcome = "this is it";
	
	3. Booleans: They are another type of value.  Booleans are true of false values . They can have two values , true or false . They are generally used to test conditions 	<br/>
		 e.g let message = true;
	
	4. Arrays: are single object that contains multiply values enclosed in a square bracket & separated with commas. <br/>
		e.g let myArray = [‘ifeanyi’, ‘legendarycode’]; 
		e.g let myTeam = [“ifeanyi”, “legendarycode”];
		e.g let numberArray = [2, 3, 5];
		NOTE: once the arrays are defined you can access each value by their locationwithin the array.
		numberArray[2];
		
	5. Objects: In programming is a structure of code that models real-life objects. <br/>
		e.g let  cats = { name: “meo”,  breed: “delmation”};
		To retrieve the function stored in the object you do this:
		cats.name;
	
	6. Constants in javascript: As well as variables, yo can declare constants. These are like variables, except that 
	- “you must initialize them when you declare them”.
	- “You can’t assign them a new value after you have initialized them”. <br/>

✔️ Naming Conventions :  <br/>
	a)camalCase naming convention:  <br/>
		e.g cartQuantity  <br/>
	b)PaschalCase naming convention: <br/>
		e.g CartQuantity <br/>
	c)kebab-case namin convention:   <br/>
		e.g cart-quantity (this doenot work in javascript but we use this in our file name , html, css etc.) <br/>
	d) snake_case naming convention:  cart_quantity <br/>
		e.g  snake_case  (this is used in other programming lang. Not in javascript ). <br/>




➡️ **BOOLEANS & IF-STATEMENT (Conditional statements)** <br/>
	Booleans are another type of values in javascript. But booleans are special because there are only two (2) values:  <br/>
true, false. <br/>
	✔️ Comparison Operators: <br/>
		(i.) greater than  >
		(ii.) less than <
		(iii.) greater than or equal to >=
		(iv.) lesser than or equal <=
		(v.) equal to ===
		(vi.) Not equal to !== </br>

	✔️ Conditional Operators: </br>
		Conditional operators, in javascript , the primary conditional operator is  the “ternary operator ( ? : )”  It is a  shorthand way of writing “if … else statement”. 		Allowing you to evaluate condition and return one of two expressions based on  whetherthe condition is true or false. </br>
		It is called “ternary operator” becus , it is the only operator in javascript  that takes three(3) operands : “a condition”, “an expression to execute if the 				condition is truthy”, and  “an expression to execute if the conditionis falsy”. </br>
		General Syntax is as follows below: </br>
		Condition ? expressionIfTrue : expressionIfFalse; </br>
		e.g 1: </br>
		let age = 20; </br>
			let message =  (age >= 18) ?  "You are an adult." : "You are a minor."; </br>
			console.log(message); // Output: You are an adult. </br>
		
		e.g 2: </br>
		let age = 20; </br>
			let message =  (age <= 18) ?  "You are an adult." : "You are UnderAge."; </br>
			console.log(message); // Output: You are UnderAge. </br>

	✔️ Logical Operators: <br/>
		Logical operators lets us combine boolean values. <br/>
		<i.> AND Operator (&&):- It checks if the right side is true and also the left side is true. <br/>
		e.g
		Console.log(true && true);    => results equals “true”

		<ii.> OR  Operator (||):- It checks if the left sides is true or the right side is true. <br/>
		e.g
		Console.log(true  || false);    => results equals “false” <br/>
		
		<iii.> Not Operator (!):- The Not operator only uses one operator and flips it into opposite value. <br/>
		e.g
		Console.log( !false);    => results equals “true” <br/>

	✔️ ShortCuts For “if-Statements” <br/>
	i). Ternary  Operator ? : </br>
	ii). Guard Operator  && </br>
	iii). Default Operator || </br>
	Ternary Operator ‘?:’  :-  It works this way, </br>
	if value1 is “true”  ? then the result is value2 :Else the result is  value3 “false”  …….. value1 ? value2 : value3  </br>
	 SYNTAX: </br>
	 // Ternary Operator Example </br>
		let result2 = true ? 'truthy' : 'falsy'
		e.g 1:
		let age = 20; </br>
			let message =  (age >= 18) ?  "You are an adult." : "You are a minor.";  </br>
			console.log(message); // Output: You are an adult. </br>
			
		e.g 2:  </br>
		// SHortCut for thesame if-statement like this </br>
		let result2; </br>
		if(condition){ </br>
		    result2 = 'truthy'; </br>
		} </br>
		else { </br>
		    result2 = 'falsy'; </br>
		} </br>
		
	✔️ Guard Operator ‘&&’ :- </br>
	The term "guard operator" typically refers to using the logical && (AND) operator for conditional execution or value selection based on "truthiness" (short-circuit 		evaluation). </br>
	E.g1 (for guard && operator) </br>
	// Guard Operator Example  </br>
	const message = 5 && 'welcome'; </br>
	console.log(message); </br>
	// Guard Operator is a SHortCut for if-statement like this: </br>
	if(condition){ </br>
	    console.log('hello'); </br>
	} </br>
	const a = 3; </br>
	const b = -2; </br>
	console.log(a > 0 && b > 0); </br>
	// Expected output: false (becus but conditions are not true) </br>
	
	Default Operator ||  :- Similar to Guard operator but uses or </br>
	E.g // Default Operatoer Example </br>
	Const currency = undefined ||  ‘usd’; </br>
	Console.log(currency); </br>
	// SHortCut for this default operator with if-statement like this </br>
	if(condition){ </br>
    	console.log('hello'); </br>
	} </br>



➡️ **FUNCTIONS** <br/>
	What is a function: Functions are the fundamental building blocks in javascript. A function lets us re-use code.  <br/>
	NOTE: Functions are values so we can use a function as a parameter in another function we exported <br/>

	✔️ Defining Functions: <br/>
		Functions declaration . A function definition (also known as “function declaration , or function statement” ) consist of the function keyword followed by: <br/>
		a) The name of the function.  <br/>
		b) A list of parameters to the function, enclosed in paranthesis separated by commas.  <br/>
		c) The javascript statements that defiine the function , enclosed in curly braces , { /* … */ }  <br/>

	✔️ Function Expression:  Functions can also be created by a function expression. Such functioncan be anonymous; It dies not have to have a name.  <br/>

	✔️ Calling  Functions: Defining a function does not execute. Defining it names the function  and specifies what to do when the functionis called. Calling the function actually performs the specified actions with the indicated parameters. For example, if you define the function add, you could call it as follows:  <br/>

	✔️ Why do we use Function ? <br/>
		A function lets us re-use code. <br/>
		Functions make our easier to update. <br/>

	✔️ Return Statement:   A return statement  lets us  get value out of a function. A  return statement in javascript functions serve to “exit the functions”  executionand optionally provide  value back to the caller. When a return statement is encountered , the function immediately stops running, and any code that follows the return statement within the function is not executed. If a value is specified after the return keyword, that value is return to the part of the code that called the function.  If  no value is specified , the function returns undefined.  <br/>

NOTE: With a “return value or return function” , you can use the value returned outside of a particular function.  <br/>

Eg. Examples illustrating the use of return statement. </br>
1) </br>
// Ths create a function </br>
	function function1() { </br>
 		 //This returns a function </br>
		return 5 </br>
	} </br>
		// This  calls the function </br>
	function1(); </br>

	//Display answer: 5

2) Function that returns a String with parameter inside the function </br>
function congtratulation(name) { </br>
  //  return `Hello, Congratulations ${name}`; </br>
  return "Hello, Congratulation " + name  ; </br>
} </br>
let celebrate = congtratulation("LegendaryCode"); </br>
console.log(celebrate); </br>
	//Display answer: Hello, Congratulation LegendaryCode </br>

3) Function that returns a sum of numbers with 2 paramenter insides </br>
function addNumbers(numA, numB) { </br>
  return numA + numB; </br>
} </br>
let sum = addNumbers(5, 8); </br>
console.log(sum); </br>

4) function viewNumber(num) { </br>
  if(num > 0) { </br> </br>
    return "Positive"; </br>
  } else if (num < 0) { </br>
    return "negative"; </br>
  } else { </br>
    return "Zero"; </br>
  } </br>
} </br>
let checkingNumber1 = viewNumber(7); </br>
let checkingNumber2 = viewNumber(-1); </br>
let checkingNumber3 = viewNumber(0); </br>

console.log(checkingNumber1); </br>
console.log(checkingNumber2); </br>
console.log(checkingNumber3); </br>

5) Function that calculates Rectangle Area </br>
function calculateRectangleArea(width, height) { </br>
	const area = width * height; </br>
	return area; // Returns the calculated area </br>
}
const rect1Width = 5; </br>
const rect1Height = 10; </br>
const area1 = calculateRectangleArea(rect1Width, rect1Height); // The returned value (50) is assigned to area1 </br>
console.log("Area of rectangle 1:", area1); // Output: Area of rectangle 1: 50 </br>

const rect2Width = 7; </br>
const rect2Height = 3; </br>
const area2 = calculateRectangleArea(rect2Width, rect2Height); // The returned value (21) is assigned to area2 </br>
console.log("Area of rectangle 2:", area2); // Output: Area of rectangle 2: 21 </br>

// Using the returned value in another operation </br>
const totalArea = area1 + area2; </br>
console.log("Total area of both rectangles:", totalArea); // Output: Total area of both rectangles: 71 </br>

 **NOTE: In this example, calculateRectangleArea takes width and height as arguments, performs a calculation, and then returns the area. This allows the calculated area to be used outside the function, assigned to variables, and even used in further calculations. If the function didn't return a value, area1 and area2 would be undefined, and the subsequent operations would not work as intended. When you use a return statement it ends the function immediately. </br>**



	✔️ Parameters:- Parameter are sort the opposite of a return statement. “Parameter” puts a value into a function. <br/>
		While a “return statement” , gets a value out of a function  <br/>
		A parameter works the same way as a variable.  <br/>
		E.g. </br>
		//  How to use a function Parameter </br>
		function calculateTax(cost){ </br>
            console.log(cost * 0.1); </br>
        } </br>
		// passing a value into the function parameter or argument </br>
        calculateTax(200); </br>
        calculateTax(500); </br>
		
		**NOTE: The function "calculateTax" only exist inside of the function scope. A function can have more than 1 parameters** </br>
		

	✔️ Rules for Parameter Names: <br/>
		(1) Can’t use special words.   
			eg. function  <br/>
		(2) Can’t start with number.
		(3) Can’t use special characters.  <br/>
			eg. $ _  <br/>



➡️ **OBJECTS** <br/>
	✔️ What is an object ?  <br/>
	An “Object” groups related , multiple values together. <br/>
	An “Object” let us use multiple values together. <br/>
	An “object” is a collection  of properties , and a property is an association btw a name (or key) and a value. <br/>
	An “Object”  lets us group multiple values  together. <br/>
	NOTE:  A property’s value can be a function , in which case the property is known as method. <br/>
	NOTE:  Objects are values and we can save them inside a variable.  <br/>

	✔️ Using Object initializers: </br>
	Object initializers are also called “object literals”. “”Object initializer” is one of the primary ways to create an object in JavaScript. </br>
	An object initializer is an expression defined by a comma-separated list of zero or more property-value pairs enclosed in curly braces ({}). This method is a quick and concise way to create a single object with predefined 		       properties and values. </br>

	EG 1: </br>
	const champion = { </br>
	  make: "LegendaryCode", </br>
	  model: "Blue coded", </br>
	  year: 2001 </br>
	}; </br>

	EG 2: </br>
	const obj = { </br>
	    property1: value1,  //property name may be identifier </br>
	    2: value2,  //or a number </br>
	    "property n": value3,  // or a string </br>
	}; </br>
	NOTE: Each property name on the example above is an identifier, (either a name , a number, or a string literal) , and each valueN is an expression whoose value is assigned to the property name. </br>
	The property name  can also be an expresion. </br>

	The following  statement creates an object and assigns it to the variable “x” if  and only if the expression condition is true else to “y” </br>
	let x ;
	let y;
	if( 8 > 3) {
	    x = {
	        greetings: "greater , correct 8 is bigger"
	    };
	    console.log(x);
	}


	✔️ 2 more built-in objects (json, local storage) - objects provided by javascript. <br/>
	(1) JSON (a built in object): This object helps us workwith something called ‘JSON’. JSON stands for “JavaScript Object Notation”. The easiet way to understand json is: <br/>
		- a syntax , <br/>
		- is similar to javascript object, <br/> 
		- but it has less feeatures. <br/>
	NOTE:  a) JSON does n’t support functions.  <br/>

	✔️ Why use Json ? <br/>
		Json is universal across most programming lang. We us JSON, when we send data between computer that might be using diffferent programming lang. Json also used when we store dta. <br/>
	(2) LOCAL STORAGE(local storage) Built in Object: Next built-in object . “Local Storage” is used to save values more permanently compare to  “variable saving which is(json)”. Variables are temporary and only exist on the current page before it’s refreshed.   <br/>
	  To save  a value inside “local storage” , it has a method called “.setItem()”  <br/>
	& we are going to give 2 strings to this method in other to access thevalue we saved later..  <br/>
	localStorage.setItem();  <br/>

	✔️ Some Other Built-In Objects Include: <br/>
	(a) Console.log();
	(b) Math.random();
	(c) JSON.stringify();
	(d) localStorage 
	(e) DOM <br/>





➡️ **Document Object Model (DOM) , Window Object** <br/>
	✔️ DOM is another built-in Object. <br/>
	The document object represents / models of  the webpage. <br/>
	The DOM combines “javascript” and Html together . It gives javascript full control of the webpage. <br/>

	✔️ Syntax Rules For The DOM:  <br/>
	The DOM contains “properties” [like:  body , title] that we can access using  the dot 	notation. <br/>
	The document object also has “methods” in which we can use.  <br/>
	E.g document.querySelector('button'); <br/>

	✔️ Properties And Methods (Some We Can Use)  <br/>
      DOM Properties Examples:   <br/>
		(a) document.title = 'DOM Examples';  
		(b) document.body.innerHTML = 'Nathaniel'; 
		(c) document.body.innerText = 'legendarycode';
		(d) document.body;  -> Lets us get the body element and put it inside our JavaScript. <br/>

    	  .innerHTML:- This element is used in javascript to , “get or set” the HTML content within an element. It allows for dynamic manipulation of web pages  content , including text and HTML tags. <br/>

		DOM Methods Examples: <br/>
		Reminder: A “method” is a function that is saved inside of an object. <br/>
   
	- document.querySelector(‘button’); -> Lets us get any element from the page and put it inside JavaScript. <br/>
	NOTE:  Every HTML element has a property called .innerHTML (Which lets us control the html inside the element). <br/>
	(i) We also use the “class selector” just as we do on css. We use it on QuerySelector() , to select the element you want to make changes or give functionality in Javascript. <br/>
	(ii) So using the “DOM” , we can get HTML elements from the page put it inside a javaScript & then save it in a Variable. <br/>
	(iii) So the DOM combines JS & HTML together, it gives javascript full control of the webpage. <br/>

	✔️ Processes  To JavaScript (problem solving) <br/>
	a)Figure out what steps we need (algorithm). <br/>
	b)Convert the above algorithm steps into  “Codes” <br/>



➡️ **ARRAYS & LOOPS** <br/>  
	✔️ What is an Array: <br/>
	(a) An “Array” 
	- is another type of value or variable in javascript. <br/>
	- An represents a list of  other values. <br/>
	(b) An “Array”  <br/>
	- Is a special variable or type of variable , which can hold more than one(1) value under a single name.	
	(c) Arrays  =  list of values  <br/>
	NOTE: An array is an object, but a special type of object . But javascript arrays are best describe as arrays. <br/>

	✔️ Why Use Arrays ? <br/>
     If  you have a list of items (a list of  Motocycles names, for example), storing th motorcycles in single variables could look like this below: 
        e.g <br/>
	let motorcycle1 = "jinchin"; <br/>
	let motorcycle2 = "Boxer"; <br/>
	let motorcycle3 =  "Hyju"; <br/>

	✔️ Key Difference Between Array & Object (Where , When To Use It) <br/>
	Arrays: <br/>
	(a) “Arrays” are used when we need to collection a list of elements of the same data type or structure. <br/>
	(b) “Arrays” we use it whenever  we want to “create & store”  a list of multiple items in a single variable. <br/>
	(c) “Arrays” are specially useful when creating “ordered collections”  where items in the collection can be accessed by their numerical position in the list.  <br/>
	
	Objects: <br/>
	(a) On the other-hand, “Objects” are used when grouping multiple sets of data that belong together using labels, where each property or key has it own value of any type. <br/>  
	(b) Objects are used to represent a “thing” in your code. That could be a  “Person”, a “car”, a “building”, a “book”, a “character in a game”. <br/>
		Basically, anything that is made up or can be defined by a set of characteristics. <br/>
		In objects, these characteristics are called properties that consist of a “key” and “value”. <br/>

	✔️ Array Methods And Properties: <br/>
    Some  built-in array properties and methods. <br/>
	(1) Array  length     -  Returns the length (size) of an array. <br/>
	(2) Array  toString()    -  Converts an array to a comma separated string of values. <br/>
	(3) Array  at()     - Returns an indexed element from an array. <br/>
	(4) Array join()    -  Joins all array elements into string. <br/>
	(5) Array  pop()     -  Remove the last element from an array. <br/>
	(6) Array push()    -   Adds a new element or value to the end of an array. <br/>
	(7) Array shift()     -   Removes the first array element/item. <br/>
	(8) Array unshift()   - Adds a new array element(or new items) at the beginning of an array. <br/>
	(9) Array delete()    -  Creates undefined holes in the array. <br/>
	(10) Array  concat()   -   Creates a new  array by merging existing array. <br/>
	(11) Array copyWithin()  -  Copies array elements to another position in the array. <br/>
	(12) Array flat()     -     Creates a new array from sub-array elements. <br/>
	(13) Array slice()   -     Slices out a part of an array, Removes from an array. <br/>
	(14) Array  toSpliced()  -  Adds new items to an array in a new array. <br/>
	(15) Array map() -   Creates a new array populated with the results of calling a provided function on every element  in the calling array. <br/>

	✔️ Loops - What Is A Loop: <br/>
	Lets us run some code over and over. Loops offer a quick and eazy way to do stuffs repeatly. <br/>

	✔️ Loops and Iterations <br/>
	(a) While statement: While this condition is true it will keep running the code, (over and  over again) as soon as the condition is false it will stop the loop. <br/>	
	(b) for loop statement:   Loops through a block of code a number of time. <br/>
	NOTE:  
	 	ForLoop use it when we are doing a “standard loop”.   <br/>
		 While Loop we use it whenits a “non-standard loop”, meaning to be non-standard loop, it will not have a loop variable that will increase everytime & also don’t not have icreement step..   <br/>
	c)do…while statement.  <br/>
	d)Break statement.  <br/>
	e)continue statement.  <br/>
	f)For…in statement.  <br/>
	g)for...of statement.  <br/>

	✔️ When Creating Website In JavaScript We Usually Follow A Three (3) Steps Process: <br/>
	(1) Save the data. <br/>
	(2) Generate The HTML using javascript (we use the data to generate our html). <br/>
	(3) Making It Interactive (we make the website interactive) :- Put it on the Web Page (Take the htmlput it on the web page) , and we will do that using the “DOM” <br/>

	

➡️ **ADVANCED FUNCTION** <br/>
	✔️ **Functions Are Value:**  A function is just another type of value. <br/>
	✔️ **Anonymous Function:**  A function without a name. A function that is not declared with a name. Anynomous functions are fundamental concept in javascript, offering a powerful and flexible way to create and use functions without the need for explicit naming / <br/>
	Unlike “traditional named functions”, which are defined with a specific identifier. <br/>
	 “Anonymous functions” on the other hand, are typically created as a function expressions and are used in situations where a function is needed  for a single,  specific purpose or as an argument to another function. <br/>

	✔️ Other “array methods”  apart from “for-each” etc. method: <br/>
	(1) Filter():-  .filter(),  creates a new array[]  with all elements that pass the test implemented by the provided function.  <br/>
	Filter kind of work the same way as “forEach” method.
	Using “filter”, you can sort of filter values .  <br/>
	
	(2) Map():-   .map(),  Creates a new array populated with the results of calling a provided function on every element in the calling array. <br/>
	✔️ Closure:  A “closure” means ; <br/>
	 if a function has access to a value . <br/>
	 It will always have access to that value. <br/>
	 Also a “closure” in js , is the combination of a function  bundled together & with references to its surronding state (the lexical environment). <br/>
	Therefore:: A “closure” gives a function access  to its “outer space”. In Javascript , closures are created every time a function is created , at function creation function time. <br/>



➡️ **MODULES IN JAVASCRIPT** <br/>
	✔️ **Modules:** A better way to organize our code. <br/>
	Module helps us to avoid “naming comflit”. <br/>
	Lets say we we create diff. Pages and uses “script.js” to add all , but it not a best way to use it , if not module. <br/>

	✔️ NOTE:	Two (2) Importants things you need to know about “modules”. <br/>
	(1.) Put all “imports” at the top of the file. <br/>
	(2.) We need to use “Live Server” for module to work. <br/>

	✔️ Benefits of “Modules” <br/>
	(1.) Helps us avoid naming conflicts. <br/>
	(2.) You don’t have to worry about order of our script files (all pages loading). <br/>
	NOTE:	Modules  =  are  better way to organize our code. <br/>
	


➡️ **EXTERNAL LIBRARIES (IN JAVASCRIPT)** <br/>
	✔️ **External Library:  Is basically just code that is outside of our Project. <br/>
	✔️ Why We Use External Links:  <br/>
	(1.)  Lets us share code: With external librabries , we can use codes that other people wrote. <br/>
	(2.) Saves time. <br/>
	(3.) It helps avoid duplicating work. <br/>

	✔️ How To Find External Libraries: <br/>
	 You can use : <br/>
	(1.) You can use “Google” by searching like e.g “javascript date library” <br/>
	
	(2.) You can also use “ChatGPT” by searching like e.g “javascript date library” <br/>
	
	(3.) Find a distribution of the library in either ECMAScript Modules (ESM) or Universal Module Definition (UMD) format on a popular CDN service like jsDelivr or UNPKG. For more information on library compatibility, see the Library Compatibility section.  <br/>
	
	(4.) Day.js can be included by way of a CDN provider like cdnjs.com, unpkg and jsDelivr.  <br/>

	✔️ How Can We Use The External Library: <br/>
	External library usually have a documentation page, that shows how  we use the library, on  browser  or AI tool. <br/>

	e.g  https://day.js.org/docs/en/display/format <br/>
	https://unpkg.com/dayjs/esm/index.js <br/>
	https://day.js.org/docs/en/display/format <br/>
	NOTE:	A better way to load “external libraries” is to use “JavaScript Modules”  instead  of using  the external library with <script> tag. <br/>
	NOTE:  EcmaScript is just another name for “javascript”. A version that works with javaScript Module. <br/>
	NOTE:  Note every external library has a “esm version” , some you goona use a <script> tag. <br/>

	✔️ How to use External  Libraries   + JavaScript  Modules. <br/>
	 To use the both we goona use a special version of library called “ESM version” (EcmaScript Module). <br/>
	“ESM” stands for EcMaScript Modules. <br/>
	“EcMaScript” is just another name for “javaScript”. <br/>
	So the “EsM version” that works with library is just “A version that works with JavaScript Modules”. <br/>



➡️ **TESTING** <br/>
	✔️ **The Easiest Way To Test Our Code:**  <br/>
	(1) Is to just Open the website and try out the code :-  This is called  “manuel Testing” . <br/>
		
				Disadvantages of Manuel Testing <br/>
		(i.) Hard to test every situation. <br/>
		(ii.) Hard to re-test the code . <br/>
	
	(2) Automated Testing :-  Automated testing basically means ,  “using code to test code”.  Instead of manuelly opening the website and clicking around to try our code, we goona tell the computer to do the test for us. <br/>
	
	NOTE:   To create an “Automated test”, we just goona test some code to test this function. <br/>
	First, lets create a folder, to group all of our test code together. <br/>

	✔️ 2 Two Types Of  Test Cases  Generally, we create two type of test casees: <br/>
		(1) Basic Test Cases:   This test if the code is working.  <br/>
		(2) Edge cases: Test with values that are tricky. <br/>

	NOTE:   Another thing we do, when naming our test, is to group related test together. A group of related test is called “Test Suite”. <br/>
	
	✔️ How To Use A Testing Framework To Write Automated Test:  A “Testing Framework” , is an external library, that helps us write tests easier . <br/>
	 Some various testing framworks include : <br/>
	1) Jasmine  -- https://github.com/jasmine/jasmine/releases/tag/v5.1.1  <br/>
	(2)Jest  (for ReactJS). <br/>
	(3) MochaJS <br/>


	✔️ How To Run Test Using Jasmine: <br/>
	Testing Framework  =  helps us write tests easier <br/>
	  
	This file “SpecRunner.html” , does thesame thing as the “tests.html” file. <br/>
	NOTE:   In jasmine , “spec” is another name for “test”  spec = test <br/>
	So “SpecRunner”, just means “TestRunner”. This file runs all the test. <br/>
	So therefore: A “testing framework” ,  is an external library that helps us write tests easier. <br/>

	✔️ Hooks (Is shortcut we can use in jasmine) :  <br/>
	Hook: A hook lets us run some code for each test.  <br/>
	To create a hook , you use beforeEach(); ..  <br/>

	✔️ Hooks In Jasmine  <br/>
	(1.) beforeEach() = runs code before each test.  <br/>
	(2.) afterEach()   =   runs code after each test.  <br/>
	(3.) beforeAll()    =   runs code before all tests.  <br/>
	(4.) afterAll()     =  runs code after all tests.  <br/>
	(5.) done()        =   done() function, lets us control when to go to the next step. A feature for waiting for some code to finish.  <br/>
	
	NOTE:   Here is the “process” that we do, when we write code: <br/>
	(1) Make changes to code. <br/>
	(2) And then we re-run the tests (just to make sure that everything still works). <br/>
	(3) Save to Git. <br/>



➡️ **OBJECT-ORIENTED PROGRAMMING** <br/>
	✔️ **What Is Object-Oriented Programming:**   OOP, this is another style of programming (another way we write our code). <br/>
	Object-Oriented Programming  =  “Organizing our code into objects (tries to represent the real-world)” .. <br/>

	✔️ We Have Two Ways Of Programming:   
	(a) Procedural Programming:  A  procedural Programming is a set of step-by-step instructions (which is basically a function). <br/>
	NOTE:  So in otherwords , in procedural programming , we organize our codes into separate functions. <br/>
	
	(b) Object-Oriented Programming (OOP): In Object-Oriented Programming , we organize our code into Objects.  <br/>
	NOTE:  TO CONVERT THE (PROCEDURAL PROGRAMMING INTO OBJECT-ORIENTED PROGRAMMING), WE ARE GOING TO GROUP ALL THE "DATA" AND "FUNCTIONs" TOGETHER INTO AN OBJECT. <br/>
	NOTE:  Inside an “Object”, we can not  use the word (let , or  export).  Rather we can have a “property” and “a value”.  <br/>



➡️ **BACK END,  CALL BACKS, PROMISES, AND ASYNC** <br/>
	✔️ What Is A BackEnd ?:   A backend is another computer that managers the data of a website.  <br/>

	✔️ Types Of Request/Message (That We Can Give To The BackEnd):   <br/>
	(1) “GET”  =  Means , to “get some” information from the backend.  <br/>
	
	(2) “POST”  =   Means, we want to “create something” from the backend. 
	Post also lets us Send data to the backend.  <br/>
	
	(3) “PUT”   = Means, we want to “update something” from the backend.  <br/>
	
	(4) “DELETE”  =  Means, we want to “delete something” from the backend.  <br/>

	NOTE: URL =  “UniformResource Locator”  <br/>
	- Like an address, but for the internet.  <br/>
	- Helps us locate another computer on the internet.  <br/>
	- Url looks like this e.g https://youtube.com  <br/>
	
	✔️ Some Terminology Based on “HTTP REQUEST”: <br/>
	(i.) When I send a message (from my computer) , to the backend (on another computer), the message is called a “Request / Message”.<br/>
	(ii) When the backend (the other computer) recievces our “Request / Message” , it will send an “HTTP Message” back to us. And this message is called the “Response” <br/>

	✔️ What Is A ASYNCHRONOUS CODE:   Asynchronous code means, is a programming paradign where operations can be initiated and completed later , without blocking the main thread of execution. <br/>
	You cn run multiple programs/operations concurrently without waiting . <br/>
	It doesnot wait for the key line of code to finish, it just sends the “request” and then immeditely goes to the next. <br/>
	E.g like “xhr.send();”
			

	NOTE: We can send diff. request or messages , to the backend(using url paths). <br/>
	A “URL path” is a path that comes after  the domain name. <br/>
	We can send a request to each “url paths” and this url path will give us a different response. <br/>

	✔️ Status Code: <br/>
	A status code that Starts with 4 or  5 (400, 404, 500)  =  “failed" </br>
	a) If it “starts with 4” , it means , “it was our problem” (client-side error). </br>
	b) If it  a “400 error”, it means the “server those not understand the request” due to a client-side syntax issue. (client-side error). </br>
	c) If it  a “404 error”, it means the “server understood the request” but could not find the specific resource. (client-side error). </br>
	d) If it “starts with 5” , it means , “It was our backend problem” (server or backend error)  E.g backend crashing. </br>

	A status code that starts with 2 (200, 201, 204)   =  “succeeded” </br>
	a) If it a status code of (200)  means =  “Successful”, The client request was a success, received , understood, & processed by the server. </br>
	b) If it a Status Code of (201) means = Created , the code indicates that the request has been succeeded & as a result , one or more new resources have been created on the server. </br>
	c) If it a Status Code of (204) means = the request was successful, but the server is not returning any content in the response body. </br>
	

	✔️ CALL BACK:   A function to run in the future. “fun” parameter is known as a callBack. <br/>
	E.g 1 </br>
		function loadProducts(fun) </br>
		{
		} 
		
		E.g 2 </br>
		setTimeout(() => { </br>
			Console.log(‘hello’);
		}, 3000) </br>
	
	✔️ Benefits Of CallBacks: </br>
	(i.) Control flow: Callbacks allow  you to control  the order of execution , ensuring certain code runs only after a preceding task has finished. <br/>
	(ii.) Modularity: They promote modularity  by separating the logic of what to do from when to do it . <br/>
	(iii.) Non-blocking operation: Essential for asynchronous tasks , preventing the main thread from being blocked. <br/>

	✔️ PROMISES:   Promises a “javascript object” (built-in class) <br/>
	Better way to handle “asynchronous code”. <br/>
	Lets us wait for some asynchronous code to finish, before going to the next  step. Promise is a built-in class. <br/>
	“resolve” is a function. Lets us control when to go to the next step. <br/>

	✔️ Fetch:   
	fetch(), is a built-in  “Javascript API” used for making network requests (e.g. retrive data from server , send data to n API) <br/>
	NOTE: {  <br/>
	Promise: Is  fundamental concept for handling “asynchronous operation” in javascript. <br/>
		Fetch: A better way to make “HTTP request”.  Becus it uses Promises directly. <br/>
		A specific API that utilizes promises to perform network requests. <br/>
	} <br/>


	✔️ Some Ways To Make “HTTP Request” Using Javascript:  </br>
	(1.)  Fetch:  (Javascript Built-in API), is  modern based API built into most 
	browsers. </br>
		 i) It offers a more cleaner, and more flexible way to handle HTTP requests compared older methods </br>
		 ii) “fetch” http request, is promised based, Fetch leverages javascript promises, simplifying asynchronous operations and making codes, more cleaner & more readable  compare to older callback based method like “XMLHttpRequest”. </br>
	E.g 1 using fetch API for HTTP request 	</br>
	
	function loadProductsFetch() { </br>
  		const promise = fetch(
    		'https://supersimplebackend.dev/products'
  	).then((response) => { </br>
    // console.log(response); </br>
    //"response.json() IS ASYNCHRONOUS, IT RETURNS A "promise" </br>
    return response.json(); </br>

  }).then((productsData) => { </br>

    // console.log(productsData); </br>
    products = productsData.map((productDetails) => { </br>
    if (productDetails.type === 'clothing'){ </br>
      return new Clothing(productDetails); </br>
    } </br>
	
	if(productDetails.type === 'appliances'){ </br>
      return new Appliances(productDetails); </br>
    }
        return new Product(productDetails); </br>
    }); </br>
    console.log('load products'); </br>
    //fun(); </br>
  	}); </br>
	  //RETURNING A "promise" OUT OF THE FUNCTION. AND THEN WE KEEP ATTACHING MORE STEPS TO THE PROMISE </br>
	  return promise; </br>
	} </br>

	E.g 2:   using fetch API for HTTP request
	fetch('https://api.example.com/data').then(response => { </br>
	    if (!response.ok) { </br>
	      throw new Error(`HTTP error! status: ${response.status}`); </br>
	    } </br>
    return response.json(); // Or .text(), .blob(), etc. </br>
    }) 
  .then(data => { </br>
    console.log(data); </br>
  }) 
  .catch(error => { </br>
    console.error('Error:', error); </br>
  }); </br>

 (2) XMLHttpRequest (XHR):  </br>
 XMLHttpRequest (is an older callback-based API), that provides the ability to make HTTP requests. It is more verbose and uses event listeners for handling responses and errors. </br>
 E.g 1:   using XMLHttpRequest </br>
export function loadProducts(fun) { </br>
  // CREATING A REQUEST (USING "XML") </br>
  const xhr = new XMLHttpRequest(); </br>

  // IN ORDER TO WAIT FOR A RESPONSE </br>
  xhr.addEventListener('load', () => { </br>
    //console.log(xhr.response); </br>
    
    /** </br>
     * CONVERTING THESE "JSON RESPONSE" BACK TO "JAVASCRIPT ARRAY OR OBJECT" USING JSON.parse  --  
     * AND ALSO CONVERTING AGAIN THE "PRODUCTS OBJECTS" INTO A CLASS USING (.map)
    */ </br>
    // products = JSON.parse(xhr.response); </br>
    products = JSON.parse(xhr.response).map((productDetails) => { </br>
      if (productDetails.type === 'clothing'){ </br>
        return new Clothing(productDetails); </br>
      } </br>
      if(productDetails.type === 'appliances'){ </br>
        return new Appliances(productDetails); </br>
      } </br>
        return new Product(productDetails); </br>
    }); </br>
    //console.log('load products'); </br>

    //CALLBACK FUNCTION </br>
    fun(); </br>

  }); </br>
  //   //const url  = "https://supersimplebackend.dev/products"; </br>
  xhr.open("GET", 'https://supersimplebackend.dev/products');
  xhr.send();
} </br>

E.g 2:  </br>
using XMLHttpRequest </br>
const xhr = new XMLHttpRequest(); </br>
xhr.open('GET', 'https://api.example.com/data'); </br>
xhr.onload = function() { </br>
  if (xhr.status === 200) { </br>
    console.log(xhr.responseText); </br>
  } else { </br>
    console.error('Error:', xhr.statusText); </br>
  } </br>
};
xhr.onerror = function() { </br>
  console.error('Request failed'); </br>
}; </br>
xhr.send(); </br>

✔️ Key Components Of  HTTP Request: </br>
1.) HTTP Method: </br>
Specifies the action to be performed (e.g., GET for retrieving data, POST for sending data, PUT for updating, DELETE for removing). </br>
2.) URL: </br>
The address of the resource on the server to which the request is sent. </br>
3.) Headers: </br>
Provide additional information about the request, such as content type, authentication credentials, or user agent. </br>
4.) Body (Optional): </br>
Contains data sent to the server, primarily used with methods like POST, PUT, and PATCH. </br>

✔️ Javascript Provides  Several Mechanisms For Handling “Asynchronous Code” Allowing Operations  That Take Time (like Network requests or file I/O) To Run Before Blocking The Main Thread Of Execution : </br>
The primary methods are :
1) CallBacks: </br>
	i. A callback function is passed as an argument to another function and  executed once the asynchronous operation completes. </br>
	ii. Previously original method for handling asynchronicity in javascript, but it can lead to “callback hell”(deeply nested callbacks) in complex senenario. </br>
E.g of callback function below </br>
function getData(callback) { </br>
    setTimeout(() => {  </br>
        const data = "Get data";
        callback(data);
    }, 2000); </br>
} </br>
getData((res) => { </br>
    console.log(res);  //logs  "get Data" after 2 seconds
}); </br>

2) Promises: </br>
	i. Promises represent the eventual completion (or failure) of an asynchronous operation and its resulting value. </br>
	ii. They offer a more structured way to handle asynchronous operation compared to callbacks, allowing for chaining of asynchronous tasks and clearer error handling.</br>
	iii. A “promise” can be in one of the 3 states:  pending, fulfilled (resolved), or rejected. </br>

E.g  of Promisies function for asynchonous code </br>
/** FOR "PROMISES FUNCTION" MECHANISM WHEN WORKING ON ASYNCHRONOUS CODE  */ </br>
function  getData() { </br>
    return new Promise((resolve, reject) => { </br>
        setTimeout(() => {  </br>
            const achieved = false;  // Execute if it is Achieved 	 or notAchieved Getting Data.
            if(achieved){ </br>
                resolve("Success Data Gotten with Promises"); </br>
            } </br>
            else { </br>
                reject("Error Getting Data"); </br>
            } </br>
        }, 3000); </br>
    });
}
getData() </br>
    .then((data) => { </br>
        console.log(data); //Logs "Gets Data"
    }) </br>
    .catch((error) => {
        console.error(error); </br>
    }); </br>


3.) Async / Await:e A better way to handle “asynchronous code” . </br>
	i.) “Async await”:  s a shortcut for promises( it remove all the extra codes when using promise). </br> 
	ii.) “async” = makes a function return a promise. And “async” lets us use await. </br>
	iii.) “async await” , can only be used with promises. </br>
	iv.) Lets us “write asyncronous code” like normal code. </br>
	v.) “await” = Lets us wait for promise to finish before going to the next line. </br>


✔️ Error Handling:  “Error handling” in javascript is crucial for creating robust and stable applications. </br>
“Error handling” allows you to manage unexpected issues that occur during execution of your code. </br>
NOTE: When we’re sending HTTP requests, we could get unexpected errors. </br>
- Handling Error in“call-backs”: </br>
	E.g Handling error in call-back function(using .addEventListener) </br>
		xhr.addEventListener('error', () => { </br>
		 console.log('Unexpected error. Please try again'); </br>
		}); </br>

- Handling Error in “promises”: </br>
E.g-1  handling error in promises (using  “catch”) </br>
export function loadProductsFetch() { </br>
  const promise = fetch( </br>
    // fetch the code from here
  ).then((response) => { </br>
    // console.log(response); </br>
    //"response.json() IS ASYNCHRONOUS, IT RETURNS A "promise" </br>
    return response.json(); </br>

    }).then((productsData) => { </br>

    // console.log(productsData); </br>
    products = productsData.map((productDetails) => { </br>
    if (productDetails.type === 'clothing'){ </br>
      return new Clothing(productDetails); </br>
    } </br>
    if(productDetails.type === 'appliances'){ </br>
      return new Appliances(productDetails); </br>
    }
        return new Product(productDetails);  </br>
    });
    console.log('load products'); </br>

    //fun(); </br>
  }).catch(() => { </br>
     console.log('failed error. Please try again'); </br>
  }); </br>

  E.g 2  handling error in promises (using “catch”) </br>
somePromiseFunction() </br>
  .then(result1 => { </br>
    // Do something with result1 </br>
    return anotherPromiseFunction(result1); </br>
  })
  .then(result2 => { </br>
    // Do something with result2 </br>
    return yetAnotherPromiseFunction(result2); </br>
  }) </br>
  .catch(error => { </br>
    // Handle any error that occurred in the promise chain </br>
    console.error("An error occurred:", error); </br>
  }); </br>

- Handling Error in “async await”: </br>
E.g 1  handling error in async await (using “try” & “catch”) </br>
async function fetchData() {  </br>
  try {  </br>
    const data1 = await someAsyncFunction();  </br>
    const data2 = await anotherAsyncFunction(data1); </br>
    console.log("Successfully fetched data:", data2); </br>
  } catch (error) { </br>
    console.error("Error fetching data:", error); </br>
  }  </br>
} </br>
fetchData(); </br>

E.g 2  handling error in async await(using “try” & “catch”) </br>
async function fetchData() { </br>
  try { </br>
    const response = await fetch('https://api.example.com/data'); </br>
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);  </br>
    }
    const data = await response.json(); </br>
    console.log('Data:', data); </br>
  } catch (error) { </br> 
    console.error('Error fetching data:', error); </br>
    // You can also perform other actions here, like displaying an error message to the user. </br>
  } </br>
} </br>
fetchData(); </br>

E.g 3  handling error in async await(using “try” & “catch”) </br>
export function loadProductsFetch() { </br>
const promise = fetch( </br>
'https://supersimplebackend.dev/products' </br>
).then((response) => { </br> 
// console.log(response); </br>
//"response.json() IS ASYNCHRONOUS, IT RETURNS A "promise" </br>
return response.json(); </br>

}).then((productsData) => { </br>

// console.log(productsData); </br>
products = productsData.map((productDetails) => {  </br>
if (productDetails.type === 'clothing'){  </br>
  return new Clothing(productDetails);  </br>
}  </br>
if(productDetails.type === 'appliances'){  </br>
  return new Appliances(productDetails);  </br>
} </br>
	return new Product(productDetails); </br>
});
console.log('load products'); </br>

//fun(); </br>
}) </br>
.catch(() => { </br>
 console.log('failed error while using promise for asynconose code. Please try again'); </br>
}); </br>

  //RETURNING A "promise" OUT OF THE FUNCTION. AND THEN WE KEEP ATTACHING MORE STEPS TO THE PROMISE </br>
  return promise; </br>
} </br>
loadProductsFetch(); </br>
NOTE: One thing about “try / catch”, is that we don’ have to use it only with “async await” on a “asynconous code”.  </br>
Rather we can actually also use it “try / catch” with “synchronous code(or normal code)”.     So therefore , we can use “try / catch” to catch errors in normal code as well. </br>
 
NOTE: We can Create error several ways, some include: </br>
i.) “throw” will manually create an error (most often when we are using “try / catch” error handler) </br>
when it a synchronous code most often.  </br>
ii.) Also “throw” can manually throw error when using “async / await” inside promise. </br>
iii.) We can also create error, when using  “async / await” when we create a new Promise, it gives us 2nd parameter , we can add reject”.  reject() is a function, and it lets us create error in the future.. </br>
When it is a Asyncrhonous code. </br>

✔️ The primary mechanisms for error handling In javascript are: </br>
1) try...catch Statement: </br>
2) Throw Keyword: </br>
3) Error Object Properties: </br>

NOTE: </br>
i.) “window.location”  Is a special object provided by javascript, used to control the URL  at the top of the Browser. </br>
ii.) How do we know which product we can track , we can basically use a feature called “URL parameter”.  </br>
“URL Parameters” lets us save data directly in the URL, “?” means, we are adding a url paameter to the main url. </br>
It lets use save different datain each URL. </br>

✔️ Differences Bwtween “ JSON.parse()” and  “JSON.stringify()” :   The key differences between JSON.parse() & JSON.stringify() , are as follow below: </br>
1. JSON.parse() :
- Purpose: Converts a “JSON formatted string” into a “javascript object”.
- Inputs: A valid JSON string.
- Outputs: A regular “javascript object” or “array”.
- Common UseCases : </br>
1i.) Receiving data from a web server or API  call, where  the data  is typically transmitted as a JSON string. </br>
1ii.) Retrieving data from localStorage or sessionStorage, as these browser storage  mechanisms only store data </br>

E.g for a JSON.parse() usage (below) </br>
const jsonString = 
'{ "name": "LegendaryCode", "age": 23, "city": "New York"}'; </br>
const javascriptObject = JSON.parse(jsonString); </br>
console.log(javascriptObject.age); </br>
// Output: 23 </br>

2. JSON.stringify() : </br>
- Purpose: Converts a “javascript object” or array  into a “JSON formatted string”. </br>
- Inputs: A “JavaScript object” or “array”. </br>
- Outputs: A “JSON string” representation  of the input. </br>
- Common UseCases : </br>
2i.) Sending data to a web server or API, where  the server expects datain JSON string format. </br>
2ii.) Storing Javascript objects in localStorage or SessionStorage, as they require string values.  </br>



kINDLY FELLOW ME ON MY SOCIALS AND LEARN MORE TECH TIPS AND BECOME A TECH BRO YOU DREAM OF : <br/>
	<img width="225" height="225" alt="love" src="https://github.com/user-attachments/assets/62a4113a-1235-48d4-8b37-d765a3440560" />


