var tabLi = $("ul.tab_button li");
var tabLiLength = tabLi.length;
var newArray = [];
var heightVar=0;
var delayTime = 400;

for(var i=1;i<=tabLi.length;i++){
    newArray.push(heightVar)
    heightVar += $(".tab_"+i).outerHeight();
}

tabLi.on("click", function () {
    setTimeout(function(){
        tabLiToggle($(this));
    }, delayTime)
})

function tabLiToggle(target){
    tabLi.removeClass("on")
    target.addClass("on");
}


function scrollMove(seq){
    for(var i=0;i<=seq;i++){
        var scrollHeight;
        if(i==0){
            scrollHeight = 0
        }else{
            scrollHeight += $(".tab_"+i).outerHeight();
        }
    }
    $('.tab_view').animate({scrollTop : scrollHeight}, delayTime);
}

$(".tab_view").off("scroll").on("scroll", function () {
    var scrollVal = $(this).scrollTop();
    if(newArray[0]<=scrollVal && scrollVal<newArray[1]){
        tabLiToggle(tabLi.eq(0))
    }else if(newArray[1]<=scrollVal && scrollVal<newArray[2]){
        tabLiToggle(tabLi.eq(1))
    }else if(newArray[2]<=scrollVal && scrollVal<newArray[3]){
        tabLiToggle(tabLi.eq(2))
    }else if(newArray[3]<=scrollVal){
        tabLiToggle(tabLi.eq(3))
    }
});





