window.addEventListener("load", bindEvents);
function bindEvents(){
    document.getElementById("regSt").addEventListener("click", qstnPage);
    
}
function qstnPage(){
    location.href="stdLogin.html";
}
