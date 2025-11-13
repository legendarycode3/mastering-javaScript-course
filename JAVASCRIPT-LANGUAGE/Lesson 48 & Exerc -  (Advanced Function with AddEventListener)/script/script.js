
/*  TODO-LIST (version update) ALGORITHM STEPS
    1.Create array to store the todos
    2. When we click "Add",
    3. Get text from textbox
    4. Add it to array
    5. console.log() the array
*/



        //1. CREATING AN ARRAY
    //const todoListArray = [];


        //An Array 
    //    const todoListArray = [
    //      'Make Dinner', 'Come Home'
    //     ];


    // Now it an object
      const todoListArray = [{
        name: 'Make Dinner',
        dueDate: '2024-12-21'
    },
    {
        name: 'Come Home',
        dueDate: '2025-05-23'
    }
    ];






    
function renderTodoList(){
        // const addButtonElement = document.querySelector('.js-add-button');

        let  todoListHTML = '';  // Clearing the previous list

        for(let index = 0; index < todoListArray.length; index++) {
            // const todo = todoListArray[index];
                const todoObject = todoListArray[index]; //Now changed to an object because of the DATE we are adding
                // const name = todoObject.name;
                // const dueDate = todoObject.dueDate;

                 const {name, dueDate} = todoObject;  // Destructuring
                
            // const html = `
            //     <p> 
                   
            //         ${name} ${dueDate}
            //         <button onclick="
            //             todoListArray.splice(${index}, 1);

            //             renderTodoList();
            //         "> Delete </button>
            //     </p>`; // ThIS TECHNIQUE IS CALLES 'GENERATING THe HTML' - INSTEAD OF WRITTING THE HTML ON HTML WE DID IT ON JAVASCRIPT


            // Using this to separate each TODOs into 3 Elements (the 'name', 'duedate', 'button')
            const html = `
                <div>${name}</div>
                <div>${dueDate}</div>
                <button onclick="
                    // todoListArray.splice(${index}, 1);
                    // renderTodoList();
                " 
                class="js-delete-todo-button js-delete-todo-button"> Delete </button>
            `;
            todoListHTML  += html;
        }
        


        document.querySelector('.js-Todo-Result').innerHTML = todoListHTML;


        /** In other to add "addEventListener", we need to get the element first ,(adding the addEventListener on the button added from javascript directly) below it is  */
        document.querySelectorAll('.js-delete-todo-button').forEach( (deleteButton_value, index) => {
            deleteButton_value.addEventListener('click', () => {
                todoListArray.splice(index, 1);
                renderTodoList();
            });
        });
    }



    /** Using addEventListener here for the button on the html page */
    const todoButtonElement = document.querySelector('.js-todo-button');
   todoButtonElement.addEventListener('click', () => {
        todoList();
   });




    //FUNCTION WHEN WE CLICK ADD
function todoList() {

    //creating an empty array
     //let todoListArray = [];

    //3.  GETTING TEXT FROM TEXT BOX
     const  todoElement = document.querySelector('.js-Todo-List');
     //saving the value on a variable
     const name = todoElement.value;
     
    
     const dateInputElement = document.querySelector('.js-due-date-input');
     const dueDate = dateInputElement.value;


     // 4. ADD IT TO AN array of OBJECT
      todoListArray.push({
        // name: name,
        // dueDate: dueDate 
        name,
        dueDate
       });

      //document.querySelector('.js-Todo-Result').innerHTML = todoListArray;

    //CONSOLE.LOG THE TODOLIST ARRAY 
        // console.log(todoListArray);

    todoElement.value = '';

    renderTodoList();  // TO CALL THE RENDER FUNCTION TO ADD A NEW VALUE 
}
 




