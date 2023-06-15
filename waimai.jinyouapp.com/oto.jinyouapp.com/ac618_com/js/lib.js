$(document).ready(function() {
    // 手机导航
    $('.menuBtn').append('<b></b><b></b><b></b>');
    $('.menuBtn').click(function(event) {
        $(this).toggleClass('open');
        var _winw = $(window).width();
        var _winh = $(window).height();
        if ($(this).hasClass('open')) {
            if (_winw <= 1999) {
                $('.header .hdr').stop().slideDown();
            }
        } else {
            $('body').removeClass('open');
            if (_winw <= 1999) {
                $('.header .hdr').stop().slideUp();
            }
        }
    });

    $(window).on('resize', function(e) {
        if ($(window).width() > 768) {
            $('.menuBtn').removeClass('open');
            $('.nav').css('display', '');
        }
    });
    $('.nav li').bind('mouseenter', function() {
        $(this).find('.box').stop().slideDown("fast");
        // if( $(this).find('.box').length ){
        //     $(this).addClass('on');
        // };
    });
    $('.nav li').bind('mouseleave', function() {
        // $(this).removeClass('on');
        $(this).find('.box').stop().slideUp("fast");
    });


    // 选项卡 鼠标点击
    $(".TAB_CLICK li").click(function() {
        var tab = $(this).parent(".TAB_CLICK");
        var con = tab.attr("id");
        var on = tab.find("li").index(this);
        $(this).addClass('on').siblings(tab.find("li")).removeClass('on');
        $(con).eq(on).show().siblings(con).hide();
    });

    $('.TAB_CLICK').each(function(index, el) {
        $(this).children('li').filter(':first').trigger('click');
    });

    $(window).scroll(function(event) {
        /* Act on the event */
        var h1 = $(window).scrollTop();
        var h2 = $('.header').height();
        if (h1 > h2) {
            $('.header').addClass('show');
        } else {
            $('.header').removeClass('show');
        }

    });





});