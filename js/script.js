$(function() {
    $('.nav-item.navigation-item > a.nav-link').map(function() {
        $(this).on('click', function(event) {
            $(this).parent('.nav-item.navigation-item').siblings('.nav-item.navigation-item').map(function() {
                    if ($(this).children('.child-nav-item').css('display') === 'block') {
                        $(this).removeClass('active')
                        $(this).children('.child-nav-item').animate({
                            height: "toggle"
                        }, 500)
                    }
                })
                /** -------------------------------------------------------------- */
            $(this).siblings('.child-nav-item').animate({
                height: "toggle"
            }, 500, function() {}.bind(this))
        })
    })








    $('.side-bar').css({
        top: $('.top-nav').height(),
        height: window.innerHeight - $('.top-nav').height()
    })
    $('.overlay').css({
        top: $('.top-nav').height(),
        height: window.innerHeight - $('.top-nav').height()
    })
    if (window.innerWidth <= 991) {
        $('.side-bar').addClass('minimal')
        $('#main-content').css({})
    } else {
        $('.side-bar').removeClass('minimal')
        $('.side-bar').css({ display: 'block' })
        $('#main-content').css({
            marginLeft: `${(window.innerWidth / 5) - 3}px`
        })
    }
    /** ---------------- toggle sidebar ------------------------------ */
    $('.side-bar').addClass('minimal-bar-show')
    $('.nav-toggler button').on('click', function(event) {
            if (window.innerWidth > 991) {
                if ($('.side-bar').hasClass('minimal')) {
                    $('.side-bar').animate({
                        width: `${window.innerWidth / 5}px`
                    }, 500, () => {
                        $('.side-bar').css({ display: 'block' })
                    })
                    $('#main-content').animate({
                        marginLeft: `${window.innerWidth / 5}px`
                    }, 500)
                    $('.side-bar').removeClass('minimal')
                } else {
                    $('.side-bar').animate({
                        width: '70px'
                    }, 500, () => {
                        $('.side-bar').css({ display: 'block' })
                    })
                    $('#main-content').animate({
                        marginLeft: '70px'
                    }, 500)
                    $('.side-bar').addClass('minimal')
                }
            } else {
                var marginLeft = '0px'
                if (window.innerWidth <= 425) {
                    marginLeft = '0px'
                    $('.side-bar, .overlay').animate({
                        width: 'toggle'
                    }, 500)
                } else {
                    marginLeft = '70px'
                    $('.side-bar').animate({
                        width: 'toggle'
                    }, 500, () => {})
                }
                $('.side-bar').toggleClass('minimal-bar-show')

                if ($('.side-bar').hasClass('minimal-bar-show')) {
                    $('#main-content').animate({
                        marginLeft: `0px`
                    }, 500)
                } else {
                    $('#main-content').animate({
                        marginLeft: marginLeft
                    }, 500)
                    if (marginLeft === '0px') {
                        $('.overlay').animate({}, 500)
                    }
                }
            }

        })
        /** -------------------------------------------------------------- */
        /** -------------------------------------------------------------- */
    window.addEventListener('resize', function(event) {
        if (window.innerWidth <= 991) {
            $('.side-bar').addClass('minimal')
            if ($('.side-bar').css('display') === 'none') {
                $('#main-content').css({
                    marginLeft: `0px`
                })
            } else {
                $('#main-content').css({
                    marginLeft: `70px`
                })
                $('.side-bar').css({
                    width: `70px`
                })

            }
        } else {
            $('.side-bar').removeClass('minimal')
            if ($('.side-bar').css('display') === 'none') {
                $('#main-content').css({
                    marginLeft: `0px`
                })
            } else {
                $('#main-content').css({
                    marginLeft: `${(window.innerWidth / 5) - 3}px`
                })
                $('.side-bar').css({
                    width: `${window.innerWidth / 5}px`,
                    display: 'block'
                })

            }
        }



    })

})