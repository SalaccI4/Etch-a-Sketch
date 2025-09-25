const contain = document.querySelector(".container")


for (let i = 0; i < 256; i++){
    let box = document.createElement("div")
    box.classList.add("boxes")
    contain.appendChild(box)
}