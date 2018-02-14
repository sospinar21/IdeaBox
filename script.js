var boxTemplate = document.querySelector('#ideaTemplate');
var saveButton = document.querySelector('.saveButton');
var list = document.querySelector('.secondSection ul');
var titleInput = document.querySelector('.titleInput').value;
var bodyInput= document.querySelector('.bodyInput').value;
var form = document.forms['inputForm']
var ideaString = localStorage.getItem('idea');
var ideas = JSON.parse(ideaString);
// var upVoteBtn = document.querySelector('.upArrow');
// var downVoteBtn = document.querySelector('.downArrow');

//$('.saveButton').on('click', sortQuality);

// var attemptPrepend = document.querySelector('.newIdeas');
// list.prepend(attemptPrepend);

if(ideas) {
 window.onload = oldIdeas();
} else {
  ideas = [];
}

// clone box with the user's input
form.addEventListener('submit',function(e) {
  e.preventDefault();
  // createInput();
  cloneIdea();
  form.reset();
});

function oldIdeas() {
  for(i = 0; i < ideas.length; i++) {
    createOldIdea(ideas[i]);
  } 
}

// getting random id
function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random()*(max - min)) + min;
}

function loop() {
var id = '';

for(i = 0; i < 8; i++) {
  var randomNum = random(65, 90);
  var letter = String.fromCharCode(randomNum);
  id = letter + id;
} return id;
}

// clone box
function cloneIdea() {
var boxCopy = boxTemplate.cloneNode(true);
var ideaObject = ideaStorage();
var deleteButton = boxCopy.querySelector('.deleteButton');

boxCopy.id = loop();
boxCopy.querySelector('textarea').innerText = ideaObject.title;
boxCopy.querySelector('.example-body').innerText = ideaObject.body;
list.appendChild(boxCopy);
deleteButton.addEventListener('click', deleteIdea);
}

// old boxes
function createOldIdea(idea) {
var boxCopy = boxTemplate.cloneNode(true);
var deleteButton = boxCopy.querySelector('.deleteButton');

boxCopy.id = idea.id;
boxCopy.querySelector('textarea').innerText = idea.title;
boxCopy.querySelector('.example-body').innerText = idea.body;
list.appendChild(boxCopy);
deleteButton.addEventListener('click', deleteIdea);
}

//  assign values to stored boxes
function ideaStorage() {
  var idea = {};

  idea.title = document.querySelector('.titleInput').value;
  idea.body = document.querySelector('.bodyInput').value;
  idea.id = loop();
  idea.quality = document.querySelector("input[name='quality']:checked").value;
  console.log(ideas);
  ideas.push(idea);
  console.log(ideas);

  var ideaString = JSON.stringify(ideas);
  localStorage.setItem('idea', ideaString);
  return idea;
}

//not being called
function getData() {
  var getIdea = localStorage.getItem('idea');
  var getIdeaJSON = JSON.parse(getIdea);

  return getIdeaJSON;
}

// delete
function deleteIdea(ev) {
  var box = ev.target.closest('.newIdeas');
  var id = box.id;

  list.removeChild(box);
  ideas = ideas.filter(function(el) {
     return el.id !== id;
  });
  var ideaStr = JSON.stringify(ideas);
  localStorage.setItem('idea', ideaStr);
}

function createInput() {
  var li = document.createElement('li');
  
  li.classList.add('newIdeas');
  list.appendChild(li); 

  var newTitle = $('<h3>' + titleInput + '</h3><img src="images/delete.svg" class="deleteButton">');
  $('li').append(newTitle);
  var newBody = $('<p class="example-body">' + bodyInput + '</p>');
  $('li').append(newBody);
  var iconPic = $('<img src="images/upvote.svg" class="upArrow"><img src="images/downvote.svg" class="downArrow">');
  $('li').append(iconPic);
}

// function sortQuality() {
//   var sortedQual = document.querySelector('.quality');
//   var qualList = ['swill', 'plausible', 'genius'];

//    qualList.sort(sortedQual);
//    console.log('hello');
// }

$('.upArrow').on('click', upVote);
$('.downArrow').on('click', downVote);

function upVote() {
  var quality = $(this).parent().find('.qualType').text();

  if(quality === 'swill') {
    $(this).parent().find('.qualType').text('plausible');
  } else {
    $(this).parent().find('.qualType').text('genius');
  }

  console.log('bahhh');
}

function downVote() {
  var quality = $(this).parent().find('.qualType').text();

  if(quality === 'genius') {
    $(this).parent().find('.qualType').text('plausible');
  } else {
    $(this).parent().find('.qualType').text('swill');
  }

  console.log('bahhhh 2');
}    
