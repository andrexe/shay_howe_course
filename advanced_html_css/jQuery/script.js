$('.notice-close').on('click', function (event) {
    $('.notice-warning').remove();
});

$('.notice-close').on('click', function (event) {
    $('.notice-error').fadeOut('slow', function (event) {
        $(this).remove();
    });
});

$('.panel-tab').on('click', function (event) {
    event.preventDefault();
    $('.panel-stage').slideToggle('slow', function (event) {
        if ($(this).is(':visible')) {
            $('.panel-tab').html('Close <span>&#9650;</span>');
        } else {
            $('.panel-tab').html('Open <span>&#9660;</span>');
        }
    });
});

// Show the first tab by default
$('.tabs-stage div').hide();
$('.tabs-stage div:first').show();
$('.tabs-nav li:first').addClass('tab-active');

// Change tab class and display content
$('.tabs-nav a').on('click', function (event) {
    event.preventDefault();
    $('.tabs-nav li').removeClass('tab-active');
    $(this).parent().addClass('tab-active');
    $('.tabs-stage div').hide();
    $($(this).attr('href')).show();
});