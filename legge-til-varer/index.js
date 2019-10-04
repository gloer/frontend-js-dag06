const sectionHandleliste = document.getElementById("sectionHandleliste");
const skjemaVarer = document.querySelector("#skjemaVarer");
const inpVare = document.querySelector("#inpVare");

const varer = ["Prim", "Kaviar", "Egg", "Smør", "Rips"];

function visHandleliste() {
    sectionHandleliste.innerHTML = "";
    for(const [indeks, vare] of varer.entries()) {        
        sectionHandleliste.innerHTML += `
            <div>${vare}</div>
            <div onClick="slett(${indeks})" class="btn">X</div>
        `;
    }
}

function slett(indeks) {
    varer.splice(indeks, 1);
    visHandleliste();
}

visHandleliste();