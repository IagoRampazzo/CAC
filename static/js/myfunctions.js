$("#menu-home").click(function() {
	console.log("home " + $("#section-home").offset().top);
    $('html,body').animate({
        scrollTop: $("#section-home").offset().top},
        1000);
});


$("#menu-acoes").click(function() {
	console.log("acoes " + $("#section-acoes").offset().top);
    $('html,body').animate({
        scrollTop: $("#section-acoes").offset().top+1},
        1000);
});

$("#menu-visoes").click(function() {
	console.log("visoes " + $("#section-visoes").offset().top);
    $('html,body').animate({
        scrollTop: $("#section-visoes").offset().top+1},
        1000);
});

$("#menu-onde").click(function() {
	console.log("onde " + $("#section-onde").offset().top);
    $('html,body').animate({
        scrollTop: $("#section-onde").offset().top+1},
        1000);
});

$("#menu-cadastar").click(function() {
	console.log("cadastar " + $("#section-cadastar").offset().top);
    $('html,body').animate({
        scrollTop: $("#section-cadastar").offset().top+1},
        1000);
});