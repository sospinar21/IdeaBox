var boxTemplate = document.querySelector('#ideaTemplate');
var saveButton = document.querySelector('.saveButton');
var form = document.forms['inputForm']
var list = document.querySelector('.secondSection ul');
var titleInput = document.querySelector('.titleInput').value
var bodyInput= document.querySelector('.bodyInput').value;




form.addEventListener('submit',function(e){
e.preventDefault();
  // desable()
 cloneIdea();
 form.reset();
});




function cloneIdea(){
var boxCopy = boxTemplate.cloneNode(true);
boxCopy.id = "";
boxCopy.querySelector('h3').innerText= document.querySelector('.titleInput').value;
boxCopy.querySelector('.example-body').innerText= document.querySelector('.bodyInput').value;
list.appendChild(boxCopy);
var deleteButton = boxCopy.querySelector('.deleteButton');
deleteButton.addEventListener('click', deleteIdea)
}


function deleteIdea(ev){
 var box = ev.target.closest('.newIdeas');
 list.removeChild(box);

}
