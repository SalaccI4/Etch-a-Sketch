let box

const contain = document.querySelector(".container")


for (let i = 0; i < 256; i++){
    box = document.createElement("div")
    box.classList.add("boxes")
    contain.appendChild(box)
}

contain.addEventListener("mouseover", function (e) {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
})