const listsContainer = document.querySelector('[data-lists]')
const newlistForm = document.querySelector('[data-new-list-form]')
const newlistInput = document.querySelector('[data-new-list-input]')
const title = document.getElementById("title"); 
const newWindow = window.open("https://www.example.com", "_blank");
function goToHomePage() {
    window.location.href = "https://www.example.com";
  }
title.style.color = "orange"; 
title.style.fontSize = "3em";
const btn = document.getElementById("btn");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}
btn.addEventListener("click", () => {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
});


let lists = [];

newlistForm.addEventListener('click', e =>{
    e.preventDefault()//preventing our form from submit
    const listName = newlistInput.value
    if (listName == null || listName === '') return //check passed in aname so if the listname equal to null or equal to a blank string from this function
    const list = creatList(listName)// create list to make them  type a name
    newlistInput.value = null
    lists.push(list)//take our lists variable and push tp the list
    render()// call render function to run in the browser
})
function creatList(name) {
     return {id: Date.now().tostring(),name: name, tasks: []}//get id and date object in the current time and convert that to a string , this will get the curent time when you run this operation but it doesn't work for me
}

function render (){
    clearElement(listsContainer)
    lists.forEach(list => {
        const listElement = document.createElement('li')//creating a list
        listElement.dataset.listId = list.id
        listElement.classList.add("list-name")// add class to the listElement which is list-name
        listElement.innerText = list.name// set the name of actual element  the text inside of it , we use the property innerText
        listsContainer.appendChild(listElement)// make sure to append this to our list container

        
        })

}
function clearElement(element){
        while (element.firstChild){// check if the element has a first child
            element.removeChild(element.firstChild)//if the element has firstChild remove it
}}
render()//render refers to showing the output in the browser
