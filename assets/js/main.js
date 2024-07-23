let navbar=document.getElementById("nav")
window.addEventListener("scroll",()=>{
    if(window.scrollY>50){
        navbar.style.position="fixed";
        navbar.style.boxShadow="rgb(38, 57, 77) 0px 20px 30px -10px";
        if(navbar.classList.contains("nav-close")){
            navbar.classList.remove("nav-close")
            navbar.classList.add("scroll")
        }
}
    else{
        navbar.style.position = "static";
        navbar.style.boxShadow = "none";
    }
})


let menuToggle=document.getElementById("toggle")
let menu=document.getElementById("mobile")

menuToggle.addEventListener("click",()=>{
    let result=menuToggle.classList.toggle("open")
    if(result){
        menu.classList.add("open-menu")
        navbar.classList.add("nav-close")
    }
    else{
        menu.classList.remove("open-menu")
        
    }
    
});


document.addEventListener('DOMContentLoaded', () => {
    const showMoreBtn = document.querySelector('.body-btn');
    const showLessBtn = document.querySelector('.body-btn-less');
    const invisibleParagraph = document.querySelector('.invisible-paragraph');

    const showMore = () => {
        invisibleParagraph.style.display = 'block';
        showMoreBtn.style.display = 'none';
        showLessBtn.style.display = 'flex';
    };

    const showLess = () => {
        invisibleParagraph.style.display = 'none';
        showMoreBtn.style.display = 'flex';
        showLessBtn.style.display = 'none';
    };

    showMoreBtn.addEventListener('click', (event) => {
        event.preventDefault();
        showMore();
    });

    showLessBtn.addEventListener('click', (event) => {
        event.preventDefault();
        showLess();
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const showMoreBtn = document.querySelector('.custom-btn');
    const showFewBtn = document.querySelector('.body-btn-few');
    const invisibleLogo = document.querySelector('.all-img');
    const visibleLogo = document.querySelector('.mixed-img');

    const showMore = () => {
        invisibleLogo.style.display = 'inline-block';
        visibleLogo.style.display = 'none';
        showMoreBtn.style.display = 'none';
        showFewBtn.style.display = 'inline-block';
    };

    const showFew = () => {
        invisibleLogo.style.display = 'none';
        visibleLogo.style.display = 'inline-block';
        showMoreBtn.style.display = 'inline-block';
        showFewBtn.style.display = 'none';
    };

    showMoreBtn.addEventListener('click', (event) => {
        event.preventDefault();
        showMore();
    });

    showFewBtn.addEventListener('click', (event) => {
        event.preventDefault();
        showFew();
    });
});
