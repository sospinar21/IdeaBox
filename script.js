var boxTemplate = document.querySelector('#ideaTemplate');
var saveButton = document.querySelector('.saveButton');
var form = document.forms['inputForm']
var list = document.querySelector('.secondSection ul');
var titleInput = document.querySelector('.titleInput').value
var bodyInput= document.querySelector('.bodyInput').value;
var ideaString = localStorage.getItem('idea');
var ideas = JSON.parse(ideaString);

$('.secondSection').on('blur', '.title', '.example-body');

$('.secondSection').on('click', '.deleteButton', deleteIdea);
$('.secondSection').on('click', '.upArrow', upVote);
$('.secondSection').on('click', '.downArrow', downVote);
$("input[type=submit]").attr('disabled','disabled');
$("form").change(enable);

if(ideas) {
  window.onload = oldIdeas();
} else {
  ideas = [];
}

function enable() {
  if ($('bodyInput') == " " && $('titleInput') == "") {
    $("input[type=submit]").attr('disabled','disabled');
  } else {
$("input[type=submit]").removeAttr('disabled');
}
}

// clone box with the user's input
form.addEventListener('submit',function(e) {
  enable()
  e.preventDefault();
  cloneIdea();
  form.reset();
});

function oldIdeas()   {
  for(i = 0; i < ideas.length; i++) {
  createOldIdea(ideas[i]);
} 
}

// getting random id
function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function loop(){
  var id = '';
  for(i = 0; i < 8; i++ ){
  var randomNum = random(65, 90);
  var letter = String.fromCharCode(randomNum);
id = letter + id;
}
  return id;
}

// clone box
function cloneIdea(){
  var boxCopy = boxTemplate.cloneNode(true);
  var ideaObject = ideaStorage();
  boxCopy.id = loop();
  var title = boxCopy.querySelector('textarea');
  var body = boxCopy.querySelector('.example-body');
  title.innerText= ideaObject.title;
  body.innerText= ideaObject.body;
  list.prepend(boxCopy);
  $("input[type=submit]").attr('disabled','disabled');
}

// old boxes
function createOldIdea(idea){
  var boxCopy = boxTemplate.cloneNode(true);
  var title = boxCopy.querySelector('textarea');
  var body = boxCopy.querySelector('.example-body');
  boxCopy.id = idea.id;
  list.prepend(boxCopy);
  title.innerText = idea.title;
  body.innerText = idea.body;
}

//  assign values to stored boxes
function ideaStorage(){
  var idea = {};
  idea.title = document.querySelector('.titleInput').value;
  idea.body = document.querySelector('.bodyInput').value;
  idea.id = loop();
  ideas.push(idea);
  var ideaString = JSON.stringify(ideas);
  localStorage.setItem('idea',ideaString);
  return idea;
}

// delete
  function deleteIdea(ev){
  var box = ev.target.closest('.newIdeas');
  var id = box.id;
  list.removeChild(box);
  ideas = ideas.filter(function(el) {
  return el.id !== id;
});
  var ideaStr = JSON.stringify(ideas);
  localStorage.setItem('idea', ideaStr);
}

// search bar
$(document).ready(function($){
  var ideasSearch = document.querySelector('.newIdeas');
  $('li').each(function() {
    $(this).attr('ideasSearch', $(this).text().toLowerCase())
  })
  $('.searchBox').on('keyup',function() {
    var searchTerm = $(this).val().toLowerCase();
    $('.newIdeas').each(function() {
      if($(this).filter('[ideasSearch *= ' + searchTerm + ']').length > 0 || searchTerm.length < 1) {
        $(this).show();
        $('#ideaTemplate').hide()
      } else {
        $(this).hide();
      }  
      })
  })
})

function upVote() {
  var quality = $(this).parent().find('.qualType').text();

  if(quality === 'swill') {
    $(this).parent().find('.qualType').text('plausible');
  } else {
    $(this).parent().find('.qualType').text('genius');
  }
}

function downVote() {
  var quality = $(this).parent().find('.qualType').text();

  if(quality === 'genius') {
    $(this).parent().find('.qualType').text('plausible');
  } else {
    $(this).parent().find('.qualType').text('swill');
  }
}    
