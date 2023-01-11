const img360 = document.getElementById("img360")
const  imagSofa = document.getElementById("sofa")

img360.addEventListener("click",() => {
    if (imagSofa.dataset.name === "static") {
        imagSofa.src = "image/sofa360.gif"
        img360.src = "image/x.png"
        console.log("mudou");
        imagSofa.dataset.name = "mobile"
        return
    }
        imagSofa.src = "image/sofa.png"
        img360.src = "image/360.png"
        console.log("mudou");
        imagSofa.dataset.name = "static"

    
    
})