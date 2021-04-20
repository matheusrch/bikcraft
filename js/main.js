$(".rslides").responsiveSlides({
    auto: true,             // Boolean: Animate automatically, true or false
    speed: 500,            // Integer: Speed of the transition, in milliseconds
    timeout: 4500,          // Integer: Time between slide transitions, in milliseconds
});

$(".rslides-portfolio").responsiveSlides({
    auto: true,             // Boolean: Animate automatically, true or false
    speed: 500,            // Integer: Speed of the transition, in milliseconds
    timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
    pager: true,           // Boolean: Show pager, true or false
});

Visibility.onVisible(function() {
    setTimeout(function() {
        $(".intro h1").addClass("animated fadeInDown");
    }, 400);
    setTimeout(function() {
        $(".intro blockquote").addClass("animated fadeInDown");
    }, 700);
    setTimeout(function() {
        $(".intro .btn").addClass("animated fadeInDown");
    }, 1000);
    setTimeout(function() {
        $(".animar").addClass("animated fadeInDown");
    }, 1400);

    setTimeout(function() {
        $(".intro-interna h1").addClass("animated fadeInDown");
    }, 400);
    setTimeout(function() {
        $(".intro-interna p").addClass("animated fadeInDown");
    }, 700);
    setTimeout(function() {
        $(".animar-interno").addClass("animated fadeInDown");
    }, 1000);
})