let div_P = document.querySelectorAll("p");
let btn = document.querySelectorAll("img");
let isVid = true

window.onload=function(){ 
    btn[1].src="./assets/images/icon-minus.svg"
    div_P[0].style.display="block"
}


btn[1].addEventListener("click", (e) => {
 if(isVid) {
    btn[1].src="./assets/images/icon-minus.svg"
    div_P[0].style.display="block"
 }else {
    div_P[0].style.display="none"
    btn[1].src="./assets/images/icon-plus.svg"
 }
 isVid = !isVid;
});


btn[2].addEventListener("click",(e)=> {
if(isVid){
    btn[2].src="./assets/images/icon-minus.svg"
    div_P[1].style.display="block"
}else{
    div_P[1].style.display= "none";
    btn[2].src="./assets/images/icon-plus.svg"
}
isVid = !isVid;
});

btn[3].addEventListener("click",(e)=> {
    if(isVid){
        btn[3].src="./assets/images/icon-minus.svg"
        div_P[2].style.display="block"
    }else{
        div_P[2].style.display= "none";
        btn[3].src="./assets/images/icon-plus.svg"
    }
    isVid = !isVid;
    });

    btn[4].addEventListener("click",(e)=> {
        if(isVid){
            btn[4].src="./assets/images/icon-minus.svg"
            div_P[3].style.display="block"
        }else{
            div_P[3].style.display= "none";
            btn[4].src="./assets/images/icon-plus.svg"
        }
        isVid = !isVid;
        });


btn[2].addEventListener("click",(e)=>{
    if(true) {
        div_P[0].style.display="none"
        
        div_P[2].style.display="none"
        div_P[3].style.display="none"
        btn[1].src="./assets/images/icon-plus.svg"
        btn[3].src="./assets/images/icon-plus.svg"
        btn[4].src="./assets/images/icon-plus.svg"
    }
});

btn[3].addEventListener("click",(e)=>{
    if(true) {
        div_P[0].style.display="none"
        div_P[1].style.display="none"
        div_P[3].style.display="none"
        btn[1].src="./assets/images/icon-plus.svg"
        btn[2].src="./assets/images/icon-plus.svg"
        btn[4].src="./assets/images/icon-plus.svg"
    }
});

btn[4].addEventListener("click",(e)=>{
    if(true) {
        div_P[0].style.display="none"
        div_P[1].style.display="none"
        div_P[2].style.display="none"
        btn[1].src="./assets/images/icon-plus.svg"
        btn[2].src="./assets/images/icon-plus.svg"
        btn[3].src="./assets/images/icon-plus.svg"
    }
});