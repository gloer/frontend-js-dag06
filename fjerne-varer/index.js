const sectionHandleliste = document.getElementById("sectionHandleliste");

const varer = ["Prim", "Kaviar", "Egg", "Smør", "Rips"];

function visHandleliste() {
    sectionHandleliste.innerHTML = "";
    for(const [indeks, vare] of varer.entries()) {        
        sectionHandleliste.innerHTML += `
            <div>${vare}</div>
            <div class="btn">X</div>
        `;
    }
}

visHandleliste();