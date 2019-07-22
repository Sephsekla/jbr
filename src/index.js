import './sass/style.scss'

$ = jQuery;

$('.toggle-nav').click(function(){
    $('body').toggleClass('nav-open');
})