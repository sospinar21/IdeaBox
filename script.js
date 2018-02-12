var boxTemplate = document.querySelector('#ideaTemplate');
var saveButton = document.querySelector('.saveButton');
var form = document.forms['inputForm']
var list = document.querySelector('.secondSection ul');
var titleInput = document.querySelector('.titleInput').value
var bodyInput= document.querySelector('.bodyInput').value;

// $(document).ready(radioSelection)

// clone box with the user's input
form.addEventListener('submit',function(e){
e.preventDefault();
 cloneIdea();
 form.reset();
});


// clone box
function cloneIdea(){
var boxCopy = boxTemplate.cloneNode(true);
boxCopy.id = '';
boxCopy.querySelector('textarea').innerText= document.querySelector('.titleInput').value;
boxCopy.querySelector('.example-body').innerText= document.querySelector('.bodyInput').value;
boxCopy.querySelector('select').value= $("input[name ='quality']:checked").val();
list.appendChild(boxCopy);
var deleteButton = boxCopy.querySelector('.deleteButton');
deleteButton.addEventListener('click', deleteIdea)
}

// delete
function deleteIdea(ev){
 var box = ev.target.closest('.newIdeas');
 list.removeChild(box);
}
