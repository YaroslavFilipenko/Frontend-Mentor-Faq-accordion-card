//Accordion slides down (up) by clicking on the element

$('.list-item').click(function() {
    const clickedItem = $(this);
    const isItemActive = clickedItem.hasClass('active');
    
    $('.list-item').removeClass('active');
    $('.item__answer').slideUp(500);
  
    if (!isItemActive) {
      clickedItem.addClass('active');
      clickedItem.children('.item__answer').slideDown(500);
    }
});

//Accordion slides up by clicking not on the element

const $mainList = $('.main-list');
const $listItem = $('.list-item');

$(document).mouseup(function (event) {
    if (!$mainList.has(event.target).length) {
        $listItem.children('.item__answer').slideUp(500);
        $listItem.not(event.target).removeClass('active');
    }
});