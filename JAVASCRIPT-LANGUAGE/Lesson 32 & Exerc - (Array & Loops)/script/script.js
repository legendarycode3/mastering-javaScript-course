
/*  TODO-LIST ALGORITHM STEPS
    1.Create array to store the todos
    2. When we click "Add",
    3. Get text from textbox
    4. Add it to array
    5. console.log() the array
*/



    //1. CREATING AN ARRAY
    const todoListArray = [];



    function renderTodoList(){
        let  todoListHTML = '';

        for(let index = 0; index < todoListArray.length; index++) {
            const todo = todoListArray[index];
            const html = `<p> ${todo} </p>`; // ThIS TECHNIQUE IS CALLES 'GENERATING THe HTML' - INSTEAD OF WRITTING THE HTML ON HTML WE DID IT ON JAVASCRIPT
            todoListHTML  = todoListHTML + html;
        }
        console.log(todoListHTML);

        document.querySelector('.js-Todo-Result').innerHTML = todoListHTML;
    }
    






    //FUNCTION WHEN WE CLICK ADD
function todoList() {

    //creating an empty array
     //let todoListArray = [];

    //3.  GETTING TEXT FROM TEXT BOX
     const  todoElement = document.querySelector('.js-Todo-List');

     //saving the value on a variable
     const name = todoElement.value;
     

     // 4. ADD IT TO AN ARRAY
      todoListArray.push(name)

      //document.querySelector('.js-Todo-Result').innerHTML = todoListArray;

    //CONSOLE.LOG THE TODOLIST ARRAY 
    console.log(todoListArray);

    //todoElement.value = '';

    renderTodoList();  // TO CALL THE RENDER FUNCTION TO ADD A NEW VALUE 
}
 

