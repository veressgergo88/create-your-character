const inputCharName = document.getElementById("input-char-name")
const outputCharName = document.getElementById("output-char-name")
const raceSelect = document.getElementById("race")
const classSelect = document.getElementById("class")
const outputRace = document.getElementById("character-img")
const outputClass = document.getElementById("class-img")

function writeInput(e) {
    outputCharName.textContent = e.target.value
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


