let box

const contain = document.querySelector(".container")
const btn = document.querySelector("button")

btn.addEventListener("click", () => {

    while (contain.firstChild){
        contain.removeChild(contain.firstChild)
    }

    const hWidth = prompt("Enter your desired number of squares for the width (Max: 100)")
    const hHeight = prompt("Enter your desired number of squares for the length (Max: 100)")
    contain.style.width = `${hWidth * 30}px`
    contain.style.height = `${hHeight * 30}px`

    for (let i = 0; i < hWidth * hHeight; i++) {
        box = document.createElement("div")
        box.classList.add("boxes")
        contain.appendChild(box)
    }
})

contain.addEventListener("mouseover", function (e) {
    if (e.target.classList.contains("boxes") && !e.target.classList.contains("colored")) {
        const r = Math.floor(Math.random() * 256)
        const g = Math.floor(Math.random() * 256)
        const b = Math.floor(Math.random() * 256)
        e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
        e.target.classList.add("colored")
        e.target.style.opacity = "1"
    }
    if (e.target.classList.contains("colored") && e.target.style.opacity > 0){
        e.target.style.opacity -= `${0.1}`
    }
})