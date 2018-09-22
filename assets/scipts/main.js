
console.log("pd: perdon por los dias que e faltado a clases");
let elementlist = document.querySelectorAll(".fa-grin-hearts");
elementlist.forEach(function(element){
    element.addEventListener('click',function(){
        alert("carita clikeada");
        element.classList.remove("far");
        element.classList.add("fas");
    })
});
let closes = document.querySelectorAll(".close");
let content = document.querySelector(".content");
closes.forEach(function(close){
    close.addEventListener('click',function(ev){
       ev.preventDefault();
       content.classList.remove("animated");
       content.classList.remove("fadeIn");
       content.classList.add("animated");
       content.classList.add("fadeOutRight");
       setTimeout(() => {
           location.href="../index.html";
       }, 1000);
     
    });
})