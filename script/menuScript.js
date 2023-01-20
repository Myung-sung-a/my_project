$('#img_btn').click(function(){
    $('#popUp').css('display', 'block');
    console.log($('#popUp').contents().find('#close'));
})

function closePopup(){
     $('#popUp').css('display', 'none');
}

window.addEventListener('message', function(e) {
   $('#popUp').css('display', 'none');
});