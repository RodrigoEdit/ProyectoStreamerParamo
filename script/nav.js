function openNav(){
    document.getElementById("mobile-menu").style.width = "100%"
}
function closeNav(){
    document.getElementById("mobile-menu").style.width = "0%"
}



//Script del preloader.


// let preloader=document.getElementById("preloader");
// setTimeout(function(){
//     preloader.style.opacity="1";
//     preloader.style.visibility="hidden";
//     preloader.style.transition="0.5s";
    
// },2000)




window.addEventListener("scroll",Scroll);   
    function Scroll(){
        let header = document.getElementById("header");
        let navbarImg = document.getElementById("navbar-img");
        let ypos=window.pageYOffset;
        if(ypos>90){
            header.style.background="#7F0066";
            // navbarImg.src = "imgcon/logoblanco.png";
            header.style.transition="0.5s";
        }
        else{
            //navbarImg.src = "imgcon/logo.png";
            header.style.background="none";
            header.style.transition="0.5s";
        }
    }