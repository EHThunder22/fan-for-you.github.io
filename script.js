
for(var i = 0; i < 5; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        var text = this.innerHTML;
        document.querySelector("h2").innerHTML = "Power is: "+text;
    })
}


// document.querySelector("#on").addEventListener("click", function(){
//     document.querySelector(".image").classList.add("on");
// })


document.querySelector("#button-1").addEventListener("click", function(){
    document.querySelector(".image").classList.add("button-1");
})

document.querySelector("#button-2").addEventListener("click", function(){
    document.querySelector(".image").classList.add("button-2");
})

document.querySelector("#button-3").addEventListener("click", function(){
    document.querySelector(".image").classList.add("button-3");
})

document.querySelector("#off").addEventListener("click", function(){
    document.querySelector(".image").classList.add("off");
})