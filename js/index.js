$(document).ready(function () {

    $(".header").on("wheel DOMMouseScroll", function (event) {
        //    console.log(event)
        let E = event.originalEvent
        let delta = 0;
        if (E.detail) {
            delta = E.detail * -40
        } else {
            delta = E.wheelDelta
        }

        if (delta < 0) {
            //마우스 휠을 내렸을 때
            if ($(this).next().length) {
                let posTop = $(this).next().offset().top
                $("html,body").stop().animate({ scrollTop: posTop }, 1000)
            }
        } else {
            //마우스 휠을 올렸을 때
            if ($(this).prev().length != 0) {
                // let posTop = $(this).prev().offset().top
                // $("html,body").stop().animate({ scrollTop: posTop }, 1000)
            }
        }
        return false
    })

    $(window).scroll(function () {
        let winscroll = $(window).scrollTop()
        if (winscroll > 200) {
            $(".fixedDecoWave").addClass("pos1")
        } else {
            $(".fixedDecoWave").removeClass("pos1")
        }
    })

    $(".popupList>li").click(function (e) {
        e.preventDefault()
        $(".popuppopup").addClass("on")
        let idx = $(this).index()
        //일단 싹다 지우고 순번에 맞는 리스트만 보이게끔.
        $(".detailpopup>li").removeClass("on")
        $(".detailpopup>li").eq(idx).addClass("on")
    })

    $(".btnPopupClose").click(function (e) {
        e.preventDefault()
        $(".popuppopup").removeClass("on")
    })


})



