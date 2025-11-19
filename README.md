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
		(vi.) Not equal to !== 

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

	✔️ Parameters:- Parameter are sort the opposite of a return statement. “Parameter” puts a value into a function. <br/>
		While a “return statement” , gets a value out of a function  <br/>
		A parameter works the same way as a variable.  <br/>

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
	
