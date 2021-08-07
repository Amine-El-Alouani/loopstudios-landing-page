//Variables

const navTrigger = document.querySelector('.nav_trigger');
const mobNavList = document.querySelector('.mob_nav_list');
const bodyS = document.getElementById('body-s');


navTrigger.addEventListener('click',toggleF);

function  toggleF()  {
     navTrigger.classList.toggle("active");
     activeList()
    }

 function activeList () {
     if(navTrigger.classList.contains("active")){
         mobNavList.classList.add("active_list");
         bodyS.classList.add("stop_scroling");
     }else {
        mobNavList.classList.remove("active_list");
        bodyS.classList.remove("stop_scroling");
     }
 }