var $submit = $('.save-button');
var $ideaList = $('ul');

$submit.on('click',function(e){
var $title = $('.titleInput').value;
var $body = $('.bodyInput').value;
e.preventDefault();
create()
})



function newIdeas(title, text,buttonUp,buttonDown,quality,close){
  this.title = title;
  this.text = text;
  this.buttonUp = buttonUp;
  this.buttonDown = buttonDown;
  this.quality = quality;
  this.close = close;
}

// CREATING ELEMENTS

function create(){
  $('body').html($('<div>', {class: 'wrapper'}));
}