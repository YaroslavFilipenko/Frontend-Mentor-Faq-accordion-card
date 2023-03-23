$('.list-item').click(function() {
    $(this).addClass('active');
    $(this).children('.item__answer').slideToggle(500);
    $('.list-item').not(this).removeClass('active');
    $('.list-item').not(this).children('.item__answer').slideUp(500);
});

$(document).mouseup(function (e) {
    let container = $('.main-list');
    if (container.has(e.target).length === 0) {
        $('.list-item').children('.item__answer').slideUp(500);
        $('.list-item').not(this).removeClass('active');
    }
});