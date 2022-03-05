const btns= document.querySelectorAll(".nav-btn");
const slides1= document.querySelectorAll(".img1");
const cn= document.querySelectorAll(".slide-1");



var sf=function(manual){


    btns.forEach((btn) => { 
btn.classList.remove("active") ;

});


slides1.forEach((sd) => { 
    sd.classList.remove("active") ;
    
    });


    cn.forEach((cn1) => { 
        cn1.classList.remove("active") ;
        
        });
    


    btns[manual].classList.add("active");
    slides1[manual].classList.add("active");
    cn[manual].classList.add("active");


}





btns.forEach((btn,i) => { 

    btn.addEventListener("click", () => {

        sf(i);

    });
    
    
    


});