var $submit = $('.saveButton');
var List = document.querySelector('.secondSection ul');
var form = document.forms['inputForm'];

$submit.on('click',function(e){
// var $title = $('.titleInput').value;
// var $body = $('.bodyInput').value;
e.preventDefault();
create();
create2();
form.reset();
})

function create(){
  var li = document.createElement('li');
  var inputTitle = $('.titleInput').val();
  var inputBody = $('.bodyInput').val();

   li.classList.add('newIdeas');
   List.appendChild(li); 

  var newTitle = `<h3> ${inputTitle} </h3>`;
  var newBody =  `<p> ${inputBody} </p>`;
   
    $('ul').append(newTitle);
    $('ul').append(newBody);

    console.log('hello');
}

function create2(){

  var t = $("<div class = 'firstLine'><h3 class='quality'></h3><img src='images/delete.svg' class='deleteButton'></div>");
  $('li').append(t);
  var t2 = $("<p class='example-body'></p>");
  $('li').append(t2);
  var t3 = $("<div class = 'lineThree'><img src='images/downvote.svg' class='downArrow'><img src='images/upvote.svg' class='upArrow'><p class='quality'></p></div>");
  $('li').append(t3);

}
//   var title= document.createElement('h3').addClass(h3);
//   var $text = document.createElement('p').addClass(example-body);
//   var $linkDelete= document.createElement('img').addClass(deleteButton);
//   var buttonDown = document.createElement('img').addClass(downArrow);
//   var linkUp = document.createElement('img').addClass(upArrow);
//   var quality = document.createElement('p').addClass(quality);



