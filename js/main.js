/** To Do App 
 * 
 * User needs to be able to input their tasks 
 * 
 * Should be able to mark it as complete 
 * 
 * Should be able to mark as not complete
 * 
 * User should be able to edit their task 
 */
//how to link an element on the html to the backend? 

//targets the submit button that lets you add the task
let submitButton = document.getElementById('submitToDo')

//button element
let userInputField = document.getElementById('userInputHere')

//let containerForTasks = document.getElementById('sectionForTasks')
//targets the ul 
const listOfTasks = document.getElementById('listOfTasks')

//Append the li to the ul 
// listOfTasks.appendChild(listItem)

//remember to add const and not function for arrow functions
const addTask = () => {
    const listItem = document.createElement('li')
    listItem.innerText = userInputField.value //when you press the submit button, it adds the task 
   // containerForTasks.appendChild(listItem) //do not add quotes around the element veriable :| //tasksContainer alternatively

    //stop holding the text in the inputField after user ends the text and presses submit 
    userInputField.value = ""

    //Leon mentioned getting a linethrough the task when completed 
    listItem.addEventListener('click', strikeThroughTask)//review placement in JS
    // listItem.onclick = strikeThroughTask

    listItem.addEventListener('dblclick', removeItem)   
    //Append the li to the ul 
    listOfTasks.appendChild(listItem)
}
//the button needs to listen for a click from the user 
submitButton.addEventListener('click', addTask)


//Responsible for striking through the text; 
const strikeThroughTask = (event) => {
 //  event.currentTarget.style.textDecoration = "line-through" //targets the paragraph that was clicked; SOC violation
 event.currentTarget.classList.toggle('completed')
}
// paragraph.addEventListener('click', strikeThroughTask)

//Remove the task from the list 

// listItem.addEventListener('dblclick', removeItem)

const removeItem = (event) => {
    listOfTasks.removeChild(event.currentTarget) //<- Add to Anki cards with explanation and example; go to event article for refresher 
}

//Parent -> ul child -> li 
// parent.removechild(child) format that the above should use

//TypeError: Cannot read properties of undefined (reading 'removeChild') <- Error received when using containerForTasks.currentTarget.removeChild(li) <- Michael has article on this 
//<- what is the difference between target and currentTarget 
