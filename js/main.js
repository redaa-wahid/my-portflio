let as = document.querySelector("aside");

function showAside(){
as.style.width="100%";

    if (as.style.display != "none") {
        as.style.display = "none";
    }else{
        as.style.display = "block";
    }
}

let link = document.querySelectorAll("aside a");
console.log(link);
for (let i = 0; i < link.length; i++) {
link[i].addEventListener("click",()=>{
        as.style.display = "none";
});
}

AOS.init({
    duration: 1200,
  })