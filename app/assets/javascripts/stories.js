var editor = new MediumEditor('.editable', {
    anchorInputPlaceholder: 'Type a link',
    buttons: ['bold', 'italic', 'quote'],
    diffLeft: 25,
    diffTop: 10,
    firstHeader: 'h1',
    secondHeader: 'h2',
    delay: 1000,
    buttonLabels: 'fontawesome',
    targetBlank: true
});





    $('.submit_story').on("click", function(){

        $('.story_field').val($('#container').html());

    });
