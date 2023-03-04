document.addEventListener("DOMContentLoaded",()=>{
    const purple = document.querySelector('.purple'),
          purpleChild = document.querySelector('.purple .benefits__box-number');
    const green = document.querySelector('.green'),
          greenChild = document.querySelector('.green .benefits__box-number');
    const yellow = document.querySelector('.yellow'),
          yellowChild = document.querySelector('.yellow .benefits__box-number');

    purple.addEventListener('mouseover',()=>{
        purpleChild.style.marginTop="30px";
    })
    purple.addEventListener('mouseout',()=>{
        purpleChild.style.marginTop="321px";
    })

    yellow.addEventListener('mouseover',()=>{
        yellowChild.style.marginTop="30px";
    })
    yellow.addEventListener('mouseout',()=>{
        yellowChild.style.marginTop="321px";
    })

    green.addEventListener('mouseover',()=>{
        greenChild.style.marginTop="30px";
    })
    green.addEventListener('mouseout',()=>{
        greenChild.style.marginTop="321px";
    })
        

    //checkbox

    const check = document.querySelector('.contact-checkbox');
    const clickCheckbox = document.querySelector('.form__text');
    clickCheckbox.addEventListener('click',()=>{
        console.log(1);
        if(check.hasAttribute("checked")){
            check.removeAttribute("checked");
        } else {
            check.setAttribute("checked","true");
        }
    })
})
    

