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

$submit.on('click',function(e){
e.preventDefault();
createInput();
form.reset();
})

function createInput(){
  var li = document.createElement('li');
  var newTitle = document.querySelector('.titleInput').value;
  var newBody = document.querySelector('.bodyInput').value;

  li.classList.add('newIdeas');
  List.appendChild(li); 

  var inputTitle = $('<h3>' + newTitle + '</h3><img src="images/delete.svg" class="deleteButton" style="display: inline-block; float: right;">');
  $('li').append(inputTitle);
  var inputBody = $('<p class="example-body">' + newBody + '</p>');
  $('li').append(inputBody);
  var iconPic = $('<div class = "firstLine"><img src="images/upvote.svg" class="upArrow" style="padding-right: 30px; margin-bottom: 20px;"><img src="images/downvote.svg" class="downArrow"></div');
  $('li').append(iconPic);

  console.log(newTitle, newBody);
}

//   var title= document.createElement('h3').addClass(h3);
//   var $text = document.createElement('p').addClass(example-body);
//   var $linkDelete= document.createElement('img').addClass(deleteButton);
//   var buttonDown = document.createElement('img').addClass(downArrow);
//   var linkUp = document.createElement('img').addClass(upArrow);
//   var quality = document.createElement('p').addClass(quality);


function deleteIdea(ev){
 var box = ev.target.closest('.newIdeas');
 list.removeChild(box);

}
