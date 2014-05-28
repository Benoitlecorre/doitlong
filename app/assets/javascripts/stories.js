var editor = new MediumEditor('.editable', {
    anchorInputPlaceholder: 'Type a link',
    buttons: ['bold', 'italic', 'underline', 'anchor', 'header1', 'header2', 'quote'],
    diffLeft: 25,
    diffTop: 10,
    firstHeader: 'h1',
    secondHeader: 'h2',
    delay: 1000,
    buttonLabels: 'fontawesome',
    targetBlank: true
});


$('.submit_story').on("click", function(){
  $('.title_story_field').val($('#container h1').text());
  $('.story_field').val($('#main_container').html());

});

