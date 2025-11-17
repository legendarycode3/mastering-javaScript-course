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
