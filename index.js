var tabLi = $("ul.tab_button li");
var tabLiLength = tabLi.length;

tabLi.on("click", function(){
    tabLiToggle($(this));

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
    $('.tab_view').animate({scrollTop : scrollHeight}, 400);
}

$(".tab_view").scroll(function(){
    var scrollVal = $(this).scrollTop();

    
    
    
    // if(){
        
        // }
});


var heightVar=0;
for(var i=1;i<=tabLi.length;i++){
    var newArray = [];
    newArray.push(heightVar)
    heightVar += $(".tab_"+i).outerHeight();
    console.log(newArray)
}
newArray.push(1)
console.log(newArray)
