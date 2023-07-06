$(document).ready(function(){

    $(window).scroll(function(){
        let winTop = $(window).scrollTop()
        let wavee = $(".waves").offset().top
        if(winTop>=wavee){


        }else{
        }
})

    $(".btnTop").click(function(){
        moveScroll({
        top:0,
        speed:2000
        })
    })

    function moveScroll(option){
        $("html,body").animate({scrollTop:option.top},option.speed)  
    }
    

    // $(".tabmenu .tab>li").click(function(){
    //     $(".tabmenu .tab>li").removeClass("on")
    //     $(".tabmenu .tab>li").addClass("on")

    //     $(".bannerImg .train>li").removeClass("on")
    //     $(".bannerImg .train>li").eq(count).addClass("on")
    // })

    $(".bannerbtn .prevbtn").click(function(){
        
        $(".bannerImg .train>li").removeClass("on")
        $(".bannerImg .train>li").eq(count).addClass("on")
    })

    $(".bannerbtn .nextbtn").click(function(){
        $(".bannerImg .train>li").removeClass("on")
        $(".bannerImg .train>li").eq(count).addClass("on")
    })


     $(window).scroll(function(){
        let winSCT = $(window).scrollTop()
        console.log(winSCT)
        if(winSCT>400){
            // alert("400이상 아래로 스크롤해서 내려왔습니다.")
            $("body").addClass("dark")
        }else{
             $("body").removeClass("dark")
        }
    })
})



