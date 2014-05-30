$(document).ready(function(){
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
        $('.title_story_field').val($('#one').text());
        $('.container_left_field').val($('#content_left').html());
        $('.container_center_field').val($('#content_center').html());
        $('.container_right_field').val($('#content_right').html());
    });

    $('.editable').mediumInsert({
        editor: editor,
        addons: {
            images: {imageUploadScript: "/stories/1"},
            embeds: {}
        }
    });
})

