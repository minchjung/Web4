$(document).ready(function(){
//.gnb 스타일 함수 (key : stop!!animate ) 
colorList = ["#d4165c","white","yellow","#008b8b"]//함수
function setGnbstyle(parameter){
    $(".gnb li").on("mouseover",function(){
        var i = $(this).index();
        $(".gnb li").stop().eq(i).animate({
            "font-size":"25px",
            "font-weight": "900",
            "color":colorList[i] 
//********** animate : border값이 안먹힌다. ************
        }).siblings().css({
            "font-size":"16px",
            "font-weight": "bold",
            "color":"black"
        // 나머지들 원래 font-style})  
        })
    })
}
//.gnb 스타일 함수호출
var gnbStr=".gnb li"
setGnbstyle(gnbStr)

// 배열 for section scrollTop 정보
// 실시간 브라우저 크기에 맞게 함수로 즉각 처리해야함
var offsetTop = new Array(); 
function setOffset(){
    for(var i=0;i<4;i++){
        offsetTop[i]= $("section").eq(i).offset().top;
    }
    offsetTop[4]=offsetTop[1]*4
    return offsetTop;
}
//click event: scroll switching to the section  
$(".gnb li").on("click",function(){
    offsetTop = setOffset() //배열정보 함수 호출
    var i =$(this).index();
    //스크롤 강제이동 에니메이트 !
    $("html,body").stop().animate({  
        "scrollTop":offsetTop[i]
    },1000,"easeOutBounce")
}) //mousewheel event: switching to the section   
$("section").on("mousewheel",function(e,d){
    var i = $("section").index(this)
    offsetTop=setOffset()     
    if(d > 0){//scroll up event
        $("html, body").stop().animate({
            "scrollTop":offsetTop[i-1],
        },1000,"easeOutBounce") 
        // switching the corresponding Gnb style,too
        $(".gnb li").stop().eq(i-1).animate({
            "font-size":"25px",
            "font-weight": "900",
            "color":colorList[i-1]}).siblings().css({
                "font-size":"16px",
                "font-weight": "bold",
                "color":"black"
            }) 
    }else{//scroll down event
        $("html, body").stop().animate({
            "scrollTop":offsetTop[i+1]
        },1000,"easeOutBounce")
        //switching the Gnb style
        $(".gnb li").stop().eq(i+1).animate({
            "font-size":"25px",
            "font-weight": "900",
            "color":colorList[i+1]}).siblings().css({
                "font-size":"16px",
                "font-weight": "bold",
                "color":"black"
            })
        }  
    console.log(i)
})
})//opening