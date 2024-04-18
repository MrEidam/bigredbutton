function menuStart(){
    $(document).ready(() => {
        $('.button').click(() => {
            if($('.button').hasClass('expand')){
                $('ul').slideUp(() => {
                    $('.button').removeClass('expand');
                    $('.fas').removeClass('expand');
                });
            }else{
                $('.button').addClass('expand');
                setTimeout(() => {
                    $('.fas').addClass('expand');
                    $('ul').stop().slideDown();
                },50);
            }
        })
    })
}