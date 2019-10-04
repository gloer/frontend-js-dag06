const sectionFilmer = document.querySelector("#sectionFilmer");
const inpSearch = document.querySelector("#inpSearch");
const btnSkrekk = document.querySelector("#btnSkrekk");
const btnDrama = document.querySelector("#btnDrama");
const btnHumor = document.querySelector("#btnHumor");
const btnAlle = document.querySelector("#btnAlle");

const allefilmer = [
    {tittel: "Sharknado", director: "Stanley Kubrick", genre: "Skrekk"},
    {tittel: "Sharknado", director: "Stanley Kubrick", genre: "Skrekk"},
    {tittel: "Love Story", director: "Steven Spielberg", genre: "Drama"},
    {tittel: "The Long day", director: "Steven Spielberg", genre: "Drama"},
    {tittel: "Alkymisten", director: "Erik Poppe", genre: "Humor"},
    {tittel: "Wizard of Oz", director: "Erik Poppe", genre: "Humor"},
    {tittel: "Fleksnes", director: "Brad Pitt", genre: "Humor"}
];

const skrekkfilmer = allefilmer.filter(film => film.genre === "Skrekk");
const humorfilmer = allefilmer.filter(film => film.genre === "Humor");
const dramafilmer = allefilmer.filter(film => film.genre === "Drama");

function visFilmer(filmer) {
    sectionFilmer.innerHTML = "";
    for(const film of filmer) {
        sectionFilmer.innerHTML += `
            <div>${film.tittel}</div>
            <div>${film.director}</div>
            <div>${film.genre}</div>
        `;
    }
}

function search(evt) {
    const tekst = evt.target.value;
    console.log(tekst);
}

inpSearch.addEventListener("input", search);


visFilmer(allefilmer);
// visFilmer(skrekkfilmer);

function visDrama() {
    visFilmer(dramafilmer);
}
function visSkrekk() {
    visFilmer(skrekkfilmer);
}
function visHumor() {
    visFilmer(humorfilmer);
}
function visAlle() {
    visFilmer(allefilmer);
}


btnDrama.addEventListener("click", visDrama);
btnSkrekk.addEventListener("click", visSkrekk);
btnHumor.addEventListener("click", visHumor);
btnAlle.addEventListener("click", visAlle);

