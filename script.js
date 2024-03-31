const openMenuIcon = document.getElementById("open-menu");
const closeMenuIcon = document.getElementById("close-menu");
const nav = document.querySelector('nav');
const body = document.body;
let isModalOpen = false;

const openOrCloseSideBar = () =>{
    isModalOpen = !isModalOpen;
    
    if (isModalOpen){
        nav.style.display = "flex";
        nav.classList.add('fixed');
        body.classList.add('transparent-bg');
    }else{
        nav.style.display = "none";
        nav.classList.remove('fixed')
        body.classList.remove('transparent-bg');
    }
    openMenuIcon.classList.toggle("hidden-on-mobile");
    closeMenuIcon.classList.toggle("hidden-on-mobile");
}

openMenuIcon.addEventListener("click", openOrCloseSideBar);
closeMenuIcon.addEventListener("click", openOrCloseSideBar);