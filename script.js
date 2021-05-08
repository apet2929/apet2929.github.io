sessionStorage.setItem("image_count", 1);

let myUser = document.querySelector("button");
myUser.onclick = showImagesOnClick;

function showImagesOnClick(){
    var index = parseInt(sessionStorage.getItem("image_count"));
    var desc = document.getElementById("description");

    console.log(index);

    
    var image = document.getElementById(index);
    image.classList.remove("hide");

    index = index;
    switch(index){
        case 1:
            desc.innerText = "When we had that lamb cake? Or...";
            break;
        case 2:
            desc.innerText = "When we went to Benihanas?";
            break;
        case 3:
            desc.innerText = "Or when you went to Arlington Race Track with dad?";
            break;
        case 4:
            desc.innerText = "When we went to Wisconsin Dells with the whole family.";
            break;
        case 5:
            desc.innerText = "And to Hawaii as well";
            break;
        case 6:
            desc.innerText = "I don't remember this one too well, maybe you can remind me?";
            break;
        case 7:
            desc.innerText = "And when dad wore the most terrible suit";
            break;
        case 8:
            desc.innerText = "But times weren't always great. This is where you took Sean for daycare, Sunny Days";
            break;
        case 9:
            desc.innerText = "And this is when the vomit comet broke down.";
            break;
    }
    sessionStorage.setItem("image_count", index + 1);
}
