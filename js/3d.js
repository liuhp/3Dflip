var $li = $('li');
console.log($li);
$li.each(function(index,ele){
    console.log(ele);
    $(ele).mouseenter(function(e){
        myAddClass(e,ele,'in')
            
    });
    $(ele).mouseleave(function(e){
        myAddClass(e,ele,'out');
            
    });
});


function myAddClass(e,ele,der){
    // console.log(e);
    var X = e.offsetX - ele.offsetWidth/2,
    Y = e.offsetY - ele.offsetHeight/2,
    d = (Math.round((Math.atan2(Y,X)*(180/Math.PI)+180)/90)+3)%4; 
        console.log(d);

    // var deriction; 
    switch(d){
        case 0: var deriction = der + '-top';break;
        case 1: var deriction = der + '-right';break;
        case 2: var deriction = der + '-bottom';break;
        case 3: var deriction = der + '-left';break;
    }
    console.log(deriction);
    $(ele).removeClass();
    $(ele).addClass(deriction);

}