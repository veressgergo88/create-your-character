const inputCharName = document.getElementById("input-char-name") as HTMLInputElement
const outputCharName = document.getElementById("output-char-name") as HTMLDivElement
const raceSelect = document.getElementById("race") as HTMLSelectElement
const classSelect = document.getElementById("class") as HTMLSelectElement
const outputRace = document.getElementById("character-img") as HTMLImageElement
const outputClass = document.getElementById("class-img") as HTMLImageElement

function writeInput(e: Event) {
    const target = e.target as HTMLInputElement
    outputCharName.textContent = target.value
}

function changeImage() {
    const selectedRace = raceSelect.value
    const selectedClass = classSelect.value
    const charImgPath = "img/" + selectedRace + ".jpg"
    const classImgPath = "img/" + selectedClass + ".png"
    
    if(selectedRace !== "" && selectedClass !== ""){
        outputRace.style.display = "block"
        outputClass.style.display = "block"
        outputRace.src = charImgPath
        outputClass.src = classImgPath
    }
    else {
        outputRace.style.display = "none"
        outputClass.style.display = "none"
    }
    
}

inputCharName.addEventListener("input", writeInput)
raceSelect.addEventListener("change", changeImage)
classSelect.addEventListener("change", changeImage)