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

function createInput(){
  var li = document.createElement('li');

  li.classList.add('newIdeas');
  list.appendChild(li); 

  var newTitle = $('<h3>' + titleInput + '</h3><img src="images/delete.svg" class="deleteButton" style="display: inline-block; float: right;">');
  $('li').append(newTitle);
  var newBody = $('<p class="example-body">' + bodyInput + '</p>');
  $('li').append(newBody);
  var iconPic = $('<div class = "firstLine"><img src="images/upvote.svg" class="upArrow" style="padding-right: 30px; margin-bottom: 20px;"><img src="images/downvote.svg" class="downArrow"></div');
  $('li').append(iconPic);
}
