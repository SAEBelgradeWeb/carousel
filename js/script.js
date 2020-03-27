$('li:last-child').prependTo('ul');


$('.next').on('click', function(){
    moveSlides('forward');
});

$('.prev').on('click', function(){
    moveSlides('backward')
});

function moveSlides(direction) {
    $('.prev').prop('disabled', true);
    $('li:last-child').prependTo('ul');
    $('ul').css('left', '-=300px');

    $('ul').animate({
        left: '+=300px'
    }, {
        done: function(){
            $('.prev').prop('disabled', false);
        }
    });
}

