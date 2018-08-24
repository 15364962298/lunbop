window.onload=function(){
    let lis=document.querySelectorAll('.banner_picture li')
    let point=document.querySelectorAll('.lunbodian li')
    let btnleft=document.querySelector('.btnleft')
    let btnright=document.querySelector('.btnright')
    console.log(btnleft,btnright)
    let t=setInterval(fn,1500);
    let now=next=0;
    function fn(){
        next++;
        if(next==lis.length){
            next=0;
        }

        lis[next].style.left="1226px";
        animate(lis[now],{left:-1226});
        animate(lis[next],{left:0,zIndex:10});
        point[now].style.background=''
        point[next].style.background='#fff'

        now=next;
    }
    btnright.onclick=function(){
        fn()
    }
    btnleft.onclick=function(){
        fn1()
    }
    function fn1(){
        next--;
        if(next<0){
            next=lis.length-1;
        }
        lis[next].style.left="1226px";
        animate(lis[now],{left:-1226});
        animate(lis[next],{left:0,zIndex:10});
        point[now].style.background=''
        point[next].style.background='#fff'
        now=next;
    }
    for(let i=0;i<lis.length;i++){
        lis[i].onmuseenter=function(){
            clearInterval(t);
        }
    }








}