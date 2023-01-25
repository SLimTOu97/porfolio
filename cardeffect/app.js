$('.bttn').on('click',function () {
    $('.popup').fadeIn();
});

$('button.annuler').on('click',function () {
    event.preventDefault();//sans actualiser
    $('.popup').fadeOut();
});