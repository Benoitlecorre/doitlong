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
        $('.subtitle_story_field').val($('#subtitle').text());
        $('.container_left_field').val($('#content_left').html());
        $('.container_center_field').val($('#content_center').html());
        $('.container_right_field').val($('#content_right').html());
    });

    $('.editable').mediumInsert({
        editor: editor,
        addons: {
            images: {
              imagesUploadScript: "/pictures/create"
            },
            embeds: {}
        },
    });
})

// Problème N°1 : faire afficher l'image dans une story grâce au plugin
// Problème N°2 : faire apparaitre plusieurs images dans une story
// Problème N°3 : Pimper la barre de WYSIWYG / Pimper le bouton
// Problème N°4 : Changer le design d'ensemble + son logo (voir Nike chaussures)
// Problème N°5 : Résoudre le problème : Et pour avoir plusieurs divs sur les côtés ?
