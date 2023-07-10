$(document).ready(function () {

    $(`.skillList>ul>li`).click(function(){
        let liper = $(this).find(`.per`).text()
        $(`.circleper`).css(`stroke-dashoffset`,314-(314*(liper*0.01)))
        let count = 0
        let timer = setInterval(function(){
            count++
            $(`.circleboxper`).text(count+`%`)
            if(count>=liper){
                clearInterval(timer)
            }
        },10)
    })
    // $(`.skillList>ul>li`).mouseout(function(){
    //     $(`.circlebox svg`).css(`stroke-dashoffset`,314)
    //     $(`.circleboxper`).text(0+`%`)
    //     let timer = setInterval(function(){
    //     },50)
    //     clearInterval(timer)
    // })


    const bannerImg = new Swiper(".bannerImg", {
        navigation: {
            nextEl: ".nextbtn",
            prevEl: ".prevbtn",
          },
    });

    $(".tab>li").click(function(e){
        e.preventDefault()
        $(".swiper-wrapper").addClass("on")
        let idx = $(this).index()
        $("swiper-wrapper>li").removeClass("on")
        $("swiper-wrapper>li").eq(idx).addClass("on")
        $(".tab>li").removeClass("on")
        $(".tab>li").eq(idx).addClass("on")
        bannerImg.slideToLoop(idx,500)

    })
    $(".html_d").click(function(e){
        $(`.arr`).css(`transform`,`rotate(330deg)`)
    })
    $(".css_d").click(function(e){
        $(`.arr`).css(`transform`,`rotate(20deg)`)
    })
    $(".javascript_d").click(function(e){
        $(`.arr`).css(`transform`,`rotate(270deg)`)
    })
    $(".jquery_d").click(function(e){
        $(`.arr`).css(`transform`,`rotate(90deg)`)
    })
    $(".photoshop_d").click(function(e){
        $(`.arr`).css(`transform`,`rotate(220deg)`)
    })
    $(".illustrator_d").click(function(e){
        $(`.arr`).css(`transform`,`rotate(140deg)`)
    })
    $(".grid>div").on("wheel DOMMouseScroll", function (event) {
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
            if ($(this).next().length!=0) {
                let posTop = $(this).next().offset().top
                $("html,body").stop().animate({scrollTop: posTop}, 1000)
                // console.log(posTop)
            }
        } else {
            // 마우스 휠을 올렸을 때
            if ($(this).prev().length!=0) {
                let posTop = $(this).prev().offset().top
                $("html,body").stop().animate({ scrollTop: posTop }, 1000)
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

    // let nextbtn = document.querySelector(`.nextbtn`)
    // let prevbtn = document.querySelector(`.prevbtn`)
    // let train = document.querySelector(`.train`)
    // let trainList = train.children
    
    // let count = 0
    // nextbtn.addEventListener(`click`,function(e){
    //     e.preventDefault()
    //     count++
    //     if(count>3){count=0}
    //     train.style.transform = `translateX(-${25*count}%)`
    //     for(let i=0; i<trainList.length; i++){
    //         trainList[i].classList.remove(`on`)
    //     }
    //     trainList[count].classList.add(`on`)
    // })
    // prevbtn.addEventListener(`click`,function(e){
    //     e.preventDefault()＝＝
    //     count--
    //     if(count<0){count=3}
    //     train.style.transform = `translateX(-${25*count}%)`
    //     for(let i=0; i<trainList.length; i++){
    //         trainList[i].classList.remove(`on`)
    //     }
    //     trainList[count].classList.add(`on`)
    // })
    
       // $(".skill_List>li circle")
    // let pathLength = $(".c1").get(0).getTotalLength()
    //    // alert(pathLength)
    //    // 314 - (314*0.9) 
    // pathLength - (pathLength*0.9)
    // $(".c1").css("stroke-dashoffset",pathLength - (pathLength*0.9))


    
})


