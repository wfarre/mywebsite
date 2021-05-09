const portfolioArray = document.querySelectorAll(".website-img");


portfolioArray.forEach(function(img){
    img.addEventListener("click", function(event){
        console.log(event.target.id);
        const idName = event.target.id;
        const name = idName.slice(0, (idName.length - 3));
        console.log(name);
        document.querySelector(".overlay").style.display = "block";
        document.querySelector("#"+name+"-card").style.display = "block";
    })
});

const crosses = document.querySelectorAll(".cross");

crosses.forEach(function(cross){
    cross.addEventListener("click", function(event){
        console.log(event.target.parentElement);
        const parentElement = event.target.parentElement;
    
        parentElement.style.display = "none";
        document.querySelector(".overlay").style.display = "none";
    })

});
