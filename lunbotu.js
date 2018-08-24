window.onload=function(){
    let lis=document.querySelectorAll('.banner_picture li')
    let point=document.querySelectorAll('.lunbodian li')
    let btnleft=document.querySelector('.btnleft')
    let btnright=document.querySelector('.btnright')
    let banner=document.querySelector('.banner')
    let width=parseInt((getComputedStyle(banner,null).width))
    console.log(lis,banner,width)
    let now=next=0;
    let flag=true;
    let t=setInterval(fn,1500);
    function fn(){
        next++;
        if(next==lis.length){
            next=0;
        }
        lis[next].style.left=width+"px";
        animate(lis[now],{left:-width});
        animate(lis[next],{left:0},function(){
            flag=true;
        });
        point[now].classList.remove('quan')
        point[next].classList.add('quan')
        now=next;
    }
    function fn1(){
        next--;
        if(next<0){
            next=lis.length-1;
        }
        lis[next].style.left=-width+"px";
        animate(lis[now],{left:width});
        animate(lis[next],{left:0},function(){
            flag=true;
        });
        point[now].classList.remove('quan')
        point[next].classList.add('quan')
        now=next;
    }
    banner.onmouseenter=function(){
        clearInterval(t)
    }
    banner.onmouseleave=function(){
        t=setInterval(fn,1000);
    }
    btnright.onclick=function(){
        if(flag==false){
            return;
        }
        flag=false;
        fn()
    }
    btnleft.onclick=function(){
        if(flag==false){
            return;
        }
        flag=false;
        fn1()
    }
    point.onmouseenter=function(){
        clearInterval(t)
    }
    point.onmouseleave=function(){
        t=setInterval(fn,1000);
    }


    point.forEach(function(value,i){
        value.onclick=function(){
            if(now==i){
                return;
            }
            else if(now<i){
                lis[i].style.left=width+"px";
                animate(lis[now],{left:-width});
                animate(lis[i],{left:0});
                point[now].classList.remove('quan')
                point[i].classList.add('quan')
            }
            else{
                lis[i].style.left=-width+"px";
                animate(lis[now],{left:width});
                animate(lis[i],{left:0});
                point[now].classList.remove('quan')
                point[i].classList.add('quan')
            }
            now=i
        }
    })








}